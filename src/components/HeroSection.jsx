import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export const HeroSection = () => {
  // Master ref for GSAP context (Handles flawless cleanup)
  const heroRef = useRef(null);
  
  // Individual element refs
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    // gsap.context guarantees no memory leaks and prevents double-firing in React Strict Mode
    let ctx = gsap.context(() => {
      
      // Create a master timeline with a default ease for a cohesive feel
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" }
      });

      // 1. Image Entrance: Gentle floating pop + scale
      tl.fromTo(
        imageRef.current,
        {
          scale: 0.7,
          opacity: 0,
          borderRadius: "50%",
          rotate: -5
        },
        {
          scale: 1,
          opacity: 1,
          borderRadius: "16px",
          rotate: 0,
          duration: 1.2,
          ease: "back.out(1.5)",
        }
      );

      // 2. Headline Entrance: Morphing text animation (staggered)
      const textLines = textRef.current?.querySelectorAll("span");
      if (textLines) {
        tl.fromTo(
          textLines,
          {
            opacity: 0,
            y: 40,
            scale: 0.9,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.2)",
          },
          "-=0.7" // Start slightly before the image finishes animating
        );
      }

      // 3. Description Entrance: Smooth slide-up fade
      tl.fromTo(
        descRef.current,
        { 
          opacity: 0, 
          y: 20 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8 
        },
        "-=0.4"
      );

      // 4. Button Entrance: Sweet elastic pop
      tl.fromTo(
        btnRef.current,
        { 
          opacity: 0, 
          scale: 0.5, 
          y: 20 
        },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          duration: 1, 
          ease: "elastic.out(1, 0.5)" 
        },
        "-=0.5"
      );

      // 5. Scroll Indicator: Gentle fade in
      tl.fromTo(
        scrollRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.8"
      );

      // --- CONTINUOUS AMBIENT ANIMATIONS ---
      
      // Image ambient float
      gsap.to(imageRef.current, {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.2,
      });

      // Text ambient float (slightly offset from image for a 3D disjointed feel)
      gsap.to(textRef.current, {
        y: -6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5,
      });

      // Button ambient pulse/float
      gsap.to(btnRef.current, {
        y: -4,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2,
      });

    }, heroRef); // Scope to the parent container

    // Optional: Bubble particles (Optimized)
    const createBubble = () => {
      const bubble = document.createElement("div");
      bubble.className = "absolute rounded-full bg-orange-500/20 pointer-events-none transform-gpu";
      const size = Math.random() * 15 + 5;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.top = `${Math.random() * 100}%`;
      
      const container = imageRef.current?.parentElement;
      if (container) {
        container.style.position = "relative";
        container.appendChild(bubble);
        
        gsap.to(bubble, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100 - 50,
          scale: 0,
          opacity: 0,
          duration: Math.random() * 2 + 1,
          ease: "power2.out",
          onComplete: () => {
             if (bubble.parentNode) bubble.remove();
          },
        });
      }
    };

    const bubbleInterval = setInterval(() => {
      if (document.visibilityState === "visible") {
        createBubble();
      }
    }, 1000); // Slightly slowed down to 1000ms to preserve GPU on low-end devices

    return () => {
      clearInterval(bubbleInterval);
      ctx.revert(); // This single line perfectly destroys all GSAP animations on unmount!
    };
  }, []);

 return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-transparent"
    >
      {/* Animated background bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-orange-500/10 to-purple-500/10 animate-float transform-gpu"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      <div className="container p-4 max-w-4xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4">
          
          {/* Left Side: Picture */}
          <div ref={imageRef} className="shrink-0 will-change-transform transform-gpu">
            <img
              src="/public/images/taiwo-pic.JPG"
              alt="Taiwo Oladipo"
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-2xl shadow-lg ring-2 ring-orange-500/30"
            />
          </div>

          {/* Right Side: Text Container */}
          <div
            ref={textRef}
            className="h-48 md:h-56 flex flex-col justify-center text-center md:text-left will-change-transform"
          >
            <h1 className="h-full flex flex-col justify-between text-4xl md:text-6xl font-bold tracking-tight py-1">
              <span className="text-orange-500 will-change-transform">Hi,</span>
              <span className="text-primary will-change-transform">I'm Taiwo</span>
              <span className="text-orange-500 text-gradient will-change-transform">Oladipo</span>
            </h1>
          </div>
        </div>

        {/* Paragraph Description */}
        <div ref={descRef} className="will-change-transform">
          <p className="text-orange-400/90 text-lg md:text-xl text-center max-w-2xl mx-auto mt-6">
            I create responsive, cross-browser-compatible web applications with a
            focus on scalability, accessibility, and modern design standards. I
            translate design mockups into functional user interfaces and
            collaborate with backend developers and designers to deliver seamless
            experiences across desktop and mobile devices.
          </p>
        </div>

        {/* Button Wrapper */}
        <div ref={btnRef} className="pt-8 pb-24 flex justify-center will-change-transform">
          <a href="#projects" className="cosmic-button">
            View my Work
          </a>
        </div>
      </div>

      {/* --- SCROLL INDICATOR FIX --- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center w-full">
        <div ref={scrollRef}>
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-sm text-orange-500/80 mb-2 font-medium tracking-wider uppercase text-center">
              Scroll
            </span>
            <ArrowDown className="h-5 w-5 text-orange-500" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
          }
          50% {
            transform: translateY(10px) translateX(-10px) rotate(-5deg);
          }
          75% {
            transform: translateY(-10px) translateX(5px) rotate(3deg);
          }
        }
        
        .animate-float {
          animation: float infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};