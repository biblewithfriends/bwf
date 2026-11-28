#!/usr/bin/env python3
"""Rebuild biblewfriends.org/burlingameypbrotherphilip from burlingameyp.

Brother Philip's site is the same YP site (same Apps Script backend, same data),
but every color is turned into a shade of green. Run this after any change to
burlingameyp/ so the two stay the same:  python3 _tools/brotherphilip.py
"""
import colorsys, os, re, shutil

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC, DST = os.path.join(ROOT, "burlingameyp"), os.path.join(ROOT, "burlingameypbrotherphilip")
SKIP = {"bank.js", "words.js"}          # game word lists: no colors in them

def green(r, g, b):
    h, l, s = colorsys.rgb_to_hls(r / 255, g / 255, b / 255)
    if s < 0.08 or l > 0.985 or l < 0.03:   # whites, greys, near-black stay neutral
        return r, g, b
    h = (82 + (h * 360) / 360 * 80) / 360    # every hue lands between yellow-green (82°) and sea green (162°)
    s = min(s, 0.62)
    r, g, b = colorsys.hls_to_rgb(h, l, s)
    return round(r * 255), round(g * 255), round(b * 255)

def hexsub(m):
    t = m.group(1)
    if len(t) in (3, 4): full, a = "".join(c * 2 for c in t[:3]), (t[3] * 2 if len(t) == 4 else "")
    else: full, a = t[:6], t[6:]
    r, g, b = green(int(full[0:2], 16), int(full[2:4], 16), int(full[4:6], 16))
    return "#%02x%02x%02x%s" % (r, g, b, a)

def rgbsub(m):
    r, g, b = (int(float(x)) for x in m.group(2, 3, 4))
    r, g, b = green(r, g, b)
    return "%s(%d, %d, %d%s)" % (m.group(1), r, g, b, m.group(5) or "")

HEX = re.compile(r"(?<![&\w])#([0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})\b")
RGB = re.compile(r"\b(rgba?)\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(,\s*[\d.]+\s*)?\)")

def convert(text, name):
    text = HEX.sub(hexsub, text)
    text = RGB.sub(rgbsub, text)
    text = text.replace("https://biblewfriends.org/burlingameyp/", "https://biblewfriends.org/burlingameypbrotherphilip/")
    if name.endswith(".html"):
        text = text.replace("🍂", "🌿").replace("🍁", "🍃")
    if name == "overcomers.html":      # the sunset sky becomes a green sky as you climb
        text = text.replace("hsl(calc(88 - var(--sky) * 62), calc(45% + var(--sky) * 45%), calc(90% - var(--sky) * 4%))",
                            "hsl(calc(100 + var(--sky) * 45), calc(40% + var(--sky) * 15%), calc(90% - var(--sky) * 10%))")
    if name == "site.webmanifest":
        text = text.replace('"name": "Church in Burlingame YP"', '"name": "Burlingame YP · Brother Philip"')
    return text

def greenpng(src, dst):
    """Recolor a PNG (the icons) so its colors are greens too."""
    try:
        from PIL import Image
    except ImportError:
        shutil.copy2(src, dst); return
    im = Image.open(src).convert("RGBA"); px = im.load(); cache = {}
    for y in range(im.height):
        for x in range(im.width):
            r, g, b, a = px[x, y]
            if a:
                k = (r, g, b)
                if k not in cache: cache[k] = green(r, g, b)
                px[x, y] = cache[k] + (a,)
    im.save(dst)

if os.path.isdir(DST): shutil.rmtree(DST)
for d, _, files in os.walk(SRC):
    out = os.path.join(DST, os.path.relpath(d, SRC)); os.makedirs(out, exist_ok=True)
    for f in files:
        src, dst = os.path.join(d, f), os.path.join(out, f)
        if f.endswith((".html", ".css", ".js", ".svg", ".webmanifest")) and f not in SKIP:
            open(dst, "w", encoding="utf-8").write(convert(open(src, encoding="utf-8").read(), f))
        elif f.endswith(".png"):
            greenpng(src, dst)
        else:
            shutil.copy2(src, dst)
print("built", DST)
