//
// Checking for characters other than numbers
//
const localStringToNumber = (string) =>
  Number(String(string).replace(/\D*/g, "").replace(/00$/, ""));

//
// returning formatted input
// value to plain number on entering input field
//

export const onfocus = (e) => {
  let value = e.target.value;
  e.target.value = value ? localStringToNumber(value) : "";
};

//
// formatting input value to currency type
//
//

export const currencyFormat = (event) => {
  let value = event.target.value;

  event.target.value = value
    ? localStringToNumber(value).toLocaleString("de-DE", {
        maximumFractionDigits: 2,
        currency: "EUR",
        style: "currency",
      })
    : "";
};
