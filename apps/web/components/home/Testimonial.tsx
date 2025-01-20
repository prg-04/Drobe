"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "I absolutely love shopping here! The quality of clothes is amazing and the service is top-notch.",
    name: "Sarah Johnson",
    title: "Regular Customer",
  },
  {
    quote:
      "The variety of styles available is incredible. I always find exactly what I'm looking for.",
    name: "Michael Chen",
    title: "Fashion Enthusiast",
  },
  {
    quote:
      "Great prices and even better quality. This has become my go-to fashion destination.",
    name: "Emma Davis",
    title: "Style Blogger",
  },
  {
    quote:
      "The customer service is exceptional. They really go above and beyond to help.",
    name: "James Wilson",
    title: "Verified Buyer",
  },
  {
    quote: "I've never been disappointed with my purchases. Highly recommend!",
    name: "Lisa Thompson",
    title: "Fashion Designer",
  },
];

const Testimonial = () => {
  return (
    <section className="w-full max-w-full mt-10 flex flex-col items-center px-6 justify-center gap-8 overflow-hidden">
      <div className="text-center">
        <h3 className="text-4xl font-bold text-black">
          What Our Customers Say
        </h3>
      </div>
      <div className="w-full">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          className=""
        />
      </div>
    </section>
  );
};

export default Testimonial;
