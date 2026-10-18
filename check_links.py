
from pathlib import Path
import re

ROOT = Path.cwd()
SRC = ROOT / "src"
APP_FILE = SRC / "App.jsx"

if not APP_FILE.exists():
    print(f"ERROR: App.jsx not found at {APP_FILE}")
    raise SystemExit(1)

app = APP_FILE.read_text(encoding="utf-8")

# Extract literal React Router path declarations.
routes = set(
    re.findall(
        r'<Route\b[^>]*\bpath\s*=\s*["\']([^"\']+)["\']',
        app,
        flags=re.DOTALL,
    )
)

def normalize(path):
    path = path.split("?")[0].split("#")[0]
    if not path.startswith("/"):
        return None
    return "/" if path == "/" else path.rstrip("/") + "/"

normalized_routes = {
    normalize(route)
    for route in routes
    if normalize(route) is not None
}


def route_exists(target):
    target = normalize(target)
    if target is None:
        return True

    for route in normalized_routes:
        if route == target:
            return True

        # Treat /section/* as matching /section/ and nested routes.
        if route.endswith("*"):
            prefix = route[:-1]
            if target.startswith(prefix):
                return True

    return False


# Check literal href/to values in source files.
pattern = re.compile(
    r'\b(?:href|to)\s*=\s*\{?\s*["\']([^"\']+)["\']\s*\}?'
)

checked = 0
problems = []

for file in SRC.rglob("*"):
    if file.suffix not in {".jsx", ".js", ".tsx", ".ts"}:
        continue

    content = file.read_text(encoding="utf-8")

    for match in pattern.finditer(content):
        target = match.group(1).strip()

        if not target.startswith("/") or target.startswith("//"):
            continue

        checked += 1

        if not route_exists(target):
            line = content.count("\n", 0, match.start()) + 1
            problems.append((file.relative_to(ROOT), line, target))

print(f"\nDeclared routes found: {len(normalized_routes)}")
print(f"Internal links checked: {checked}")

if problems:
    print(f"\nPotential route problems: {len(problems)}")
    for file, line, target in problems:
        print(f"  {file}:{line} -> {target}")
else:
    print("\nNo potential route mismatches found.")

print("\nNote: This checks literal routes, not whether pages render correctly.")
