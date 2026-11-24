import { useEffect, useRef, useState } from "react";

/**
 * Custom electric-blue mouse pointer.
 * - Styled as a sleek, modern cursor arrow/pointer in electric blue with neon glow
 * - Replaces native cursor
 * - Responds to clicks and hovers on interactive elements
 */
export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const coordsRef = useRef({ mouseX: -100, mouseY: -100, currX: -100, currY: -100 });
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf: number;

    const onMove = (e: MouseEvent) => {
      coordsRef.current.mouseX = e.clientX;
      coordsRef.current.mouseY = e.clientY;

      if (coordsRef.current.currX === -100) {
        coordsRef.current.currX = e.clientX;
        coordsRef.current.currY = e.clientY;
      }

      setVisible(true);

      const el = e.target as HTMLElement | null;
      setHovered(
        Boolean(
          el?.closest(
            "a, button, input, textarea, select, label, [role='button'], [tabindex], .btn-lime, .btn-ink"
          )
        )
      );
    };

    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const render = () => {
      const { mouseX, mouseY } = coordsRef.current;
      coordsRef.current.currX += (mouseX - coordsRef.current.currX) * 0.45;
      coordsRef.current.currY += (mouseY - coordsRef.current.currY) * 0.45;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${coordsRef.current.currX}px, ${coordsRef.current.currY}px, 0)`;
      }
      raf = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
    };
  }, []); // Run once on mount

  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed left-0 top-0 z-[999999] will-change-transform transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transform: "translate3d(-100px, -100px, 0)" }}
      aria-hidden="true"
    >
      <div
        className={`relative transition-transform duration-150 ease-out ${
          clicked ? "scale-90" : hovered ? "scale-115" : "scale-100"
        }`}
      >
        {/* Sleek Neo-Brutalist Electric Blue Arrow Pointer */}
        <svg
          width="26"
          height="28"
          viewBox="0 0 24 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_2px_10px_rgba(0,40,255,0.65)]"
        >
          {/* Outer Black Border for contrast */}
          <path
            d="M2.5 1.5L20.5 12.5L12 14.5L8 23.5L2.5 1.5Z"
            fill="#000000"
            stroke="#000000"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Inner Electric Blue Pointer */}
          <path
            d="M3 3L18.5 12.5L11.5 14L8 22L3 3Z"
            fill={hovered ? "var(--lime)" : "var(--electric)"}
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeLinejoin="round"
          />
        </svg>

        {/* Small subtle radar pulse on hover */}
        {hovered && (
          <span className="absolute -left-1 -top-1 size-7 animate-ping rounded-full border border-lime opacity-40" />
        )}
      </div>
    </div>
  );
}
