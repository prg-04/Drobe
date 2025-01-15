"use client";

import { hero } from "@/constants/constants";
import anime from "animejs";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

type Props = {};

const Hero = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Function to handle slide transitions
    const animateSlideTransition = (current: number, next: number) => {
      const currentSlide = document.querySelector(`.hero-slide-${current}`);
      const nextSlide = document.querySelector(`.hero-slide-${next}`);
      const isLastToFirst = current === hero.length - 1 && next === 0;

      // Ensure slides are initially positioned
      if (nextSlide) {
        nextSlide.classList.remove("hidden");
        anime.set(nextSlide, { translateX: "100%" });
      }

      // Animate current slide out
      if (currentSlide) {
        anime({
          targets: currentSlide,
          translateX: ["0%", "100%"],
          easing: isLastToFirst ? "easeInOutSine" : "easeInOutQuad",
          duration: isLastToFirst ? 1200 : 1000,
          opacity: [1, 0],
          complete: () => {
            currentSlide.classList.add("hidden");
          },
        });
      }

      // Animate next slide in
      if (nextSlide) {
        anime({
          targets: nextSlide,
          translateX: ["100%", "0%"],
          easing: isLastToFirst ? "easeInOutSine" : "easeInOutQuad",
          duration: isLastToFirst ? 1200 : 1000,
          opacity: [0, 1],
        });

        // Animate text elements for the next slide
        const textDelay = isLastToFirst ? 1200 : 1000;

        anime({
          targets: `.hero-slide-${next} .hero-title`,
          translateY: [50, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1000,
          delay: textDelay,
        });

        anime({
          targets: `.hero-slide-${next} .hero-description-word`,
          translateY: [30, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 800,
          delay: anime.stagger(50, { start: textDelay + 200 }),
        });

        anime({
          targets: `.hero-slide-${next} .hero-button`,
          translateY: [50, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1000,
          delay: textDelay + 800,
        });
      }
    };

    // Cycle through slides every 5 seconds
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % hero.length;
      animateSlideTransition(activeIndex, nextIndex);
      setActiveIndex(nextIndex);
    }, 7000);

    return () => clearInterval(interval); // Cleanup interval
  }, [activeIndex]);

  return (
    <section className="relative overflow-hidden w-full h-screen">
      {hero.map((item, index) => (
        <div
          key={item.title}
          className={`hero-slide-${index} ${
            index === activeIndex ? "" : ""
          } absolute inset-0 flex items-center bg-no-repeat bg-cover`}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}>
          <div className="w-1/2 flex flex-col space-y-4 px-16 text-left">
            <h1 className="hero-title text-5xl font-bold text-white">
              {item.title}
            </h1>
            <p className="hero-description text-lg text-gray-200">
              {item.description.split(" ").map((word, i) => (
                <span
                  key={i}
                  className="hero-description-word inline-block mr-1">
                  {word}
                </span>
              ))}
            </p>
            <div className="mt-4 hero-button">
              <Button>Shop Now</Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;
