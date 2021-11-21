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

export let index = 0;
export const mapTableRows = (state) =>
  [
    Object.keys(state).map((element) => {
      index++;
      return `       <tr id="tr_${index - 1}">
                    <td id="${state[element]["first-name"]}">${
        state[element]["first-name"]
      }</td>
                    <td>${state[element]["last-name"]}</td>
                    <td>${state[element].email}</td>
                    <td>
                        <select id="editSubj${index}" disabled required>
                            <option value="Subject" selected name="subject">${
                              state[element]["subject"]
                            }</option>
                             <option value="${
                               subjects.javascript
                             }" name="subject">${subjects.javascript}</option>
                             <option value="${subjects.java}" name="subject">${
        subjects.java
      }</option>
                             <option value="${subjects["C#"]}" name="subject">${
        subjects["C#"]
      }</option>
                             <option value="${
                               subjects.python
                             }" name="subject">${subjects.python}</option>
                  </select>
                  </td>
                  <td>
                        <button id="editButton" type="button"><img src="../../assets/edit-button.png" alt=""></button>
                        <button type="button"
                       
                        ><img id="deleteButton" src="../../assets/trash.png" alt=""></button>
                    </td>
                </tr>
  `;
    }),
  ]
    .join("")
    .replace(/,/g, "");
