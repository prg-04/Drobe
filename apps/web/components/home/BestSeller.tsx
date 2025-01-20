"use client";

import { useGetBestsellersQuery } from "@/lib/store/features/bestsellerApi";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

type Props = {};

const BestSeller = (props: Props) => {
  const { data, isLoading, error } = useGetBestsellersQuery();

  return (
    <section className="w-full max-w-full px-6 mt-10 flex flex-col gap-2 justify-center">
      <div className="w-full flex justify-center items-center">
        <h2 className="text-4xl font-bold text-background2">
          Our Best Sellers
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-4 px-6 mt-4">
        {data &&
          data?.map((item) => {
            console.log(item);

            return (
              <Card
                key={item.id}
                className="w-full h-[400px] flex flex-col border-none bg-slate-50 rounded-tl-2xl rounded-tr-2xl ">
                <CardContent className="flex-1 flex flex-col items-center justify-center rounded-none bg-white p-4 rounded-tl-2xl rounded-tr-2xl">
                  <Image
                    src={
                      (item?.images[0]?.url ||
                        item?.images[0]?.baseUrl) as string
                    }
                    alt="product"
                    width={200}
                    height={200}
                    className="w-full h-[250px] object-contain"
                  />
                </CardContent>
                <CardContent className="h-[120px] mt-4 flex flex-col justify-start p-4 space-y-2">
                  <CardTitle className="text-md text-black">
                    {item?.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {item?.categoryName}
                  </CardDescription>
                  <CardDescription className="text-sm">
                    {item?.price.formattedValue}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </section>
  );
};

export default BestSeller;
