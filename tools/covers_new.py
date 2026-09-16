#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
新增三张作品封面（1280x800）——复用 tools/covers.py 的品牌框架与图元。
输出 -> public/shots/{yuanjing,time-machine,receipt}.png
运行：python3 tools/covers_new.py   （须在仓库根目录）
"""
import math, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from covers import (S, W, H, WS, HS, F, hx, shade, layer, vgrad, radial_bg,
                    scrim, vignette, glow, meta, finish)
from PIL import ImageDraw, ImageFilter

def sx(v): return int(round(v * S))

# ============================================================ 商大元境
def build_yuanjing():
    acc = hx("46C8FF")
    img = vgrad([(0, (10, 30, 58)), (0.42, (12, 38, 68)), (0.58, (9, 26, 48)), (1, (5, 12, 24))])
    d = ImageDraw.Draw(img)

    # 等距地面网格
    hz = 470
    for i in range(-26, 27):
        x = 640 + i * 96
        d.line([(sx(640 + i * 30), sx(hz)), (sx(x), sx(H))], fill=(70, 130, 190, 70), width=max(1, S))
    y = hz
    step = 6
    while y < H:
        d.line([(0, sx(y)), (sx(W), sx(y))], fill=(70, 130, 190, 60), width=max(1, S))
        step *= 1.32; y += step

    # 校园楼群（等距块）
    def tower(cx, base, w, h, c):
        top = base - h
        d.polygon([(sx(cx - w), sx(base)), (sx(cx - w), sx(top)),
                   (sx(cx), sx(top - w * 0.46)), (sx(cx), sx(base - w * 0.46))], fill=shade(c, .72))
        d.polygon([(sx(cx), sx(base - w * 0.46)), (sx(cx), sx(top - w * 0.46)),
                   (sx(cx + w), sx(top)), (sx(cx + w), sx(base))], fill=shade(c, .52))
        d.polygon([(sx(cx - w), sx(top)), (sx(cx), sx(top - w * 0.46)),
                   (sx(cx + w), sx(top)), (sx(cx), sx(top + w * 0.46))], fill=shade(c, .95))
        rows = max(2, int(h / 34))
        for r in range(rows):
            yy = top + 16 + r * 30
            if yy > base - 14: break
            for k in range(3):
                ox = cx - w + 12 + k * (w * 0.6)
                d.rectangle([sx(ox), sx(yy), sx(ox + 9), sx(yy + 13)], fill=(150, 225, 255, 190))

    for cx, base, w, h, c in [(300, 606, 62, 150, (44, 86, 140)), (430, 640, 74, 210, (52, 100, 158)),
                              (580, 604, 58, 132, (40, 78, 128)), (760, 648, 86, 250, (56, 108, 168)),
                              (930, 612, 64, 168, (46, 90, 146)), (1070, 586, 50, 112, (38, 74, 122))]:
        tower(cx, base, w, h, c)

    # 数据光柱 + 扫描环
    for cx, base, hh in [(430, 430, 120), (760, 398, 150), (930, 444, 100)]:
        glow(img, lambda dd, cx=cx, base=base, hh=hh: dd.polygon(
            [(sx(cx - 16), sx(base)), (sx(cx + 16), sx(base)), (sx(cx + 6), sx(base - hh)), (sx(cx - 6), sx(base - hh))],
            fill=(70, 200, 255, 120)), blur=16)
    glow(img, lambda dd: dd.ellipse([sx(760 - 230), sx(648 - 54), sx(760 + 230), sx(648 + 54)],
                                    outline=(90, 210, 255, 170), width=sx(3)), blur=10)

    amb = layer()
    ImageDraw.Draw(amb).ellipse([sx(700 - 420), sx(400 - 300), sx(700 + 420), sx(400 + 300)], fill=(60, 170, 255, 40))
    img.alpha_composite(amb.filter(ImageFilter.GaussianBlur(100 * S)))

    scrim(img, color=(5, 14, 26), start=0.5, strength=0.9)
    vignette(img, strength=0.5, inner=0.62)
    meta(img, "YUANJING · 商大元境", acc, "下沙校区 · 数字孪生",
         [("浙江工商大学 · 三维视觉模拟 ", (216, 228, 240)), ("实时映射", (110, 220, 255))])
    finish(img, "yuanjing")

# ============================================================ 人生时光机
def build_time_machine():
    acc = hx("FFB8E0")
    img = radial_bg((62, 34, 86), (14, 8, 26), cx=0.52, cy=0.46, rx=0.95, ry=1.0, power=0.9)
    d = ImageDraw.Draw(img)
    cx, cy = 660, 372

    # 时间漩涡：同心椭圆逐层收束
    for i in range(16):
        t = i / 15
        rx = 470 * (1 - t * 0.88)
        ry = 150 * (1 - t * 0.88)
        a = int(40 + t * 150)
        col = (int(255 - t * 40), int(150 + t * 80), int(210 + t * 40), a)
        d.ellipse([sx(cx - rx), sx(cy - ry), sx(cx + rx), sx(cy + ry)], outline=col, width=max(1, sx(2)))

    # 刻度：十二个时间节点
    for k in range(12):
        ang = k * math.pi / 6
        px = cx + math.cos(ang) * 300
        py = cy + math.sin(ang) * 96
        r = 7 if k % 3 else 12
        glow(img, lambda dd, px=px, py=py, r=r: dd.ellipse(
            [sx(px - r), sx(py - r), sx(px + r), sx(py + r)], fill=(255, 220, 245, 200)), blur=9)
        d.ellipse([sx(px - r * .5), sx(py - r * .5), sx(px + r * .5), sx(py + r * .5)], fill=(255, 248, 252))

    # 中心奇点
    glow(img, lambda dd: dd.ellipse([sx(cx - 54), sx(cy - 54), sx(cx + 54), sx(cy + 54)],
                                    fill=(255, 205, 240, 210)), blur=34, passes=2)
    d.ellipse([sx(cx - 20), sx(cy - 20), sx(cx + 20), sx(cy + 20)], fill=(255, 252, 255))

    # 漂浮的记忆碎片
    for px, py, w2, rot in [(300, 210, 34, -12), (980, 250, 28, 14), (392, 520, 24, 9),
                            (930, 508, 32, -8), (560, 168, 20, 6), (820, 588, 22, 11)]:
        frag = layer()
        fd = ImageDraw.Draw(frag)
        fd.rounded_rectangle([sx(px - w2), sx(py - w2 * .72), sx(px + w2), sx(py + w2 * .72)],
                             radius=sx(5), fill=(255, 235, 250, 60), outline=(255, 210, 240, 150), width=max(1, sx(2)))
        img.alpha_composite(frag.rotate(rot, resample=Image.BICUBIC if False else 0, center=(sx(px), sx(py))))

    scrim(img, color=(14, 7, 24), start=0.52, strength=0.88)
    vignette(img, strength=0.52, inner=0.6)
    meta(img, "TIME MACHINE · 人生时光机", acc, "走进自己的时间轴",
         [("可交互的人生回溯 ", (232, 220, 238)), ("每一段都能重访", (255, 184, 224))])
    finish(img, "time-machine")

# ============================================================ CJY 小票机
def build_receipt():
    acc = hx("FF9F1C")
    img = vgrad([(0, (48, 32, 20)), (0.40, (62, 42, 26)), (0.60, (44, 29, 18)), (1, (24, 16, 10))])
    d = ImageDraw.Draw(img)

    # 打印机机身
    bx, by, bw, bh = 640, 300, 250, 108
    d.rounded_rectangle([sx(bx - bw), sx(by - bh), sx(bx + bw), sx(by + bh)], radius=sx(20), fill=(58, 60, 68))
    d.rounded_rectangle([sx(bx - bw), sx(by - bh), sx(bx + bw), sx(by + bh * .3)], radius=sx(20), fill=(74, 77, 86))
    d.rounded_rectangle([sx(bx - 168), sx(by + bh - 16), sx(bx + 168), sx(by + bh + 6)], radius=sx(6), fill=(26, 27, 32))
    for i in range(3):
        c = [(90, 220, 140), (255, 190, 70), (240, 90, 70)][i]
        px = bx - bw + 46 + i * 34
        glow(img, lambda dd, px=px, c=c: dd.ellipse([sx(px - 8), sx(by - 46 - 8), sx(px + 8), sx(by - 46 + 8)],
                                                    fill=c + (170,)), blur=8)
        d.ellipse([sx(px - 5), sx(by - 46 - 5), sx(px + 5), sx(by - 46 + 5)], fill=c)

    # 吐出的小票
    rx0, rw = 640, 150
    top = by + bh + 4
    seg = layer(); sd = ImageDraw.Draw(seg)
    sd.polygon([(sx(rx0 - rw), sx(top)), (sx(rx0 + rw), sx(top)),
                (sx(rx0 + rw + 16), sx(top + 300)), (sx(rx0 - rw - 16), sx(top + 300))], fill=(250, 247, 240))
    # 锯齿下沿
    teeth, span = 18, (rw + 16) * 2
    pts = []
    for i in range(teeth + 1):
        xx = rx0 - rw - 16 + span * i / teeth
        pts.append((sx(xx), sx(top + 300 + (12 if i % 2 else 0))))
    pts += [(sx(rx0 + rw + 16), sx(top + 286)), (sx(rx0 - rw - 16), sx(top + 286))]
    sd.polygon(pts, fill=(250, 247, 240))
    img.alpha_composite(seg)

    # 小票上的内容
    tf, mf = F(19, mono=True), F(15, mono=True)
    d = ImageDraw.Draw(img)
    d.text((sx(rx0 - 62), sx(top + 26)), "CJY  RECEIPT", font=tf, fill=(40, 34, 28))
    d.line([(sx(rx0 - rw + 24), sx(top + 58)), (sx(rx0 + rw - 24), sx(top + 58))], fill=(150, 142, 130), width=max(1, sx(2)))
    for i, (k, v) in enumerate([("ITEM", "一句话"), ("QTY", "x1"), ("MOOD", "GOOD"), ("TOTAL", "FREE")]):
        yy = top + 78 + i * 34
        d.text((sx(rx0 - rw + 28), sx(yy)), k, font=mf, fill=(96, 88, 78))
        d.text((sx(rx0 + rw - 28 - d.textlength(v, font=mf)), sx(yy)), v, font=mf, fill=(40, 34, 28))
    d.line([(sx(rx0 - rw + 24), sx(top + 222)), (sx(rx0 + rw - 24), sx(top + 222))], fill=(150, 142, 130), width=max(1, sx(2)))
    for i in range(30):   # 条形码
        bw2 = 3 if i % 3 else 6
        d.rectangle([sx(rx0 - 108 + i * 7.4), sx(top + 240), sx(rx0 - 108 + i * 7.4 + bw2 * .6), sx(top + 272)],
                    fill=(38, 32, 26))

    amb = layer()
    ImageDraw.Draw(amb).ellipse([sx(640 - 400), sx(320 - 260), sx(640 + 400), sx(320 + 260)], fill=(255, 176, 80, 42))
    img.alpha_composite(amb.filter(ImageFilter.GaussianBlur(100 * S)))
    scrim(img, color=(22, 14, 8), start=0.56, strength=0.86)
    vignette(img, strength=0.5, inner=0.62)
    meta(img, "RECEIPT · CJY 小票机", acc, "把话打成一张小票",
         [("在线生成 · 实体质感 ", (228, 216, 202)), ("打印即带走", (255, 190, 110))])
    finish(img, "receipt")

if __name__ == "__main__":
    from PIL import Image
    build_yuanjing()
    build_time_machine()
    build_receipt()
