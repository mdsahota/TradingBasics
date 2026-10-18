
from pathlib import Path
from html.parser import HTMLParser

DIST = Path("dist")
SITE = "https://tradingbasics.ca"

class SEOParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.titles = []
        self.descriptions = []
        self.canonicals = []
        self.h1_count = 0
        self.current_tag = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)

        if tag == "title":
            self.titles.append("")
            self.current_tag = "title"

        elif tag == "meta" and attrs.get("name") == "description":
            self.descriptions.append(attrs.get("content", ""))

        elif tag == "link" and attrs.get("rel") == "canonical":
            self.canonicals.append(attrs.get("href", ""))

        elif tag == "h1":
            self.h1_count += 1

    def handle_endtag(self, tag):
        if tag == "title":
            self.current_tag = None

    def handle_data(self, data):
        if self.current_tag == "title" and self.titles:
            self.titles[-1] += data

files = sorted(DIST.rglob("index.html"))
errors = []

print(f"Checking {len(files)} generated HTML files...\n")

for file in files:
    parser = SEOParser()
    parser.feed(file.read_text(encoding="utf-8"))

    issues = []

    if len(parser.titles) != 1 or not parser.titles[0].strip():
        issues.append(f"title tags: {len(parser.titles)}")

    if len(parser.descriptions) != 1 or not parser.descriptions[0].strip():
        issues.append(f"description tags: {len(parser.descriptions)}")

    if len(parser.canonicals) != 1:
        issues.append(f"canonical tags: {len(parser.canonicals)}")
    elif not parser.canonicals[0].startswith(SITE + "/"):
        issues.append(f"unexpected canonical: {parser.canonicals[0]}")

    if parser.titles and parser.titles[0].count("TradingBasics") > 1:
        issues.append("brand repeated in title")

    if issues:
        errors.append((str(file), issues))
        print(f"FAIL {file}: {'; '.join(issues)}")
    else:
        print(f"PASS {file}")

print(f"\nTotal files: {len(files)}")
print(f"Failed files: {len(errors)}")

if errors:
    raise SystemExit(1)

print("All generated pages passed the basic SEO metadata checks.")
