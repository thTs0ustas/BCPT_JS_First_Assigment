import studentHTML from "./studentHTML.js";
import {
  closeNavBar,
  extractFormValuesAndAddToLocalState,
  stateReducer,
  pullCostFromCourse,
  resetOnClick,
  resetForm,
  dateOfBirthValidation,
} from "../../helperFn";
import { rootState } from "../../state/rootState.js";

let studentState = {};
const studentFn = () => {
  // auto close navbar and load HTML part
  closeNavBar(studentHTML(JSON.parse(rootState.courseState)));

  // pulls cost from course so it can be injected in the form
  document
    .getElementById("courses")
    .addEventListener("change", () =>
      pullCostFromCourse(JSON.parse(rootState.courseState), "courses")
    );
  // validate date of birth. Over 18 only!
  document.getElementById("dateOfBirth").addEventListener("change", () => {
    let dateOfBirth = document.getElementById("dateOfBirth").value;
    dateOfBirthValidation(new Date(dateOfBirth));
  });

  let studentsForm = document.getElementById("studentsForm");
  let resetButton = document.getElementsByClassName("reset")[0];

  // custom reset button
  resetOnClick(resetButton, "studentsForm", resetForm);

  // form submission and addition to the state
  studentsForm.addEventListener("submit", (e) => {
    e.preventDefault();
    extractFormValuesAndAddToLocalState(studentState, studentsForm);
    stateReducer("studentState", { ...studentState, studentState });
    document.getElementById("fee").setAttribute("value", "0,00 €");
    studentsForm.reset();
  });
};
export { studentState, studentFn };
