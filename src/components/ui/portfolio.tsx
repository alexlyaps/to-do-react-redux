// import * as React from "react";

export function Portfolio() {
  return (
    <div className="flex justify-center items-center max-w-[1000px] flex-col gap-[32px]">
      <h2 className="text-4xl text-shadow">Portfolio</h2>
      <p className="text-2xl">
        Share features I like. Some features I developed for real projects and
        change the designs in a bold manner
      </p>

      <iframe src="http://localhost:8080/" width="100%" height="500px"></iframe>
    </div>
  );
}
