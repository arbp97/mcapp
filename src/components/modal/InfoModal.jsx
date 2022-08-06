import "./InfoModal.css";
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const InfoModal = (props) => {
  const navigate = useNavigate();
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggle} centered={true}>
      <ModalBody>
        <ModalHeader>{props.title}</ModalHeader>
        {props.message}
        <ModalFooter>
          {props.link && (
            <Button
              color="danger"
              onClick={() => {
                props.toggle();
                navigate(props.link);
              }}
            >
              Ver
            </Button>
          )}
          <Button color="warning" onClick={props.toggle}>
            Ok
          </Button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
};

export default InfoModal;
