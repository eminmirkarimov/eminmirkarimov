# Emin Mirkarimov Genius: Discovery, Prize-Winning & Polymath Bible

## 1. The Scientific Discovery & Invention Protocol (`K-Dense-AI` + `Academic-Research` + `TRIZ`)

Use this deterministic discovery matrix whenever the user asks to invent a new product, algorithm, scientific hypothesis, film concept, or business model:

| Discovery Stage | Core Mechanism | Verification Gate |
| :--- | :--- | :--- |
| **1. First-Principles Deconstruction** | Strip away industry conventions and ask: *What are the immutable physics, math, biological, or cognitive constraints?* | Must identify at least 1 false assumption held by 90% of competitors. |
| **2. TRIZ Contradiction Resolution** | Define the core trade-off (e.g., Speed vs. Quality, Luxury Prestige vs. Mass Conversion, High Hypertrophy vs. Low Joint Stress) and apply TRIZ principles (Segmentation, Asymmetry, Prior Counteraction, Inversion, Dynamicity). | Must resolve the trade-off without compromising either parameter (`Win-Win` architecture). |
| **3. Cross-Domain Bisociation (Koestler Principle)** | Fuse mechanisms from 2 unrelated fields (e.g., applying Cinema Color Science to UI Token Systems; applying Evolutionary Game Theory to Viral Video Hooks). | The hybrid mechanism must be non-obvious to specialists in a single field. |
| **4. Adversarial Jury Simulation** | Critique the draft from the perspective of a skeptical Nobel/Turing reviewer, Oscar DP, or Apple Design Judge. | Fix all structural flaws, edge cases, and aesthetic weaknesses before final output. |

---

## 2. Global Award & Prize Calibration Rubrics

| Target Prize / Standard | Mandatory Excellence Criteria | Disqualifying Flaws ("Slop" to Eliminate) |
| :--- | :--- | :--- |
| **Nobel / Turing / Nature / NeurIPS (Science & Algorithms)** | Formal mathematical definition, falsifiable hypothesis, reproducible benchmark script, optimal asymptotic complexity, and clear causal mechanism. | Hand-wavy claims, unverified heuristics, missing baseline comparisons, or unfalsifiable statements. |
| **Apple Design Award / Awwwards SOTY / Red Dot (Design & Product)** | Intentional layout archetype (`Dark Room`, `Quiet Instrument`, `Pinned Poster`), fluid `clamp()` typography, `60-120fps` spring physics, tactile micro-interactions, and WCAG AAA clarity. | Generic purple/blue SaaS gradients, unaligned bento cards, stock illustrations, or sluggish layout shifts. |
| **Academy Award (Oscar) / Cannes Lions Titanium (Cinema & Commercial)** | Motivated camera blocking, Chiaroscuro/Book Light with Negative Fill, 8-node scene-referred Kodak 2383 grade, invisible Motion-Peak cuts, and `-14/-23 LUFS` 3-layer sound design. | Flat high-key room lighting, clipped highlights, unmotivated stock transitions, or unmixed audio. |

---

## 3. Embedded `.cube` 3D LUT & After Effects Automation Templates

### A. Python 33x33x33 Hollywood Kodak 2383 `.cube` Generator
```python
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
```

### B. Universal After Effects Inertial Spring Expression (60/120fps Physics)
```javascript
// Paste into Position, Scale, or Rotation Expression field in After Effects
var amp = 0.055;
var freq = 2.2;
var decay = 5.0;
var n = 0;
if (numKeys > 0) {
  n = nearestKey(time).index;
  if (key(n).time > time) { n--; }
}
if (n == 0) {
  value;
} else {
  var t = time - key(n).time;
  var v = velocityAtTime(key(n).time - thisComp.frameDuration / 10);
  value + v * amp * Math.sin(freq * t * 2 * Math.PI) / Math.exp(decay * t);
}
```

---

## 4. Longevity Biomarkers, Nutrition & Beauty-Health Quick Reference

- **Optimal Longevity Blood Targets:** `ApoB < 60-65 mg/dL`, `Lp(a) < 30 nmol/L`, `Fasting Insulin 2.0-4.5 uIU/mL`, `HbA1c 4.6%-5.1%`, `hs-CRP < 0.5 mg/L`, `Homocysteine 6.0-8.0 umol/L`, `25-OH Vitamin D 45-65 ng/mL`, `Ferritin 50-120 ng/mL`.
- **100% Nutrition Stoichiometry:** `1.8-2.2 g/kg` protein (`3g+` leucine threshold per meal), `0.8-1.0 g/kg` healthy lipids (EVOO, avocado, marine Omega-3), glucose-flattening sequence (`Vegetables/Fiber + Vinegar -> Protein/Fats -> Complex Carbs -> 10-min walk`), `30+` plant species/week, and `8-10h` circadian eating window ending `3h` before sleep.
- **4-Night Dermal Skin Cycling:** Night 1: `2% BHA` or `7% AHA` -> Night 2: `Retinaldehyde 0.05-0.1%` or `Tretinoin 0.025-0.05%` -> Nights 3 & 4: `3:1:1 Ceramides + 5% Panthenol + Peptides` + every morning `15% Vitamin C + SPF 50+ PA++++`.
