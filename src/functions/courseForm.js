import courseHTML from "../HTML_PARTS/course.js";
import {
  changeCondAndRef,
  closeNavBar,
  extractFormValuesAndAddToLocalState,
  pullDataFromCourse,
  stateReducer,
} from "../helperFn/helperFn.js";
import { rootState } from "../state/rootState.js";
import { currencyFormat, onfocus } from "../helperFn/currencyFormat.js";

let courseState = {};

const courseFn = () => {
  let mainDir = document.getElementById("main");

  closeNavBar(
    courseHTML({
      state: JSON.parse(rootState.courseState),
      cond: JSON.parse(rootState.conditional),
    })
  );
  let changeCondAndRefOptions = {
    setItem: "conditional",
    mainDir: mainDir,
    callback: courseFn,
  };
  console.log(changeCondAndRefOptions);
  // mainDir.innerHTML = courseHTML({
  //   state: JSON.parse(rootState.courseState),
  //   cond: JSON.parse(rootState.conditional),
  // });
  //
  // document.getElementById("navbar-toggler").ariaExpanded = false;
  // document.getElementById("navbar-toggler").classList.add("collapsed");
  // document.getElementById("navbarNavDropdown").classList.remove("show");

  document.getElementById("addNew").addEventListener("click", () => {
    changeCondAndRef(changeCondAndRefOptions);
  });
  document?.getElementById("editForm")?.addEventListener("click", () => {
    pullDataFromCourse(JSON.parse(rootState.courseState), "courses");
    changeCondAndRef(changeCondAndRefOptions);
  });

  document?.getElementById("courses")?.addEventListener("change", () => {
    pullDataFromCourse(JSON.parse(rootState.courseState), "courses");
  });

  let costInput = document.getElementById("cost");

  costInput.addEventListener("focus", onfocus);
  costInput.addEventListener("blur", currencyFormat);

  let courseForm = document.getElementById("courseForm");
  document.getElementById("courseForm").addEventListener("submit", (e) => {
    e.preventDefault();
    extractFormValuesAndAddToLocalState(courseState, courseForm);
    console.log(courseState);
    stateReducer("courseState", rootState, { ...courseState, courseState });

    courseForm.reset();
    changeCondAndRef(changeCondAndRefOptions);
  });
};
export { courseFn };
