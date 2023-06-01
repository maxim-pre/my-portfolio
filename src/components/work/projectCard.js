import Button from "../../components/common/button";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <div className="grid grid-cols-7 py-6 mt-4 mb-8">
      <div className="col-span-4 object-cover my-auto relative group">
        <div className="absolute bg-backgound opacity-50 w-full top-0 bottom-0 hover:opacity-0 duration-200"></div>

        <img
          src={project.img}
          alt={project.name}
          className="object-cover rounded"
        />
      </div>
      <div className="col-span-3 relative flex flex-col items-end">
        <h2 className="text-right text-xs text-neonPink code ">
          project {project.number}
        </h2>
        <h2 className="text-right font-bold">{project.name}</h2>
        <div className=" w-[120%] text-xs sm:text-md bg-cardColor shadow-lg py-4 px-4 text-left my-4">
          <p className="mb-2">{project.description}</p>
          <p>{project.personal}</p>
        </div>
        <div className="code text-xs text-textNormal w-[120%] text-right">
          {project.skills.map((skill, index) => {
            return (
              <span key={index} className="mx-1">
                {skill}
              </span>
            );
          })}
        </div>
        <div className="flex mt-4 items-center  justify-start">
          <a href={project.url}>
            <Button label={"View Website"} />
          </a>
          <a href={project.github}>
            <div className="mx-6 cursor-pointer ">
              <FiGithub />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
