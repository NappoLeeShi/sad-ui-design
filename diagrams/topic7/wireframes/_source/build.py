#!/usr/bin/env python3
"""Convert Figma MCP design-context dumps (React+Tailwind) into static HTML/CSS reference pages."""
import glob, html, json, os, re, subprocess, sys, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.environ.get("SAD_SRC", HERE)
_default_out = (os.path.dirname(HERE) if os.path.basename(HERE) == "_source"
                else os.path.expanduser("~/figma-export/sad-2026"))
OUT = os.path.expanduser(os.environ.get("SAD_OUT", _default_out))
RAW = os.path.join(SRC, "raw")
META_XML = os.path.join(SRC, "meta.xml")
ASSETS = os.path.join(OUT, "assets")
SHOTS = os.path.join(OUT, "screenshots")

FRAMES = {
    "home":                        ("34:126", 402, 874),
    "login":                       ("43:87",  402, 874),
    "feedback-selection":          ("43:6",   402, 874),
    "report-infra":                ("54:26",  402, 874),
    "report-infra-history":        ("56:17",  402, 874),
    "report-party-history":        ("54:868", 402, 874),
    "report-individual":           ("54:917", 402, 874),
    "report-individual-history":   ("54:845", 402, 874),
    "report-public-services-history": ("54:899", 402, 874),
    "report-individual-fullvisual":  ("65:935", 402, 3263),
}
TITLES = {
    "home": "Home",
    "login": "Login",
    "feedback-selection": "Feedback - selection",
    "report-infra": "Report - infrastructure",
    "report-infra-history": "Report - infrastructure (history)",
    "report-party-history": "Report - party (history)",
    "report-individual": "Report - individual/organisation",
    "report-individual-history": "Report - individual/organisation (history)",
    "report-public-services-history": "Report - public services (history)",
    "report-individual-fullvisual": "Report - individual/organisation (full visual)",
}

# ---------------------------------------------------------------- tailwind ---
PX = re.compile(r"^-?\[(-?[\d.]+)(px|%|deg|)\]/$")  # unused helper

def _arb(tok, prefix):
    """Return raw value inside prefix-[...] or None."""
    if tok.startswith(prefix + "-[") and tok.endswith("]"):
        return tok[len(prefix) + 2:-1].replace("\\/", "/")
    return None

def _len(v):
    """CSS length from an arbitrary tailwind value."""
    if v is None:
        return None
    if v.startswith("var("):
        m = re.search(r",\s*([^,)]+)\)?$", v)
        return m.group(1).strip() if m else "16px"
    return v

WEIGHTS = {"normal": "400", "medium": "500", "semibold": "600", "bold": "700"}
FONT_FAMILY = {"Inter": "Inter", "Be_Vietnam_Pro": "'Be Vietnam Pro'"}

