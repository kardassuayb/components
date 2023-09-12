import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary rounded>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      Here is an important agreement for you to accept!
    </Modal>
  );

  return (
    <div>
      <div>
        <Button onClick={handleClick} primary rounded>
          Open Modal
        </Button>
      </div>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
