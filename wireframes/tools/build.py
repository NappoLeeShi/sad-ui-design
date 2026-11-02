#!/usr/bin/env python3
"""Generate the static VNeID Topic 7 wireframe pages.

The output is plain HTML + CSS. This script exists only to keep the many
repeated mobile frames consistent; the generated files can be edited directly.
"""

from __future__ import annotations

from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


# ---------------------------------------------------------------------------
# Icons
# ---------------------------------------------------------------------------

ICONS = {
    "back": '<path d="M15 18l-6-6 6-6"/>',
    "chevron": '<path d="M9 18l6-6-6-6"/>',
    "down": '<path d="M6 9l6 6 6-6"/>',
    "search": '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',
    "bell": '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/>',
    "home": '<path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>',
    "grid": '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
    "user": '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/>',
    "check": '<path d="M20 6L9 17l-5-5"/>',
    "clock": '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    "pin": '<path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    "file": '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/>',
    "paperclip": '<path d="M21 11.5l-8.5 8.5a5 5 0 0 1-7-7l9-9a3.5 3.5 0 0 1 5 5l-9 9a2 2 0 0 1-3-3l8-8"/>',
    "image": '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 15l-5-5L5 20"/>',
    "alert": '<path d="M10.3 3.6L2.5 17a2 2 0 0 0 1.7 3h15.6a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    "info": '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/>',
    "x": '<path d="M18 6L6 18"/><path d="M6 6l12 12"/>',
    "plus": '<path d="M12 5v14"/><path d="M5 12h14"/>',
    "minus": '<path d="M5 12h14"/>',
    "locate": '<circle cx="12" cy="12" r="3"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M2 12h3"/><path d="M19 12h3"/>',
    "edit": '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
    "copy": '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"/>',
    "send": '<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>',
    "lock": '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    "inbox": '<path d="M4 4h16v16H4z"/><path d="M4 12h4l2 3h4l2-3h4"/>',
}


def icon(name: str, cls: str = "icon") -> str:
    return f'<svg class="{cls}" viewBox="0 0 24 24" aria-hidden="true">{ICONS[name]}</svg>'


# ---------------------------------------------------------------------------
# Shared components
# ---------------------------------------------------------------------------

def status_bar() -> str:
    return (
        '<div class="device-status"><span>9:41</span>'
        '<span class="status-icons" aria-hidden="true">'
        '<span class="signal"><i></i><i></i><i></i><i></i></span>'
        '<span class="wifi"></span><span class="battery"></span>'
        "</span></div>"
    )


def appbar(title: str, back: bool = True, sub: str = "", right: str = "") -> str:
    back_html = f'<span class="appbar-back">{icon("back", "icon icon-sm")}</span>' if back else ""
    sub_html = f'<div class="appbar-sub">{sub}</div>' if sub else ""
    return (
        f'<div class="appbar">{back_html}'
        f'<div style="flex:1;min-width:0"><div class="appbar-title">{title}</div>{sub_html}</div>'
        f"{right}</div>"
    )


def bottom_nav(active: str) -> str:
    items = [("home", "Trang chủ"), ("grid", "Dịch vụ"), ("bell", "Thông báo"), ("user", "Tài khoản")]
    parts = []
    for key, label in items:
        cls = "nav-item active" if key == active else "nav-item"
        parts.append(
            f'<span class="{cls}">{icon(key, "icon icon-sm")}<span>{label}</span></span>'
        )
    return f'<div class="bottom-nav">{"".join(parts)}</div>'


def stepper(active: int) -> str:
    labels = ["Loại", "Vị trí", "Mô tả", "Xem lại"]
    parts = []
    for number, label in enumerate(labels, 1):
        if number < active:
            cls, dot = "step done", icon("check", "icon icon-sm")
        elif number == active:
            cls, dot = "step active", str(number)
        else:
            cls, dot = "step", str(number)
        parts.append(
            f'<div class="{cls}"><span class="step-dot">{dot}</span>'
            f'<span class="step-label">{label}</span></div>'
        )
        if number < len(labels):
            parts.append('<span class="step-line"></span>')
    return f'<div class="stepper">{"".join(parts)}</div>'


def field(
    label: str,
    value: str = "",
    placeholder: str = "",
    helper: str = "",
    required: bool = False,
    error: str = "",
    textarea: bool = False,
    select: bool = False,
    input_type: str = "text",
) -> str:
    req = ' <span class="req">*</span>' if required else ""
    cls = "input error" if error else "input"
    if textarea:
        control = (
            f'<textarea class="{cls}" placeholder="{escape(placeholder)}" rows="4">'
            f"{escape(value)}</textarea>"
        )
    elif select:
        shown = escape(value) if value else escape(placeholder)
        control = f'<div class="{cls} select"><span>{shown}</span>{icon("down", "icon icon-sm")}</div>'
    else:
        control = (
            f'<input class="{cls}" type="{input_type}" value="{escape(value)}" '
            f'placeholder="{escape(placeholder)}">'
        )
    helper_html = f'<div class="helper">{helper}</div>' if helper else ""
    error_html = f'<div class="error-text">{escape(error)}</div>' if error else ""
    return (
        f'<div class="field"><label class="label">{label}{req}</label>'
        f"{control}{helper_html}{error_html}</div>"
    )


def choice(
    title: str,
    desc: str,
    example: str = "",
    selected: bool = False,
    href: str = "#",
) -> str:
    cls = "choice selected" if selected else "choice"
    check = icon("check", "icon icon-sm") if selected else ""
    ex = f'<span class="choice-example">{example}</span>' if example else ""
    return (
        f'<a class="{cls}" href="{href}"><span class="choice-check">{check}</span>'
        f'<span class="choice-body"><span class="choice-title">{title}</span>'
        f'<span class="choice-desc">{desc}</span>{ex}</span></a>'
    )


def button(
    text: str,
    kind: str = "primary",
    href: str = "#",
    block: bool = True,
    disabled: bool = False,
    icon_name: str | None = None,
    cls: str = "",
) -> str:
    classes = f"btn btn-{kind}"
    if block:
        classes += " btn-block"
    if disabled:
        classes += " disabled"
    if cls:
        classes += f" {cls}"
    ic = icon(icon_name, "icon icon-sm") if icon_name else ""
    if disabled:
        return f'<span class="{classes}">{ic}{text}</span>'
    return f'<a class="{classes}" href="{href}">{ic}{text}</a>'


def badge(text: str, kind: str = "", icon_name: str | None = None) -> str:
    cls = f"badge {kind}".strip()
    ic = icon(icon_name, "icon icon-sm") if icon_name else ""
    return f'<span class="{cls}">{ic}{text}</span>'


def alert(title: str, text: str, kind: str = "info", icon_name: str = "info") -> str:
    title_html = f'<div class="alert-title">{title}</div>' if title else ""
    return (
        f'<div class="alert alert-{kind}">{icon(icon_name, "icon icon-sm")}'
        f"<div>{title_html}{text}</div></div>"
    )


def file_row(name: str, meta: str, href: str = "#", action: str = "Xem") -> str:
    return (
        f'<a class="file-row" href="{href}"><span class="file-thumb">'
        f'{icon("image", "icon icon-sm")}</span>'
        f'<span style="flex:1;min-width:0"><span class="file-name">{name}</span>'
        f'<span class="file-meta" style="display:block">{meta}</span></span>'
        f'<span class="btn btn-secondary btn-sm">{action}</span></a>'
    )


def empty_state(title: str, desc: str, action_html: str = "") -> str:
    return (
        f'<div class="empty"><div class="empty-icon">{icon("inbox", "icon icon-lg")}</div>'
        f'<div class="empty-title">{title}</div><div class="empty-desc">{desc}</div>'
        f"{action_html}</div>"
    )


def lis(items: list[str]) -> str:
    return "".join(f"<li>{item}</li>" for item in items)


# ---------------------------------------------------------------------------
# Frame renderer
# ---------------------------------------------------------------------------

def frame(
    phase: str,
    sid: str,
    title: str,
    purpose: str,
    body: str,
    components: list[str],
    interactions: list[str],
    source: str,
    delta_title: str,
    delta: list[str],
    assumptions: list[str],
) -> str:
    slug = sid.lower()
    device_cls = "as-is" if phase == "AS-IS" else "to-be"
    return f"""
<article class="screen-card" id="{slug}">
  <div class="screen-head">
    <span class="screen-id">{sid}</span>
    <h3>{title}</h3>
  </div>
  <div class="device {device_cls}">
    {status_bar()}
    <div class="screen">{body}</div>
  </div>
  <p class="purpose">{purpose}</p>
  <details class="screen-details">
    <summary>Chi tiết thiết kế</summary>
    <div class="detail-grid">
      <div><div class="detail-label">Thành phần chính</div><ul class="detail-list">{lis(components)}</ul></div>
      <div><div class="detail-label">Tương tác chính</div><ul class="detail-list">{lis(interactions)}</ul></div>
      <div><div class="detail-label">Nguồn</div><div class="detail-text">{source}</div></div>
      <div><div class="detail-label">{delta_title}</div><ul class="detail-list">{lis(delta)}</ul></div>
      <div><div class="detail-label">Giả định / cần xác nhận</div><ul class="detail-list">{lis(assumptions)}</ul></div>
    </div>
  </details>
</article>"""


def page(
    title: str,
    kicker: str,
    lead: str,
    flow_steps: list[str],
    scope_text: str,
    frames: list[str],
    counterpart_href: str,
    counterpart_label: str,
    page_file: str,
) -> str:
    flow = ' <span class="flow-arrow">→</span> '.join(
        f'<span class="flow-step">{step}</span>' for step in flow_steps
    )
    return f"""<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title} · VNeID Topic 7 Wireframes</title>
  <link rel="stylesheet" href="../assets/wireframe.css">
</head>
<body>
  <header class="page-header">
    <p class="breadcrumb">{kicker}</p>
    <h1>{title}</h1>
    <p class="page-lead">{lead}</p>
    <nav class="page-nav">
      <a href="../index.html">{icon("grid", "icon icon-sm")} Thư viện wireframe</a>
      <a href="../function-screen-mapping.md">Function–screen mapping</a>
      <a href="../design-system.md">Design system</a>
      <a class="active" href="{counterpart_href}">{counterpart_label}</a>
    </nav>
  </header>

  <div class="flow-strip" aria-label="Luồng màn hình">{flow}</div>

  <div class="scope-note">
    <div class="callout">{icon("info", "icon icon-sm")}<div>{scope_text}</div></div>
  </div>

  <main class="screens-section">
    <div class="section-heading">
      <h2>Danh sách màn hình</h2>
      <p>{len(frames)} màn hình / trạng thái</p>
    </div>
    <div class="screens-grid">
      {"".join(frames)}
    </div>
  </main>

  <footer class="page-footer">
    Mã trang: <strong>{page_file}</strong> · Dữ liệu cá nhân, mã hồ sơ và địa chỉ trong wireframe là dữ liệu minh họa.
    Nguồn: <em>diagrams/topic7</em> và <em>theoretical_basis</em>.
  </footer>
</body>
</html>
"""


# ---------------------------------------------------------------------------
# AS-IS — F1
# ---------------------------------------------------------------------------

