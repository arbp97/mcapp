import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import { css } from "styled-components";
import images from "react-payment-inputs/images";
import { useEffect } from "react";

type PaymentInputsProps = {
  setCardIsValid: (isValid: boolean) => void;
  setCardNumber: (number: string) => void;
  setCardDate: (date: string) => void;
  setCardCVC: (cvc: string) => void;
};

// card input info
const PaymentInputs = ({
  setCardIsValid,
  setCardNumber,
  setCardDate,
  setCardCVC,
}: PaymentInputsProps) => {
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

  useEffect(() => {
    setCardIsValid(wrapperProps.error ? false : true);
  }, [wrapperProps.error, setCardIsValid]);

  // card event handlers
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };

  const handleCardDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDate(e.target.value);
  };

  const handleCardCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardCVC(e.target.value);
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
          errored: css`
            border-color: red;
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
          focused: css`
            border-color: blue;
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
      <svg {...getCardImageProps({ images: images.images })} />
      <input {...getCardNumberProps({ onChange: handleCardNumberChange })} />
      <input {...getExpiryDateProps({ onChange: handleCardDateChange })} />
      <input {...getCVCProps({ onChange: handleCardCVCChange })} />
    </PaymentInputsWrapper>
  );
};

export default PaymentInputs;
