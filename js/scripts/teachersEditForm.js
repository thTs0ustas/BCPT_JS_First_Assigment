import teachersEditFormHTML from "../HTML_PARTS/teachersEditForm.js";
import { deleteRow, stateReducer } from "../helperFn/helperFn.js";
import { rootState } from "../state/rootState.js";
import { mapTableRows } from "../HTML_injection_fn/teacherEditInjection.js";

const teacherEditFormFn = () => {
  //Close nav dropdown when loading HTML
  document.getElementById("main").innerHTML = teachersEditFormHTML;
  document.getElementById("navbar-toggler").ariaExpanded = false;
  document.getElementById("navbar-toggler").classList.add("collapsed");
  document.getElementById("navbarNavDropdown").classList.remove("show");
  let table = document.getElementById("table");

  let [htmlPart, index] = mapTableRows(JSON.parse(rootState.teachersState));
  table.innerHTML = htmlPart;

  //
  //Delete Row
  //
  for (let i = 0; i <= index; i++) {
    document.getElementById(`delete${i}`)?.addEventListener("click", () => {
      let remainingRows = deleteRow(
        `delete${i}`,
        JSON.parse(rootState.teachersState)
      );

      stateReducer("teachersState", rootState, {
        ...JSON.parse(rootState.teachersState),
        teachersState: remainingRows,
      });

      console.log(remainingRows);
    });
  }

  //
  //  edit subject tab
  //

  for (let i = 0; i <= index; i++) {
    document.getElementById(`editButton${i}`)?.addEventListener("click", () => {
      let selectCell = table.rows[i].cells[3].childNodes[1].disabled;
      if (selectCell) table.rows[i].cells[3].childNodes[1].disabled = false;
      else {
        table.rows[i].cells[3].childNodes[1].disabled = true;

        let rowObjName = table.rows[i].cells[0].id;
        let subjName = table.rows[i].cells[3].childNodes[1].name;
        let subjVal = table.rows[i].cells[3].childNodes[1].value;
        let localState = JSON.parse(rootState.teachersState);

        stateReducer("teachersState", localState, {
          teachersState: {
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
export { teacherEditFormFn };
