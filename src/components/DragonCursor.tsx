import { useEffect, useRef } from "react";

const DragonCursor = () => {
  const dragonRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const angle = useRef(0);
  const flap = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animId: number;
    const animate = () => {
      const dx = target.current.x - pos.current.x;
      const dy = target.current.y - pos.current.y;
      
      pos.current.x += dx * 0.08;
      pos.current.y += dy * 0.08;

      angle.current = Math.atan2(dy, dx);
      flap.current += 0.15;

      if (dragonRef.current) {
        const wingOffset = Math.sin(flap.current) * 6;
        const bobOffset = Math.cos(flap.current * 0.7) * 3;
        dragonRef.current.style.transform = `translate(${pos.current.x - 16}px, ${pos.current.y - 16 + bobOffset}px)`;
        dragonRef.current.style.setProperty("--wing", `${wingOffset}px`);
        dragonRef.current.style.setProperty("--flip", dx < 0 ? "-1" : "1");
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={dragonRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ willChange: "transform" }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 64 64"
        fill="none"
        style={{ transform: "scaleX(var(--flip, 1))" }}
      >
        {/* Body */}
        <ellipse cx="32" cy="34" rx="10" ry="7" fill="hsl(32, 95%, 55%)" />
        {/* Head */}
        <circle cx="44" cy="30" r="6" fill="hsl(32, 95%, 60%)" />
        {/* Eye */}
        <circle cx="46" cy="28" r="1.5" fill="hsl(20, 14%, 4%)" />
        {/* Snout */}
        <ellipse cx="50" cy="31" rx="3" ry="2" fill="hsl(15, 80%, 50%)" />
        {/* Wings */}
        <path
          d="M28 34 Q20 20 14 26 Q18 30 22 34Z"
          fill="hsl(32, 95%, 45%)"
          opacity="0.9"
          style={{ transform: `translateY(var(--wing, 0px))` }}
        />
        <path
          d="M30 32 Q22 16 12 22 Q18 26 24 32Z"
          fill="hsl(32, 95%, 50%)"
          opacity="0.7"
          style={{ transform: `translateY(var(--wing, 0px))` }}
        />
        {/* Tail */}
        <path
          d="M22 36 Q14 40 8 36 Q10 42 16 38"
          stroke="hsl(32, 95%, 50%)"
          strokeWidth="2"
          fill="none"
        />
        {/* Fire breath particles */}
        <circle cx="54" cy="32" r="1" fill="hsl(15, 90%, 55%)" opacity="0.6" />
        <circle cx="57" cy="31" r="0.8" fill="hsl(40, 100%, 60%)" opacity="0.4" />
      </svg>
    </div>
  );
};

export default DragonCursor;
