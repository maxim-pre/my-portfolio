const TextLink = ({ label, url }) => {
  return (
    <a className="relative" target="_blank" href={url}>
      <span className="after:content-[''] after:bg-neonPink after:h-[1px] after:w-[0%] after:left-0 after:-bottom-[1px] after:rounded-xl after:absolute after:duration-300 after:hover:w-[100%] text-neonPink cursor-pointer">
        {label}
      </span>
    </a>
  );
};

export default TextLink;
