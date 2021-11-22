import teachersHTML from "../HTML_PARTS/teachers.js";
import {
  extractFormValuesAndAddToLocalState,
  stateReducer,
} from "../helperFn/helperFn.js";

const teachersState = {};

const teacherFn = () => {
  document.getElementById("main").innerHTML = teachersHTML;
  document.getElementById("navbar-toggler").ariaExpanded = false;
  document.getElementById("navbar-toggler").classList.add("collapsed");
  document.getElementById("navbarNavDropdown").classList.remove("show");

  const teachersForm = document.getElementById("teachersForm");
  teachersForm.addEventListener("submit", (e) => {
    e.preventDefault();

    extractFormValuesAndAddToLocalState(teachersState, teachersForm);
    stateReducer("teachersState", teachersState, {
      ...teachersState,
      teachersState,
    });

    teachersForm.reset();
  });
};

export { teachersState, teacherFn };
