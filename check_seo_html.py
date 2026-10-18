
from pathlib import Path
import re

ROOT = Path.cwd()
DIST = ROOT / "dist"
HTML_FILE = DIST / "index.html"
APP_FILE = ROOT / "src" / "App.jsx"

if not HTML_FILE.exists():
    raise SystemExit("ERROR: Run npm run build first. dist/index.html is missing.")

html = HTML_FILE.read_text(encoding="utf-8")
app = APP_FILE.read_text(encoding="utf-8")

routes = sorted(set(re.findall(
    r"""<Route\b[^>]*\bpath\s*=\s*["']([^"']+)["']""",
    app,
)))

print("\n=== TRADINGBASICS PRODUCTION HTML AUDIT ===")
print(f"Build HTML found: {HTML_FILE.exists()}")
print(f"HTML file size: {HTML_FILE.stat().st_size} bytes")
print(f"JavaScript bundle referenced: {'<script' in html and '.js' in html}")
print(f"React root found: {'id=\"root\"' in html}")
print(f"Literal routes found in App.jsx: {len(routes)}")

title = re.search(r"<title[^>]*>(.*?)</title>", html, re.I | re.S)
description = re.search(
    r'<meta\s+name=["\']description["\'][^>]*content=["\']([^"\']*)',
    html,
    re.I,
)

print(f"Initial HTML title: {title.group(1).strip() if title else 'MISSING'}")
print(f"Initial HTML meta description: {description.group(1) if description else 'MISSING'}")

print("\n=== ROUTES DECLARED IN APP.JSX ===")
for route in routes:
    print(f"  {route}")

print("\n=== INITIAL HTML CONTENT CHECK ===")
visible_text = re.sub(r"<script\b.*?</script>", "", html, flags=re.I | re.S)
visible_text = re.sub(r"<style\b.*?</style>", "", visible_text, flags=re.I | re.S)
visible_text = re.sub(r"<[^>]+>", " ", visible_text)
visible_text = re.sub(r"\s+", " ", visible_text).strip()

print(f"Text in initial HTML: {len(visible_text)} characters")
print(f"Initial text preview: {visible_text[:300] or '[No meaningful text found]'}")

print("\nNote: This checks the build's initial HTML, not JavaScript-rendered pages.")
print("A single index.html is normal for a Vite SPA; it does not by itself mean SEO is broken.")
