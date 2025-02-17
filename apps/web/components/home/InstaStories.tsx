"use client";

import React from "react";
import { FocusCards } from "../ui/focus-cards";
import { stories } from "@/constants";
import { Container, Forklift, Headset, WalletCards } from "lucide-react";

const InstaStories = () => {
  return (
    <section className="w-full max-w-full mt-10 flex flex-col items-center justify-center gap-2">
      <div className="text-center">
        <h3 className="text-4xl font-bold text-black">Follow Our Stories</h3>
      </div>
      <div className="w-full px-4">
        <FocusCards cards={stories} />
      </div>
      <div className="w-[80%] px-8 grid grid-cols-4 gap-8">
        <div className="flex flex-col items-start justify-center gap-2 py-6 rounded-lg ">
          <div className="p-4 rounded-full">
            <Container className="w-8 h-8 text-black" />
          </div>
          <div className="text-xl font-bold text-black">Free Shipping</div>
          <div className="text-sm text-gray-500 ">For all orders over $100</div>
        </div>

        <div className="flex flex-col items-start justify-center gap-2 py-6 rounded-lg ">
          <div className="p-4 bg-primary/10 rounded-full">
            <Forklift className="w-8 h-8 text-black" />
          </div>
          <div className="text-xl font-bold text-black">
            30-Day Return Policy
          </div>
          <div className="text-sm text-gray-500 ">
            If you're not satisfied, return it within 30 days
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-2 py-6 rounded-lg ">
          <div className="p-4 bg-primary/10 rounded-full">
            <Headset className="w-8 h-8 text-black" />
          </div>
          <div className="text-xl font-bold text-black">
            24/7 Customer Support
          </div>
          <div className="text-sm text-gray-500 ">
            Our team is here to help you 24/7
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-2 py-6 rounded-lg ">
          <div className="p-4 bg-primary/10 rounded-full">
            <WalletCards className="w-8 h-8 text-black" />
          </div>
          <div className="text-xl font-bold text-black">Secure Payment</div>
          <div className="text-sm text-gray-500 ">100% secure payment</div>
        </div>
      </div>
    </section>
  );
};

export default InstaStories;
