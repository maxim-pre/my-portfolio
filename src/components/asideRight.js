import { toast } from "react-toastify";

const AsideRight = () => {
  return (
    <div className="absolute sm:fixed bottom-0 right-0 px-8 flex flex-col items-center text-textNormal w-7">
      <p
        className="rotate-90 code -translate-y-[90px] cursor-pointer hover:text-neonPink hover:-translate-y-[95px] duration-200"
        onClick={() => {
          navigator.clipboard.writeText("maximprestwich@outlook.com");
          toast.success("Coppied email to clipboard");
        }}
      >
        maximprestwich@outlook.com
      </p>
      <div className="h-14 sm:h-28 w-[0.5px] bg-textNormal mt-4"></div>
    </div>
  );
};

export default AsideRight;
