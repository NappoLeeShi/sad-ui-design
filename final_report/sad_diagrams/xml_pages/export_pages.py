from pathlib import Path
import subprocess
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET

OUT = Path("/mnt/D/Projects/uni/movie-data-scraper/reports/sad_diagrams")
TMP = OUT / "xml_pages" / "_pdf"
TMP.mkdir(parents=True, exist_ok=True)
SOURCE = OUT / "SAD_System_Analysis_Diagrams.drawio"
PAGES = ["01_Use_Case", "02_Activity", "03_Sequence", "04_Class"]
EXPORT_URL = "https://convert.diagrams.net/node/export"
HEADERS = {
    "Referer": "https://app.diagrams.net/",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": "curl/8.5.0",
}


def export_page(graph_xml: str, fmt: str, target: Path) -> None:
    params = {
        "format": fmt,
        "xml": graph_xml,
        "bg": "#ffffff",
        "from": "0",
        "scale": "2" if fmt == "png" else "1",
        "border": "10" if fmt == "png" else "0",
        "crop": "1",
        "fit": "1",
        "shadows": "0",
    }
    data = urllib.parse.urlencode(params).encode("utf-8")
    req = urllib.request.Request(EXPORT_URL, data=data, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=120) as response:
        body = response.read()
    target.write_bytes(body)
    if fmt == "png":
        assert body.startswith(b"\x89PNG\r\n\x1a\n"), f"{target}: not a PNG"
    else:
        assert body.startswith(b"%PDF-"), f"{target}: not a PDF: {body[:80]!r}"


doc = ET.parse(SOURCE).getroot()
for name in PAGES:
    element = doc.find(f"diagram[@name='{name}']/mxGraphModel")
    assert element is not None, f"missing page {name}"
    page_xml = ET.tostring(element, encoding="unicode")

    png = OUT / f"{name}.png"
    pdf = TMP / f"{name}.pdf"
    svg = OUT / f"{name}.svg"
    export_page(page_xml, "png", png)
    export_page(page_xml, "pdf", pdf)
    subprocess.run(
        ["pdftocairo", "-f", "1", "-l", "1", "-svg", str(pdf), str(svg)], check=True
    )

    svg_bytes = svg.read_bytes()
    assert b"<svg" in svg_bytes, f"{svg}: missing svg root"
    assert b"<pageSet" not in svg_bytes, f"{svg}: unexpected multi-page SVG"
    ET.parse(svg)
    print(f"{name}: PNG {png.stat().st_size} bytes, SVG {svg.stat().st_size} bytes")
print("EXPORT COMPLETE")
