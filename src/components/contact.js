import Button from "./common/button";
import Modal from "react-modal";
import { useState } from "react";
import EmailForm from "./emailForm";
import { Fade } from "react-awesome-reveal";
const Contact = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "#fff",
      width: "50%",
      border: "none",
    },
  };

  return (
    <div className="flex flex-col justify-between h-screen " id="Contact">
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
        <Button label={"Say Hello"} onClick={openModal} />
      </div>
      <p className="text-textNormal text-xs pb-4 code">
        Developed by Maxim Prestwich
      </p>
      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        style={customStyles}
        overlayClassName="Overlay"
      >
        <EmailForm handleClose={closeModal} />
      </Modal>
    </div>
  );
};

export default Contact;
