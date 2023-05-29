const Button = ({ label, onClick }) => {
  return (
    <div className=" rounded bg-neonPink" onClick={onClick}>
      <button className=" border rounded py-2 px-4 text-neonPink hover:-translate-x-1 hover:-translate-y-1 duration-300 bg-backgound text-xs">
        {label}
      </button>
    </div>
  );
};

export default Button;
