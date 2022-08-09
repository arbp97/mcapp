import { LOCALE, CURRENCY } from "../config";

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

  return [currencyFormatter, dateFormatter] as const;
};

export default useFormat;
