import teachersEditFormHTML from "../HTML_PARTS/teachersEditForm.js";
import {
  extractFormValuesAndAddToLocalState,
  mapTableRows,
  stateReducer,
} from "../helperFn/helperFn.js";
import { printState, rootState } from "../state/rootState.js";
let teacherEditState = rootState.currentState.teachersState;

const teacherEditFormFn = () => {
  document.getElementById("main").innerHTML = teachersEditFormHTML;
  document.getElementById("navbar-toggler").ariaExpanded = false;
  document.getElementById("navbar-toggler").classList.add("collapsed");
  document.getElementById("navbarNavDropdown").classList.remove("show");
  document.getElementById("table").innerHTML = mapTableRows(
    rootState.currentState.teachersState
  );

  const teachersEditForm = document.getElementById("teachersEditForm");
  teachersEditForm.addEventListener("submit", (e) => {
    e.preventDefault();
    extractFormValuesAndAddToLocalState(teacherEditState, teachersEditForm);

    stateReducer(rootState, {
      ...rootState,
      teachersState: teachersEditForm,
    });
    printState();
  });
};

export { teacherEditFormFn };
