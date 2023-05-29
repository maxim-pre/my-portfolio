import { FiGithub, FiLinkedin } from "react-icons/fi";

const AsideLeft = () => {
  return (
    <div className=" absolute sm:fixed bottom-0 left-0 px-8 flex flex-col items-center text-textNormal">
      <a
        href="https://github.com/maxim-pre"
        className="my-2 cursor-pointer hover:text-neonPink hover:-translate-y-1 duration-200"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/maxim-prestwich-b82462204"
        className="my-2 cursor-pointer hover:text-neonPink hover:-translate-y-1 duration-200"
      >
        <FiLinkedin />
      </a>
      <div className="h-14 sm:h-28 w-[0.5px] bg-textNormal mt-4"></div>
    </div>
  );
};

export default AsideLeft;
