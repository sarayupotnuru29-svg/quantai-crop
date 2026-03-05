// import { useEffect, useRef, useState } from "react";

// const CustomCursor = () => {
//   const dotRef = useRef<HTMLDivElement>(null);
//   const ringRef = useRef<HTMLDivElement>(null);
//   const pos = useRef({ x: 0, y: 0 });
//   const ringPos = useRef({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const raf = useRef<number>(0);

//   useEffect(() => {
//     const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
//     if (isTouchDevice) return;

//     setIsVisible(true);

//     const onMove = (e: MouseEvent) => {
//       pos.current = { x: e.clientX, y: e.clientY };
//       if (dotRef.current) {
//         dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
//       }
//     };

//     const onOver = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       const isClickable =
//         target.closest("a") ||
//         target.closest("button") ||
//         target.closest("[role='button']") ||
//         target.closest("input") ||
//         target.closest("textarea") ||
//         target.closest("select");
//       setIsHovering(!!isClickable);
//     };

//     const onLeave = () => setIsVisible(false);
//     const onEnter = () => setIsVisible(true);

//     // Lerp loop for outer ring
//     const lerp = (a: number, b: number, n: number) => a + (b - a) * n;
//     const animate = () => {
//       ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.15);
//       ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.15);
//       if (ringRef.current) {
//         const size = isHovering ? 50 : 36;
//         const offset = size / 2;
//         ringRef.current.style.transform = `translate(${ringPos.current.x - offset}px, ${ringPos.current.y - offset}px)`;
//         ringRef.current.style.width = `${size}px`;
//         ringRef.current.style.height = `${size}px`;
//       }
//       raf.current = requestAnimationFrame(animate);
//     };

//     window.addEventListener("mousemove", onMove);
//     window.addEventListener("mouseover", onOver);
//     document.documentElement.addEventListener("mouseleave", onLeave);
//     document.documentElement.addEventListener("mouseenter", onEnter);
//     raf.current = requestAnimationFrame(animate);

//     return () => {
//       window.removeEventListener("mousemove", onMove);
//       window.removeEventListener("mouseover", onOver);
//       document.documentElement.removeEventListener("mouseleave", onLeave);
//       document.documentElement.removeEventListener("mouseenter", onEnter);
//       cancelAnimationFrame(raf.current);
//     };
//   }, [isHovering]);

//   if (!isVisible) return null;

//   return (
//     <>
//       {/* Inner dot */}
//       <div
//         ref={dotRef}
//         className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
//         style={{
//           width: 8,
//           height: 8,
//           borderRadius: "50%",
//           backgroundColor: "#fff",
//           willChange: "transform",
//         }}
//       />
//       {/* Outer ring */}
//       <div
//         ref={ringRef}
//         className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
//         style={{
//           width: 36,
//           height: 36,
//           borderRadius: "50%",
//           border: `2px solid rgba(255,255,255,${isHovering ? 0.9 : 0.5})`,
//           backgroundColor: isHovering ? "rgba(255,255,255,0.08)" : "transparent",
//           willChange: "transform, width, height",
//           transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background-color 0.3s ease",
//         }}
//       />
//     </>
//   );
// };

// export default CustomCursor;







import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  // High-precision tracking refs
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices to prevent broken UI
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // The "Leader" Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Defines which elements trigger the "Magnetic" expansion
      const isClickable =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest(".magnetic-target"); // Add this class to custom elements
      
      setIsHovering(!!isClickable);
    };

    const handleVisibility = (visible: boolean) => setIsVisible(visible);

    // Lerp logic: currentPos + (targetPos - currentPos) * factor
    // Factor 0.15 provides that specific fluid 'heavy' lag seen on eb1aexperts
    const animateRing = () => {
      ringPos.current.x = ringPos.current.x + (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y = ringPos.current.y + (mousePos.current.y - ringPos.current.y) * 0.15;

      if (ringRef.current) {
        const size = isHovering ? 64 : 36; // Expands when hovering
        const offset = size / 2;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.transform = `translate(${ringPos.current.x - offset}px, ${ringPos.current.y - offset}px)`;
      }
      
      rafId.current = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseleave", () => handleVisibility(false));
    document.addEventListener("mouseenter", () => handleVisibility(true));
    rafId.current = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", () => handleVisibility(false));
      document.removeEventListener("mouseenter", () => handleVisibility(true));
      cancelAnimationFrame(rafId.current);
    };
  }, [isHovering]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Leader Dot - Instant Tracking */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[10000] pointer-events-none mix-blend-difference"
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "white",
          willChange: "transform",
        }}
      />
      
      {/* 2. Follower Ring - Lerp/Fluid Animation */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference flex items-center justify-center"
        style={{
          borderRadius: "50%",
          border: isHovering ? "1px solid rgba(255,255,255,1)" : "1.5px solid rgba(255,255,255,0.5)",
          backgroundColor: isHovering ? "rgba(255,255,255,0.1)" : "transparent",
          transition: "width 0.3s cubic-bezier(0.23, 1, 0.32, 1), height 0.3s cubic-bezier(0.23, 1, 0.32, 1), background-color 0.3s ease",
          willChange: "transform, width, height",
        }}
      >
        {/* Optional: Add a "View" text inside the ring when hovering over images/cards */}
        {isHovering && (
          <span className="text-[10px] uppercase font-bold text-white tracking-tighter"></span>
        )}
      </div>
    </>
  );
};

export default CustomCursor;