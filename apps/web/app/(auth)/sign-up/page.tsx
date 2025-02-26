"use client";
import AuthForm from "@/components/AuthForm";
import { signUpSchema } from "@/lib/validations";
import React from "react";

const page = () => (
  <AuthForm
    type="SIGN-UP"
    schema={signUpSchema}
    defaultValues={{
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    }}
    onSubmit={() => {}}
  />
);

export default page;
