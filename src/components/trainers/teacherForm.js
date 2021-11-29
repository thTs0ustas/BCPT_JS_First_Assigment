import teachersHTML from "./teachersHTML.js";
import {
  closeNavBar,
  extractFormValuesAndAddToLocalState,
  stateReducer,
} from "../../helperFn";

const teachersState = [];

const teacherFn = () => {
  closeNavBar(teachersHTML);

  // Form submition to state
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
