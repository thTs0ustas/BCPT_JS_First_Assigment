import subjects from "../scripts";

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

export const extractTableValuesAndAddToLocalState = (state, tableRowInputs) =>
  stateReducer(
    state,
    (state[tableRowInputs.elements[0].value] = [
      ...tableRowInputs.elements,
    ].reduce(
      (preVal, currentVal) =>
        !currentVal.id
          ? { ...preVal }
          : { ...preVal, [currentVal.id]: currentVal.value },
      {}
    ))
  );

export const deleteRow = (id, state) => {
  try {
    let table = document.getElementById("table");

    let rowCount = table.rows.length;
    for (let i = 0; i < rowCount; i++) {
      let row = table.rows[i];
      let rowObj = row.cells[4].childNodes[1];
      let rowObjName = row.cells[0].id;

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

export const mapTableRows = (state) => {
  let table = document.getElementById("table");
  if (table?.rows)
    return table?.rows
      .map((_, i) => [
        Object.keys(state).map((element) => {
          return `<tr id="tr_${i}">
                    <td id="${state[element]["first-name"]}">${state[element]["first-name"]}</td>
                    <td>${state[element]["last-name"]}</td>
                    <td>${state[element].email}</td>
                    <td>
                        <select id="editSubj${i}" disabled required>
                            <option value="Subject" selected name="subject">${state[element]["subject"]}</option>
                             <option value="${subjects.javascript}" name="subject">${subjects.javascript}</option>
                             <option value="${subjects.java}" name="subject">${subjects.java}</option>
                             <option value="${subjects["C#"]}" name="subject">${subjects["C#"]}</option>
                             <option value="${subjects.python}" name="subject">${subjects.python}</option>
                  </select>
                  </td>
                  <td>
                        <button id="editButton${i}" type="button"><img src="../../assets/edit-button.png" alt=""></button>
                        
                    </td>
                </tr>
  `;
        }),
      ])
      .join("")
      .replace(/,/g, "");
  else return [];
};
