import NavLink from "./navLink";
import Logo from "./logo";
import Button from "../common/button";
const Nav = ({ scroll }) => {
  const navItems = ["About", "Work", "Contact"];
  const scrollClass = scroll == "up" ? "" : "-translate-y-[100%]";
  return (
    <nav
      className={`bg-backgound w-full h-24  flex justify-between items-center pl-12 pr-6 fixed top-0 ease-in duration-300 ${scrollClass}`}
    >
      <Logo />
      <ul className="flex items-center text-textLight text-sm">
        {navItems.map((item, index) => {
          return <NavLink key={index} text={item} number={index + 1} />;
        })}
        <Button label={"Resume"} />
      </ul>
    </nav>
  );
};

export default Nav;
