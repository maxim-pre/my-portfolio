import NavLink from "./navLink";
import Logo from "./logo";
import Button from "../common/button";
const Nav = () => {
  const navItems = ["About", "Work", "Contact"];
  return (
    <nav className="bg-backgound w-full h-24 sticky flex justify-between items-center pl-12 pr-6">
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