def asis_home() -> str:
    body = f"""
{appbar("VNeID", back=False, right=f'<span class="appbar-btn">{icon("bell", "icon icon-sm")}</span>')}
<div class="content">
  <div class="card card-dark">
    <div class="row-between">
      <div>
        <div class="tiny" style="color:#d4d4d8">Tài khoản định danh điện tử</div>
        <div class="strong" style="font-size:14px;margin-top:2px">Công dân · Mức 2</div>
      </div>
      <span class="badge badge-soft">Đã xác thực</span>
    </div>
  </div>
  <div class="section" style="margin-top:14px">
    <div class="section-title">Dịch vụ</div>
    <a class="list-item" href="#as-is-f1-02">
      <span class="empty-icon" style="width:38px;height:38px;margin:0">{icon("grid", "icon icon-sm")}</span>
      <span class="body">
        <span class="list-title">Dịch vụ khác</span>
        <span class="list-meta">Xem toàn bộ dịch vụ của VNeID</span>
      </span>
      <span class="chevron">{icon("chevron", "icon icon-sm")}</span>
    </a>
  </div>
  <div class="card card-soft small muted">Màn hình chính là điểm bắt đầu được mô tả trong Activity Diagram As-Is. Các dịch vụ ngoài phạm vi không được thiết kế lại.</div>
</div>
{bottom_nav("home")}
"""
    return frame(
        "AS-IS", "AS-IS-F1-01", "Trang chính VNeID",
        "Người dân mở ứng dụng và tìm mục “Dịch vụ khác” để đi tới chức năng phản ánh.",
        body,
        ["Thanh trạng thái và thanh ứng dụng VNeID", "Thẻ tài khoản định danh mức 2", "Mục “Dịch vụ khác”", "Thanh điều hướng dưới"],
        ["Chạm “Dịch vụ khác” để mở danh mục dịch vụ.", "Thanh điều hướng dưới chỉ là bối cảnh, không thuộc luồng phản ánh."],
        "AS_IS_VNeID_Activity_Diagram.puml — bước đăng nhập và màn hình chính/dịch vụ.",
        "Quan sát As-Is",
        ["Chức năng phản ánh nằm sau mục “Dịch vụ khác”, không hiện trực tiếp trên trang chính.", "Người dân phải nhớ đường đi qua nhiều lớp danh mục."],
        ["Sơ đồ As-Is xác nhận đăng nhập VNeID mức 2; màn hình đăng nhập không được vẽ lại.", "Các dịch vụ khác trên trang chính không được mô tả trong nguồn nên không đưa vào."],
    )


def asis_services() -> str:
    body = f"""
{appbar("Dịch vụ khác")}
<div class="content">
  <div class="input" style="display:flex;align-items:center;gap:7px;color:var(--muted)">
    {icon("search", "icon icon-sm")} <span>Tìm kiếm dịch vụ</span>
  </div>
  <div class="section" style="margin-top:14px">
    <div class="section-title">Danh mục dịch vụ</div>
    <a class="list-item" href="#as-is-f1-03">
      <span class="empty-icon" style="width:38px;height:38px;margin:0">{icon("send", "icon icon-sm")}</span>
      <span class="body">
        <span class="list-title">Tiếp nhận góp ý, phản ánh &amp; vướng mắc</span>
        <span class="list-meta">Gửi và theo dõi phản ánh</span>
      </span>
      <span class="chevron">{icon("chevron", "icon icon-sm")}</span>
    </a>
  </div>
</div>
"""
    return frame(
        "AS-IS", "AS-IS-F1-02", "Dịch vụ khác",
        "Danh mục trung gian chứa mục “Tiếp nhận góp ý, phản ánh & vướng mắc”.",
        body,
        ["Thanh ứng dụng có nút quay lại", "Ô tìm kiếm dịch vụ", "Danh sách dịch vụ", "Mục “Tiếp nhận góp ý, phản ánh & vướng mắc”"],
        ["Chạm mục “Tiếp nhận góp ý, phản ánh & vướng mắc” để đi tiếp.", "Nút quay lại trở về trang chính."],
        "AS_IS_VNeID_Activity_Diagram.puml — bước chọn “Dịch vụ khác” và hiển thị danh mục.",
        "Quan sát As-Is",
        ["Tên dịch vụ dài, dễ bị rút gọn trên màn hình nhỏ.", "Không có mô tả phân biệt rõ các dịch vụ liên quan."],
        ["Sơ đồ chỉ xác nhận mục “Tiếp nhận góp ý, phản ánh & vướng mắc”; các dịch vụ khác không được thêm vào."],
    )


def asis_module() -> str:
    body = f"""
{appbar("Tiếp nhận góp ý, phản ánh & vướng mắc")}
<div class="content">
  <p class="small muted" style="margin:0 0 10px">Chọn nội dung bạn muốn phản ánh.</p>
  <a class="list-item" href="#as-is-f1-04">
    <span class="empty-icon" style="width:38px;height:38px;margin:0">{icon("file", "icon icon-sm")}</span>
    <span class="body">
      <span class="list-title">Phản ánh kiến nghị về dịch vụ công</span>
      <span class="list-meta">Tạo mới hoặc xem lại yêu cầu đã gửi</span>
    </span>
    <span class="chevron">{icon("chevron", "icon icon-sm")}</span>
  </a>
</div>
"""
    return frame(
        "AS-IS", "AS-IS-F1-03", "Tiếp nhận góp ý, phản ánh & vướng mắc",
        "Màn hình module liệt kê chức năng con “Phản ánh kiến nghị về dịch vụ công”.",
        body,
        ["Thanh ứng dụng có nút quay lại", "Mô tả ngắn", "Mục “Phản ánh kiến nghị về dịch vụ công”"],
        ["Chạm mục phản ánh để mở màn hình tạo mới/lịch sử yêu cầu."],
        "AS_IS_VNeID_Activity_Diagram.puml — bước chọn “Phản ánh kiến nghị về dịch vụ công”.",
        "Quan sát As-Is",
        ["Một màn hình trung gian nữa khiến người dân phải đi qua nhiều bước trước khi thấy nút tạo yêu cầu."],
        ["Không có chức năng con nào khác được nêu trong nguồn As-Is."],
    )


def asis_landing(detail_href: str) -> str:
    body = f"""
{appbar("Phản ánh kiến nghị về dịch vụ công")}
<div class="content">
  <a class="btn btn-primary btn-block" href="#as-is-f1-05">{icon("plus", "icon icon-sm")} Tạo mới yêu cầu</a>
  <div class="section" style="margin-top:16px">
    <div class="row-between">
      <div class="section-title" style="margin:0">Lịch sử yêu cầu</div>
      <span class="tiny muted">2 yêu cầu</span>
    </div>
    <div class="list" style="margin-top:7px">
      <a class="list-item" href="{detail_href}">
        <span class="body">
          <span class="list-title">HS-2026-001234</span>
          <span class="list-meta">28/10/2026 · Phản ánh kiến nghị về dịch vụ công</span>
        </span>
        <span class="chevron">{icon("chevron", "icon icon-sm")}</span>
      </a>
      <a class="list-item" href="{detail_href}">
        <span class="body">
          <span class="list-title">HS-2026-001198</span>
          <span class="list-meta">15/10/2026 · Phản ánh kiến nghị về dịch vụ công</span>
        </span>
        <span class="chevron">{icon("chevron", "icon icon-sm")}</span>
      </a>
    </div>
  </div>
  <div class="alert alert-info" style="margin-top:14px">
    {icon("info", "icon icon-sm")}
    <div>Màn hình này được dùng chung cho F1 (tạo yêu cầu) và F2 (xem lịch sử).</div>
  </div>
</div>
"""
    return frame(
        "AS-IS", "AS-IS-F1-04", "Phản ánh kiến nghị về dịch vụ công",
        "Màn hình đích sau khi đi qua các danh mục; có nút “Tạo mới yêu cầu” và danh sách lịch sử yêu cầu.",
        body,
        ["Thanh ứng dụng", "Nút “Tạo mới yêu cầu”", "Danh sách lịch sử yêu cầu", "Liên kết tới chi tiết yêu cầu"],
        ["Chạm “Tạo mới yêu cầu” để mở biểu mẫu.", "Chạm một bản ghi lịch sử để mở chi tiết yêu cầu (F3)."],
        "AS_IS_VNeID_Activity_Diagram.puml — nhánh “Tạo yêu cầu phản ánh” và “Xem chi tiết yêu cầu hiện có”.",
        "Quan sát As-Is",
        ["Màn hình gộp hai mục đích: tạo mới và xem lịch sử.", "Danh sách chưa thể hiện trạng thái xử lý; người dân phải mở từng yêu cầu."],
        ["Sơ đồ xác nhận có “lịch sử yêu cầu” nhưng không mô tả chi tiết từng dòng; mã hồ sơ và ngày gửi là dữ liệu minh họa."],
    )


def asis_form(error: bool = False) -> str:
    error_alert = (
        f'<div class="alert alert-error" style="margin-bottom:12px">{icon("alert", "icon icon-sm")}'
        "<div><div class=\"alert-title\">Vui lòng kiểm tra các trường bắt buộc</div>"
        "Một số thông tin còn thiếu hoặc chưa được xác nhận.</div></div>"
        if error
        else ""
    )
    body = f"""
{appbar("Tạo mới yêu cầu")}
<div class="content">
  {error_alert}
  <div class="form">
    {field("Mã hồ sơ", value="HS-2026-001234" if error else "", placeholder="Nhập mã hồ sơ", required=True, error="Vui lòng nhập mã hồ sơ." if error else "")}
    {field("Phản ánh kiến nghị về việc", value="Phản ánh kiến nghị về dịch vụ công" if error else "", placeholder="Chọn loại phản ánh", required=True, select=True, error="" if error else "")}
    {field("Nội dung phản ánh", value="", placeholder="Nhập nội dung phản ánh", required=True, textarea=True, error="Vui lòng nhập nội dung phản ánh." if error else "")}
    <div class="field">
      <label class="label">Tài liệu đính kèm</label>
      <div class="upload">
        {icon("paperclip", "icon icon-sm")}
        <span class="small strong">Chọn tệp đính kèm</span>
        <span class="tiny muted">Không bắt buộc · Tệp minh họa</span>
      </div>
    </div>
    <div class="check-row">
      <span class="checkbox{' checked' if not error else ''}">{icon("check", "icon icon-sm") if not error else ""}</span>
      <span class="check-text">Tôi xin cam đoan những thông tin kê khai trên là đúng sự thật.</span>
    </div>
    {"<div class=\"error-text\">Vui lòng xác nhận cam đoan thông tin.</div>" if error else ""}
    <a class="btn btn-primary btn-block" href="#as-is-f1-07">Gửi phản ánh</a>
  </div>
</div>
"""
    return frame(
        "AS-IS",
        "AS-IS-F1-06" if error else "AS-IS-F1-05",
        "Biểu mẫu phản ánh — lỗi trường bắt buộc" if error else "Biểu mẫu phản ánh",
        "Biểu mẫu hiện tại với các trường được mô tả trong As-Is; trạng thái lỗi minh họa việc kiểm tra trường bắt buộc.",
        body,
        ["Trường “Mã hồ sơ”", "Trường chọn “Phản ánh kiến nghị về việc”", "Vùng “Nội dung phản ánh”", "Vùng “Tài liệu đính kèm”", "Checkbox cam đoan", "Nút “Gửi phản ánh”"],
        ["Nhập mã hồ sơ, chọn loại phản ánh và nhập nội dung.", "Đính kèm tài liệu nếu có.", "Tích cam đoan rồi gửi phản ánh."],
        "AS_IS_VNeID_Activity_Diagram.puml — màn hình biểu mẫu và kiểm tra trường bắt buộc có dấu * đỏ.",
        "Quan sát As-Is",
        ["Biểu mẫu dài trên một màn hình; người dân phải cuộn và tự đối chiếu nhiều trường.", "Thông báo lỗi trong sơ đồ As-Is chỉ được mô tả ở mức kiểm tra trường bắt buộc, không nêu nội dung cụ thể."],
        ["Sơ đồ không liệt kê toàn bộ giá trị của trường chọn loại phản ánh; wireframe chỉ hiển thị trường chọn, không tự đặt danh mục chính thức.", "Thứ tự trường và nội dung thông báo lỗi là suy luận hợp lý từ sơ đồ; cần đối chiếu giao diện VNeID thực tế."],
    )


