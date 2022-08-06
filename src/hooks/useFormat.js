import { LOCALE, CURRENCY } from "../config.js";

const useFormat = () => {
  const currencyFormatter = () => {
    return new Intl.NumberFormat(LOCALE, {
      style: "currency",
      currency: CURRENCY,
    });
  };
  const dateFormatter = () => {
    return new Intl.DateTimeFormat(LOCALE);
  };

  return [currencyFormatter, dateFormatter];
};

export default useFormat;