def style_for(tokens):
    s = {}
    tf = []

    def put(k, v):
        if v is not None:
            s[k] = v

    for t in tokens:
        # ---- layout / display
        if t == "relative": put("position", "relative")
        elif t == "absolute": put("position", "absolute")
        elif t == "contents": put("display", "contents")
        elif t == "block": put("display", "block")
        elif t == "flex": put("display", "flex")
        elif t == "inline-grid": put("display", "inline-grid")
        elif t == "grid": put("display", "grid")
        elif t == "flex-col": put("flex-direction", "column")
        elif t == "flex-none": put("flex", "none")
        elif t == "shrink-0": put("flex-shrink", "0")
        elif t == "flex-[1_0_0]": put("flex", "1 0 0")
        elif t == "items-center": put("align-items", "center")
        elif t == "items-start": put("align-items", "flex-start")
        elif t == "justify-center": put("justify-content", "center")
        elif t == "justify-between": put("justify-content", "space-between")
        elif t == "place-items-start": put("place-items", "start")
        elif t == "content-stretch": put("align-content", "stretch")
        elif t == "col-1": put("grid-column", "1")
        elif t == "row-1": put("grid-row", "1")
        # ---- size
        elif t == "w-full": put("width", "100%")
        elif t == "h-full": put("height", "100%")
        elif t == "size-full": s.update({"width": "100%", "height": "100%"})
        elif t == "min-w-px": put("min-width", "1px")
        elif t == "min-h-px": put("min-height", "1px")
        elif t == "min-w-full": put("min-width", "100%")
        elif t == "max-w-none": put("max-width", "none")
        elif _arb(t, "w") is not None: put("width", _len(_arb(t, "w")))
        elif _arb(t, "h") is not None: put("height", _len(_arb(t, "h")))
        elif _arb(t, "size") is not None:
            v = _len(_arb(t, "size")); s.update({"width": v, "height": v})
        elif _arb(t, "min-w") is not None: put("min-width", _len(_arb(t, "min-w")))
        elif _arb(t, "min-h") is not None: put("min-height", _len(_arb(t, "min-h")))
        # ---- spacing
        elif _arb(t, "p") is not None: put("padding", _len(_arb(t, "p")))
        elif _arb(t, "px") is not None:
            v = _len(_arb(t, "px")); s.update({"padding-left": v, "padding-right": v})
        elif _arb(t, "py") is not None:
            v = _len(_arb(t, "py")); s.update({"padding-top": v, "padding-bottom": v})
        elif _arb(t, "pt") is not None: put("padding-top", _len(_arb(t, "pt")))
        elif _arb(t, "pb") is not None: put("padding-bottom", _len(_arb(t, "pb")))
        elif _arb(t, "pl") is not None: put("padding-left", _len(_arb(t, "pl")))
        elif _arb(t, "pr") is not None: put("padding-right", _len(_arb(t, "pr")))
        elif _arb(t, "ml") is not None: put("margin-left", _len(_arb(t, "ml")))
        elif _arb(t, "mt") is not None: put("margin-top", _len(_arb(t, "mt")))
        elif _arb(t, "mr") is not None: put("margin-right", _len(_arb(t, "mr")))
        elif _arb(t, "mb") is not None: put("margin-bottom", _len(_arb(t, "mb")))
        elif t == "ml-0": put("margin-left", "0")
        elif t == "mt-0": put("margin-top", "0")
        elif _arb(t, "gap") is not None: put("gap", _len(_arb(t, "gap")))
        # ---- position offsets
        elif t == "inset-0": s.update({"left": "0", "top": "0", "right": "0", "bottom": "0"})
        elif t in ("left-0", "top-0", "right-0", "bottom-0"):
            put(t[:-2], "0")
        elif _arb(t, "left") is not None: put("left", _len(_arb(t, "left")))
        elif _arb(t, "top") is not None: put("top", _len(_arb(t, "top")))
        elif _arb(t, "right") is not None: put("right", _len(_arb(t, "right")))
        elif _arb(t, "bottom") is not None: put("bottom", _len(_arb(t, "bottom")))
        # ---- color
        elif t == "bg-white": put("background", "#ffffff")
        elif t == "bg-black": put("background", "#000000")
        elif _arb(t, "bg") is not None: put("background", _arb(t, "bg"))
        elif t == "text-black": put("color", "#000000")
        elif t == "text-white": put("color", "#ffffff")
        elif _arb(t, "text") is not None:
            v = _arb(t, "text")
            if v.endswith("px") or v.endswith("rem") or v.endswith("em"):
                put("font-size", v)
            elif v.startswith("#"):
                put("color", v)
        # ---- borders
        elif t == "border": s.update({"border-width": "1px", "border-style": "solid"})
        elif t == "border-t": s.update({"border-top-width": "1px", "border-style": "solid"})
        elif t == "border-b": s.update({"border-bottom-width": "1px", "border-style": "solid"})
        elif t == "border-l": s.update({"border-left-width": "1px", "border-style": "solid"})
        elif t == "border-r": s.update({"border-right-width": "1px", "border-style": "solid"})
        elif t == "border-solid": put("border-style", "solid")
        elif t == "border-dashed": put("border-style", "dashed")
        elif t == "border-black": put("border-color", "#000000")
        elif _arb(t, "border") is not None: put("border-color", _arb(t, "border"))
        elif _arb(t, "rounded") is not None: put("border-radius", _len(_arb(t, "rounded")))
        elif t == "rounded": put("border-radius", "0.25rem")
        # ---- typography
        elif t in ("italic", "not-italic"): put("font-style", "italic" if t == "italic" else "normal")
        elif t in WEIGHTS: put("font-weight", WEIGHTS[t])
        elif t.startswith("font-['"):
            v = t[7:-2]
            fam, _, w = v.partition(":")
            put("font-family", FONT_FAMILY.get(fam, fam.replace("_", " ")))
            if w in ("Italic",):
                put("font-style", "italic")
            elif w in ("Bold",):
                put("font-weight", "700")
            elif w in ("Semi_Bold", "SemiBold"):
                put("font-weight", "600")
            elif w in ("Medium",):
                put("font-weight", "500")
            elif w in ("Regular", "Normal"):
                put("font-weight", "400")
        elif _arb(t, "leading") is not None: put("line-height", _len(_arb(t, "leading")))
        elif _arb(t, "tracking") is not None: put("letter-spacing", _len(_arb(t, "tracking")))
        elif t == "text-center": put("text-align", "center")
        elif t == "text-left": put("text-align", "left")
        elif t == "text-right": put("text-align", "right")
        elif t == "whitespace-nowrap": put("white-space", "nowrap")
        elif t == "[word-break:break-word]": put("word-break", "break-word")
        elif t == "underline": put("text-decoration-line", "underline")
        elif t == "line-through": put("text-decoration-line", "line-through")
        elif t == "decoration-solid": put("text-decoration-style", "solid")
        elif t == "decoration-from-font": put("text-decoration-thickness", "from-font")
        elif t == "[text-underline-position:from-font]": put("text-underline-position", "from-font")
        # ---- misc
        elif t == "overflow-clip": put("overflow", "clip")
        elif t == "overflow-hidden": put("overflow", "hidden")
        elif t == "overflow-x-clip": put("overflow-x", "clip")
        elif t == "overflow-y-clip": put("overflow-y", "clip")
        elif t == "overflow-x-auto": put("overflow-x", "auto")
        elif t == "overflow-y-auto": put("overflow-y", "auto")
        elif t == "cursor-pointer": put("cursor", "pointer")
        elif t == "-translate-x-1/2": tf.append("translateX(-50%)")
        elif t == "-translate-y-1/2": tf.append("translateY(-50%)")
        elif _arb(t, "rotate") is not None: tf.append("rotate(%s)" % _arb(t, "rotate"))
        elif _arb(t, "grid-cols") is not None: put("grid-template-columns", _len(_arb(t, "grid-cols")))
        elif _arb(t, "grid-rows") is not None: put("grid-template-rows", _len(_arb(t, "grid-rows")))
        # unknown tokens are ignored
    if tf:
        s["transform"] = " ".join(tf)
    return s