def asis_success() -> str:
    body = f"""
<div class="content" style="display:flex;flex-direction:column;justify-content:center">
  <div class="success-hero">
    <div class="success-icon">{icon("check", "icon icon-lg")}</div>
    <div class="success-title">Tạo yêu cầu thành công</div>
    <div class="success-desc">Yêu cầu phản ánh của bạn đã được ghi nhận.</div>
  </div>
  <div class="stack" style="margin-top:14px">
    <a class="btn btn-primary btn-block" href="#as-is-f1-05">Tiếp tục phản ánh</a>
    <a class="btn btn-secondary btn-block" href="#as-is-f1-01">Trang chủ</a>
  </div>
  <div class="alert alert-info" style="margin-top:14px">
    {icon("info", "icon icon-sm")}
    <div>Sơ đồ As-Is không mô tả mã tham chiếu do hệ thống cấp; màn hình này chỉ hiển thị xác nhận thành công.</div>
  </div>
</div>
"""
    return frame(
        "AS-IS", "AS-IS-F1-07", "Gửi yêu cầu thành công",
        "Màn hình xác nhận hiện tại sau khi gửi, với hai lựa chọn “Tiếp tục phản ánh” và “Trang chủ”.",
        body,
        ["Biểu tượng thành công", "Thông báo thành công", "Nút “Tiếp tục phản ánh”", "Nút “Trang chủ”"],
        ["Chọn “Tiếp tục phản ánh” để quay lại biểu mẫu.", "Chọn “Trang chủ” để kết thúc luồng."],
        "AS_IS_VNeID_Activity_Diagram.puml — nhánh sau khi tạo yêu cầu thành công.",
        "Quan sát As-Is",
        ["Màn hình thành công không cho thấy mã tham chiếu hay hướng dẫn tra cứu.", "Hai lựa chọn được xác nhận trong sơ đồ; không có nút xem lại yêu cầu vừa gửi."],
        ["Việc hệ thống có cấp mã tham chiếu hay không không được nêu trong nguồn As-Is."],
    )


# ---------------------------------------------------------------------------
# AS-IS — F2
# ---------------------------------------------------------------------------

def asis_history_empty() -> str:
    body = f"""
{appbar("Phản ánh kiến nghị về dịch vụ công")}
<div class="content">
  <a class="btn btn-primary btn-block" href="../F1_Submit_Report/as-is.html#as-is-f1-05">{icon("plus", "icon icon-sm")} Tạo mới yêu cầu</a>
  <div class="section" style="margin-top:16px">
    <div class="section-title">Lịch sử yêu cầu</div>
    {empty_state("Chưa có yêu cầu nào", "Các yêu cầu bạn đã gửi sẽ xuất hiện tại đây.")}
  </div>
</div>
"""
    return frame(
        "AS-IS", "AS-IS-F2-02", "Lịch sử yêu cầu — trạng thái trống",
        "Trạng thái chưa có yêu cầu trong lịch sử; người dân vẫn có thể tạo yêu cầu mới.",
        body,
        ["Nút “Tạo mới yêu cầu”", "Tiêu đề mục lịch sử", "Trạng thái trống"],
        ["Chạm “Tạo mới yêu cầu” để mở biểu mẫu.", "Không có bản ghi để mở chi tiết."],
        "Suy luận từ màn hình lịch sử yêu cầu trong AS_IS_VNeID_Activity_Diagram.puml.",
        "Quan sát As-Is",
        ["Sơ đồ As-Is không mô tả trạng thái trống; đây là trạng thái giao diện cần thiết để tránh màn hình trắng."],
        ["Trạng thái trống và nội dung hướng dẫn là đề xuất trình bày, không phải copy chính thức của VNeID."],
    )


# ---------------------------------------------------------------------------
# AS-IS — F3
# ---------------------------------------------------------------------------

def asis_detail() -> str:
    body = f"""
{appbar("Chi tiết yêu cầu")}
<div class="content">
  <div class="card">
    <div class="row-between">
      <div>
        <div class="tiny muted">Mã hồ sơ</div>
        <div class="strong" style="font-size:15px">HS-2026-001234</div>
      </div>
      <span class="badge">Yêu cầu đã gửi</span>
    </div>
    <div class="tiny muted" style="margin-top:5px">Ngày gửi: 28/10/2026</div>
  </div>
  <div class="section" style="margin-top:14px">
    <div class="section-title">Thông tin phản ánh</div>
    <div class="card stack-sm">
      <div>
        <div class="tiny muted">Loại phản ánh</div>
        <div class="small strong">Phản ánh kiến nghị về dịch vụ công</div>
      </div>
      <div>
        <div class="tiny muted">Nội dung</div>
        <div class="small">Đèn đường trước số 12, đường Hoa Sen không sáng từ tối 27/10/2026.</div>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="section-title">Tài liệu đính kèm</div>
    {file_row("anh_den_duong.jpg", "Tài liệu do người dân đính kèm", "#as-is-f3-02")}
  </div>
</div>
"""
    return frame(
        "AS-IS", "AS-IS-F3-01", "Chi tiết yêu cầu",
        "Màn hình chi tiết hiện tại khi người dân chọn một bản ghi trong lịch sử yêu cầu.",
        body,
        ["Mã hồ sơ", "Ngày gửi (minh họa)", "Loại phản ánh", "Nội dung phản ánh", "Tài liệu đính kèm và nút “Xem”"],
        ["Đọc thông tin yêu cầu.", "Chạm “Xem” để mở tài liệu đính kèm."],
        "AS_IS_VNeID_Activity_Diagram.puml — nhánh “Xem chi tiết yêu cầu hiện có” và xem tài liệu đính kèm.",
        "Quan sát As-Is",
        ["Sơ đồ As-Is chỉ xác nhận chi tiết yêu cầu và tài liệu đính kèm; chưa có trạng thái xử lý hoặc lịch sử cập nhật.", "Người dân không thấy tiến độ xử lý trên màn hình này."],
        ["Ngày gửi và tên tệp là dữ liệu minh họa; sơ đồ không nêu các trường này.", "Không thêm trạng thái/lịch sử vào As-Is vì nguồn không xác nhận."],
    )


def asis_attachment() -> str:
    body = f"""
{appbar("Tài liệu đính kèm")}
<div class="content flush">
  <div style="height:430px;display:grid;place-items:center;border-bottom:1px solid var(--line);background:var(--surface-2)">
    <div style="text-align:center">
      <div class="empty-icon" style="width:64px;height:64px">{icon("image", "icon icon-lg")}</div>
      <div class="small strong">Ảnh minh họa tài liệu đính kèm</div>
      <div class="tiny muted">Khung xem tài liệu</div>
    </div>
  </div>
  <div style="padding:14px">
    <div class="file-name">anh_den_duong.jpg</div>
    <div class="file-meta">Tài liệu do người dân đính kèm</div>
    <a class="btn btn-secondary btn-block" style="margin-top:12px" href="#as-is-f3-01">Đóng</a>
  </div>
</div>
"""
    return frame(
        "AS-IS", "AS-IS-F3-02", "Xem tài liệu đính kèm",
        "Khung xem tài liệu khi người dân chọn “Xem” ở màn hình chi tiết.",
        body,
        ["Thanh ứng dụng", "Khung xem tài liệu", "Tên tệp", "Nút “Đóng”"],
        ["Xem nội dung tài liệu.", "Chọn “Đóng” để quay lại chi tiết yêu cầu."],
        "AS_IS_VNeID_Activity_Diagram.puml — bước chọn “Xem” để xem tài liệu đính kèm.",
        "Quan sát As-Is",
        ["Sơ đồ chỉ nêu thao tác mở tài liệu, không mô tả trình xem chi tiết."],
        ["Cách hiển thị tài liệu (ảnh, PDF, ứng dụng ngoài) chưa được đặc tả; wireframe dùng khung xem tối giản."],
    )


# ---------------------------------------------------------------------------
# TO-BE — F1
# ---------------------------------------------------------------------------

def tobe_home() -> str:
    body = f"""
{appbar("VNeID", back=False, right=f'<span class="appbar-btn">{icon("bell", "icon icon-sm")}</span>')}
<div class="content">
  <div class="row-between" style="margin-bottom:12px">
    <div>
      <div class="tiny muted">Xin chào</div>
      <div class="strong">Công dân</div>
    </div>
    <span class="badge badge-soft">Định danh mức 2</span>
  </div>
  <div class="section">
    <div class="section-title">Công cụ yêu thích</div>
    <a class="card card-dark" href="#to-be-f1-02" style="display:block">
      <div class="row-between">
        <div>
          <div class="tiny" style="color:#d4d4d8">Phản ánh vấn đề công cộng</div>
          <div class="strong" style="font-size:17px;margin-top:2px">Gửi phản ánh</div>
          <div class="small" style="color:#d4d4d8;margin-top:4px">Chọn loại vấn đề, vị trí và gửi trong 4 bước.</div>
        </div>
        <span class="success-icon" style="width:42px;height:42px;margin:0">{icon("send", "icon icon-sm")}</span>
      </div>
    </a>
  </div>
  <div class="section">
    <div class="section-title">Công cụ khác</div>
    <a class="list-item" href="../F2_Check_Status/to-be.html#to-be-f2-01">
      <span class="empty-icon" style="width:34px;height:34px;margin:0">{icon("search", "icon icon-sm")}</span>
      <span class="body">
        <span class="list-title">Tra cứu phản ánh</span>
        <span class="list-meta">Xem trạng thái phản ánh đã gửi</span>
      </span>
      <span class="chevron">{icon("chevron", "icon icon-sm")}</span>
    </a>
  </div>
  <div class="alert alert-info" style="margin-top:14px">
    {icon("info", "icon icon-sm")}
    <div>“Gửi phản ánh” được đưa lên khu vực đầu trang để tăng khả năng nhận biết.</div>
  </div>
</div>
{bottom_nav("home")}
"""
    return frame(
        "TO-BE", "TO-BE-F1-01", "Trang chính — Gửi phản ánh nổi bật",
        "Trang chính đề xuất đưa “Gửi phản ánh” vào khu vực “Công cụ yêu thích” để người dân tìm thấy ngay.",
        body,
        ["Thẻ tài khoản rút gọn", "Khu vực “Công cụ yêu thích”", "Thẻ hành động chính “Gửi phản ánh”", "Liên kết “Tra cứu phản ánh”", "Thanh điều hướng dưới"],
        ["Chạm “Gửi phản ánh” để bắt đầu biểu mẫu 4 bước.", "Chạm “Tra cứu phản ánh” để mở F2."],
        "plan/Dan_y_Topic_7... — Slide 19 (Màn hình 1: Trang chủ); 3-usability-heuristics.md — recognition rather than recall.",
        "Cải tiến so với As-Is",
        ["Giảm số bước tìm chức năng: không còn phải đi qua “Dịch vụ khác” và hai màn hình danh mục.", "Hành động chính có mô tả ngắn và được ưu tiên thị giác.", "Tra cứu vẫn hiện diện nhưng không cạnh tranh với hành động gửi phản ánh."],
        ["Nội dung “Công cụ yêu thích” là đề xuất thiết kế; danh sách công cụ thực tế của VNeID không được đặc tả trong repo.", "Màn hình “Hướng dẫn” được dàn ý nhắc tới nhưng không có luồng riêng nên không tạo wireframe."],
    )


