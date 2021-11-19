export const extractFormValues = (state, formElements) =>
  (state[formElements.elements[0].value] = [...formElements.elements].reduce(
    (val, el) => ({ ...val, [el.id]: el.value }),
    {}
  ));
