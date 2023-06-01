import NavLink from "./navLink";
import Logo from "./logo";
import Button from "../common/button";
import { RiMenu3Fill } from "react-icons/ri";
import SideNav from "./sideNav";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";

const Nav = ({ scroll }) => {
  const navItems = ["About", "Work", "Contact"];
  const scrollClass = scroll === "up" ? "" : "-translate-y-[100%]";
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div>
      <nav
        className={`backdrop-blur-md bg-backgound/80 w-full h-20 z-30 flex justify-between items-center px-8 sm:px-12 fixed top-0 ease-in duration-300 ${scrollClass} shadow-sm`}
      >
        <Link to="Home" spy={true} duration={500} smooth={true}>
          <Logo />
        </Link>
        <ul className="hidden sm:flex items-center text-textLight text-sm">
          {navItems.map((item, index) => {
            return (
              <NavLink
                key={index}
                text={item}
                number={index + 1}
                index={index}
              />
            );
          })}
          <Fade direction="down" delay={300} duration={300} triggerOnce>
            <Button label={"Resume"} />
          </Fade>
        </ul>
        <RiMenu3Fill
          className="sm:hidden text-neonPink text-4xl z-40"
          onClick={() => {
            setMobileNav(true);
          }}
        />
      </nav>
      <SideNav setMobileNav={setMobileNav} mobileNav={mobileNav} />
    </div>
  );
};

export default Nav;