def tobe_category(error: bool = False) -> str:
    choices = "".join(
        [
            choice("Đường sá / vỉa hè", "Đường hư hỏng, vỉa hè bị lấn chiếm", "Ví dụ: ổ gà, vỉa hè bong tróc", href="#to-be-f1-02"),
            choice("Đèn đường", "Đèn không sáng, chập chờn, hư hỏng", "Ví dụ: đèn trước nhà, trong hẻm", selected=not error, href="#to-be-f1-02"),
            choice("Rác thải / vệ sinh", "Rác tồn đọng, điểm tập kết không hợp vệ sinh", "Ví dụ: rác bên lề đường", href="#to-be-f1-02"),
            choice("Thoát nước / ngập úng", "Cống thoát nước tắc, đường ngập khi mưa", "Ví dụ: ngập trước cổng chợ", href="#to-be-f1-02"),
            choice("Vấn đề khác", "Vấn đề công cộng chưa thuộc các nhóm trên", "", href="#to-be-f1-02"),
        ]
    )
    error_block = (
        f'<div class="error-text" style="margin:0 0 8px">Vui lòng chọn loại vấn đề.</div>'
        if error
        else ""
    )
    body = f"""
{appbar("Chọn loại vấn đề")}
{stepper(1)}
<div class="content">
  <div class="tiny muted">Bước 1/4</div>
  <div class="strong" style="font-size:16px;margin-top:2px">Bạn muốn phản ánh điều gì?</div>
  <p class="small muted" style="margin:4px 0 11px">Chọn mục gần nhất với vấn đề. Bạn có thể quay lại sửa ở bước sau.</p>
  {error_block}
  <div class="choices">{choices}</div>
  <details class="card card-soft" style="margin-top:10px">
    <summary class="text-link">Chưa biết chọn mục nào?</summary>
    <div class="small muted" style="margin-top:6px">Chọn mục mô tả gần nhất với vấn đề của bạn. Bạn có thể quay lại chỉnh sửa trước khi gửi.</div>
  </details>
</div>
<div class="action-bar">
  <a class="btn btn-primary btn-block" href="{'#to-be-f1-03' if error else '#to-be-f1-04'}">Tiếp tục</a>
  <a class="btn btn-ghost btn-block" href="#to-be-f1-01">Hủy</a>
</div>
"""
    return frame(
        "TO-BE",
        "TO-BE-F1-03" if error else "TO-BE-F1-02",
        "Chọn loại vấn đề — lỗi chưa chọn" if error else "Chọn loại vấn đề",
        "Bước 1/4: chọn loại vấn đề bằng thẻ có tên, mô tả và ví dụ; trạng thái lỗi nhắc chọn trước khi tiếp tục.",
        body,
        ["Chỉ báo bước 1/4", "Tiêu đề câu hỏi", "Năm thẻ loại vấn đề", "Trợ giúp “Chưa biết chọn mục nào?”", "Nút “Tiếp tục” và “Hủy”"],
        ["Chạm một thẻ để chọn; thẻ được chọn có viền đậm và dấu kiểm.", "Chạm “Tiếp tục” khi chưa chọn để thấy thông báo lỗi.", "Mở trợ giúp để đọc hướng dẫn chọn mục."],
        "F1_Submit_Report_User_Flow.mmd — bước 1 “Chọn loại vấn đề”; plan/Dan_y... Slide 20; 3-usability-heuristics.md — match between system and real world.",
        "Cải tiến so với As-Is",
        ["Thay trường chọn khó hiểu bằng thẻ danh mục có mô tả và ví dụ.", "Hiển thị rõ lựa chọn đang chọn và lỗi tại chỗ.", "Giữ nguyên bước chọn loại vấn đề trong quy trình."],
        ["Năm danh mục là ví dụ minh họa từ dàn ý; dàn ý yêu cầu danh mục cuối phải khớp phạm vi nghiệp vụ chính thức.", "Thông báo lỗi và nhãn nút là đề xuất UI, không phải copy chính thức."],
    )


def tobe_location(permission_error: bool = False) -> str:
    banner = (
        f'<div class="alert alert-error" style="margin-bottom:9px">{icon("alert", "icon icon-sm")}'
        "<div><div class=\"alert-title\">Không thể lấy vị trí hiện tại</div>"
        "Bạn vẫn có thể tìm kiếm hoặc chọn vị trí thủ công.</div></div>"
        if permission_error
        else ""
    )
    body = f"""
{appbar("Chọn vị trí")}
{stepper(2)}
<div class="content tight">
  {banner}
  <div class="input" style="display:flex;align-items:center;gap:7px;color:var(--muted)">
    {icon("search", "icon icon-sm")} <span>Tìm địa chỉ, tên đường, địa điểm…</span>
  </div>
  <div class="map" style="margin-top:9px">
    <div class="map-pin"><span class="pin-shape"></span><span class="pin-shadow"></span></div>
    <div class="map-controls"><span class="map-btn">+</span><span class="map-btn">−</span><span class="map-btn">{icon("locate", "icon icon-sm")}</span></div>
    <span class="map-label">Bản đồ 2D · vị trí minh họa</span>
  </div>
  <div class="row-between" style="margin-top:7px">
    <span class="tiny muted">Chế độ xem</span>
    <span class="segmented"><span class="active">2D</span><span>3D</span></span>
  </div>
  <div class="card" style="margin-top:8px;padding:10px">
    <div class="row">
      <span class="empty-icon" style="width:30px;height:30px;margin:0">{icon("pin", "icon icon-sm")}</span>
      <div>
        <div class="small strong">Đường Hoa Sen, phường An Phú</div>
        <div class="tiny muted">TP. Thủ Đức, TP. Hồ Chí Minh</div>
      </div>
    </div>
    <a class="btn btn-secondary btn-sm btn-block" style="margin-top:7px" href="#to-be-f1-06">Xác nhận vị trí</a>
  </div>
  <div class="field" style="margin-top:8px">
    <label class="label">Hoặc nhập địa chỉ thủ công</label>
    <div class="input muted">Số nhà, tên đường, phường/xã…</div>
    <div class="helper">Dùng khi không thể chọn trên bản đồ.</div>
  </div>
</div>
<div class="action-bar">
  <a class="btn btn-primary btn-block" href="#to-be-f1-06">Tiếp tục</a>
  <a class="btn btn-ghost btn-block" href="#to-be-f1-02">Quay lại</a>
</div>
"""
    return frame(
        "TO-BE",
        "TO-BE-F1-05" if permission_error else "TO-BE-F1-04",
        "Chọn vị trí — không có quyền vị trí" if permission_error else "Chọn vị trí",
        "Bước 2/4: tìm kiếm, chọn trên bản đồ hoặc nhập thủ công; trạng thái không có quyền vị trí vẫn cho phép tiếp tục.",
        body,
        ["Ô tìm kiếm địa chỉ", "Bản đồ 2D có ghim và điều khiển", "Chuyển 2D/3D", "Thẻ địa chỉ đã chọn", "Ô nhập địa chỉ thủ công", "Nút xác nhận/tiếp tục"],
        ["Tìm hoặc chạm bản đồ để đặt ghim.", "Xác nhận địa chỉ đã chọn.", "Khi không có quyền vị trí, dùng tìm kiếm hoặc nhập thủ công."],
        "F1_Submit_Report_User_Flow.mmd — bước 2 “Chọn vị trí”; plan/Dan_y... Slide 21; 3-usability-heuristics.md — error prevention, recognition rather than recall.",
        "Cải tiến so với As-Is",
        ["Bổ sung lựa chọn vị trí bằng tìm kiếm/bản đồ và nhập thủ công thay vì chỉ dựa vào một cách nhập.", "Có bước xác nhận vị trí trước khi tiếp tục.", "3D là lựa chọn bổ sung, không bắt buộc."],
        ["Bản đồ, địa chỉ và tọa độ là dữ liệu minh họa.", "Chế độ 3D chỉ được thể hiện như lựa chọn; repo chưa xác nhận có triển khai thực tế.", "Sơ đồ không quy định định dạng địa chỉ hay cách geocode."],
    )


def tobe_description(error: bool = False) -> str:
    body = f"""
{appbar("Mô tả và đính kèm")}
{stepper(3)}
<div class="content">
  <div class="card card-soft" style="padding:9px">
    <div class="row-between">
      <div><div class="tiny muted">Loại vấn đề</div><div class="small strong">Đèn đường</div></div>
      <a class="text-link" href="#to-be-f1-02">Sửa</a>
    </div>
    <div class="row-between" style="margin-top:6px">
      <div><div class="tiny muted">Vị trí</div><div class="small strong">Đường Hoa Sen, phường An Phú</div></div>
      <a class="text-link" href="#to-be-f1-04">Sửa</a>
    </div>
  </div>
  <div class="form compact" style="margin-top:11px">
    {field("Mã hồ sơ", value="HS-2026-001234", placeholder="Nhập mã hồ sơ", required=True, helper="Mã hồ sơ của dịch vụ công liên quan.")}
    {field("Nội dung phản ánh", value="", placeholder="Ví dụ: Đèn đường trước số 12 không sáng từ tối 27/10/2026.", required=True, textarea=True, helper="Mô tả ngắn gọn vấn đề, thời điểm và mức độ ảnh hưởng.", error="Vui lòng nhập nội dung phản ánh." if error else "")}
    <div class="field">
      <label class="label">Tài liệu đính kèm <span class="helper">(không bắt buộc)</span></label>
      <div class="upload">
        {icon("paperclip", "icon icon-sm")}
        <span class="small strong">Chọn ảnh hoặc tệp</span>
        <span class="tiny muted">Ảnh hiện trường giúp cơ quan dễ xác minh hơn</span>
      </div>
    </div>
  </div>
</div>
<div class="action-bar">
  <a class="btn btn-primary btn-block" href="{'#to-be-f1-07' if error else '#to-be-f1-08'}">Tiếp tục</a>
  <a class="btn btn-ghost btn-block" href="#to-be-f1-04">Quay lại</a>
</div>
"""
    return frame(
        "TO-BE",
        "TO-BE-F1-07" if error else "TO-BE-F1-06",
        "Mô tả và đính kèm — lỗi xác thực" if error else "Mô tả và đính kèm",
        "Bước 3/4: hiển thị lại loại vấn đề và vị trí; nhập nội dung, mã hồ sơ và đính kèm tùy chọn.",
        body,
        ["Tóm tắt loại vấn đề và vị trí có nút “Sửa”", "Trường “Mã hồ sơ”", "Vùng “Nội dung phản ánh”", "Vùng đính kèm tùy chọn", "Nút “Tiếp tục” và “Quay lại”"],
        ["Nhập nội dung; lỗi hiển thị ngay dưới trường và dữ liệu được giữ.", "Đính kèm tệp nếu có.", "Chạm “Sửa” để quay lại bước tương ứng."],
        "F1_Submit_Report_User_Flow.mmd — bước 3 “Mô tả và đính kèm”; plan/Dan_y... Slide 22; functional specification FR-UI-02/03.",
        "Cải tiến so với As-Is",
        ["Tách biểu mẫu dài thành bước ngắn, có tóm tắt ngữ cảnh phía trên.", "Lỗi được đặt gần trường và giữ dữ liệu đã nhập.", "Ảnh/tài liệu được ghi rõ là tùy chọn."],
        ["Trường “Mã hồ sơ” được giữ từ As-Is; quy tắc bắt buộc chính thức cần xác nhận.", "Dàn ý không quy định giới hạn ký tự hay định dạng tệp; wireframe không đặt ra các giới hạn đó."],
    )


