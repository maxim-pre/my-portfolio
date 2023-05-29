import { RxTriangleRight } from "react-icons/rx";

const BulletPoint = ({ text }) => {
  return (
    <div className="sm:col-span-3 col-span-4 text-xs flex items-center sm:justify-start justify-start mb-1">
      <span className="text-neonPink mr-2">
        <RxTriangleRight />
      </span>
      <span className="code text-textLight">{text}</span>
    </div>
  );
};

export default BulletPoint;
