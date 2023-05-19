import BulletPoint from "./bulletPoint";
import profilePicture from "../../images/me.jpg";
import SectionHeader from "../common/sectionHeader";
const About = () => {
  return (
    <div className=" max-w-[700px]  text-textLight h-[40rem] pt-16 mx-8 sm ">
      {/* header */}
      <SectionHeader number={"1"} text={"About"} />
      {/* end header */}

      <div className="grid  grid-rows-2 sm:grid-cols-5">
        <div className="flex flex-col col-span-3 text-left text-textNormal px-4 ">
          <p className="my-2 text-xs leading-[20px]">
            I thought I had it all together, but I was led astray the day you
            walked away. You were the clock that was tickin' in my home. Changed
            my state of mind. Love's so hard to find. I thought I had it all
            together, but I was led astray the day you walked away. You were the
            clock that was tickin' in my home. Changed my state of mind. Love's
            so hard to find
          </p>
          <p className="my-2 text-xs leading-[20px]">
            I thought I had it all together, but I was led astray the day you
            walked away. You were the clock that was tickin' in my home. Changed
            my state of mind. Love's so hard to find I thought I had it all
            together, but I was led astray the day you walked away. You were the
            clock that was tickin' in my home. Changed my state of mind. Love's
            so hard to find
          </p>
          <p className="my-2 text-xs leading-[20px]">
            I thought I had it all together, but I was led astray the day you
            walked away. You were the clock that was tickin' in my home. Changed
            my state of mind. Love's so hard to find
          </p>
          <div className="grid grid-cols-8">
            <BulletPoint text={"React"} />
            <BulletPoint text={"React"} />
            <BulletPoint text={"React"} />
            <BulletPoint text={"React"} />
            <BulletPoint text={"React"} />
            <BulletPoint text={"React"} />
          </div>
        </div>
        <div className=" col-span-2 flex items-center ">
          <div className="object-cover w-40 group  ">
            <div className="absolute w-40 h-[13.7rem] bg-neonPink z-20 opacity-30 group-hover:opacity-0 duration-200"></div>
            <div className="absolute w-40 h-[13.7rem] border-2 border-neonPink translate-x-4 translate-y-4 rounded group-hover:translate-x-5 group-hover:translate-y-5 duration-200 "></div>
            <div className="relative group-hover:-translate-x-1 group-hover:-translate-y-1 duration-200">
              <img
                className="z-10 rounded"
                src={profilePicture}
                alt="profilePicture"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