def tobe_review(mode: str = "normal") -> str:
    if mode == "sending":
        overlay = f"""
  <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(255,255,255,.84)">
    <div class="card" style="width:100%;text-align:center">
      <div class="spinner"></div>
      <div class="strong">Đang gửi phản ánh…</div>
      <div class="small muted" style="margin-top:3px">Vui lòng không đóng ứng dụng.</div>
    </div>
  </div>"""
        alert_html = ""
        action_html = ""
    elif mode == "error":
        overlay = ""
        alert_html = alert("Chưa gửi được phản ánh", "Dữ liệu của bạn vẫn được giữ. Vui lòng thử lại.", "error", "alert")
        action_html = f"""
<div class="action-bar">
  <a class="btn btn-primary btn-block" href="#to-be-f1-09">Thử lại</a>
  <a class="btn btn-secondary btn-block" href="#to-be-f1-08">Quay lại xem lại</a>
</div>"""
    else:
        overlay = ""
        alert_html = ""
        action_html = f"""
<div class="action-bar">
  <a class="btn btn-primary btn-block" href="#to-be-f1-09">Gửi phản ánh</a>
  <a class="btn btn-secondary btn-block" href="#to-be-f1-06">Quay lại chỉnh sửa</a>
  <a class="btn btn-ghost btn-block" href="#to-be-f1-01">Hủy</a>
</div>"""
    body = f"""
{appbar("Xem lại và gửi")}
{stepper(4)}
<div class="content" style="position:relative">
  {alert_html}
  <p class="small muted" style="margin:0 0 8px">Kiểm tra thông tin trước khi gửi. Bạn có thể quay lại chỉnh sửa từng phần.</p>
  <div class="card stack-sm">
    <div class="row-between"><div><div class="tiny muted">Loại vấn đề</div><div class="small strong">Đèn đường</div></div><a class="text-link" href="#to-be-f1-02">Sửa</a></div>
    <div class="row-between"><div><div class="tiny muted">Vị trí</div><div class="small strong">Đường Hoa Sen, phường An Phú</div></div><a class="text-link" href="#to-be-f1-04">Sửa</a></div>
    <div class="row-between"><div><div class="tiny muted">Mã hồ sơ</div><div class="small strong">HS-2026-001234</div></div><a class="text-link" href="#to-be-f1-06">Sửa</a></div>
    <div class="row-between"><div><div class="tiny muted">Nội dung</div><div class="small">Đèn đường trước số 12 không sáng từ tối 27/10/2026.</div></div><a class="text-link" href="#to-be-f1-06">Sửa</a></div>
    <div class="row-between"><div><div class="tiny muted">Tài liệu</div><div class="small">anh_den_duong.jpg</div></div><a class="text-link" href="#to-be-f1-06">Sửa</a></div>
  </div>
  <div class="check-row" style="margin-top:11px">
    <span class="checkbox checked">{icon("check", "icon icon-sm")}</span>
    <span class="check-text">Tôi xin cam đoan những thông tin kê khai trên là đúng sự thật.</span>
  </div>
  {overlay}
</div>
{action_html}
"""
    if mode == "sending":
        return frame(
            "TO-BE", "TO-BE-F1-09", "Đang gửi phản ánh",
            "Trạng thái hệ thống đang xử lý sau khi người dân chọn “Gửi phản ánh”.",
            body,
            ["Lớp phủ trạng thái đang gửi", "Biểu tượng tiến trình", "Thông điệp “Đang gửi phản ánh…”"],
            ["Chờ hệ thống phản hồi.", "Không thao tác lặp trong khi đang gửi."],
            "F1_Submit_Report_User_Flow.mmd — trạng thái “Đang gửi phản ánh…”; functional specification FR-UI-04.",
            "Cải tiến so với As-Is",
            ["Thể hiện trạng thái đang xử lý để tránh gửi lặp.", "Giữ nguyên dữ liệu trong lúc chờ."],
            ["Thời gian xử lý và hành vi khi mất kết nối không được đặc tả."],
        )
    if mode == "error":
        return frame(
            "TO-BE", "TO-BE-F1-11", "Lỗi gửi phản ánh",
            "Trạng thái gửi thất bại với thông báo rõ ràng, dữ liệu được giữ và có cách thử lại.",
            body,
            ["Thông báo lỗi", "Tóm tắt phản ánh", "Nút “Thử lại”", "Nút “Quay lại xem lại”"],
            ["Chọn “Thử lại” để gửi lại.", "Chọn “Quay lại xem lại” để kiểm tra dữ liệu."],
            "F1_Submit_Report_User_Flow.mmd — nhánh “Lỗi gửi”; functional specification FR-UI-04/07.",
            "Cải tiến so với As-Is",
            ["Phân biệt rõ chưa gửi được với đã gửi thành công.", "Giữ dữ liệu và cho phép thử lại thay vì bắt nhập lại."],
            ["Thông điệp lỗi cụ thể phụ thuộc backend; wireframe chỉ mô tả mức giao diện."],
        )
    return frame(
        "TO-BE", "TO-BE-F1-08", "Xem lại và gửi",
        "Bước 4/4: tóm tắt toàn bộ thông tin, cho phép sửa từng phần và xác nhận cam đoan trước khi gửi.",
        body,
        ["Tóm tắt loại vấn đề, vị trí, mã hồ sơ, nội dung, tài liệu", "Nút “Sửa” cho từng phần", "Checkbox cam đoan", "Nút “Gửi phản ánh”", "Nút “Quay lại chỉnh sửa”", "Nút “Hủy”"],
        ["Kiểm tra thông tin và chạm “Sửa” nếu cần.", "Tích cam đoan rồi chọn “Gửi phản ánh”.", "Nút gửi có trọng lượng thị giác cao hơn nút hủy."],
        "F1_Submit_Report_User_Flow.mmd — bước 4 “Xem lại thông tin”; plan/Dan_y... Slide 23; Prototype_and_Usability_Testin_REMAKE.md — bài học nút Hủy/Tiếp tục.",
        "Cải tiến so với As-Is",
        ["Có màn hình xem lại riêng thay vì gửi ngay từ biểu mẫu.", "Phân cấp nút rõ: gửi là hành động chính, hủy là hành động phụ.", "Dữ liệu được giữ khi quay lại sửa."],
        ["Màn hình xem lại dùng dữ liệu minh họa.", "Sơ đồ F1 không hiển thị trường cam đoan; trường này được giữ từ As-Is vì là bước xác nhận trong quy trình hiện tại."],
    )


def tobe_success() -> str:
    body = f"""
<div class="content" style="display:flex;flex-direction:column;justify-content:center">
  <div class="success-hero">
    <div class="success-icon">{icon("check", "icon icon-lg")}</div>
    <div class="success-title">Gửi phản ánh thành công</div>
    <div class="success-desc">Phản ánh của bạn đã được ghi nhận.</div>
  </div>
  <div class="section" style="margin-top:12px">
    <div class="section-title">Mã tham chiếu</div>
    <div class="code-box">
      <span class="code">PA-2026-000123</span>
      <span class="btn btn-secondary btn-sm">{icon("copy", "icon icon-sm")} Sao chép</span>
    </div>
    <div class="helper" style="margin-top:5px">Dùng mã này để tra cứu trạng thái xử lý.</div>
  </div>
  <div class="stack" style="margin-top:12px">
    <a class="btn btn-primary btn-block" href="../F2_Check_Status/to-be.html#to-be-f2-01">Tra cứu phản ánh</a>
    <a class="btn btn-secondary btn-block" href="#to-be-f1-01">Về trang chủ</a>
    <a class="btn btn-ghost btn-block" href="#to-be-f1-02">Gửi phản ánh khác</a>
  </div>
</div>
"""
    return frame(
        "TO-BE", "TO-BE-F1-10", "Gửi phản ánh thành công",
        "Màn hình xác nhận thành công có mã tham chiếu và hướng dẫn tra cứu.",
        body,
        ["Biểu tượng thành công", "Thông báo thành công", "Mã tham chiếu và nút sao chép", "Hướng dẫn tra cứu", "Nút “Tra cứu phản ánh”", "Nút “Về trang chủ”", "Nút “Gửi phản ánh khác”"],
        ["Sao chép mã tham chiếu.", "Chạm “Tra cứu phản ánh” để mở F2 với mã đã có.", "Chọn “Về trang chủ” hoặc “Gửi phản ánh khác”."],
        "F1_Submit_Report_User_Flow.mmd — trạng thái thành công; functional specification FR-UI-04.",
        "Cải tiến so với As-Is",
        ["Hiển thị mã tham chiếu nếu hệ thống cấp và hướng dẫn tra cứu ngay trên màn hình thành công.", "Phân biệt rõ thành công với thất bại.", "Giữ lựa chọn gửi tiếp hoặc về trang chủ như As-Is."],
        ["Mã tham chiếu chỉ hiển thị nếu hệ thống thực sự cấp; dữ liệu trong wireframe là minh họa.", "Sơ đồ As-Is không xác nhận việc cấp mã, nên đây là cải tiến đề xuất theo FR-UI-04."],
    )


# ---------------------------------------------------------------------------
# TO-BE — F2
# ---------------------------------------------------------------------------

def tobe_lookup(error: bool = False) -> str:
    body = f"""
{appbar("Tra cứu phản ánh")}
<div class="content">
  <p class="small muted" style="margin:0 0 12px">Nhập mã tham chiếu để xem trạng thái phản ánh đã gửi.</p>
  {field("Mã tham chiếu", value="", placeholder="Ví dụ: PA-2026-000123", required=True, helper="Mã được hiển thị sau khi gửi phản ánh thành công.", error="Vui lòng nhập mã tham chiếu." if error else "")}
  <div class="alert alert-info" style="margin-top:10px">
    {icon("info", "icon icon-sm")}
    <div>Bạn chưa biết mã? Hãy xem danh sách phản ánh đã gửi bên dưới.</div>
  </div>
  <a class="btn btn-primary btn-block" style="margin-top:12px" href="{'#to-be-f2-02' if error else '#to-be-f2-03'}">Tra cứu</a>
  <a class="btn btn-ghost btn-block" href="#to-be-f2-05">Xem danh sách phản ánh đã gửi</a>
</div>
"""
    return frame(
        "TO-BE",
        "TO-BE-F2-02" if error else "TO-BE-F2-01",
        "Tra cứu — lỗi nhập mã" if error else "Tra cứu phản ánh",
        "Màn hình nhập mã tham chiếu với hướng dẫn định dạng; trạng thái lỗi nhắc nhập mã.",
        body,
        ["Ô nhập “Mã tham chiếu”", "Hướng dẫn và ví dụ", "Nút “Tra cứu”", "Liên kết xem danh sách phản ánh"],
        ["Nhập mã và chạm “Tra cứu”.", "Nếu bỏ trống, lỗi hiển thị ngay dưới ô nhập.", "Chuyển sang danh sách nếu không có mã."],
        "F2_Check_Report_Status_User_Flow.mmd — màn hình tra cứu; functional specification FR-UI-05.",
        "Cải tiến so với As-Is",
        ["Bổ sung tra cứu trực tiếp bằng mã tham chiếu thay vì chỉ mở lịch sử.", "Có ví dụ định dạng và hướng dẫn khi chưa biết mã.", "Lỗi nhập được chỉ ra tại trường."],
        ["Định dạng mã chỉ là ví dụ minh họa; repo chưa quy định quy tắc mã chính thức.", "Việc tra cứu bằng mã là giả định đã ghi trong diagrams/topic7/README.md."],
    )


