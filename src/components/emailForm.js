import emailjs from "emailjs-com";
import { TfiClose } from "react-icons/tfi";
import FormInput from "./common/formInput";

const EmailForm = ({ handleClose }) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zhumjpx",
        "template_90d5omd",
        e.target,
        "MERhhN2bKzL-pyoJ8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form onSubmit={sendEmail} className="flex flex-col">
      <div className="flex justify-between items-center">
        <h1 className="text-sm font-bold">Email form</h1>
        <TfiClose
          className=" text-neonPink font-bold cursor-pointer"
          onClick={handleClose}
        />
      </div>
      <FormInput label={"Name"} type={"text"} name={"name"} />
      <FormInput label={"Your Email"} type={"email"} name={"email"} />
      <FormInput label={"Subject"} type={"text"} name={"subject"} />

      <textarea
        name="message"
        rows={5}
        placeholder="Message"
        className="border-b box-border p-1 focus:outline-0 duration-100 placeholder:text-textNormal placeholder:text-xs text-xs focus:ring-0"
      />
      <input
        type="submit"
        value="Send"
        className="border border-neonPink mt-4 bg-neonPink text-[#fff] text-xs hover:cursor-pointer code font-bold"
      />
    </form>
  );
};

export default EmailForm;
