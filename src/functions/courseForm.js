import courseHTML from "../HTML_PARTS/course.js";
import {
  extractFormValuesAndAddToLocalState,
  stateReducer,
} from "../helperFn/helperFn.js";
import { rootState } from "../state/rootState.js";
import { currencyFormat, onfocus } from "../helperFn/currencyFormat";

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

  const pullDataFromCourse = (state, id) => {
    let selectedCourse = document?.getElementById(id);
    let value = selectedCourse.options[selectedCourse.selectedIndex].value;
    for (let prop in state[value]) {
      console.log(state[value][prop]);

      if (prop !== "stream" && prop !== "type")
        document
          ?.getElementById(prop)
          ?.setAttribute("value", state[value][prop]);
      else {
        let elementProp = document?.getElementById(prop);
        [...elementProp.childNodes].forEach((node, i) => {
          if (node && node.value === state[value][prop] && elementProp[i]) {
            console.log(elementProp[i]);
            elementProp[i].selected = "selected";
          }
        });
      }
    }
  };

  document
    ?.getElementById("courses")
    ?.addEventListener("change", () =>
      pullDataFromCourse(JSON.parse(rootState.courseState), "courses")
    );

  let courseForm = document.getElementById("courseForm");
  let costInput = document.getElementById("cost");

  costInput.addEventListener("focus", onfocus);
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
