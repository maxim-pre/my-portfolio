import SectionHeader from "../common/sectionHeader";
import profilePicture from "../../images/me.jpg";

const Interests = () => {
  return (
    <div className="max-w-[1000px] text-textLight py-16" id="Interests">
      <SectionHeader number={"3"} text={"My Hobbies"} />

      <div className="flex flex-col justify-center items-center w-full h-full my-8">
        {/* basketball */}
        <div className="grid sm:grid-cols-2 gap-4 gap-x-12">
          <div className="text-left sm:text-right">
            <p className="text-xl inline border-b-2 font-bold border-neonPink order-1">
              Basketball
            </p>
          </div>
          <div className="text-left pr-4 order-3 sm:order-2">
            <p className="text-xl inline border-b-2 font-bold border-neonPink">
              Cycling
            </p>
          </div>
          <div className="text-left sm:text-right text-textNormal order-2 sm:order-3">
            Basketball has always been my main Sport. I started playing while I
            was living in Copenhagen where I competed in national tournaments,
            as well as overseas competitions in Stockholm. I also played for
            year at the University of Surrey which was a huge step up in
            competition. While I'm no longer playing competitively, one of my
            favorite things to do is to play in pickup games in the park. It's a
            great way to make new friends and amazing exercise!
          </div>
          <div className="text-left text-textNormal order-4">
            Living in Copenhagen you're guarenteed to get into cycling. A city
            where there's more bikes than people! I particulariliy like long
            distance cycling spanning over several days. Most recently, I cycled
            up the west coast of Sweden along the kattegat path (400km), which
            took my friend and I four days camping along the coastline. I'm
            always up for a cycling trip and I love watching the Tour de France.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interests;
