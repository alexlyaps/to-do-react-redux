// import * as React from "react";

export function About() {
  return (
    <div className="flex my-[132px] px-[96px] flex-row gap-[80px] justify-between items-center  w-full">
      <div className="flex max-w-[660px] flex-1 flex-col gap-[32px]">
        <h1 className="text-6xl text-shadow">Alexander Lyapunov</h1>
        <p className="text-2xl">
          Frontend developer dedicated to efficiently delivering solutions. I
          create high-performance, intuitive interfaces with a strong focus on
          UX/UI design. My work contributes to project development and ensures
          high-quality, timely project implementation.
        </p>
      </div>
      <div className="h-[300px] w-[400px]  bg-gray-300 rounded-[1rem]"></div>
    </div>
  );
}