# ---------------------------------------------------------------- icons ------
# The Figma design-context response replaces code-connected components with
# <CodeConnectSnippet> placeholders that carry no geometry. Their position and
# size are taken from the get_metadata dump, and the glyphs below are drawn with
# open icon sets that match the ones referenced by the design (Material 3 kit
# and Simple Design System / lucide).
META = {}
for _m in re.finditer(r'<(\w[\w-]*) id="([^"]+)" name="([^"]*)"'
                      r'(?: x="([^"]*)")?(?: y="([^"]*)")?'
                      r'(?: width="([^"]*)")?(?: height="([^"]*)")?', open(META_XML).read()):
    try:
        META[_m.group(2)] = {
            "x": float(_m.group(4)), "y": float(_m.group(5)),
            "w": float(_m.group(6)), "h": float(_m.group(7)),
        }
    except (TypeError, ValueError):
        pass

MATERIAL = {
    "arrow_back": "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",
    "arrow_drop_down": "M7 10l5 5 5-5H7z",
    "edit": "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
    "comment": "M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z",
    "call_end": "M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08A.99.99 0 0 1 0 12.38c0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.7l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.1-.7-.28-.79-.73-1.68-1.36-2.66-1.85a.996.996 0 0 1-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z",
}

LUCIDE = {
    "refresh cw": '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>'
                  '<path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>'
                  '<path d="M8 16H3v5"/>',
    "hidepassword": '<path d="M10.73 5.08A10.74 10.74 0 0 1 21.94 11.66a1 1 0 0 1 0 .7 10.75 10.75 0 0 1-1.44 2.49"/>'
                    '<path d="M14.08 14.16a3 3 0 0 1-4.24-4.24"/><path d="M17.48 17.5A10.75 10.75 0 0 1 2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 4.45-5.14"/>'
                    '<path d="m2 2 20 20"/>',
    "lockicon": '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    "book open": '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
}

