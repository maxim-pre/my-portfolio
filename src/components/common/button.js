const Button = ({ label }) => {
  return (
    <div className="mx-6 rounded bg-neonPink">
      <button className=" border rounded py-2 px-4 border-lighttext-neonPink text-neonPink hover:-translate-x-1 hover:-translate-y-1 duration-300 bg-backgound text-xs">
        {label}
      </button>
    </div>
  );
};

export default Button;
