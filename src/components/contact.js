import Button from "./common/button";
const Contact = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="max-w-[400px] mx-auto flex justify-center items-center flex-col h-[43rem]">
        <h2 className="code text-neonPink ">03. Contact</h2>
        <h3 className="text-textNormal text-4xl">Let's get in touch!</h3>
        <p className="text-textNormal text-xs my-6">
          I thought I had it all together, but I was led astray the day you
          walked away. You were the clock that was tickin' in my home. Changed
          my state of mind. Love's so hard to find I thought I had it all
          together, but I was led astray the day you walked away. You were the
          clock that was tickin' in my home. Changed my state of mind. Love's so
          hard to find
        </p>
        <Button label={"Say Hello"} />
      </div>
      <p className="text-textNormal text-xs pb-4 code">
        Developed by Maxim Prestwich
      </p>
    </div>
  );
};

export default Contact;
