const SectionHeader = ({ number, text }) => {
  return (
    <div className="w-full flex justify-start items-center relative">
      <h1 className="text-textLight text-2xl font-bold">
        <span className="text-neonPink mr-2 text-lg">0{number}.</span> {text}
      </h1>
      <div className="bg-cardColor h-[1px] ml-4 flex-grow"></div>
    </div>
  );
};

export default SectionHeader;
