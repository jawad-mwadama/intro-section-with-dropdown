import React from "react";
import heroImage from "../assets/images/image-hero-desktop.png";
import databiz from "../assets/images/client-databiz.svg";
import audioPhile from "../assets/images/client-audiophile.svg";
import meet from "../assets/images/client-meet.svg";
import maker from "../assets/images/client-maker.svg";

function Hero() {
  return (
    <div className="items-conter mt-8 flex max-w-420 justify-center">
      <div className="flex flex-col-reverse items-center justify-between gap-16 md:flex-row md:justify-between">
        {/* text side */}
        <div className="max-w-2xl border border-red-500 p-16">
          <h1 className="py-8 font-heading text-6xl font-bold">
            Make <br /> remote work
          </h1>
          <p className="text-md/8 mb-8 max-w-sm border border-red-400">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="rounded-lg border-2 border-black p-2">
            Learn more
          </button>

          {/* logo side */}
          <div className="flex w-auto gap-4 object-cover pt-8">
            <img src={databiz} className="h-6 w-auto" alt="" />
            <img src={audioPhile} className="h-6 w-auto" alt="" />
            <img src={meet} className="h-6 w-auto" alt="" />
            <img src={maker} className="h-6 w-auto" alt="" />
          </div>
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
