import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Set initial state
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 0.15; // Delay speed (lower = more delay)

    const fp = {
        xSetter: gsap.quickSetter(cursor, "x", "px"),
        ySetter: gsap.quickSetter(cursor, "y", "px"),
        scaleXSetter: gsap.quickSetter(cursor, "scaleX"),
        scaleYSetter: gsap.quickSetter(cursor, "scaleY"),
        rotationSetter: gsap.quickSetter(cursor, "rotation", "deg"),
    };

    const handleMouseMove = (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const ticker = gsap.ticker.add(() => {
        // Calculate delay/trail
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;

        fp.xSetter(pos.x);
        fp.ySetter(pos.y);

        // Calculate velocity and angle for the "water ball" effect
        const dx = mouse.x - pos.x;
        const dy = mouse.y - pos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Stretch based on velocity
        const maxStretch = 1.5;
        const stretch = Math.min(distance / 150, maxStretch);
        
        const scaleX = 1 + stretch;
        const scaleY = 1 - stretch * 0.5; // Narrow side effect
        
        // Rotation based on angle
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);

        fp.scaleXSetter(scaleX);
        fp.scaleYSetter(scaleY);
        fp.rotationSetter(angle);
    });

    const onMouseDown = () => {
        gsap.to(cursor, { scale: 0.5, duration: 0.3, ease: "power2.out" });
    };

    const onMouseUp = () => {
        gsap.to(cursor, { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.3)" });
    };

    const onMouseEnter = (e) => {
        if (e.target.closest("button, a, .cursor-pointer")) {
            gsap.to(cursor, { 
                width: 60, 
                height: 60, 
                backgroundColor: "rgba(116, 180, 218, 0.4)",
                filter: "blur(4px)",
                duration: 0.4 
            });
        }
    };

    const onMouseLeave = (e) => {
        if (e.target.closest("button, a, .cursor-pointer")) {
            gsap.to(cursor, { 
                width: 20, 
                height: 20, 
                backgroundColor: "#10367d",
                filter: "blur(0px)",
                duration: 0.4 
            });
        }
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", onMouseEnter);
    document.addEventListener("mouseout", onMouseLeave);

    // Hide default cursor
    document.body.style.cursor = "none";

    return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mousedown", onMouseDown);
        window.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("mouseover", onMouseEnter);
        document.removeEventListener("mouseout", onMouseLeave);
        gsap.ticker.remove(ticker);
        document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-5 h-5 bg-primary rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-multiply opacity-80"
      style={{ willChange: "transform, width, height, background-color" }}
    />
  );
};

export default CustomCursor;
