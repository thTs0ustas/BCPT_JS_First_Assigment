import courseHTML from "../HTML_PARTS/course.js";
import {
  extractFormValuesAndAddToLocalState,
  stateReducer,
} from "../helperFn/helperFn.js";
import { rootState } from "../state/rootState.js";

let courseState = {};

const courseFn = () => {
  document.getElementById("main").innerHTML = courseHTML;
  document.getElementById("navbar-toggler").ariaExpanded = false;
  document.getElementById("navbar-toggler").classList.add("collapsed");
  document.getElementById("navbarNavDropdown").classList.remove("show");

  let courseForm = document.getElementById("courseForm");

  courseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    extractFormValuesAndAddToLocalState(courseState, courseForm);
    stateReducer("courseState", rootState, { ...courseState, courseState });

    courseForm.reset();
  });
};
export { courseState, courseFn };
