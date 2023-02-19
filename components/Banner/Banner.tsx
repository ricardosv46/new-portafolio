import React from "react";
import { TextWrite } from "../TextWrite";

const Banner = () => {
  return (
    <section className="relative h-[1000px] flex items-center" id="Home">
      <video
        className="absolute z-0 object-cover w-full h-[1000px]"
        id="Home"
        autoPlay={true}
        muted
        loop
        src="/videos/bgBanner.mp4"
      />
      <div className="max-w-[1000px] w-full mx-auto z-10">
        <h2 className="text-base font-bold font-Saira_semibold text-primary-500">
              I am Ricardo Solis
        </h2>
        <div className="text-white  text-[32px] md:text-[64px]  uppercase tracking-[-1px] font-Saira_medium">
            
            <TextWrite texts={['Web Developer','Programmer','Front-End Developer']} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
