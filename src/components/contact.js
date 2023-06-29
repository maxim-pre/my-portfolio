import Button from "./common/button";
import Modal from "react-modal";
import { useState } from "react";
import EmailForm from "./emailForm";
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
        <h3 className="text-textLight text-4xl">Let's get in touch!</h3>
        <p className="text-textNormal text-sm my-6">
          I'm currently looking for new opportunities so my inbox is always
          open! Whether you have any questions or just want to say hi please
          feel free to drop me an email.
        </p>
        <Button label={"Send an Email"} onClick={openModal} />
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
