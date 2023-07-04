import { TfiClose } from "react-icons/tfi";
import { Link } from "react-scroll";
const SideNav = ({ setMobileNav, mobileNav }) => {
  return (
    <div>
      <div
        className={`sm:hidden fixed w-full h-full backdrop-blur-sm bg-backgound/30 top-0 z-30 ${
          !mobileNav ? "hidden" : ""
        }`}
      ></div>
      <div
        className={`sm:hidden fixed w-[70%] h-screen bg-[#001d3d] top-0 right-0 p-8 flex flex-col z-30 duration-200 ${
          !mobileNav ? "translate-x-[100%]" : ""
        }`}
      >
        <div className="flex justify-end">
          <TfiClose
            className="text-neonPink text-2xl font-bold"
            onClick={() => setMobileNav(false)}
          />
        </div>
        <ul className=" text-textLight flex justify-center flex-col">
          <div className="my-5">
            <Link
              to="About"
              duration={300}
              spy={true}
              smooth={true}
              onClick={() => setMobileNav(false)}
            >
              <p className="code text-neonPink pb-1">01.</p>
              <p>About</p>
            </Link>
          </div>
          <div className="my-5">
            <Link
              to="Work"
              spy={true}
              duration={300}
              smooth={true}
              offset={-20}
              onClick={() => setMobileNav(false)}
            >
              <p className="code text-neonPink pb-1">02.</p>
              <p>Work</p>
            </Link>
          </div>
          <div className="my-5">
            <Link
              to="Interests"
              duration={300}
              spy={true}
              smooth={true}
              onClick={() => setMobileNav(false)}
            >
              <p className="code text-neonPink pb-1">03.</p>
              <p>Interests</p>
            </Link>
          </div>
          <div className="my-5">
            <Link
              to="Contact"
              duration={300}
              spy={true}
              smooth={true}
              onClick={() => setMobileNav(false)}
            >
              <p className="code text-neonPink pb-1">04.</p>
              <p>Contact</p>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
