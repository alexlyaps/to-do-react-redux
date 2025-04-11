import * as React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return (
    <>
      <div className="py-[48px] px-[256px] antialiased ">{children}</div>
    </>
  );
}
