import courseHTML from "../HTML_PARTS/course.js";
import {
  closeNavBar,
  extractFormValuesAndAddToLocalState,
  pullDataFromCourse,
  stateReducer,
} from "../helperFn/helperFn.js";
import { rootState } from "../state/rootState.js";
import { currencyFormat, onfocus } from "../helperFn/currencyFormat.js";
import { resetForm } from "../helperFn/resetForm.js";

let courseState = {};

const courseFn = ({ state, cond } = {}) => {
  closeNavBar(
    courseHTML({
      state: state || JSON.parse(rootState.courseState),
      cond: cond || JSON.parse(rootState.conditional),
    })
  );
  document.getElementById("cost").addEventListener("focus", onfocus);
  document.getElementById("cost").addEventListener("blur", currencyFormat);

  let courseForm = document.getElementById("courseForm");
  document?.getElementById("courses")?.addEventListener("change", () => {
    pullDataFromCourse(JSON.parse(rootState.courseState), "courses");
    extractFormValuesAndAddToLocalState(courseState, courseForm);
  });

  document.getElementById("courseForm").addEventListener("submit", (e) => {
    e.preventDefault();
    extractFormValuesAndAddToLocalState(courseState, courseForm);
    stateReducer("courseState", {
      ...courseState,
      courseState,
    });

    rootState.setItem(
      `conditional`,
      JSON.stringify(JSON.parse(rootState.conditional) !== true)
    );

    courseFn({
      state: JSON.parse(rootState.courseState),
      cond: JSON.parse(rootState.conditional),
    });
  });
  document.getElementsByClassName("reset")[0].addEventListener("click", (e) => {
    e.preventDefault();
    resetForm("courseForm");
  });

  let editButton = document?.getElementsByClassName("addNew")[0];
  editButton.addEventListener("click", () => {
    rootState.setItem(
      `conditional`,
      JSON.stringify(JSON.parse(rootState.conditional) !== true)
    );
    courseFn({
      state: JSON.parse(rootState.courseState),
      cond: JSON.parse(rootState.conditional),
    });
  });
};
export { courseFn };
