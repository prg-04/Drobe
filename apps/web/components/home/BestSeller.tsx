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
    <div className="grid grid-cols-4 gap-4">
      {data &&
        data?.map((item) => {

          console.log(item)

          return (
            <Card key={item.id} className="w-full flex flex-col">
              <CardContent className="flex flex-col items-center justify-center border-2">
                <Image
                  src={item?.images[0]?.url}
                  alt="product"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </CardContent>
              <CardFooter>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardFooter>
            </Card>
          );
        })}
    </div>
  );
};

export default BestSeller;
