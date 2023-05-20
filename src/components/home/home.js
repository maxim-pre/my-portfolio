import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <div className="bg-backgound w-full flex items-center justify-center h-screen max-w-[1000px]">
      {/* content */}
      <div className="flex flex-col text-left items-start mt-28 ">
        <p className="code text-neonPink mb-4">Hi, my name is</p>
        <h1 className="text-textLight font-bold md:text-7xl sm:text-5xl text-4xl mb-4">
          Maxim Prestwich
        </h1>
        <h2 className="text-textNormal font-bold md:text-7xl sm:text-5xl text-4xl mb-4">
          I am a software Engineer.
        </h2>
        <p className="text-textNormal md:w-[70%] mb-2 text-xs leading-[20px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button className="border border-textLight py-2 px-4 mt-8 text-textLight rounded-sm group duration-300 hover:border-neonPink">
          <div className="flex items-center justify-center box-border">
            <div className="px-1 text-sm">Checkout my work</div>
            <div className="px-2 duration-300 group-hover:rotate-90 group-hover:text-neonPink">
              <BsArrowRight />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Home;
