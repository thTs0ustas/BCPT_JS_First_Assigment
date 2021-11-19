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
