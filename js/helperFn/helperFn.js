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

// export const extractTableValuesAndAddToLocalState = (state, tableRowInputs) =>
//   stateReducer(
//     state,
//     (state[tableRowInputs.elements[0].value] = [
//       ...tableRowInputs.elements,
//     ].reduce(
//       (preVal, currentVal) =>
//         !currentVal.id
//           ? { ...preVal }
//           : { ...preVal, [currentVal.id]: currentVal.value },
//       {}
//     ))
//   );

export const deleteRow = (id, state) => {
  try {
    let table = document.getElementById("table");

    let rowCount = table.rows.length;
    for (let i = 0; i < rowCount; i++) {
      let row = table.rows[i];
      let rowObj = row.cells[4].childNodes[3];
      let rowObjName = row.cells[0].id;
      console.log(rowObj);
      if (rowObj.id === id) {
        table.deleteRow(i);
        const { [rowObjName]: remove, ...rest } = state;
        rowCount--;
        return rest;
      }
    }
  } catch (e) {
    console.error(e);
  }
};
