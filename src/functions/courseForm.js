import courseHTML from "../HTML_PARTS/course.js";
import {
  extractFormValuesAndAddToLocalState,
  pullDataFromCourse,
  stateReducer,
} from "../helperFn/helperFn.js";
import { rootState } from "../state/rootState.js";
import { currencyFormat } from "../helperFn/currencyFormat";

let courseState = {};
let conditional = false;

const courseFn = () => {
  let changeCondAndRef = () => {
    conditional = !conditional;
    courseFn();
  };
  document.getElementById("main").innerHTML = courseHTML(
    JSON.parse(rootState.courseState),
    conditional
  );
  document.getElementById("navbar-toggler").ariaExpanded = false;
  document.getElementById("navbar-toggler").classList.add("collapsed");
  document.getElementById("navbarNavDropdown").classList.remove("show");

  document.getElementById("addNew").addEventListener("click", () => {
    changeCondAndRef();
  });
  document?.getElementById("editForm")?.addEventListener("click", () => {
    changeCondAndRef();
    pullDataFromCourse(JSON.parse(rootState.courseState), "courses");
  });
  document
    ?.getElementById("courses")
    ?.addEventListener("change", () =>
      pullDataFromCourse(JSON.parse(rootState.courseState), "courses")
    );

  let courseForm = document.getElementById("courseForm");
  let costInput = document.getElementById("cost");

  // costInput.addEventListener("focus", onfocus);
  costInput.addEventListener("blur", currencyFormat);

  courseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    extractFormValuesAndAddToLocalState(courseState, courseForm);
    stateReducer("courseState", rootState, { ...courseState, courseState });

    courseForm.reset();
    changeCondAndRef();
  });
};
export { courseState, courseFn };
