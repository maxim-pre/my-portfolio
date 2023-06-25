import { FiGithub } from "react-icons/fi";
import Button from "../../components/common/button";

const MobileProjectCard = ({ project }) => {
  return (
    <div className="relative my-8">
      <img
        alt="Project"
        src={project.img}
        className="absolute rounded object-cover w-full h-full"
      />
      <div className=" w-full h-full bg-backgound top-0 opacity-95 px-8 py-4 rounded">
        <div className="flex justify-between">
          <div>
            <h2 className="text-neonPink font-bold code text-sm text-left">
              project {project.number}
            </h2>
            <h2 className="text-left font-bold">{project.name}</h2>
          </div>

          <div className="flex items-center justify-start">
            <a href={project.github}>
              <div className="mx-4">
                <FiGithub />
              </div>
            </a>
            <a href={project.url}>
              <Button label={"View Website"} />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-xs text-left text-textNormal mt-4 mb-2 leading-5">
            {project.description}
          </p>
          <p className="text-xs text-left text-textNormal leading-5">
            {project.personal}
          </p>
          <p className="my-4 text-left text-sm text-textNormal code">
            {project.skills.map((skill, index) => {
              if (index === project.skills.length - 1) return skill;
              return `${skill}, `;
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileProjectCard;