def _icon_svg(name):
    key = name.strip().lower()
    if key in MATERIAL:
        return ('<svg viewBox="0 0 24 24" width="100%" height="100%" fill="#000" '
                'xmlns="http://www.w3.org/2000/svg"><path d="' + MATERIAL[key] + '"/></svg>')
    if key in LUCIDE:
        return ('<svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#000" '
                'stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" '
                'xmlns="http://www.w3.org/2000/svg">' + LUCIDE[key] + '</svg>')
    return None

# ------------------------------------------------------------------ parser ---
ATTR = re.compile(r'([A-Za-z_:][-\w:.]*)\s*=\s*(?:"([^"]*)"|\{([^}]*)\})')

def parse_jsx(src):
    start = src.index("return (")
    body = src[start + len("return ("):]
    for stop in ("\nSUPER CRITICAL", "\nThe generated code contains", "\nNode ids have been added"):
        i = body.find(stop)
        if i != -1:
            body = body[:i]
    root = {"tag": "#root", "attrs": {}, "children": []}
    stack = [root]
    i, n = 0, len(body)
    while i < n:
        if body[i] == "<":
            if body.startswith("</", i):
                j = body.index(">", i)
                tag = body[i + 2:j].strip()
                while len(stack) > 1:
                    node = stack.pop()
                    if node["tag"] == tag:
                        break
                i = j + 1
                continue
            j = i + 1
            while j < n and (body[j].isalnum() or body[j] in "_-."):
                j += 1
            tag = body[i + 1:j]
            # scan attributes
            k = j
            attrs = {}
            selfclose = False
            while k < n:
                while k < n and body[k].isspace():
                    k += 1
                if k >= n:
                    break
                if body[k] == ">":
                    k += 1
                    break
                if body[k] == "/" and k + 1 < n and body[k + 1] == ">":
                    selfclose = True
                    k += 2
                    break
                m = ATTR.match(body, k)
                if not m:
                    k += 1
                    continue
                name = m.group(1)
                val = m.group(2) if m.group(2) is not None else ("{" + (m.group(3) or "") + "}")
                attrs[name] = val
                k = m.end()
            node = {"tag": tag, "attrs": attrs, "children": []}
            stack[-1]["children"].append(node)
            if not selfclose:
                stack.append(node)
            i = k
        elif body[i] == "{":
            depth, k = 0, i
            while k < n:
                if body[k] == "{":
                    depth += 1
                elif body[k] == "}":
                    depth -= 1
                    if depth == 0:
                        break
                k += 1
            expr = body[i + 1:k]
            i = k + 1
            if expr.lstrip().startswith("/*"):
                continue
            m = re.match(r"\s*`([\s\S]*)`\s*$", expr)
            if m:
                stack[-1]["children"].append({"text": m.group(1)})
        else:
            j = i
            while j < n and body[j] not in "<{":
                j += 1
            txt = body[i:j]
            if txt.strip():
                stack[-1]["children"].append({"text": re.sub(r"\s+", " ", txt)})
            i = j
    return root["children"][0]

def esc(t):
    return html.escape(t, quote=False)

_UID = [0]
ROOT_BORDER = []

def _class_for(style, decls):
    """Register a uniquely named rule for this node's inline style."""
    _UID[0] += 1
    name = "n%d" % _UID[0]
    css = ";".join("%s:%s" % (k, v) for k, v in style.items())
    if css:
        decls.append(".%s{%s}" % (name, css))
        return name
    return None

