
from pathlib import Path
import shutil
import sys

ROOT = Path(".")
FOLDER = ROOT / "b"
SOURCE = FOLDER / "source.svg"
MARKER = FOLDER / ".initial-copy-complete"

USERNAME = "bananas1234567"
REPOSITORY = "luc"
BRANCH = "main"

# Get requested number of copies
amount = int(sys.argv[1])

if amount < 1 or amount > 5000:
    raise ValueError("Choose between 1 and 5000 copies.")

FOLDER.mkdir(exist_ok=True)

# FIRST RUN: Copy all root files and folders into b
if not MARKER.exists():
    print("First run detected. Copying repository contents into b...")

    excluded = {
        ".git",
        ".github",
        "b",
        "duplicate.py",
        "links.txt"
    }

    def copy_missing(source, destination):
        if source.is_dir():
            destination.mkdir(exist_ok=True)
            for child in source.iterdir():
                copy_missing(child, destination / child.name)

        elif not destination.exists():
            shutil.copy2(source, destination)

    for item in ROOT.iterdir():
        if item.name not in excluded:
            copy_missing(item, FOLDER / item.name)

    MARKER.write_text("Initial repository copy completed.")

    print("Initial copy completed!")

# Check source SVG
if not SOURCE.exists():
    raise FileNotFoundError(
        "b/source.svg not found. Make sure source.svg exists."
    )

# Duplicate SVG
original = SOURCE.read_bytes()
links = []

for i in range(1, amount + 1):
    filename = f"copy-{i}.svg"
    destination = FOLDER / filename

    destination.write_bytes(original)

    url = (
        f"https://cdn.jsdelivr.net/gh/"
        f"{USERNAME}/{REPOSITORY}@{BRANCH}/b/{filename}"
    )

    links.append(url)

# Save CDN links
Path("links.txt").write_text(
    "\n".join(links) + "\n"
)

print(f"Created {amount} SVG copies!")
print("CDN links saved in links.txt")
