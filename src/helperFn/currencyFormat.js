const localStringToNumber = (string) =>
  Number(String(string).replace(/[^0-9.-]+/g, ""));

// export const onfocus = (e) => {
//   let value = e.target.value;
//   e.target.value = value ? localStringToNumber(value) : "";
// };

export const currencyFormat = (event) => {
  let value = event.target.value;

  event.target.value =
    value || value === 0
      ? localStringToNumber(value).toLocaleString("de-DE", {
          maximumFractionDigits: 2,

          currency: "EUR",

          style: "currency",
        })
      : "";
};
