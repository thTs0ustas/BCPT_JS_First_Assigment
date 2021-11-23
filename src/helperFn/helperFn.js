import { rootState } from "../state/rootState.js";

export const stateReducer = (stateKey, state, currentState = {}) => {
  rootState.setItem(stateKey, JSON.stringify({ ...currentState[stateKey] }));
};

export const extractFormValuesAndAddToLocalState = (state, formElements) =>
  (state[formElements.elements[0].value] = [...formElements.elements].reduce(
    (preVal, currentVal) =>
      !currentVal.id
        ? { ...preVal }
        : { ...preVal, [currentVal.id]: currentVal.value },
    {}
  ));

export const deleteRow = (id, state) => {
  try {
    const table = document.getElementById("table");

    let rowCount = table.rows.length;
    for (let i = 0; i < rowCount; i++) {
      const row = table.rows[i];
      const rowObj = row.cells[4].childNodes[3];
      const rowObjName = row.cells[0].id;

      if (rowObj.id === id) {
        table.deleteRow(i);
        // eslint-disable-next-line no-unused-vars
        const { [rowObjName]: remove, ...rest } = state;
        rowCount--;
        return rest;
      }
    }
  } catch (e) {
    console.error(e);
  }
};

export const pullDataFromCourse = (state, id) => {
  let selectedCourse = document?.getElementById(id);
  let value = selectedCourse?.options[selectedCourse.selectedIndex].value;
  for (let prop in state[value]) {
    console.log(state[value][prop]);
    let elementProp = document?.getElementById(prop);

    if (prop !== "stream" && prop !== "type")
      elementProp?.setAttribute("value", state[value][prop]);
    else {
      [...elementProp].forEach((node, i) => {
        if (node && node.value === state[value][prop] && elementProp[i]) {
          console.log(elementProp[i].value);
          elementProp[i].selected = "selected";
        }
      });
    }
  }
};
