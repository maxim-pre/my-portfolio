import SectionHeader from "../../components/common/sectionHeader";
import ProjectCard from "./projectCard";
import ProjectCardAlternate from "./projectCardAlternate";
import MobileProjectCard from "./mobileProjectCard";
import bugtrackerImage from "../../images/bugtracker.png";
const Work = () => {
  const projects = [
    {
      number: 1,
      name: "Bugtracker",
      description:
        "Lorem Ipsum is simply dummy text of the printing language and it really useful when you are tyring to develop website and you need some dummy text for example when you are trying to see how something would look if it had some text kinda like what I'm doing now and why Im writing all this gibberish",
      img: bugtrackerImage,
      skills: ["React", "Django", "Heroku", "Django REST framework"],
    },
  ];
  return (
    <div className="  max-w-[800px] text-textLight">
      <SectionHeader number={"2"} text={"Some things I've built"} />
      <div className="sm:hidden">
        <MobileProjectCard project={projects[0]} />
      </div>
      <div className="hidden sm:block">
        <ProjectCard project={projects[0]} />
      </div>
    </div>
  );
};

export default Work;
