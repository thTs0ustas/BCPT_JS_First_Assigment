import teachersEditFormHTML from "../HTML_PARTS/teachersEditForm.js";
import {
  extractFormValuesAndAddToLocalState,
  index,
  mapTableRows,
  stateReducer,
} from "../helperFn/helperFn.js";
import { printState, rootState } from "../state/rootState.js";
let teacherEditState = rootState.currentState.teachersState;

const teacherEditFormFn = () => {
  //Close nav dropdown when loading HTML
  document.getElementById("main").innerHTML = teachersEditFormHTML;
  document.getElementById("navbar-toggler").ariaExpanded = false;
  document.getElementById("navbar-toggler").classList.add("collapsed");
  document.getElementById("navbarNavDropdown").classList.remove("show");
  document.getElementById("table").innerHTML = mapTableRows(
    rootState.currentState.teachersState
  );
  //
  //Delete Row
  //
  if (document?.getElementById("deleteButton")) {
    document?.getElementById("deleteButton")?.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById(`table`).deleteRow(index - 1);
    });
  }

  //
  // Enable and disable subject dropdown
  //
  const teachersEditForm = document.getElementById("teachersEditForm");
  if (document?.getElementById("editButton")) {
    document.getElementById("editButton").addEventListener("click", (e) => {
      e.preventDefault();
      if (document.getElementById(`editSubj${index}`).disabled) {
        document.getElementById(`editSubj${index}`).removeAttribute("disabled");
      } else {
        document
          .getElementById(`editSubj${index}`)
          .setAttribute("disabled", "true");
        extractFormValuesAndAddToLocalState(teacherEditState, teachersEditForm);

        function asd(cState, inputState) {
          // let id = teachersEditForm.firstChild.getAttribute("id");
        }

        //
        // stateReducer(rootState, {
        //   ...rootState,
        //   teachersState: teachersEditForm,
        // });
        printState();
        console.log(
          document.getElementById("table").rows[index - 1].getAttribute("id")
        );
      }
    });
  }
};

export { teacherEditFormFn };