def tobe_loading() -> str:
    body = f"""
{appbar("Tra cứu phản ánh")}
<div class="content">
  <p class="small muted" style="margin:0 0 12px">Nhập mã tham chiếu để xem trạng thái phản ánh đã gửi.</p>
  {field("Mã tham chiếu", value="PA-2026-000123", required=True, helper="Mã được hiển thị sau khi gửi phản ánh thành công.")}
  <span class="btn btn-primary btn-block disabled" style="margin-top:12px"><span class="spinner" style="width:14px;height:14px;margin:0;border-width:2px"></span> Đang tra cứu…</span>
  <div class="card" style="margin-top:14px">
    <div class="stack-sm">
      <div style="height:10px;width:45%;background:var(--soft);border-radius:4px"></div>
      <div style="height:10px;width:75%;background:var(--soft);border-radius:4px"></div>
      <div style="height:10px;width:60%;background:var(--soft);border-radius:4px"></div>
    </div>
  </div>
</div>
"""
    return frame(
        "TO-BE", "TO-BE-F2-03", "Đang tra cứu",
        "Trạng thái chờ khi hệ thống đang tra cứu mã tham chiếu.",
        body,
        ["Ô nhập mã đã điền", "Nút “Đang tra cứu…”", "Khung xương kết quả"],
        ["Chờ phản hồi từ hệ thống.", "Không nhấn tra cứu lặp."],
        "F2_Check_Report_Status_User_Flow.mmd — trạng thái “Đang tra cứu…”.",
        "Cải tiến so với As-Is",
        ["Thể hiện trạng thái đang xử lý để người dùng biết hệ thống đã tiếp nhận thao tác."],
        ["Thời gian chờ và cơ chế hủy không được đặc tả."],
    )


def tobe_result() -> str:
    body = f"""
{appbar("Kết quả tra cứu")}
<div class="content">
  <div class="card">
    <div class="row-between">
      <div>
        <div class="tiny muted">Mã tham chiếu</div>
        <div class="strong" style="font-size:15px">PA-2026-000123</div>
      </div>
      {badge("Đang xử lý", "badge-dark", "clock")}
    </div>
    <div class="tiny muted" style="margin-top:5px">Cập nhật lúc 01/11/2026 14:30</div>
  </div>
  <div class="section" style="margin-top:12px">
    <div class="section-title">Thông tin phản ánh</div>
    <div class="card stack-sm">
      <div><div class="tiny muted">Loại vấn đề</div><div class="small strong">Đèn đường</div></div>
      <div><div class="tiny muted">Vị trí</div><div class="small">Đường Hoa Sen, phường An Phú, TP. Thủ Đức</div></div>
    </div>
  </div>
  <a class="btn btn-primary btn-block" href="../F3_View_Details_History/to-be.html#to-be-f3-01">Xem chi tiết</a>
  <a class="btn btn-ghost btn-block" style="margin-top:7px" href="#to-be-f2-01">Tra cứu mã khác</a>
</div>
"""
    return frame(
        "TO-BE", "TO-BE-F2-04", "Kết quả tra cứu",
        "Hiển thị phản ánh tìm thấy, trạng thái hiện tại, thời điểm cập nhật và đường dẫn xem chi tiết.",
        body,
        ["Mã tham chiếu", "Nhãn trạng thái có biểu tượng", "Thời điểm cập nhật", "Loại vấn đề và vị trí", "Nút “Xem chi tiết”", "Liên kết tra cứu mã khác"],
        ["Đọc trạng thái và thời điểm cập nhật.", "Chạm “Xem chi tiết” để mở F3.", "Chọn “Tra cứu mã khác” để quay lại nhập mã."],
        "F2_Check_Report_Status_User_Flow.mmd — màn hình kết quả; functional specification FR-UI-05/06.",
        "Cải tiến so với As-Is",
        ["Kết quả tra cứu thể hiện trạng thái bằng nhãn chữ kèm biểu tượng, không chỉ dựa vào màu.", "Có thời điểm cập nhật nếu dữ liệu tồn tại.", "Có đường dẫn rõ ràng sang chi tiết."],
        ["Nhãn “Đang xử lý” và thời điểm là dữ liệu minh họa; bộ trạng thái chính thức chưa được đặc tả.", "Không có kết quả và lỗi hệ thống được tách thành hai trạng thái riêng."],
    )


def tobe_results_list(empty: bool = False) -> str:
    if empty:
        main = empty_state(
            "Chưa có phản ánh nào",
            "Các phản ánh bạn đã gửi sẽ xuất hiện tại đây.",
            f'<a class="btn btn-primary btn-block" href="../F1_Submit_Report/to-be.html#to-be-f1-02">Gửi phản ánh</a>',
        )
    else:
        main = f"""
  <div class="list">
    <a class="list-item" href="../F3_View_Details_History/to-be.html#to-be-f3-01">
      <span class="body">
        <span class="row-between"><span class="list-title">PA-2026-000123</span>{badge("Đang xử lý", "badge-dark", "clock")}</span>
        <span class="list-meta">Đèn đường · Cập nhật 01/11/2026 14:30</span>
      </span>
      <span class="chevron">{icon("chevron", "icon icon-sm")}</span>
    </a>
    <a class="list-item" href="../F3_View_Details_History/to-be.html#to-be-f3-01">
      <span class="body">
        <span class="row-between"><span class="list-title">PA-2026-000118</span>{badge("Đã tiếp nhận", "", "check")}</span>
        <span class="list-meta">Rác thải / vệ sinh · Cập nhật 29/10/2026 09:10</span>
      </span>
      <span class="chevron">{icon("chevron", "icon icon-sm")}</span>
    </a>
    <a class="list-item" href="../F3_View_Details_History/to-be.html#to-be-f3-01">
      <span class="body">
        <span class="row-between"><span class="list-title">PA-2026-000095</span>{badge("Đã xử lý", "", "check")}</span>
        <span class="list-meta">Thoát nước / ngập úng · Cập nhật 20/10/2026 16:45</span>
      </span>
      <span class="chevron">{icon("chevron", "icon icon-sm")}</span>
    </a>
  </div>
"""
    body = f"""
{appbar("Phản ánh đã gửi")}
<div class="content">
  <div class="row-between" style="margin-bottom:10px">
    <span class="tiny muted">Danh sách phản ánh đã gửi</span>
    <a class="text-link" href="#to-be-f2-01">Tra cứu bằng mã</a>
  </div>
  {main}
</div>
"""
    return frame(
        "TO-BE",
        "TO-BE-F2-06" if empty else "TO-BE-F2-05",
        "Danh sách phản ánh — trạng thái trống" if empty else "Danh sách phản ánh đã gửi",
        "Danh sách phản ánh thay thế cho việc chỉ xem lịch sử ở As-Is; trạng thái trống hướng người dân gửi phản ánh mới.",
        body,
        ["Danh sách phản ánh", "Mã tham chiếu, loại vấn đề, trạng thái, thời điểm cập nhật", "Liên kết “Tra cứu bằng mã”", "Trạng thái trống (nếu chưa có)"],
        ["Chạm một phản ánh để mở chi tiết (F3).", "Chuyển sang tra cứu bằng mã.", "Khi danh sách trống, chạm “Gửi phản ánh” để bắt đầu F1."],
        "F2/F3 User Flow — “Danh sách kết quả tra cứu”; AS-IS lịch sử yêu cầu; functional specification FR-UI-05/06.",
        "Cải tiến so với As-Is",
        ["Danh sách hiển thị trạng thái và thời điểm cập nhật thay vì chỉ mã/ngày.", "Có trạng thái trống rõ ràng.", "Vẫn giữ lịch sử như As-Is, nhưng bổ sung tra cứu bằng mã."],
        ["Danh sách 3 phản ánh và các nhãn trạng thái là dữ liệu minh họa.", "Bộ lọc/sắp xếp không được thêm vì không có trong luồng."],
    )


def tobe_not_found() -> str:
    body = f"""
{appbar("Kết quả tra cứu")}
<div class="content" style="display:flex;flex-direction:column;justify-content:center">
  <div class="empty">
    <div class="empty-icon">{icon("search", "icon icon-lg")}</div>
    <div class="empty-title">Không tìm thấy phản ánh</div>
    <div class="empty-desc">Mã tham chiếu không khớp với phản ánh nào. Vui lòng kiểm tra lại mã.</div>
    <a class="btn btn-primary btn-block" href="#to-be-f2-01">Kiểm tra lại mã</a>
    <a class="btn btn-ghost btn-block" style="margin-top:7px" href="../F1_Submit_Report/to-be.html#to-be-f1-01">Về trang chủ</a>
  </div>
</div>
"""
    return frame(
        "TO-BE", "TO-BE-F2-07", "Không tìm thấy phản ánh",
        "Trạng thái không có kết quả, được phân biệt rõ với lỗi hệ thống.",
        body,
        ["Biểu tượng tìm kiếm", "Thông báo không tìm thấy", "Nút “Kiểm tra lại mã”", "Nút “Về trang chủ”"],
        ["Chọn “Kiểm tra lại mã” để quay lại màn hình tra cứu.", "Chọn “Về trang chủ” để kết thúc."],
        "F2_Check_Report_Status_User_Flow.mmd — nhánh “Không tìm thấy phản ánh”; functional specification FR-UI-05.",
        "Cải tiến so với As-Is",
        ["Tách “không tìm thấy” khỏi “lỗi hệ thống” để người dùng biết cần sửa mã hay thử lại.", "Có hành động tiếp theo rõ ràng."],
        ["Nội dung thông báo là đề xuất; repo không quy định câu chữ chính thức."],
    )


def tobe_system_error() -> str:
    body = f"""
{appbar("Tra cứu phản ánh")}
<div class="content" style="display:flex;flex-direction:column;justify-content:center">
  <div class="empty">
    <div class="empty-icon">{icon("alert", "icon icon-lg")}</div>
    <div class="empty-title">Chưa thể tra cứu</div>
    <div class="empty-desc">Đã xảy ra lỗi khi tra cứu. Vui lòng thử lại sau.</div>
    <a class="btn btn-primary btn-block" href="#to-be-f2-03">Thử lại</a>
    <a class="btn btn-ghost btn-block" style="margin-top:7px" href="../F1_Submit_Report/to-be.html#to-be-f1-01">Về trang chủ</a>
  </div>
</div>
"""
    return frame(
        "TO-BE", "TO-BE-F2-08", "Lỗi hệ thống khi tra cứu",
        "Trạng thái lỗi hệ thống với thông báo dễ hiểu và cách thử lại, không tiết lộ chi tiết kỹ thuật.",
        body,
        ["Biểu tượng cảnh báo", "Thông báo lỗi", "Nút “Thử lại”", "Nút “Về trang chủ”"],
        ["Chọn “Thử lại” để tra cứu lại.", "Chọn “Về trang chủ” để kết thúc."],
        "F2_Check_Report_Status_User_Flow.mmd — nhánh “Lỗi hệ thống”; functional specification FR-UI-07.",
        "Cải tiến so với As-Is",
        ["Thông báo lỗi không chỉ ghi “Có lỗi” mà nêu vấn đề và hướng xử lý.", "Không hiển thị thông tin kỹ thuật nhạy cảm."],
        ["Mã lỗi và thời gian chờ không được đặc tả; wireframe không đưa vào."],
    )


