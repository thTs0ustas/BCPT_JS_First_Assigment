import studentHTML from "../HTML_PARTS/student.js";
import {
  extractFormValuesAndAddToLocalState,
  stateReducer,
} from "../helperFn/helperFn.js";
import { rootState } from "../state/rootState.js";

let studentState = {};
const studentFn = () => {
  document.getElementById("main").innerHTML = studentHTML(
    JSON.parse(rootState.courseState)
  );
  document.getElementById("navbar-toggler").ariaExpanded = false;
  document.getElementById("navbar-toggler").classList.add("collapsed");
  document.getElementById("navbarNavDropdown").classList.remove("show");

  let pullCostFromCourse = (state, id) => {
    let selectedCourse = document.getElementById(id);
    let value = selectedCourse.options[selectedCourse.selectedIndex].value;
    console.log(value);
    document
      .getElementById("fee")
      .setAttribute("value", state[value]?.cost || "0");
  };

  document
    .getElementById("courses")
    .addEventListener("change", () =>
      pullCostFromCourse(JSON.parse(rootState.courseState), "courses")
    );

  let studentsForm = document.getElementById("studentsForm");

  studentsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    extractFormValuesAndAddToLocalState(studentState, studentsForm);
    stateReducer("studentState", { ...studentState, studentState });
    document.getElementById("fee").setAttribute("value", "0,00 €");
    studentsForm.reset();
  });
};
export { studentState, studentFn };
