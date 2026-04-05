import { Briefcase, Code, User } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger so the animations fire on scroll!
gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Animate Left Side Content (Heading & Paragraphs)
      gsap.fromTo(
        ".animate-text",
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%", // Starts animating when the top of section hits 75% of viewport
          },
        },
      );

      // 2. Animate Buttons (Bouncy pop-in effect)
      gsap.fromTo(
        ".animate-btn",
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "elastic.out(1, 0.6)",
          scrollTrigger: {
            trigger: ".btn-container",
            start: "top 85%",
          },
        },
      );

      // 3. Animate Right Side Cards (Slide in from right)
      gsap.fromTo(
        ".animate-card",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2, // Delays each card slightly for a sweet cascade effect
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-4 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Added animate-text class for GSAP */}
        <h2 className="animate-text text-3xl md:text-4xl font-bold mb-12 text-orange-500">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h3 className="animate-text text-2xl font-semibold text-orange-500">
              Passionate Web Developer & Tech Creator
            </h3>

            <p className="animate-text text-muted-foreground text-orange-500">
              With over 2 years of experience in web development, I specialize
              in creating responsive, accessible and performant web applications
              using modern technologies.
            </p>

            <p className="animate-text text-muted-foreground text-orange-500">
              I am passionate about creating elegant solutions to complex
              problems, and I am constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            {/* BUTTON CONTAINER FIX */}
            {/* Added sm:justify-start so they align left with text on desktop */}
            <div className="btn-container flex flex-col sm:flex-row gap-4 pt-4 sm:justify-start">
              {/* Added w-full sm:w-auto text-center to guarantee equal width on mobile */}
              <a
                href="#contact"
                className="animate-btn cosmic-button w-full sm:w-auto text-center flex items-center justify-center"
              >
                Get in touch
              </a>

              {/* Removed ml-4 (gap-4 handles spacing). Added w-full sm:w-auto */}
              <a
                href="/public/cv/taiwo-oladipo-cv.pdf" // Use the exact filename you chose
                download="Taiwo-Oladipo-CV.pdf" // This is what the downloaded file will be named
                className="animate-btn w-full sm:w-auto flex items-center justify-center px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* CARDS CONTAINER */}
          <div className="grid grid-cols-1 gap-6">
            {/* Added animate-card to all three cards */}
            <div className="animate-card gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-orange-500 text-lg">
                    Web Development
                  </h4>
                  <p className="text-muted-foreground text-orange-500">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-card gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-orange-500 text-lg">
                    UI/UX Design
                  </h4>
                  <p className="text-muted-foreground text-orange-500">
                    Designing intuitive user interfaces and seamless user
                    experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-card gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-orange-500 text-lg">
                    Project Management
                  </h4>
                  <p className="text-muted-foreground text-orange-500">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
