from pathlib import Path
import xml.etree.ElementTree as ET

OUT = Path("/mnt/D/Projects/uni/movie-data-scraper/reports/sad_diagrams")
PAGES = [
    ("01_Use_Case", "page-01-use-case", "01_Use_Case.xml"),
    ("02_Activity", "page-02-activity", "02_Activity.xml"),
    ("03_Sequence", "page-03-sequence", "03_Sequence.xml"),
    ("04_Class", "page-04-class", "04_Class.xml"),
]

mxfile = ET.Element(
    "mxfile",
    {
        "host": "app.diagrams.net",
        "modified": "2026-11-24T00:00:00.000Z",
        "agent": "OpenCode Draw.io MCP packaging script",
        "version": "24.7.17",
        "type": "device",
    },
)

for name, page_id, filename in PAGES:
    path = OUT / "xml_pages" / filename
    tree = ET.parse(path)
    graph = tree.getroot()
    assert graph.tag == "mxGraphModel", f"{filename}: expected mxGraphModel"
    root_cell = graph.find("root")
    assert root_cell is not None, f"{filename}: missing root"
    assert root_cell.find("./mxCell[@id='0']") is not None, f"{filename}: missing cell 0"
    assert root_cell.find("./mxCell[@id='1']") is not None, f"{filename}: missing cell 1"
    diagram = ET.SubElement(mxfile, "diagram", {"id": page_id, "name": name})
    diagram.append(graph)

target = OUT / "SAD_System_Analysis_Diagrams.drawio"
target.write_bytes(
    ET.tostring(mxfile, encoding="utf-8", xml_declaration=True, short_empty_elements=True)
)

# Re-read and validate the packaged file.
check = ET.parse(target).getroot()
diagrams = check.findall("diagram")
expected_names = [p[0] for p in PAGES]
actual_names = [d.attrib["name"] for d in diagrams]
ids = [d.attrib["id"] for d in diagrams]
assert diagrams and len(diagrams) == 4, f"expected 4 pages, got {len(diagrams)}"
assert actual_names == expected_names, f"page names mismatch: {actual_names}"
assert len(ids) == len(set(ids)), "duplicate page IDs"
for d in diagrams:
    graph = d.find("mxGraphModel")
    assert graph is not None, f"{d.attrib['name']}: missing mxGraphModel"
    cells = graph.findall("./root/mxCell")
    assert len(cells) >= 3, f"{d.attrib['name']}: too few cells"
    print(f"{d.attrib['id']}\t{d.attrib['name']}\t{len(cells)} cells")
print(f"WROTE {target}")
