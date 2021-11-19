import studentHTML from "../HTML_PARTS/student.js";
import {
  extractFormValuesAndAddToState,
  stateReducer,
} from "../helperFn/helperFn.js";
import { printState, rootState } from "../state/rootState.js";

let studentState = {};

const studentFn = () => {
  document.getElementById("main").innerHTML = studentHTML;
  document.getElementById("navbar-toggler").ariaExpanded = false;
  document.getElementById("navbar-toggler").classList.add("collapsed");
  document.getElementById("navbarNavDropdown").classList.remove("show");

  let studentsForm = document.getElementById("studentsForm");
  studentsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    extractFormValuesAndAddToState(studentState, studentsForm);
    stateReducer(rootState, { ...rootState, studentState });
    printState();
  });
};
export { studentState, studentFn };