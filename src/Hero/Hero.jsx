import React from "react";
import heroImageDesktop from "../assets/images/image-hero-desktop.png";
import heroImageMobile from "../assets/images/image-hero-mobile.png";
import databiz from "../assets/images/client-databiz.svg";
import audioPhile from "../assets/images/client-audiophile.svg";
import meet from "../assets/images/client-meet.svg";
import maker from "../assets/images/client-maker.svg";

function Hero() {
  return (
    <div className="mx-auto mt-8 w-full max-w-7xl px-6">
      <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:gap-24">
        {/* text side */}
        <div className="w-full max-w-xl py-8 md:py-0">
          <h1 className="mb-8 font-heading text-5xl font-bold md:text-7xl">
            Make <br /> remote work
          </h1>
          <p className="mb-8 max-w-sm text-base/8 text-gray-500">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="hover rounded-lg border-2 border-black px-4 py-2 hover:cursor-pointer hover:border-2 hover:border-white hover:bg-black hover:text-white hover:duration-300 hover:ease-in-out">
            Learn more
          </button>

          {/* logo side */}
          <div className="mt-12 flex items-center gap-6 sm:mt-24">
            <img src={databiz} className="h-4 w-auto sm:h-6" alt="" />
            <img src={audioPhile} className="h-4 w-auto sm:h-6" alt="" />
            <img src={meet} className="h-4 w-auto sm:h-6" alt="" />
            <img src={maker} className="h-4 w-auto sm:h-6" alt="" />
          </div>
        </div>

        {/* image side */}
        <div className="w-full md:w-1/2">
          <img
            src={heroImageDesktop}
            className="hidden h-auto w-full max-w-sm object-contain md:max-w-md lg:block"
            alt="hero"
          />

          <img
            src={heroImageMobile}
            className="block h-auto w-full max-w-sm object-contain sm:hidden md:max-w-md"
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
