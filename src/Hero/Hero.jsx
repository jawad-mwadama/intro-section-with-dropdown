import React from "react";
import heroImage from "../assets/images/image-hero-desktop.png";

function Hero() {
  return (
    <div className="items-conter mt-8 flex max-w-420 justify-center">
      <div className="flex items-center justify-between gap-16">
        {/* text side */}
        <div className="max-w-2xl border border-red-500 p-16">
          <h1 className="py-5 font-heading text-7xl font-bold">
            Make <br /> remote work
          </h1>
          <p className="mb-5 max-w-sm border border-red-400">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="rounded-lg border-2 border-black p-2">
            Learn more
          </button>
        </div>

        {/* image side */}
        <div>
          <img src={heroImage} className="h-148 w-auto" alt="hero" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
