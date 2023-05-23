import NavLink from "./navLink";
import Logo from "./logo";
import Button from "../common/button";
import { RiMenu3Fill } from "react-icons/ri";

const Nav = ({ scroll }) => {
  const navItems = ["About", "Work", "Contact"];
  const scrollClass = scroll == "up" ? "" : "-translate-y-[100%]";
  return (
    <nav
      className={`backdrop-blur-md bg-backgound/80 w-full h-24 z-30 flex justify-between items-center px-8 sm:px-12 fixed top-0 ease-in duration-300 ${scrollClass} shadow-sm`}
    >
      <Logo />
      <ul className="hidden sm:flex items-center text-textLight text-sm">
        {navItems.map((item, index) => {
          return <NavLink key={index} text={item} number={index + 1} />;
        })}
        <Button label={"Resume"} />
      </ul>
      <RiMenu3Fill className="sm:hidden text-neonPink text-4xl z-40 " />
    </nav>
  );
};

export default Nav;
