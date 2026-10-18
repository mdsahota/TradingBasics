
from pathlib import Path
import re

root = Path("dist")
files = sorted(root.rglob("index.html"))

print(f"Prerendered HTML files: {len(files)}")
print()

for file in files:
    html = file.read_text(encoding="utf-8", errors="replace")

    title = re.search(r"<title\b[^>]*>(.*?)</title>", html, re.I | re.S)
    h1 = re.search(r"<h1\b[^>]*>(.*?)</h1>", html, re.I | re.S)
    description = re.search(
        r'<meta\s+name=["\']description["\']\s+content=["\']([^"\']*)',
        html,
        re.I
    )

    print(f"Page: {file.as_posix()}")
    print(f"  Title: {'OK' if title and title.group(1).strip() else 'MISSING'}")
    print(f"  H1: {'OK' if h1 and h1.group(1).strip() else 'MISSING'}")
    print(f"  Description: {'OK' if description else 'MISSING'}")
    print()
