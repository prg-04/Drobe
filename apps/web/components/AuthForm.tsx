"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  DefaultValues,
  Field,
  FieldValue,
  FieldValues,
  Path,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";

interface Props<T extends FieldValues> {
  type: "SIGN-IN" | "SIGN-UP" | "FORGOT-PASSWORD" | "RESET-PASSWORD";
  schema: z.ZodSchema<T>;
  defaultValues?: DefaultValues<T>;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
}

const BUTTON_TEXT = {
  "SIGN-IN": "Sign In",
  "SIGN-UP": "Sign Up",
  "FORGOT-PASSWORD": "Send OTP",
  "CONFIRM-OTP": "Verify",
} as const;

const AuthForm = <T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) => {
  // 1. Define your form.
  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  // 2. Define a submit handler.
  function handleSubmit(values: z.infer<typeof schema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        {defaultValues &&
          Object.keys(defaultValues).map((field) => (
            <FormField
              key={field}
              control={form.control}
              name={field as Path<T>}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="capitalize">
                    {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={`Enter your ${
                        FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]
                      }`}
                      type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]}
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>
                    This is your public display name.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        <Button type="submit">
          {type === "RESET-PASSWORD" ? "Reset Password" : BUTTON_TEXT[type as keyof typeof BUTTON_TEXT]}
        </Button>
      </form>
    </Form>
  );
};
export default AuthForm;
