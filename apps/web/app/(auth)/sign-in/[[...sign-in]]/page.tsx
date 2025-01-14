"use client";

import { SignIn} from "@clerk/nextjs";
import loginImg from "@/public/login.png";
import Image from "next/image";


export default function SignInPage() {
  return (
    <section className="flex min-h-screen h-screen w-full px-14 rounded-2xl">
      <div className="w-1/2 h-full rounded-2xl">
        <Image
          src={loginImg}
          alt="signup image"
          className="w-full h-full object-cover rounded-tl-2xl rounded-bl-2xl"
        />
      </div>

      <div className="rounded-tr-2xl rounded-br-2xl w-1/2 h-full flex items-center justify-center bg-background2">
        <SignIn />
      </div>
    </section>
  );
}
