#!/usr/bin/env python3
"""Emin Mirkarimov Genius - 33x33x33 Hollywood Kodak 2383 3D LUT Generator (.cube)"""
import math

def generate_emin_genius_lut(filename="emin_genius_2383.cube", size=33):
    with open(filename, "w", encoding="utf-8") as f:
        f.write('TITLE "Emin_Mirkarimov_Genius_2383"\n')
        f.write(f"LUT_3D_SIZE {size}\nDOMAIN_MIN 0.0 0.0 0.0\nDOMAIN_MAX 1.0 1.0 1.0\n\n")
        for b_i in range(size):
            for g_i in range(size):
                for r_i in range(size):
                    r, g, b = r_i / (size - 1), g_i / (size - 1), b_i / (size - 1)
                    scurve = lambda x: 1.0 / (1.0 + math.exp(-7.5 * (x - 0.48)))
                    s0, s1 = scurve(0.0), scurve(1.0)
                    rc, gc, bc = (scurve(r)-s0)/(s1-s0), (scurve(g)-s0)/(s1-s0), (scurve(b)-s0)/(s1-s0)
                    luma = 0.2126 * rc + 0.7152 * gc + 0.0722 * bc
                    sw, hw = (1.0 - luma) ** 2, luma ** 2
                    ro = min(max(rc - 0.025 * sw + 0.030 * hw, 0.0), 1.0)
                    go = min(max(gc - 0.005 * sw + 0.012 * hw, 0.0), 1.0)
                    bo = min(max(bc + 0.035 * sw - 0.030 * hw, 0.0), 1.0)
                    f.write(f"{ro:.6f} {go:.6f} {bo:.6f}\n")

if __name__ == "__main__":
    generate_emin_genius_lut()
    print("Generated emin_genius_2383.cube successfully.")
