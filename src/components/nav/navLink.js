import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";

const NavLink = ({ text, number, index }) => {
  return (
    <Fade direction="down" delay={100 * index} duration={300} triggerOnce>
      <Link to={text} spy={true} smooth={true} offset={-20} duration={500}>
        <li className="mx-4 cursor-pointer hover:text-neonPink duration-500">
          <span className="text-neonPink text-xs code ">0{number}. </span>
          {text}
        </li>
      </Link>
    </Fade>
  );
};

export default NavLink;
