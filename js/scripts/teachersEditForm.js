import teachersEditFormHTML from "../HTML_PARTS/teachersEditForm.js";
import { deleteRow, mapTableRows, stateReducer } from "../helperFn/helperFn.js";
import { rootState } from "../state/rootState.js";
let teacherEditState = rootState.currentState.teachersState;

const teacherEditFormFn = () => {
  let [htmlPart, rowIndex] = mapTableRows(rootState.currentState.teachersState);
  console.log(teacherEditState);
  //Close nav dropdown when loading HTML
  document.getElementById("main").innerHTML = teachersEditFormHTML;
  document.getElementById("navbar-toggler").ariaExpanded = false;
  document.getElementById("navbar-toggler").classList.add("collapsed");
  document.getElementById("navbarNavDropdown").classList.remove("show");
  let table = document.getElementById("table");
  table.innerHTML = htmlPart;
  //
  //Delete Row
  //
  table?.rows.forEach((_, i) =>
    document.getElementById(`editButton${i}`).addEventListener("click", () => {
      let remainingRows = deleteRow(
        `editButton${rowIndex}`,
        rootState.currentState.teachersState
      );

      stateReducer(rootState, {
        ...rootState,
        teachersState: remainingRows,
      });
      console.log(remainingRows);
    })
  );
};
export { teacherEditFormFn };
//
// Enable and disable subject dropdown
//

// const teachersEditForm = document.getElementById("teachersEditForm");
// if (document?.getElementById(`editButton${rowIndex}`)) {
//   document
//     .getElementById(`editButton${rowIndex}`)
//     .addEventListener("click", (e) => {
//       e.preventDefault();
//       if (document.getElementById(`editSubj${rowIndex}`).disabled) {
//         document
//           .getElementById(`editSubj${rowIndex}`)
//           .removeAttribute("disabled");
//       } else {
//         document
//           .getElementById(`editSubj${rowIndex}`)
//           .setAttribute("disabled", "true");
//         extractFormValuesAndAddToLocalState(
//           teacherEditState,
//           teachersEditForm
//         );
//       }
//     });
// }

// function asd(cState, inputState) {
//   // let id = teachersEditForm.firstChild.getAttribute("id");
// }

//
// stateReducer(rootState, {
//   ...rootState,
//   teachersState: teachersEditForm,
// });
// printState();
// console.log(
//   document.getElementById("table").rows[rowIndex - 1].getAttribute("id")
// );
