import studentEditFormHTML from "./studentEditFormHTML.js";
import { deleteRow, deleteRowFn, stateReducer } from "../../helperFn";
import { rootState } from "../../state/rootState.js";
import { mapTableStudentRows } from "../../HTML_injection_fn";
import { individualStudentFn } from "../individualStudent";

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
  const deleteRowOptions = {
    callback: deleteRow,
    buttonId: "delete",
    eventType: "click",
    state: JSON.parse(rootState.studentState),
    stateKey: "studentState",
  };

  deleteRowFn(index, deleteRowOptions, 4);

  for (let i = 0; i <= index; i++) {
    document.getElementById(`editButton${i}`)?.addEventListener("click", () => {
      let selectCell = table.rows[i].cells[2].childNodes[1].disabled;
      if (selectCell) table.rows[i].cells[2].childNodes[1].disabled = false;
      else {
        table.rows[i].cells[2].childNodes[1].disabled = true;

        let rowObjName = table.rows[i].cells[0].id;
        let subjName = table.rows[i].cells[2].childNodes[1].name.split(" ")[0];
        let subjVal = table.rows[i].cells[2].childNodes[1].value;
        let localState = JSON.parse(rootState.studentState);
        console.log(rowObjName);
        stateReducer("studentState", {
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
  table.querySelectorAll("tr").forEach((tr) =>
    tr.cells[0].addEventListener("click", () =>
      individualStudentFn({
        key: tr.cells[0].id,
        state: JSON.parse(rootState.studentState),
      })
    )
  );
};
export { studentEditFormFn };
