import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import Button from "../../components/common/button";

const MobileProjectCard = ({ project }) => {
  return (
    <div className="relative my-8">
      <img src={project.img} className="rounded h-80 object-cover" />
      <div className="absolute w-full h-full bg-backgound top-0 opacity-95 px-8 py-4 rounded">
        <h2 className="text-neonPink font-bold code text-sm text-left">
          project {project.number}
        </h2>
        <h2 className="text-left text-lg font-bold">{project.name}</h2>
        <p className="text-xs text-left text-textNormal my-4 leading-5">
          {project.description}
        </p>
        <div className="flex justify-start my-4">
          {project.skills.map((skill, index) => {
            return (
              <span className="text-xs text-textNormal code mr-4" key={index}>
                {skill}
              </span>
            );
          })}
        </div>
        <div className="flex items-center justify-start my-4">
          <Button label={"View Website"} />
          <div className="mx-8">
            <FiGithub />
          </div>
        </div>
        {/* <div className="flex text-lg justify-end items-end">
          <FiGithub className="mx-1 cursor-pointer hover:text-neonPink duration-200" />
          <FiExternalLink className="mx-1 cursor-pointer hover:text-neonPink duration-200" />
        </div> */}
      </div>
    </div>
  );
};

export default MobileProjectCard;
