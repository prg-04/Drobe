"use client";

import { hero } from "@/constants/constants";
import anime from "animejs";
import React, { useEffect, useState, useRef } from "react";
import { Button } from "../ui/button";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasInitialized = useRef(false);

  useEffect(() => {
    // Initial animation for the first slide
    if (!hasInitialized.current) {
      hasInitialized.current = true;

      // Animate the first slide on page load
      anime({
        targets: `.hero-slide-0 .hero-title`,
        translateY: [50, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000,
      });

      anime({
        targets: `.hero-slide-0 .hero-description-word`,
        translateY: [30, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 800,
        delay: anime.stagger(50, { start: 200 }),
      });

      anime({
        targets: `.hero-slide-0 .hero-button`,
        translateY: [50, 0],
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000,
        delay: 500,
      });
    }

    const animateSlideTransition = (current: number, next: number) => {
      const currentSlide = document.querySelector(`.hero-slide-${current}`);
      const nextSlide = document.querySelector(`.hero-slide-${next}`);

      // Animate current slide out
      if (currentSlide) {
        anime({
          targets: currentSlide,
          translateX: ["0%", "100%"],
          opacity: [1, 0],
          easing: "easeInOutQuad",
          duration: 1200,
        });
      }

      // Animate next slide in
      if (nextSlide) {
        anime.set(nextSlide, { translateX: "100%", opacity: 0 });
        anime({
          targets: nextSlide,
          translateX: ["100%", "0%"],
          opacity: [0, 1],
          easing: "easeInOutQuad",
          duration: 1000,
        });

        // Animate text elements for the next slide
        anime({
          targets: `.hero-slide-${next} .hero-title`,
          translateY: [50, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1000,
          delay: 500,
        });

        anime({
          targets: `.hero-slide-${next} .hero-description-word`,
          translateY: [30, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 800,
          delay: anime.stagger(50, { start: 700 }),
        });

        anime({
          targets: `.hero-slide-${next} .hero-button`,
          translateY: [50, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1000,
          delay: 1000,
        });
      }
    };

    // Start the interval after initial animation
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        const nextIndex = (activeIndex + 1) % hero.length;
        animateSlideTransition(activeIndex, nextIndex);
        setActiveIndex(nextIndex);
      }, 7000);
    };

    const timer = setTimeout(startInterval, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      clearTimeout(timer);
    };
  }, [activeIndex]);

  return (
    <section className="relative overflow-hidden w-full h-[60vh]">
      {hero.map((item, index) => (
        <div
          key={item.title}
          className={`hero-slide-${index} absolute inset-0 flex items-center bg-no-repeat bg-cover`}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: index === activeIndex ? 1 : 0,
            zIndex: index === activeIndex ? 1 : 0,
            transform:
              index === activeIndex ? "translateX(0)" : "translateX(100%)",
          }}>
          <div className="w-1/2 flex flex-col space-y-4 px-16 text-left">
            <h1 className="hero-title text-5xl font-bold text-white opacity-0">
              {item.title}
            </h1>
            <p className="hero-description text-lg text-gray-200">
              {item.description.split(" ").map((word, i) => (
                <span
                  key={i}
                  className="hero-description-word inline-block mr-1 opacity-0">
                  {word}
                </span>
              ))}
            </p>
            <div className="mt-4 hero-button opacity-0">
              <Button>Shop Now</Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
