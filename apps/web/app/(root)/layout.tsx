import Navbar from "@/components/shared/Navbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="">
      <div className="">
        <Navbar />
        <div className="">{children}</div>
      </div>
    </main>
  );
};

export default layout;
