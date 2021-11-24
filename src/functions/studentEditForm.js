import studentEditFormHTML from "../HTML_PARTS/studentEditForm.js";
import { deleteRow, stateReducer } from "../helperFn/helperFn.js";
import { rootState } from "../state/rootState.js";
import { mapTableStudentRows } from "../HTML_injection_fn/studentEditInjection.js";

const studentEditFormFn = () => {
  //Close nav dropdown when loading HTML
  document.getElementById("main").innerHTML = studentEditFormHTML;
  document.getElementById("navbar-toggler").ariaExpanded = false;
  document.getElementById("navbar-toggler").classList.add("collapsed");
  document.getElementById("navbarNavDropdown").classList.remove("show");
  let table = document.getElementById("table");

  let [htmlPart, index] = mapTableStudentRows(
    JSON.parse(rootState.studentState),
    JSON.parse(rootState.courseState)
  );
  table.innerHTML = htmlPart;

  //
  //Delete Row
  //
  for (let i = 0; i <= index; i++) {
    document.getElementById(`delete${i}`)?.addEventListener("click", () => {
      let remainingRows = deleteRow(
        `delete${i}`,
        JSON.parse(rootState.studentState)
      );

      stateReducer("studentState", rootState, {
        ...JSON.parse(rootState.studentState),
        studentState: remainingRows,
      });
    });
  }

  //
  //  edit subject tab
  //

  for (let i = 0; i <= index; i++) {
    document.getElementById(`editButton${i}`)?.addEventListener("click", () => {
      let selectCell = table.rows[i].cells[2].childNodes[1].disabled;
      if (selectCell) table.rows[i].cells[2].childNodes[1].disabled = false;
      else {
        table.rows[i].cells[2].childNodes[1].disabled = true;

        let rowObjName = table.rows[i].cells[0].id;
        let subjName = table.rows[i].cells[2].childNodes[1].name;
        let subjVal = table.rows[i].cells[2].childNodes[1].value;
        let localState = JSON.parse(rootState.teachersState);

        stateReducer("studentState", localState, {
          studentState: {
            ...localState,
            [rowObjName]: {
              ...localState[rowObjName],
              [subjName]: subjVal,
            },
          },
        });
      }
    });
  }
};
export { studentEditFormFn };