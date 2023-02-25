import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div className=' w-full h-screen  lg:bg-contain bg-no-repeat bg-center lg:bg-[url("/assets/Rectangle_18.png")]'>
      <Image
        className="absolute top-[140px] lg:top-[170px] mx-auto inset-x-0 text-center"
        src="/assets/miniminds_1.png"
        height={190}
        width={190}
      />
      <h3 className="absolute w-[120px] h-[29px] mini-title text-2xl text-center inset-x-0 mx-auto lg:top-[346px] text-[#555555] top-[316px]">
        MiniMinds
      </h3>
      <p className="description inset-x-0 mx-auto lg:top-[385px] top-[355px] absolute">
        Helping educators and students to improve their memory and cognitive
        skills through fun and engaging gameplay.
      </p>
      <button className="font-inter w-36 h-7 absolute rounded text-sm bg-[#19B03D] text-center inset-x-0 mx-auto top-[418px] lg:top-[448px] text-white font-semibold ">
        Get started
      </button>
      <p className="text-[10px] font-inter font-medium max-w-[346px] h-[28px] text-[#555555] inset-x-0 mx-auto absolute bottom-[27px]">
        By joining, you agree to share contact infornation with people in your
        organization.{" "}
        <span className="text-[#484FFF] underline decoration-1 	underline-offset-2">
          Learn More
        </span>{" "}
      </p>
    </div>
  );
};

export default Home;
