const SectionHeader = ({ number, text }) => {
  return (
    <div className="w-full flex justify-start items-center">
      <h1 className="text-textLight text-2xl font-bold">
        <span className="text-neonPink mr-2 text-lg">0{number}.</span> {text}
      </h1>
      <div className="w-80 bg-[#112240] h-[1px] ml-4"></div>
    </div>
  );
};

export default SectionHeader;
