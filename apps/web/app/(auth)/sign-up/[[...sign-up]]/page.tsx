"use client";

import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import signUpImg from "@/public/signup.png";

export default function SignUpPage() {
  return (
    <section className="flex min-h-screen h-screen w-full px-16">
      <div className="w-1/2 h-full rounded-tl-2xl rounded-bl-2xl">
        <Image
          src={signUpImg}
          alt="signup image"
          className="w-full h-full object-cover rounded-tl-2xl rounded-bl-2xl"
        />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center bg-background2 rounded-tr-2xl rounded-br-2xl">
        <SignUp />
      </div>
    </section>
  );
}