def render(node, depth=0, framerel=True):
    tag = node["tag"]
    attrs = node["attrs"]
    if tag == "CodeConnectSnippet":
        nid = attrs.get("data-node-id", "").strip('{}"')
        iname = attrs.get("data-name", "").strip('{}"')
        svg = _icon_svg(iname) if iname else None
        geo = META.get(nid)
        if not svg or not geo:
            return "", []
        _UID[0] += 1
        name = "n%d" % _UID[0]
        decl = (".%s{position:absolute;left:%gpx;top:%gpx;width:%gpx;height:%gpx;"
                "margin:0;box-sizing:border-box}" % (name, geo["x"], geo["y"], geo["w"], geo["h"]))
        return ('<div class="%s" data-node-id="%s" data-name="%s">%s</div>'
                % (name, nid, esc(iname), svg)), [decl]
    cls = attrs.get("className", "")
    tokens = cls.replace("\\/", "/").split()
    style = style_for(tokens)

    # A stroke on the Figma frame itself is painted on the frame edge and must
    # not inset the coordinate system of the absolutely positioned children.
    if depth == 0:
        for k in [k for k in style if k.startswith("border")]:
            ROOT_BORDER.append((k, style.pop(k)))

    # The design-context coordinates are Tailwind values rounded at generation
    # time and are occasionally 1px off. For nodes whose containing block is the
    # frame itself, snap left/top to the exact numbers from get_metadata.
    nid = attrs.get("data-node-id", "").strip('{}"')
    if (depth and framerel and nid in META
            and "transform" not in style
            and "right" not in style and "bottom" not in style):
        geo = META[nid]
        if "left" in style:
            style["left"] = "%gpx" % geo["x"]
        if "top" in style:
            style["top"] = "%gpx" % geo["y"]

    out_tag = {"p": "div"}.get(tag, tag)
    if out_tag not in ("div", "span", "a", "img", "section", "h1", "h2", "h3"):
        out_tag = "div"

    # defaults
    if out_tag in ("div", "a"):
        if "margin" not in style and not any(k.startswith("margin") for k in style):
            style["margin"] = "0"
        style.setdefault("box-sizing", "border-box")
    if out_tag == "img":
        style.setdefault("max-width", "none")

    extra = ""
    node_id = attrs.get("data-node-id", "").strip('{}"')
    if node_id:
        extra += ' data-node-id="%s"' % node_id
    name = attrs.get("data-name", "").strip('{}"')
    if name:
        extra += ' data-name="%s"' % esc(name)

    if tag == "img":
        src = attrs.get("src", "")
        src = src.strip("{}")
        src = IMG_MAP.get(src, "")
        decls = []
        name = _class_for(style, decls)
        attr = (' class="%s"' % name if name else "") + extra
        return '<img src="%s" alt=""%s />' % (esc(src), attr), decls

    decls = []
    body = []
    child_rel = (depth == 0) or (framerel and style.get("display") == "contents")
    for ch in node["children"]:
        if "text" in ch:
            body.append(esc(ch["text"]))
        else:
            h, d = render(ch, depth + 1, child_rel)
            body.append(h)
            decls.extend(d)
    inner = "".join(body)
    name = _class_for(style, decls)
    attr = (' class="%s"' % name if name else "") + extra
    return "<%s%s>%s</%s>" % (out_tag, attr, inner, out_tag), decls

# ------------------------------------------------------------------- build ---
os.makedirs(ASSETS, exist_ok=True)
os.makedirs(SHOTS, exist_ok=True)

SHOT_URLS = json.load(open(os.path.join(SRC, "shots.json")))

def curl(url, dest):
    r = subprocess.run(["curl", "-fsSL", "--max-time", "120", "-o", dest, url],
                       capture_output=True, text=True)
    return r.returncode == 0 and os.path.getsize(dest) > 0

