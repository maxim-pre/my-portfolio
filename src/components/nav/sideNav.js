import { TfiClose } from "react-icons/tfi";
const SideNav = ({ setMobileNav }) => {
  return (
    <div className="sm:hidden fixed w-full h-full backdrop-blur-sm bg-backgound/30 top-0 z-30">
      <div className="sm:hidden fixed w-[70%] h-screen bg-[#001d3d] top-0 right-0 p-8 flex flex-col">
        <div className="flex justify-end">
          <TfiClose
            className="text-neonPink text-2xl font-bold"
            onClick={() => setMobileNav(false)}
          />
        </div>
        <ul className=" text-textLight flex justify-center flex-col">
          <div className="my-5">
            <p className="code text-neonPink pb-1">01.</p>
            <p>About</p>
          </div>
          <div className="my-5">
            <p className="code text-neonPink pb-1">02.</p>
            <p>Work</p>
          </div>
          <div className="my-5">
            <p className="code text-neonPink pb-1">03.</p>
            <p>Contact</p>
          </div>
        </ul>
        <button className="border rounded py-4 px-10 text-neonPink mx-auto my-6">
          Resume
        </button>
      </div>
    </div>
  );
};

export default SideNav;
