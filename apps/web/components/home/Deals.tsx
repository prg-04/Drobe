import React from "react";
import { Button } from "../ui/button";
import Countdown from "./Countdown";
import Image from "next/image";
import deals from "@/public/deals.png";

type Props = {};

const Deals = (props: Props) => {
  return (
    <section className="w-full max-w-full mt-10 ml-2 pr-4 flex  items-center justify-center">
      <div className="w-1/2 ">
        <div className="flex flex-col ml-6 ">
          <h3 className="text-4xl font-bold text-black">
            Unwrap Every Month With Style: Exclusive Monthly Deals Await!
          </h3>
          <p className="text-md text-gray-500 w-[70%]">
            Discover our curated collection of fashion deals, offering you the
            best styles at unbeatable prices.
          </p>
        </div>

        <div className="flex items-center my-4">
          <Countdown />
        </div>

        <Button className="ml-6 bg-background2 text-white">Shop Now</Button>
      </div>
      <div className="w-1/2s mt-10 ml-2 px-4">
        <Image src={deals} alt="Deals" width={500} height={500} />
      </div>
    </section>
  );
};

export default Deals;
