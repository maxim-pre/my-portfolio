const FormInput = ({ label, type, name }) => {
  return (
    <div className="flex flex-col my-4">
      <input
        type={type}
        name={name}
        className="p-1 text-xs border-b focus:outline-0 duration-100 placeholder:text-textNormal placeholder:text-xs focus:ring-0"
        placeholder={label}
      />
    </div>
  );
};

export default FormInput;
