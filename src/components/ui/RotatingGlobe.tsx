import { useEffect, useRef } from "react";

interface RotatingGlobeProps {
  className?: string;
}

/**
 * True 3D Wireframe Rotating Globe.
 * Mathematically projects spherical orthographic meridians revolving around the Y-axis
 * continuously from left to right at 60fps via requestAnimationFrame.
 */
export function RotatingGlobe({ className = "size-6" }: RotatingGlobeProps) {
  const meridiansRef = useRef<SVGGElement>(null);

  useEffect(() => {
    let frameId: number;
    let angle = 0;
    // Elegant rotation speed (~6.5 seconds for full 360 degree revolution)
    const speed = 0.016;
    // Number of meridians evenly spaced around the 360 degree sphere
    const totalMeridians = 5;

    const render = () => {
      angle = (angle + speed) % (Math.PI * 2);

      if (meridiansRef.current) {
        const paths: string[] = [];

        for (let i = 0; i < totalMeridians; i++) {
          // Angle around sphere for this meridian
          const a = (angle + (i * Math.PI * 2) / totalMeridians) % (Math.PI * 2);
          const cosA = Math.cos(a);

          // Only render meridians traversing the front hemisphere (cosA >= 0)
          // As angle increases, lines travel continuously from left (sinA = -1) to right (sinA = 1)
          if (cosA >= -0.05) {
            const sinA = Math.sin(a);
            // Horizontal elliptical radius along the X axis
            const rx = Math.max(0.12, Math.abs(10 * sinA)).toFixed(2);
            // sweep-flag: 1 for right of center (X > 12), 0 for left of center (X < 12)
            const sweep = sinA >= 0 ? 1 : 0;
            // Smooth edge fade as line revolves around the limb of the sphere
            const opacity = Math.min(0.95, Math.max(0.25, 0.2 + Math.max(0, cosA) * 0.75)).toFixed(2);

            paths.push(
              `<path d="M12 2 A ${rx} 10 0 0 ${sweep} 12 22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="${opacity}" />`
            );
          }
        }

        meridiansRef.current.innerHTML = paths.join("");
      }

      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      {/* Outer Sphere Boundary */}
      <circle cx="12" cy="12" r="10" strokeWidth="1.5" />

      {/* Equator */}
      <line x1="2" y1="12" x2="22" y2="12" strokeWidth="1.5" opacity="0.9" />

      {/* Dynamic 3D Rotating Meridians (revolving left to right) */}
      <g ref={meridiansRef} />
    </svg>
  );
}
