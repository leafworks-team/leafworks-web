import sys, uharfbuzz as hb
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
FONTS = "/Users/imtae/Library/Fonts"
def wordmark(style, text="Leafworks", tracking=0):
    path = f"{FONTS}/PretendardJP-{style}.otf"
    blob = hb.Blob.from_file_path(path); face = hb.Face(blob); font = hb.Font(face)
    buf = hb.Buffer(); buf.add_str(text); buf.guess_segment_properties()
    hb.shape(font, buf, {"kern": True, "liga": False})
    tt = TTFont(path); gs = tt.getGlyphSet(); order = tt.getGlyphOrder()
    upm = tt["head"].unitsPerEm
    asc = tt["OS/2"].sCapHeight or 700
    x = 0; d = []
    for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
        pen = SVGPathPen(gs)
        g = gs[order[info.codepoint]]
        g.draw(TransformPen(pen, (1, 0, 0, -1, x + pos.x_offset, 0)))
        d.append(pen.getCommands())
        x += pos.x_advance + tracking * upm / 1000
    # bounds via boundsPen
    from fontTools.pens.boundsPen import BoundsPen
    bp = BoundsPen(gs); xx = 0
    for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
        gs[order[info.codepoint]].draw(TransformPen(bp, (1, 0, 0, -1, xx + pos.x_offset, 0)))
        xx += pos.x_advance + tracking * upm / 1000
    x0, y0, x1, y1 = bp.bounds
    w, h = x1 - x0, y1 - y0
    svg = f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x0:.1f} {y0:.1f} {w:.1f} {h:.1f}" width="{w:.0f}" height="{h:.0f}"><path fill="#000000" d="{" ".join(d)}"/></svg>\n'
    return svg, (w, h)
for style, tr in [("Medium", -10), ("SemiBold", -15), ("Bold", -20)]:
    svg, size = wordmark(style, tracking=tr)
    open(f"leafworks-wordmark-{style}.svg", "w").write(svg)
    print(style, "tracking", tr, "size", [round(v) for v in size], "bytes", len(svg))
