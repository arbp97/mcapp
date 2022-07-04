import "./Checkout.css";
import UserForm from "../../form/UserForm.js";
import McButton from "../../buttons/McButton.js";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import { css } from "styled-components";
import images from "react-payment-inputs/es/images/index.js";

// card input info
const PaymentInputs = (props) => {
  const ERROR_MESSAGES = {
    emptyCardNumber: "El número de la tarjeta es inválido",
    invalidCardNumber: "El número de la tarjeta es inválido",
    emptyExpiryDate: "La fecha de expiración es inválida",
    monthOutOfRange: "El mes de expiración debe estar entre 01 y 12",
    yearOutOfRange: "El año de expiración no puede estar en el pasado",
    dateOutOfRange: "La fecha de expiración no puede estar en el pasado",
    invalidExpiryDate: "La fecha de expiración es inválida",
    emptyCVC: "El código de seguridad es inválido",
    invalidCVC: "El código de seguridad es inválido",
  };

  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs({
    errorMessages: ERROR_MESSAGES,
  });

  const setCardIsValid = props.setCardIsValid;

  useEffect(() => {
    setCardIsValid(wrapperProps.error ? false : true);
  }, [wrapperProps.error, setCardIsValid]);

  // card event handlers
  const handleCardNumberChange = (e) => {
    props.setCardNumber(e.target.value);
  };

  const handleCardDateChange = (e) => {
    props.setCardDate(e.target.value);
  };

  const handleCardCVCChange = (e) => {
    props.setCardCVC(e.target.value);
  };

  return (
    <PaymentInputsWrapper
      {...wrapperProps}
      styles={{
        fieldWrapper: {
          base: css`
            margin-bottom: 1rem;
            width: fit-content;
          `,
        },
        inputWrapper: {
          base: css`
            border-color: green;
            height: 40px;
          `,
          errored: css`
            border-color: red;
          `,
        },
        input: {
          base: css`
            color: green;
            font-size: 14px;
          `,
          errored: css`
            color: red;
          `,
          cardNumber: css`
            width: 15rem;
          `,
          expiryDate: css`
            width: 10rem;
          `,
          cvc: css`
            width: 5rem;
          `,
        },
        errorText: {
          base: css`
            margin-top: 10px;
            color: red;
            font-size: 12px;
          `,
        },
      }}
    >
      <svg {...getCardImageProps({ images })} />
      <input {...getCardNumberProps({ onChange: handleCardNumberChange })} />
      <input {...getExpiryDateProps({ onChange: handleCardDateChange })} />
      <input {...getCVCProps({ onChange: handleCardCVCChange })} />
    </PaymentInputsWrapper>
  );
};

const Detail = (props) => {
  const addressTitle = props.order.isDelivery
    ? "Domicilio"
    : "Dirección de retiro en el local";
  const [selectedMethod, setSelectedMethod] = useState("EFECTIVO");
  // card information
  const [cardNumber, setCardNumber] = useState();
  const [cardDate, setCardDate] = useState();
  const [cardCVC, setCardCVC] = useState();
  // card validation check
  const [cardIsValid, setCardIsValid] = useState(false);

  return (
    <div className="Detail">
      <div className="detail-box">
        <h1 className="title">
          <strong>Detalle del pedido</strong>
        </h1>
        <div className="address">
          <h3>
            <strong>{addressTitle}</strong>
          </h3>
          <h3>{props.order.address}</h3>
        </div>
        <div className="items">
          <h3>
            <strong>Resumen</strong>
          </h3>
          {Object.entries(props.order.items).map(([key, value]) => {
            return (
              <div className="item" key={key}>
                <p className="name">{value.name}</p>
                <p>{"x" + value.quantity}</p>
                <p>{"$" + value.pricePerUnit * value.quantity}</p>
              </div>
            );
          })}
        </div>
        <Form>
          <FormGroup tag="fieldset">
            <h1>
              <strong>Método de pago</strong>
            </h1>
            <div className="radio-group">
              <FormGroup check>
                <Label check className="pay-method-label">
                  <Input
                    type="radio"
                    defaultChecked={true}
                    name="paymethod"
                    className="pay-method-radio"
                    onClick={() => setSelectedMethod("EFECTIVO")}
                  />
                  EFECTIVO
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check className="pay-method-label">
                  <Input
                    type="radio"
                    name="paymethod"
                    className="pay-method-radio"
                    onClick={() => setSelectedMethod("DEBITO")}
                  />
                  DEBITO
                </Label>
              </FormGroup>
            </div>
          </FormGroup>
        </Form>
        {selectedMethod === "DEBITO" && (
          <PaymentInputs
            setCardCVC={setCardCVC}
            setCardDate={setCardDate}
            setCardNumber={setCardNumber}
            setCardIsValid={setCardIsValid}
          />
        )}
      </div>
      <div className="detail-total">
        <p>Total</p>
        <p>{"$ " + props.order.total}</p>
      </div>
      <McButton
        content={"Enviar pedido"}
        onClick={() => {
          if (selectedMethod === "DEBITO" && !cardIsValid) {
            alert("Invalid card information");
          } else {
            props.confirmOrder(selectedMethod, {
              cardNumber,
              cardDate,
              cardCVC,
            });
          }
        }}
        fixed
      />
    </div>
  );
};

const Checkout = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  // user validation check
  const [isValidated, setIsValidated] = useState(false);

  useEffect(() => {
    // exit if there is no order in the state
    if (!location.state) navigate("/");

    const user = JSON.parse(localStorage.getItem("user"));
    if (user) setIsValidated(true);
  }, [navigate, location, setIsValidated]);

  const confirmOrder = (payMethod, cardInfo) => {
    let order = location.state.order;
    order.confirmed = true;
    order.paymentType = payMethod;

    console.log(cardInfo);

    localStorage.setItem("order", JSON.stringify(order));
    props.setIsOrderConfirmed(true);

    navigate("/");
  };

  return (
    <div className="Checkout">
      {!isValidated && <UserForm setIsValidated={setIsValidated} />}
      {isValidated && (
        <Detail
          order={location.state.order}
          total={location.state.total}
          confirmOrder={confirmOrder}
        />
      )}
    </div>
  );
};

export default Checkout;
