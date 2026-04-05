import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      
      gsap.to(cursor, {
        x,
        y,
        duration: 0.1,
        ease: "power2.out"
      });

      gsap.to(follower, {
        x,
        y,
        duration: 0.5,
        ease: "power3.out"
      });
    };

    const onMouseDown = () => {
      gsap.to([cursor, follower], { scale: 0.8, duration: 0.2 });
    };

    const onMouseUp = () => {
      gsap.to([cursor, follower], { scale: 1, duration: 0.2 });
    };

    const onMouseEnter = (e) => {
      if (e.target.closest("button, a, .cursor-pointer")) {
        gsap.to(follower, {
          scale: 3,
          backgroundColor: "rgba(116, 180, 218, 0.2)",
          borderColor: "rgba(116, 180, 218, 0.4)",
          duration: 0.3
        });
        gsap.to(cursor, { opacity: 0, duration: 0.2 });
      }
    };

    const onMouseLeave = (e) => {
      if (e.target.closest("button, a, .cursor-pointer")) {
        gsap.to(follower, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "rgba(16, 54, 125, 0.3)",
          duration: 0.3
        });
        gsap.to(cursor, { opacity: 1, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onMouseEnter);
    document.addEventListener("mouseout", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseEnter);
      document.removeEventListener("mouseout", onMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-primary/30 rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
};

export default CustomCursor;
