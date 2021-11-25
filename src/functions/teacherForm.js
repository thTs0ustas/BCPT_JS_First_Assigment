import teachersHTML from "../HTML_PARTS/teachers.js";
import {
  closeNavBar,
  extractFormValuesAndAddToLocalState,
  stateReducer,
} from "../helperFn/helperFn.js";

const teachersState = [];

const teacherFn = () => {
  closeNavBar(teachersHTML);

  const teachersForm = document.getElementById("teachersForm");
  teachersForm.addEventListener("submit", (e) => {
    e.preventDefault();
    extractFormValuesAndAddToLocalState(teachersState, teachersForm);
    stateReducer("teachersState", {
      ...teachersState,
      teachersState,
    });
    teachersForm.reset();
  });
};

export { teachersState, teacherFn };
