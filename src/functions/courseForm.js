import courseHTML from "../HTML_PARTS/course.js";
import {
  changeCondAndRef,
  closeNavBar,
  extractFormValuesAndAddToLocalState,
  pullDataFromCourse,
  // refreshMainDir,
  stateReducer,
} from "../helperFn/helperFn.js";
import { rootState } from "../state/rootState.js";
import { currencyFormat, onfocus } from "../helperFn/currencyFormat.js";

let courseState = {};

const courseFn = () => {
  let mainDir = document.getElementById("main");

  let changeCondAndRefOptions = {
    setItem: "conditional",
    mainDir: mainDir,
    callback: courseHTML,
  };

  closeNavBar(
    courseHTML({
      state: JSON.parse(rootState.courseState),
      cond: JSON.parse(rootState.conditional),
    })
  );

  let addNewButton = document.getElementById("addNew");
  addNewButton?.addEventListener("click", () => {
    changeCondAndRef(changeCondAndRefOptions);
  });

  let editButton = document?.getElementById("editForm");
  editButton.disabled = !JSON.parse(rootState.conditional) ? "disabled" : false;
  editButton?.addEventListener("click", () => {
    extractFormValuesAndAddToLocalState(courseState, courseForm);

    changeCondAndRef({ ...changeCondAndRefOptions });
    pullDataFromCourse(courseState, "courses");
  });

  document?.getElementById("courses")?.addEventListener("change", () => {
    pullDataFromCourse(JSON.parse(rootState.courseState), "courses");
    extractFormValuesAndAddToLocalState(courseState, courseForm);

    console.log(courseState);
    changeCondAndRef({ ...changeCondAndRefOptions, state: courseState });
  });

  let costInput = document.getElementById("cost");
  costInput.addEventListener("focus", onfocus);
  costInput.addEventListener("blur", currencyFormat);

  let courseForm = document.getElementById("courseForm");

  courseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    extractFormValuesAndAddToLocalState(courseState, courseForm);
    console.log(1);
    stateReducer("courseState", rootState, { ...courseState, courseState });
    console.log(2);
    changeCondAndRef({ ...changeCondAndRefOptions });
    console.log(3);

    courseForm.reset();
  });
};
export { courseFn };
