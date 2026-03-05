import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const raf = useRef<number>(0);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select");
      setIsHovering(!!isClickable);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    // Lerp loop for outer ring
    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;
    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.15);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.15);
      if (ringRef.current) {
        const size = isHovering ? 50 : 36;
        const offset = size / 2;
        ringRef.current.style.transform = `translate(${ringPos.current.x - offset}px, ${ringPos.current.y - offset}px)`;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf.current);
    };
  }, [isHovering]);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#fff",
          willChange: "transform",
        }}
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: `2px solid rgba(255,255,255,${isHovering ? 0.9 : 0.5})`,
          backgroundColor: isHovering ? "rgba(255,255,255,0.08)" : "transparent",
          willChange: "transform, width, height",
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background-color 0.3s ease",
        }}
      />
    </>
  );
};

export default CustomCursor;
