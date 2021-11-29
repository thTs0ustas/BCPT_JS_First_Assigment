import courseHTML from "./courseHTML.js";
import {
  closeNavBar,
  extractFormValuesAndAddToLocalState,
  pullDataFromCourse,
  stateReducer,
  currencyFormat,
  onfocus,
  resetForm,
} from "../../helperFn";
import { rootState } from "../../state/rootState.js";

let courseState = {};

const courseFn = ({ state, cond } = {}) => {
  // Close navbar and load HTML part

  closeNavBar(
    courseHTML({
      state: state || JSON.parse(rootState.courseState),
      cond: cond || JSON.parse(rootState.conditional),
    })
  );

  document.getElementById("cost").addEventListener("focus", onfocus);
  document.getElementById("cost").addEventListener("blur", currencyFormat);

  // Get course data from local storage
  let courseForm = document.getElementById("courseForm");
  document?.getElementById("courses")?.addEventListener("change", () => {
    pullDataFromCourse(JSON.parse(rootState.courseState), "courses");
    extractFormValuesAndAddToLocalState(courseState, courseForm);
  });

  // Submit course form to root state
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

    // Reload HTML
    courseFn({
      state: JSON.parse(rootState.courseState),
      cond: JSON.parse(rootState.conditional),
    });
  });

  // Custom reset form function call
  document.getElementsByClassName("reset")[0].addEventListener("click", (e) => {
    e.preventDefault();
    resetForm("courseForm");
  });

  // date validation

  document.getElementById("endDate").addEventListener("change", () => {
    let startDate = document.getElementById("startingDate").value;
    let endDate = document.getElementById("endDate").value;
    console.log(startDate, endDate);
    if (Date.parse(startDate) >= Date.parse(endDate)) {
      alert("End date should be greater than Start date");
      endDate.value = null;
    }
  });

  //Add new course
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
