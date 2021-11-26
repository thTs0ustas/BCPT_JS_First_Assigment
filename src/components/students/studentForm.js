import studentHTML from "./studentHTML.js";
import {
  closeNavBar,
  extractFormValuesAndAddToLocalState,
  stateReducer,
  pullCostFromCourse,
  resetOnClick,
  resetForm,
} from "../../helperFn";
import { rootState } from "../../state/rootState.js";

let studentState = {};
const studentFn = () => {
  closeNavBar(studentHTML(JSON.parse(rootState.courseState)));

  document
    .getElementById("courses")
    .addEventListener("change", () =>
      pullCostFromCourse(JSON.parse(rootState.courseState), "courses")
    );

  let studentsForm = document.getElementById("studentsForm");
  let resetButton = document.getElementsByClassName("reset")[0];

  resetOnClick(resetButton, "studentsForm", resetForm);

  studentsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    extractFormValuesAndAddToLocalState(studentState, studentsForm);
    stateReducer("studentState", { ...studentState, studentState });
    document.getElementById("fee").setAttribute("value", "0,00 €");
    studentsForm.reset();
  });
};
export { studentState, studentFn };
