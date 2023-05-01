import NavLink from "./navLink";
import Logo from "./logo";
const Nav = () => {
  const navItems = ["About", "Work", "Contact"];
  return (
    <nav className="bg-backgound w-full h-24 sticky flex justify-between items-center pl-12 pr-6">
      <Logo />
      <ul className="flex items-center text-textLight text-sm">
        {navItems.map((item, index) => {
          return <NavLink key={index} text={item} number={index + 1} />;
        })}
        <div className="mx-6 rounded bg-neonPink">
          <button className=" border rounded py-2 px-4 border-lighttext-neonPink text-neonPink hover:-translate-x-1 hover:-translate-y-1 duration-300 bg-backgound">
            Resume
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