# ---------------------------------------------------------------------------
# TO-BE — F3
# ---------------------------------------------------------------------------

def tobe_detail(no_update: bool = False) -> str:
    if no_update:
        status_card = f"""
  <div class="card">
    <div class="row-between">
      <div>
        <div class="tiny muted">Mã tham chiếu</div>
        <div class="strong" style="font-size:15px">PA-2026-000123</div>
      </div>
      {badge("Đã tiếp nhận", "", "check")}
    </div>
    <div class="tiny muted" style="margin-top:5px">Chưa có thông tin cập nhật mới</div>
  </div>"""
        history = f'<div class="card card-soft small muted">Chưa có lịch sử cập nhật.</div>'
    else:
        status_card = f"""
  <div class="card">
    <div class="row-between">
      <div>
        <div class="tiny muted">Mã tham chiếu</div>
        <div class="strong" style="font-size:15px">PA-2026-000123</div>
      </div>
      {badge("Đang xử lý", "badge-dark", "clock")}
    </div>
    <div class="tiny muted" style="margin-top:5px">Cập nhật lúc 01/11/2026 14:30</div>
  </div>"""
        history = f"""
  <div class="timeline">
    <div class="timeline-item">
      <span class="timeline-dot"></span>
      <div class="timeline-date">28/10/2026 09:15</div>
      <div class="timeline-title">Đã gửi phản ánh</div>
      <div class="timeline-desc">Phản ánh được ghi nhận trên hệ thống.</div>
    </div>
    <div class="timeline-item">
      <span class="timeline-dot"></span>
      <div class="timeline-date">29/10/2026 10:05</div>
      <div class="timeline-title">Đã tiếp nhận</div>
      <div class="timeline-desc">Cơ quan tiếp nhận đã tiếp nhận phản ánh.</div>
    </div>
    <div class="timeline-item current">
      <span class="timeline-dot"></span>
      <div class="timeline-date">01/11/2026 14:30</div>
      <div class="timeline-title">Đang xử lý</div>
      <div class="timeline-desc">Đơn vị chức năng đang kiểm tra tại hiện trường.</div>
    </div>
  </div>"""
    body = f"""
{appbar("Chi tiết phản ánh")}
<div class="content">
  {status_card}
  <div class="section" style="margin-top:12px">
    <div class="section-title">Thông tin phản ánh</div>
    <div class="card stack-sm">
      <div><div class="tiny muted">Loại vấn đề</div><div class="small strong">Đèn đường</div></div>
      <div><div class="tiny muted">Vị trí</div><div class="small">Đường Hoa Sen, phường An Phú, TP. Thủ Đức</div></div>
      <div><div class="tiny muted">Mã hồ sơ</div><div class="small">HS-2026-001234</div></div>
      <div><div class="tiny muted">Nội dung</div><div class="small">Đèn đường trước số 12 không sáng từ tối 27/10/2026.</div></div>
    </div>
  </div>
  <div class="section">
    <div class="section-title">Tài liệu đính kèm</div>
    {file_row("anh_den_duong.jpg", "Ảnh hiện trường · 1,2 MB", "#to-be-f3-03")}
  </div>
  <div class="section">
    <div class="section-title">Lịch sử xử lý</div>
    {history}
  </div>
  <a class="btn btn-secondary btn-block" href="../F2_Check_Status/to-be.html#to-be-f2-05">Quay lại danh sách</a>
</div>
"""
    return frame(
        "TO-BE",
        "TO-BE-F3-02" if no_update else "TO-BE-F3-01",
        "Chi tiết phản ánh — chưa có cập nhật" if no_update else "Chi tiết phản ánh và lịch sử xử lý",
        "Màn hình chi tiết đề xuất có trạng thái, thời điểm cập nhật, lịch sử xử lý và tài liệu đính kèm; trạng thái chưa có cập nhật được ghi rõ.",
        body,
        ["Mã tham chiếu và nhãn trạng thái", "Thời điểm cập nhật", "Thông tin phản ánh", "Tài liệu đính kèm", "Dòng thời gian lịch sử xử lý", "Nút quay lại danh sách"],
        ["Đọc trạng thái và lịch sử theo thứ tự thời gian.", "Mở tài liệu đính kèm.", "Quay lại danh sách (F2)."],
        "F3_Report_Details_and_History_User_Flow.mmd; functional specification FR-UI-06.",
        "Cải tiến so với As-Is",
        ["Bổ sung trạng thái hiện tại, thời điểm cập nhật và lịch sử xử lý mà As-Is không có.", "Trạng thái dùng nhãn chữ kèm biểu tượng, không chỉ dựa vào màu.", "Khi chưa có cập nhật/lịch sử, giao diện ghi rõ thay vì để trống."],
        ["Lịch sử 3 mốc và nhãn trạng thái là dữ liệu minh họa; repo yêu cầu không tạo sự kiện giả trong hệ thống thật.", "Bộ trạng thái chính thức chưa được đặc tả."],
    )


def tobe_attachment() -> str:
    body = f"""
{appbar("Tài liệu đính kèm")}
<div class="content flush">
  <div style="height:430px;display:grid;place-items:center;border-bottom:1px solid var(--line);background:var(--surface-2)">
    <div style="text-align:center">
      <div class="empty-icon" style="width:64px;height:64px">{icon("image", "icon icon-lg")}</div>
      <div class="small strong">Ảnh hiện trường</div>
      <div class="tiny muted">Khung xem tài liệu · dữ liệu minh họa</div>
    </div>
  </div>
  <div style="padding:14px">
    <div class="file-name">anh_den_duong.jpg</div>
    <div class="file-meta">1,2 MB · Tài liệu do người dân đính kèm</div>
    <a class="btn btn-secondary btn-block" style="margin-top:12px" href="#to-be-f3-01">Đóng</a>
  </div>
</div>
"""
    return frame(
        "TO-BE", "TO-BE-F3-03", "Xem tài liệu đính kèm",
        "Khung xem ảnh/tài liệu đính kèm từ màn hình chi tiết.",
        body,
        ["Thanh ứng dụng", "Khung xem tài liệu", "Tên tệp và dung lượng minh họa", "Nút “Đóng”"],
        ["Xem tài liệu.", "Chọn “Đóng” để quay lại chi tiết."],
        "F3 User Flow — tài liệu đính kèm nếu có; AS-IS bước “Xem” tài liệu.",
        "Cải tiến so với As-Is",
        ["Giữ thao tác xem tài liệu như As-Is và bổ sung ngữ cảnh tệp.", "Không thêm tải xuống/chia sẻ vì nguồn không yêu cầu."],
        ["Định dạng tệp và cách hiển thị PDF/ảnh chưa được đặc tả."],
    )


def tobe_error_state(kind: str) -> str:
    if kind == "not-found":
        title = "Không tìm thấy phản ánh"
        desc = "Phản ánh có thể đã bị xóa hoặc đường dẫn không hợp lệ."
        icon_name = "search"
        primary = button("Quay lại danh sách", "primary", "../F2_Check_Status/to-be.html#to-be-f2-05")
        sid = "TO-BE-F3-04"
        frame_title = "Không tìm thấy phản ánh"
        delta = ["Thông báo không tìm thấy rõ ràng, không tiết lộ dữ liệu.", "Có đường quay lại danh sách."]
        assumptions = ["Sơ đồ F3 xác nhận nhánh “phản ánh không còn tồn tại”; câu chữ là đề xuất."]
    else:
        title = "Bạn không có quyền xem phản ánh này"
        desc = "Vui lòng quay lại danh sách hoặc liên hệ bộ phận hỗ trợ nếu cần."
        icon_name = "lock"
        primary = button("Quay lại danh sách", "primary", "../F2_Check_Status/to-be.html#to-be-f2-05")
        sid = "TO-BE-F3-05"
        frame_title = "Không có quyền xem"
        delta = ["Không hiển thị nội dung phản ánh khi không có quyền.", "Có đường quay lại an toàn."]
        assumptions = ["Sơ đồ F3 xác nhận nhánh “không có quyền”; cơ chế đăng nhập/phân quyền không được đặc tả."]
    body = f"""
{appbar("Chi tiết phản ánh")}
<div class="content" style="display:flex;flex-direction:column;justify-content:center">
  <div class="empty">
    <div class="empty-icon">{icon(icon_name, "icon icon-lg")}</div>
    <div class="empty-title">{title}</div>
    <div class="empty-desc">{desc}</div>
    {primary}
  </div>
</div>
"""
    return frame(
        "TO-BE", sid, frame_title,
        "Trạng thái lỗi khi phản ánh không còn tồn tại hoặc người dùng không có quyền xem.",
        body,
        ["Biểu tượng lỗi", "Thông báo không tiết lộ dữ liệu", "Nút quay lại danh sách"],
        ["Đọc thông báo.", "Chọn “Quay lại danh sách” để tiếp tục."],
        "F3_Report_Details_and_History_User_Flow.mmd — nhánh “không tồn tại” / “không có quyền”; functional specification FR-UI-06/07.",
        "Cải tiến so với As-Is",
        delta,
        assumptions,
    )


# ---------------------------------------------------------------------------
# Pages
# ---------------------------------------------------------------------------

AS_IS_F1_FRAMES = [
    asis_home(),
    asis_services(),
    asis_module(),
    asis_landing("../F3_View_Details_History/as-is.html#as-is-f3-01"),
    asis_form(False),
    asis_form(True),
    asis_success(),
]

TO_BE_F1_FRAMES = [
    tobe_home(),
    tobe_category(False),
    tobe_category(True),
    tobe_location(False),
    tobe_location(True),
    tobe_description(False),
    tobe_description(True),
    tobe_review("normal"),
    tobe_review("sending"),
    tobe_success(),
    tobe_review("error"),
]

AS_IS_F2_FRAMES = [
    asis_landing("../F3_View_Details_History/as-is.html#as-is-f3-01"),
    asis_history_empty(),
]

TO_BE_F2_FRAMES = [
    tobe_lookup(False),
    tobe_lookup(True),
    tobe_loading(),
    tobe_result(),
    tobe_results_list(False),
    tobe_results_list(True),
    tobe_not_found(),
    tobe_system_error(),
]

AS_IS_F3_FRAMES = [
    asis_detail(),
    asis_attachment(),
]

TO_BE_F3_FRAMES = [
    tobe_detail(False),
    tobe_detail(True),
    tobe_attachment(),
    tobe_error_state("not-found"),
    tobe_error_state("no-permission"),
]


