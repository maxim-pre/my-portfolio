import SectionHeader from "../../components/common/sectionHeader";
import ProjectCard from "./projectCard";
import ProjectCardAlternate from "./projectCardAlternate";
import MobileProjectCard from "./mobileProjectCard";
import { projects } from "../../lib/projects";
const Work = () => {
  return (
    <div className="  max-w-[1000px] text-textLight" id="Work">
      <SectionHeader number={"2"} text={"Some things I've built"} />
      <div className="sm:hidden">
        {projects.map((project, index) => {
          return <MobileProjectCard project={project} key={index} />;
        })}
      </div>
      <div className="hidden sm:block">
        {projects.map((project, index) => {
          if (index % 2 == 0) {
            return <ProjectCard project={project} />;
          } else {
            return <ProjectCardAlternate project={project} />;
          }
        })}
      </div>
    </div>
  );
};

export default Work;
