"use client";

import React from "react";
import { FocusCards } from "../ui/focus-cards";

const stories = [
  {
    title: "Summer Collection",
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80",
  },
  {
    title: "Street Style",
    src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80",
  },
  {
    title: "Autumn Vibes",
    src: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&q=80",
  },
  {
    title: "Casual Wear",
    src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80",
  },
  // {
  //   title: "Accessories",
  //   src: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&q=80",
  // },
  // {
  //   title: "New Arrivals",
  //   src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80",
  // },
];

const InstaStories = () => {
  return (
    <section className="w-full max-w-full mt-10 flex flex-col items-center justify-center gap-8">
      <div className="text-center">
        <h3 className="text-4xl font-bold text-black">Follow Our Stories</h3>
      </div>
      <div className="w-full px-4">
        <FocusCards cards={stories} />
      </div>
    </section>
  );
};

export default InstaStories;
