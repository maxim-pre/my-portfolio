import { FiGithub, FiLinkedin } from "react-icons/fi";

const AsideLeft = () => {
  return (
    <div className="fixed bottom-0 left-0 px-8 flex flex-col items-center text-textNormal">
      <div className="my-2 cursor-pointer hover:text-neonPink hover:-translate-y-1 duration-200">
        <FiGithub />
      </div>
      <div className="my-2 cursor-pointer hover:text-neonPink hover:-translate-y-1 duration-200">
        <FiLinkedin />
      </div>
      <div className="h-28 w-[0.5px] bg-textNormal mt-4"></div>
    </div>
  );
};

export default AsideLeft;
