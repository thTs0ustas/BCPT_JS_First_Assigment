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

// const deleteRow = (index, state, partToDelete, event) => {
//   event?.preventDefault();
//   delete state[partToDelete];
//   let trIndex = document.getElementsByTagName("tr")[index].rowIndex;
//
//   document.getElementById("hTable").deleteRow(trIndex);
// };

let index = 0;
export const mapTableRows = (state) =>
  [
    Object.keys(state).map((element) => {
      index++;
      console.log(index);
      return `      
                <tr class="tr_${index - 1}">
                    <td>${state[element]["first-name"]}</td>
                    <td>${state[element]["last-name"]}</td>
                    <td>${state[element].email}</td>
                    <td>${state[element]["subject"]}</td>
                    <td>
                        <button onclick="${(e) =>
                          e.preventDefault()}"><img src="../../assets/edit-button.png" alt=""></button>
                        <button 
                        
                        ><img src="../../assets/trash.png" alt=""></button>
                    </td>
                </tr>
  `;
    }),
  ]
    .join("")
    .replace(/,/g, "")
    .trim();
