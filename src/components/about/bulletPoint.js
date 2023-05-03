import { RxTriangleRight } from "react-icons/rx";

const BulletPoint = ({ text }) => {
  return (
    <div className="col-span-3 text-xs flex items-center">
      <span className="text-neonPink mr-2">
        <RxTriangleRight />
      </span>
      <span className="code">{text}</span>
    </div>
  );
};

export default BulletPoint;
