import BulletPoint from "./bulletPoint";
import profilePicture from "../../images/me.jpg";
import SectionHeader from "../common/sectionHeader";
import TextLink from "../textLink";
const About = () => {
  return (
    <div className=" max-w-[1000px] text-textLight py-16 sm:pb-32" id="About">
      {/* header */}
      <SectionHeader number={"1"} text={"About"} />
      {/* end header */}

      <div className="grid grid-rows-2 sm:grid-rows-1 grid-cols-1 sm:grid-cols-5 ">
        <div className="flex flex-col sm:col-span-3 text-left text-textNormal ">
          <p className="my-2 leading-5">
            Hi! My name is Max and I'm a junior full stack engineer. My
            intestest in software development started back in 2021 during my
            studies as a Civil Engineer where I was introduced to MatLab
            (Yuck!). Since then I natually go really into web development and
            never looked back since.
          </p>
          <p className="my-2 leading-5">
            I learned a lot during my studies but I always disliked the freedom
            civil engineers have to come up with their own solutions, since they
            are burdened by the plethora of regulations and design codes they
            must conform to. Software engineering is the total opposite! And I
            quickly learned that software development is a lot more fun than
            designing beams and columns too.
          </p>
          <p className="my-2 leading-5">
            Fast-forward to today, and I've just completed a software
            engineering bootcamp with{" "}
            <TextLink
              label={"General Assembly "}
              url={
                "https://generalassemb.ly/?topic=&mkt_account_id=1056949875&mkt_campaign_id=18014985966&mkt_ad_group_id=143659598127&mkt_device_type=c&mkt_keyword=general%20assembly&mkt_matchtype=e&mkt_placement=&mkt_ad_id=616745080558&mkt_network=g&mkt_target_id=aud-1433778186441:kwd-318741616&mkt_feed_item_id=&utm_source=google&utm_medium=paid-search-bra&utm_campaign=TS:TX:BRA:LON:BR:GeneralAssembly:X:Exact&utm_content=campus-lead-lander&utm_term=general%20assembly&gclid=Cj0KCQjwmtGjBhDhARIsAEqfDEfeB_XvQZhiDoqSdi7_zBavzCcg5SBoxQ9Dsf8rASRQRjziryqbj9kaAvduEALw_wcB&gclsrc=aw.ds"
              }
            />
            and I'm in a position to bring my web development skills to the
            market.
          </p>
          <p className="my-2 leading-5 text-textLight">
            Here are some of the technologies and languages I am proficient
            with:
          </p>
          <div className="grid grid-cols-8">
            <BulletPoint text={"Python"} />
            <BulletPoint text={"JavaScript"} />
            <BulletPoint text={"React"} />
            <BulletPoint text={"Django"} />
            <BulletPoint text={"PostgreSQL"} />
            <BulletPoint text={"HTML5"} />
            <BulletPoint text={"Tailwind CSS"} />
            <BulletPoint text={"Git"} />
          </div>
        </div>
        <div className=" col-span-2 flex items-center">
          <div className="object-cover w-52 group mx-auto mb-12 sm:mb-0">
            <div className="absolute w-52 h-[17.7rem] border-2 border-neonPink translate-x-4 translate-y-4 rounded group-hover:translate-x-5 group-hover:translate-y-5 duration-200 "></div>
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
