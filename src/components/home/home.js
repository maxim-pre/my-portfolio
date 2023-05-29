import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      className="bg-backgound flex items-center justify-center h-screen max-w-[1000px] mb-4"
      id="Home"
    >
      {/* content */}
      <div className="flex flex-col text-left items-start mt-20 ">
        <Fade
          cascade
          delay={400}
          damping={0.1}
          direction="up"
          triggerOnce
          duration={400}
        >
          <p className="code text-neonPink mb-4">Hi, my name is</p>
          <h1 className="text-textLight font-bold text-4xl sm:text-5xl md:text-6xl mb-4">
            Maxim Prestwich
          </h1>
          <h2 className="text-textNormal font-bold text-4xl sm:text-5xl md:text-6xl mb-4">
            I am a software Engineer.
          </h2>
          <p className="text-textNormal md:w-[70%] mb-2 leading-6">
            I specialize in building (and occasionally designing) things for the
            web. I enjoy working across the entire stack and I'm currently
            looking for new opportunities!
          </p>
          <Link to="Work" spy={true} offset={-20} smooth={true} duration={500}>
            <button className="border border-textLight py-4 px-6 mt-8 text-textLight rounded group duration-300 hover:border-neonPink">
              <div className="flex items-center justify-center box-border">
                <div className="px-1 code">Checkout my work</div>
                <div className="px-2 duration-300 group-hover:rotate-90 group-hover:text-neonPink text-lg">
                  <BsArrowRight />
                </div>
              </div>
            </button>
          </Link>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
