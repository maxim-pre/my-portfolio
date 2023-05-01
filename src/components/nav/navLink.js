const NavLink = ({ text, number }) => {
  return (
    <li className="mx-4 cursor-pointer hover:text-neonPink duration-500">
      <span className="text-neonPink text-xs code ">0{number}. </span>
      {text}
    </li>
  );
};

export default NavLink;
