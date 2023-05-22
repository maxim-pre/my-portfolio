import Button from "../../components/common/button";
import { FiGithub } from "react-icons/fi";
import projects from "../../projectInformation";

const ProjectCardAlternate = ({ project }) => {
  return (
    <div className="grid grid-cols-7 py-6">
      <div className="col-span-3 relative flex flex-col items-start">
        <h2 className="text-right text-xs text-neonPink code ">
          project {project.number}
        </h2>
        <h2 className="text-right font-bold">{project.name}</h2>
        <div className=" w-[110%]  bg-cardColor shadow-lg py-4 px-4 text-left my-4">
          {project.description}
        </div>
        <div className="code text-xs text-textNormal">
          {project.skills.map((skill, index) => {
            return (
              <span key={index} className="mx-1">
                {skill}
              </span>
            );
          })}
        </div>
        <div className="flex mt-4 items-center  justify-start">
          <Button label={"View Website"} />
          <div className="mx-6 cursor-pointer">
            <FiGithub />
          </div>
        </div>
      </div>
      <div className="col-span-4 object-cover my-auto">
        <img src={project.img} alt={project.name} />
      </div>
    </div>
  );
};

export default ProjectCardAlternate;
