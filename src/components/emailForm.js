import emailjs from "emailjs-com";
import { TfiClose } from "react-icons/tfi";
import FormInput from "./common/formInput";
import { toast } from "react-toastify";

const EmailForm = ({ handleClose }) => {
  const sendEmail = (e) => {
    e.preventDefault();
    const email = toast.loading("sending email....");

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
          toast.update(email, {
            render: "Email recieved!",
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
        },
        (error) => {
          console.log(error.text);
          toast.update(email, {
            render: "Something went wrong",
            type: "error",
            isLoading: false,
            autoClose: 3000,
          });
        }
      );
  };

  const notify = () => {
    toast.promise(sendEmail, {
      pending: "Sending email",
      success: "Email recieved!",
      error: "Something went wrong",
    });
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
        className="border border-neonPink mt-4 bg-neonPink text-[#fff] text-xs hover:cursor-pointer code font-bold py-1"
      />
    </form>
  );
};

export default EmailForm;
