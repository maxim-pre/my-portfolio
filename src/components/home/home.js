import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <div className="bg-backgound w-full  flex items-center justify-center px-16 max-w-[1000px] mx-auto mt-10">
      {/* content */}
      <div className="flex flex-col text-left items-start">
        <p className="code text-neonPink text-sm mb-2">Hi, my name is</p>
        <h1 className="text-textLight font-bold text-6xl mb-2">
          Maxim Prestwich
        </h1>
        <h2 className="text-textNormal font-bold text-6xl mb-2">
          I am a software Engineer.
        </h2>
        <p className="text-textNormal w-[70%] mb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <button className="border border-textLight py-2 px-4 mt-2 text-textLight rounded-sm group duration-300 hover:border-neonPink">
          <div className="flex items-center justify-center box-border">
            <div className="px-1">Checkout my work</div>
            <div className="px-2 duration-300 group-hover:rotate-90 group-hover:text-neonPink">
              <BsArrowRight />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Home;
