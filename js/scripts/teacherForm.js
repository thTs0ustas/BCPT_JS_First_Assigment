import teachersHTML from "../HTML_PARTS/teachers.js";
import {
  extractFormValuesAndAddToLocalState,
  stateReducer,
} from "../helperFn/helperFn.js";
import { printState, rootState } from "../state/rootState.js";

const teachersState = {};
let teacherId = 0;
const teacherFn = () => {
  document.getElementById("main").innerHTML = teachersHTML;
  document.getElementById("navbar-toggler").ariaExpanded = false;
  document.getElementById("navbar-toggler").classList.add("collapsed");
  document.getElementById("navbarNavDropdown").classList.remove("show");

  const teachersForm = document.getElementById("teachersForm");
  teachersForm.addEventListener("submit", (e) => {
    e.preventDefault();

    extractFormValuesAndAddToLocalState(teachersState, teachersForm);
    stateReducer(rootState, { ...rootState, teachersState });
    printState();
    teachersForm.reset();
  });
};

export { teachersState, teacherFn };
