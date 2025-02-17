"use client";

import React, { useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { shopCategories } from "@/constants";
import { cn } from "lib/utils";
import { useForm } from "react-hook-form";

interface Props {
  filterType: string;
  products: string[];
}

const FilterItems = ({ filterType, products }: Props) => {
  const form = useForm({
    defaultValues: {
      categories: [] as string[],
    },
  });

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Form {...form}>
        <form>
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="space-y-2">
            <div className="flex items-center justify-between space-x-4 px-4">
              <h4 className="text-sm font-semibold">{Categories}</h4>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className="group bg-transparent hover:bg-transparent"
                  size="sm">
                  <ChevronUp
                    className={cn(
                      isOpen ? "h-4 w-4 group-hover:text-black" : "hidden"
                    )}
                    onClick={handleClick}
                  />
                  <ChevronDown
                    className={cn(
                      isOpen ? "hidden" : "h-4 w-4 group-hover:text-black"
                    )}
                    onClick={handleClick}
                  />
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
              {shopCategories.map((item) => (
                <FormField
                  key={item.name}
                  control={form.control}
                  name="categories"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.name}
                        className="flex items-center gap-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.name)}
                            onCheckedChange={(checked: boolean) => {
                              return checked
                                ? field.onChange([...field.value, item.name])
                                : field.onChange(
                                    field.value?.filter(
                                      (value: string) => value !== item.name
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-black pb-2">
                          {item.name}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </CollapsibleContent>
          </Collapsible>
          <Button type="submit">Apply</Button>
        </form>
      </Form>
    </div>
  );
};

export default FilterItems;
