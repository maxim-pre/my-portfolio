import Button from "../../components/common/button";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  console.log(project.skills);
  return (
    <div className="grid grid-cols-7 py-6">
      <div className="col-span-4 object-cover my-auto">
        <img src={project.img} alt={project.name} />
      </div>
      <div className="col-span-3 relative flex flex-col items-end">
        <h2 className="text-right text-xs text-neonPink code ">
          project {project.number}
        </h2>
        <h2 className="text-right font-bold">{project.name}</h2>
        <div className=" w-[110%]  bg-cardColor shadow-lg text-xs py-4 px-4 text-right my-4">
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
          <div className="mr-6 cursor-pointer">
            <FiGithub />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
