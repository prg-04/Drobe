import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <div className="text-black">{children}</div>
    </main>
  );
};

export default layout;