def write_page(path: Path, html: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(html, encoding="utf-8")


def build() -> None:
    write_page(
        ROOT / "F1_Submit_Report" / "as-is.html",
        page(
            "F1 — Gửi phản ánh · As-Is",
            "AS-IS · F1 — Gửi phản ánh",
            "Luồng hiện tại trên VNeID: từ trang chính qua các danh mục “Dịch vụ khác”, “Tiếp nhận góp ý, phản ánh & vướng mắc” đến biểu mẫu phản ánh. "
            "Màn hình được dựng từ Activity Diagram As-Is, không bổ sung trường hoặc bước chưa được xác nhận.",
            ["Trang chính", "Dịch vụ khác", "Tiếp nhận góp ý", "Phản ánh kiến nghị", "Biểu mẫu", "Xác nhận"],
            "<strong>Phạm vi As-Is:</strong> chỉ thể hiện các bước được mô tả trong <em>AS_IS_VNeID_Activity_Diagram.puml</em>. "
            "Các trường “Mã hồ sơ”, loại phản ánh, nội dung, tài liệu đính kèm và cam đoan là các thành phần được nguồn xác nhận; "
            "giá trị danh mục và câu chữ lỗi chưa được đặc tả nên được ghi rõ trong phần giả định.",
            AS_IS_F1_FRAMES,
            "to-be.html",
            "Xem To-Be →",
            "F1_Submit_Report/as-is.html",
        ),
    )
    write_page(
        ROOT / "F1_Submit_Report" / "to-be.html",
        page(
            "F1 — Gửi phản ánh · To-Be",
            "TO-BE · F1 — Gửi phản ánh",
            "Luồng đề xuất 4 bước: chọn loại vấn đề → chọn vị trí → mô tả/đính kèm → xem lại và gửi. "
            "Thiết kế bám theo F1 User Flow, dàn ý Topic 7 và các heuristic đã chọn; có đầy đủ trạng thái lỗi, đang gửi và thành công.",
            ["Trang chính", "Chọn loại", "Chọn vị trí", "Mô tả", "Xem lại", "Thành công"],
            "<strong>Phạm vi To-Be:</strong> chỉ thiết kế lại giao diện cho F1 trong phạm vi Topic 7. "
            "Không thêm chức năng backend, không đặt ra bộ danh mục chính thức hay quy tắc nghiệp vụ mới. "
            "Các điểm chưa được nguồn xác nhận được đánh dấu trong phần “Giả định / cần xác nhận”.",
            TO_BE_F1_FRAMES,
            "as-is.html",
            "← Xem As-Is",
            "F1_Submit_Report/to-be.html",
        ),
    )
    write_page(
        ROOT / "F2_Check_Status" / "as-is.html",
        page(
            "F2 — Tra cứu trạng thái · As-Is",
            "AS-IS · F2 — Tra cứu trạng thái",
            "Trong giao diện hiện tại, người dân xem lại các yêu cầu đã gửi qua “Lịch sử yêu cầu” trên màn hình Phản ánh kiến nghị về dịch vụ công. "
            "Chưa có màn hình tra cứu bằng mã tham chiếu trong nguồn As-Is.",
            ["Trang chính", "Phản ánh kiến nghị", "Lịch sử yêu cầu", "Chi tiết"],
            "<strong>Phạm vi As-Is:</strong> màn hình lịch sử được dùng chung với F1. "
            "Sơ đồ As-Is không mô tả trạng thái xử lý, bộ lọc hay tra cứu bằng mã; wireframe không tự thêm các thành phần đó. "
            "Trạng thái trống được ghi rõ là suy luận giao diện.",
            AS_IS_F2_FRAMES,
            "to-be.html",
            "Xem To-Be →",
            "F2_Check_Status/as-is.html",
        ),
    )
    write_page(
        ROOT / "F2_Check_Status" / "to-be.html",
        page(
            "F2 — Tra cứu trạng thái · To-Be",
            "TO-BE · F2 — Tra cứu trạng thái",
            "Luồng đề xuất: nhập mã tham chiếu → tra cứu → xem kết quả hoặc danh sách. "
            "Có đầy đủ trạng thái đang tra cứu, lỗi nhập, không tìm thấy, lỗi hệ thống và danh sách trống.",
            ["Trang chính", "Tra cứu", "Đang tra cứu", "Kết quả", "Danh sách", "Chi tiết"],
            "<strong>Phạm vi To-Be:</strong> tra cứu bằng mã tham chiếu là giả định đã ghi trong <em>diagrams/topic7/README.md</em>. "
            "Danh sách phản ánh được giữ lại từ As-Is và bổ sung trạng thái/thời điểm cập nhật. "
            "Không thêm bộ lọc, thông báo tự động hay SLA.",
            TO_BE_F2_FRAMES,
            "as-is.html",
            "← Xem As-Is",
            "F2_Check_Status/to-be.html",
        ),
    )
    write_page(
        ROOT / "F3_View_Details_History" / "as-is.html",
        page(
            "F3 — Chi tiết và lịch sử · As-Is",
            "AS-IS · F3 — Xem chi tiết và lịch sử",
            "Màn hình chi tiết hiện tại khi người dân chọn một yêu cầu trong lịch sử. "
            "Nguồn As-Is xác nhận thông tin chi tiết và tài liệu đính kèm; chưa xác nhận trạng thái hay lịch sử xử lý.",
            ["Lịch sử yêu cầu", "Chi tiết yêu cầu", "Tài liệu đính kèm"],
            "<strong>Phạm vi As-Is:</strong> chỉ dựng các thành phần được nguồn xác nhận. "
            "Trạng thái xử lý và lịch sử không được thêm vào As-Is; khoảng trống này được nêu rõ để làm cơ sở cho To-Be.",
            AS_IS_F3_FRAMES,
            "to-be.html",
            "Xem To-Be →",
            "F3_View_Details_History/as-is.html",
        ),
    )
    write_page(
        ROOT / "F3_View_Details_History" / "to-be.html",
        page(
            "F3 — Chi tiết và lịch sử · To-Be",
            "TO-BE · F3 — Xem chi tiết và lịch sử",
            "Màn hình chi tiết đề xuất: trạng thái hiện tại, thời điểm cập nhật, thông tin phản ánh, tài liệu đính kèm và lịch sử xử lý. "
            "Có trạng thái chưa có cập nhật/lịch sử, không tìm thấy và không có quyền.",
            ["Kết quả tra cứu", "Danh sách", "Chi tiết", "Lịch sử", "Tài liệu"],
            "<strong>Phạm vi To-Be:</strong> bổ sung trạng thái và lịch sử theo F3 User Flow và FR-UI-06. "
            "Lịch sử chỉ hiển thị khi có dữ liệu; khi chưa có, giao diện ghi rõ. "
            "Không tạo sự kiện giả trong hệ thống thật; dữ liệu trong wireframe là mẫu minh họa.",
            TO_BE_F3_FRAMES,
            "as-is.html",
            "← Xem As-Is",
            "F3_View_Details_History/to-be.html",
        ),
    )


def build_index() -> None:
    functions = [
        (
            "F1 — Gửi phản ánh",
            "Người dân tìm chức năng, chọn loại vấn đề, chọn vị trí, mô tả và gửi phản ánh.",
            "Trong phạm vi Topic 7",
            "7",
            "11",
            "F1_Submit_Report/as-is.html",
            "F1_Submit_Report/to-be.html",
        ),
        (
            "F2 — Tra cứu trạng thái",
            "Người dân xem lại phản ánh đã gửi và tra cứu trạng thái hiện tại.",
            "Trong phạm vi Topic 7",
            "2",
            "8",
            "F2_Check_Status/as-is.html",
            "F2_Check_Status/to-be.html",
        ),
        (
            "F3 — Xem chi tiết và lịch sử",
            "Người dân xem chi tiết phản ánh, tài liệu đính kèm và lịch sử xử lý nếu có.",
            "Trong phạm vi Topic 7",
            "2",
            "5",
            "F3_View_Details_History/as-is.html",
            "F3_View_Details_History/to-be.html",
        ),
    ]
    total_frames = sum(int(item[3]) + int(item[4]) for item in functions)
    cards = []
    for title, desc, scope, asis_count, tobe_count, asis_href, tobe_href in functions:
        cards.append(
            f"""
<article class="function-card">
  <div class="meta"><span class="badge badge-soft">{scope}</span><span class="badge">{asis_count} As-Is</span><span class="badge">{tobe_count} To-Be</span></div>
  <h2>{title}</h2>
  <p>{desc}</p>
  <div class="links">
    <a class="btn btn-secondary btn-sm" href="{asis_href}">Mở As-Is</a>
    <a class="btn btn-primary btn-sm" href="{tobe_href}">Mở To-Be</a>
  </div>
</article>"""
        )
    html = f"""<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Wireframe VNeID — Topic 7</title>
  <link rel="stylesheet" href="assets/wireframe.css">
</head>
<body>
  <header class="index-hero">
    <p class="breadcrumb">SAD · Topic 7 · VNeID</p>
    <h1>Wireframe VNeID<br>Phản ánh kiến nghị về dịch vụ công</h1>
    <p>
      Bộ wireframe HTML/CSS tĩnh cho ba chức năng người dân trong phạm vi Topic 7.
      Mỗi chức năng có hai phiên bản: <strong>As-Is</strong> mô phỏng luồng hiện tại trên VNeID và
      <strong>To-Be</strong> mô phỏng giao diện cải tiến theo kế hoạch trong repository.
    </p>
    <div class="page-nav">
      <a class="active" href="index.html">{icon("grid", "icon icon-sm")} Tổng quan</a>
      <a href="function-screen-mapping.md">Function–screen mapping</a>
      <a href="design-system.md">Design system</a>
      <a href="as-is-vs-to-be.md">So sánh As-Is / To-Be</a>
      <a href="README.md">Hướng dẫn</a>
    </div>
  </header>

  <div class="scope-note">
    <div class="callout">
      {icon("info", "icon icon-sm")}
      <div>
        <strong>Phạm vi:</strong> F1, F2, F3 (người dân) nằm trong phạm vi Topic 7.
        F4 và F5 (cán bộ tiếp nhận/xử lý) được đánh dấu ngoài phạm vi trong
        <em>diagrams/topic7/README.md</em> và chưa có đặc tả đủ để thiết kế, nên không được tạo wireframe.
        Tổng cộng: <strong>{total_frames} khung màn hình/trạng thái</strong>.
      </div>
    </div>
  </div>

  <main>
    <div class="index-grid">
      {"".join(cards)}
    </div>

    <div class="section-heading" style="max-width:1440px;margin:0 auto;padding:8px 28px 12px">
      <h2>Tài liệu kèm theo</h2>
      <p>Nguồn, mapping và tiêu chí thiết kế</p>
    </div>
    <div class="doc-list">
      <a class="doc-card" href="README.md"><h3>README</h3><p>Phạm vi, cách mở, danh mục màn hình, giả định và hạn chế.</p></a>
      <a class="doc-card" href="design-system.md"><h3>Design system</h3><p>Khung thiết bị, typography, component, trạng thái và accessibility.</p></a>
      <a class="doc-card" href="function-screen-mapping.md"><h3>Function–screen mapping</h3><p>Bảng truy vết từ chức năng và bước User Flow sang từng màn hình.</p></a>
      <a class="doc-card" href="as-is-vs-to-be.md"><h3>So sánh As-Is / To-Be</h3><p>Đối chiếu điều hướng, thứ bậc thông tin, tương tác, lỗi và usability.</p></a>
    </div>
  </main>

  <footer class="page-footer">
    Dữ liệu trong wireframe là dữ liệu minh họa, không phải thông tin cá nhân thật.
    Nguồn chính: <em>diagrams/topic7</em>, <em>theoretical_basis</em>, <em>plan</em>.
  </footer>
</body>
</html>
"""
    write_page(ROOT / "index.html", html)


if __name__ == "__main__":
    build()
    build_index()
    print("Wireframe HTML generated.")
