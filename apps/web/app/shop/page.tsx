"use client";

import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { z } from "zod";

import FilterItems from "@/components/FilterItems";

// Define available filters
const categories = [
  { id: "t-shirt", label: "T-Shirt" },
  { id: "trousers", label: "Trousers" },
  { id: "shoes", label: "Shoes" },
] as const;

// ✅ Define Zod schema for validation
const FormSchema = z.object({
  categories: z.array(z.string()).min(1, "Select at least one category"),
});

const page = () => {
  return (
    <section className="flex min-h-screen">
      <aside className="w-1/5 border-4 pt-20 pl-4 ">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Shop</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">All Products</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <FilterItems />
      </aside>
      <section className="w-4/5">
        <h1 className="text-4xl font-bold text-black">Home</h1>
      </section>
    </section>
  );
};

export default page;
