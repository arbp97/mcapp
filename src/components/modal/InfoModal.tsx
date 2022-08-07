import "./InfoModal.css";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

type InfoModalProps = {
  isOpen: boolean;
  toggle: () => void;
  title: string;
  message: string;
  link?: string;
};

const InfoModal = ({
  isOpen,
  toggle,
  title,
  message,
  link,
}: InfoModalProps) => {
  const navigate = useNavigate();
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered={true}>
      <ModalBody>
        <ModalHeader>{title}</ModalHeader>
        {message}
        <ModalFooter>
          {link && (
            <Button
              color="danger"
              onClick={() => {
                toggle();
                navigate(link);
              }}
            >
              Ver
            </Button>
          )}
          <Button color="warning" onClick={toggle}>
            Ok
          </Button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
};

export default InfoModal;
