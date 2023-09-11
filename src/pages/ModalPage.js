import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      <div>
        <Button onClick={handleClick} primary rounded>
          Open Modal
        </Button>
      </div>
      {showModal && <Modal onClose={setShowModal} />}
    </div>
  );
};

export default ModalPage;
