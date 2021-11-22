import teachersEditFormHTML from "../HTML_PARTS/teachersEditForm.js";
import { deleteRow, mapTableRows, stateReducer } from "../helperFn/helperFn.js";
import { rootState } from "../state/rootState.js";

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
    document.getElementById(`editButton${i}`)?.addEventListener("click", () => {
      let remainingRows = deleteRow(
        `editButton${i}`,
        JSON.parse(rootState.teachersState)
      );

      stateReducer("teachersState", rootState, {
        ...JSON.parse(rootState.teachersState),
        teachersState: remainingRows,
      });

      console.log(remainingRows);
    });
  }
};
export { teacherEditFormFn };
