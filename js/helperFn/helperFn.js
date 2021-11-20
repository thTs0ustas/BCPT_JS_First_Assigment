export const stateReducer = (state, currentState = {}) => ({
  ...state,
  currentState,
});

export const extractFormValuesAndAddToLocalState = (state, formElements) =>
  stateReducer(
    state,
    (state[formElements.elements[0].value] = [...formElements.elements].reduce(
      (preVal, currentVal) =>
        !currentVal.id
          ? { ...preVal }
          : { ...preVal, [currentVal.id]: currentVal.value },
      {}
    ))
  );

export const mapTableRows = (state) =>
  [
    Object.keys(state).map(
      (element) =>
        `      
                <tr>
                    <td>${state[element]["first-name"]}</td>
                    <td>${state[element]["last-name"]}</td>
                    <td>${state[element].email}</td>
                    <td>${state[element]["subject"]}</td>
                </tr>
  `
    ),
  ]
    .join("")
    .trim();