pages = []
for slug, (node_id, w, h) in FRAMES.items():
    path = os.path.join(RAW, slug + ".jsx")
    src = open(path).read()

    prefix_m = re.search(r'const assetPathPrefix = "([^"]+)"', src)
    prefix = prefix_m.group(1) if prefix_m else ""
    IMG_MAP = {}
    for m in re.finditer(r"const (img[A-Za-z0-9_]*) = `\$\{assetPathPrefix\}/([^`]+)`", src):
        const, fname = m.group(1), m.group(2)
        local = "%s-%s" % (slug, fname)
        dest = os.path.join(ASSETS, local)
        if not os.path.exists(dest):
            ok = curl("%s/%s" % (prefix, fname), dest)
            if not ok:
                print("  ! asset failed", const, fname)
        IMG_MAP[const] = "assets/" + local

    root = parse_jsx(src)
    _UID[0] = 0
    ROOT_BORDER.clear()
    html_root, decls = render(root)
    if ROOT_BORDER:
        border_css = "".join("%s:%s;" % kv for kv in ROOT_BORDER)
        decls.append(".framestroke{position:absolute;inset:0;pointer-events:none;z-index:2147483647;%s}" % border_css)
        html_root += '<div class="framestroke"></div>'

    title = TITLES[slug]
    css = "\n".join(dict.fromkeys(decls))
    page = f"""<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(title)} &middot; SAD 2026 (Figma reference)</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
<style>
  *{{box-sizing:border-box}}
  html,body{{margin:0;padding:0;background:#eef0f3}}
  body{{padding:24px;font-family:'Be Vietnam Pro',Inter,system-ui,sans-serif}}
  .meta{{max-width:402px;margin:0 auto 12px;font:12px/1.5 ui-monospace,SFMono-Regular,Menlo,monospace;color:#475569}}
  .meta a{{color:#2563eb}}
  .frame{{position:relative;overflow:hidden;margin:0 auto;background:#fff;box-shadow:0 8px 30px rgba(15,23,42,.18);border-radius:2px}}
  div,p{{margin:0}}
  img{{max-width:none}}
{css}
</style>
</head>
<body>
<div class="meta">
  <div><strong>{esc(title)}</strong> &middot; node <code>{node_id}</code> &middot; {w}&times;{h}</div>
  <div><a href="index.html">&larr; all screens</a> &middot;
  <a href="https://www.figma.com/design/Fo4xm6B3ihoWaOC6uHdSwO/SAD-2026?node-id={node_id.replace(':', '-')}">open in Figma</a></div>
</div>
<div class="frame" style="width:{w}px;height:{h}px">
{html_root}
</div>
</body>
</html>
"""
    open(os.path.join(OUT, slug + ".html"), "w").write(page)
    pages.append(slug)
    print("built", slug, "css rules:", len(decls))

# screenshots (only the ones we could still fetch before the rate limit)
have_shot = {}
for slug, info in SHOT_URLS.items():
    url = info.get("exportUrl")
    dest = os.path.join(SHOTS, slug + ".png")
    if os.path.exists(dest) and os.path.getsize(dest) > 0:
        have_shot[slug] = True
    elif url and curl(url, dest):
        have_shot[slug] = True
    else:
        have_shot[slug] = False

# renders of every page, used as thumbnails and as a self-check artifact
RENDERS = os.path.join(OUT, "renders")
os.makedirs(RENDERS, exist_ok=True)
have_render = {}
for slug, (node_id, w, h) in FRAMES.items():
    src_html = os.path.join(OUT, slug + ".html")
    tmp_html = os.path.join(tempfile.gettempdir(), "_sad_render_" + slug + ".html")
    doc = open(src_html).read()
    doc = doc.replace("<head>", '<head>\n<base href="file://%s/">' % OUT)
    doc = doc.replace("</style>", "body{padding:0 !important}.meta{display:none !important}\n</style>")
    open(tmp_html, "w").write(doc)
    dest = os.path.join(RENDERS, slug + ".png")
    r = subprocess.run(["firefox", "--headless", "--screenshot", dest,
                        "--window-size=%d,%d" % (w, h), "file://" + tmp_html],
                       capture_output=True, text=True, timeout=180)
    have_render[slug] = os.path.exists(dest) and os.path.getsize(dest) > 0

cards = []
for slug, (node_id, w, h) in FRAMES.items():
    title = TITLES[slug]
    if have_shot.get(slug):
        thumb = f'<img src="screenshots/{slug}.png" alt="{esc(title)}">'
        kind = "Figma screenshot"
    elif have_render.get(slug):
        thumb = f'<img src="renders/{slug}.png" alt="{esc(title)}">'
        kind = "generated render (no Figma screenshot)"
    else:
        thumb = '<div class="nosshot">no image</div>'
        kind = ""
    cards.append(f"""  <article class="card">
    <a class="thumb" href="{slug}.html">{thumb}</a>
    <h2><a href="{slug}.html">{esc(title)}</a></h2>
    <p><code>{node_id}</code> &middot; {w}&times;{h}</p>
    <p class="links"><a href="{slug}.html">HTML</a> &middot; <a href="https://www.figma.com/design/Fo4xm6B3ihoWaOC6uHdSwO/SAD-2026?node-id={node_id.replace(':', '-')}">Figma</a></p>
    <p class="kind">{esc(kind)}</p>
  </article>""")

index = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>SAD 2026 &middot; Figma reference export</title>
<style>
  *{{box-sizing:border-box}}
  body{{margin:0;padding:40px;background:#0f172a;color:#e2e8f0;
       font:14px/1.6 'Be Vietnam Pro',Inter,system-ui,sans-serif}}
  h1{{font-size:22px;margin:0 0 4px}}
  .sub{{color:#94a3b8;margin:0 0 28px;max-width:70ch}}
  .sub a{{color:#7dd3fc}}
  .grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:24px}}
  .card{{background:#1e293b;border:1px solid #334155;border-radius:12px;padding:14px;margin:0}}
  .thumb{{display:block;border-radius:8px;overflow:hidden;background:#0b1220;aspect-ratio:402/874}}
  .thumb img{{width:100%;height:100%;object-fit:contain;object-position:top;display:block}}
  .nosshot{{width:100%;height:100%;display:flex;flex-direction:column;gap:6px;align-items:center;
           justify-content:center;color:#64748b;text-align:center;font-size:12px;border:1px dashed #334155;border-radius:8px}}
  .kind{{margin-top:4px;color:#64748b;font-size:11px}}
  h2{{font-size:14px;margin:12px 0 2px}}
  h2 a{{color:#f1f5f9;text-decoration:none}}
  h2 a:hover{{text-decoration:underline}}
  p{{margin:0;color:#94a3b8;font-size:12px}}
  .links{{margin-top:6px}}
  a{{color:#7dd3fc}}
  code{{font:11px ui-monospace,Menlo,monospace;color:#cbd5e1}}
</style>
</head>
<body>
  <h1>SAD 2026 &mdash; Figma reference export</h1>
  <p class="sub">Static HTML/CSS renderings generated from the Figma MCP design context of the
  <a href="https://www.figma.com/design/Fo4xm6B3ihoWaOC6uHdSwO/SAD-2026">SAD-2026</a> file,
  page <em>Wireframe</em> (<code>34:2</code>). Reference only &mdash; absolute-positioned, not responsive.
  See <code>README.md</code>.</p>
  <div class="grid">
{chr(10).join(cards)}
  </div>
</body>
</html>
"""
open(os.path.join(OUT, "index.html"), "w").write(index)
print("screenshots:", sum(have_shot.values()), "/", len(FRAMES))

# ------------------------------------------------------------ verification ---
# Side-by-side images and RMSE numbers for the screens that have a Figma PNG.
VER = os.path.join(OUT, "verification")
os.makedirs(VER, exist_ok=True)
metrics = {}
tmpdir = tempfile.gettempdir()
for slug in FRAMES:
    if not (have_shot.get(slug) and have_render.get(slug)):
        continue
    shot = os.path.join(SHOTS, slug + ".png")
    render = os.path.join(RENDERS, slug + ".png")
    try:
        raw = subprocess.run(["compare", "-metric", "RMSE", shot, render, "null:"],
                             capture_output=True, text=True).stderr.strip()
        val = float(re.search(r"\(([^)]+)\)", raw).group(1))
        ba = os.path.join(tmpdir, "_sad_ba.png")
        bb = os.path.join(tmpdir, "_sad_bb.png")
        subprocess.run(["magick", shot, "-blur", "0x3", ba], check=True)
        subprocess.run(["magick", render, "-blur", "0x3", bb], check=True)
        braw = subprocess.run(["compare", "-metric", "RMSE", ba, bb, "null:"],
                              capture_output=True, text=True).stderr.strip()
        bval = float(re.search(r"\(([^)]+)\)", braw).group(1))
        subprocess.run(["magick", shot, render, "+append",
                        os.path.join(VER, slug + "-compare.png")], check=True)
        metrics[slug] = {"rmse": round(val, 5), "rmse_blur3": round(bval, 5)}
        print("verify %-28s RMSE %.4f  blurred %.4f" % (slug, val, bval))
    except Exception as exc:  # ImageMagick missing / parse failure
        print("verify %s failed: %s" % (slug, exc))
json.dump(metrics, open(os.path.join(VER, "metrics.json"), "w"), indent=2)

print("done ->", OUT)
