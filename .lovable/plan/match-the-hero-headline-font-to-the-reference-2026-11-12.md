# Match the hero headline font to the reference

## What changes

- The big title "I DESIGN. I CODE. I ELEVATE BRANDS." switches from Archivo Black to **Archivo, weight 900, slightly expanded width (~112%)**. This matches the reference's wide, very heavy letters with squarish rounded corners (look at the C, O, G and S).
- Lines sit tighter together, almost touching, like in the reference (line height about 0.82).
- Letter spacing stays slightly tight. The size gets a bit bigger so "I ELEVATE" spans the left column, as in the screenshot.
- Nothing else on the page changes.

## Technical details

- In the root head, swap the `Archivo+Black` Google Fonts family for `Archivo:wdth,wght@112,900`.
- Update the `headline-hero` utility in `src/styles.css`: `font-family: "Archivo"`, `font-weight: 900`, `font-stretch: 112%`, `line-height: 0.82`, `letter-spacing: -0.03em`.
- In `Hero.tsx`, raise the desktop size from `lg:text-[6.5rem]` to about `lg:text-[7.5rem]`.
- Check the result with a screenshot next to the reference.
