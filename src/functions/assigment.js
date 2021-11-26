import {
  closeNavBar,
  extractFormValuesAndAddToLocalState,
  stateReducer,
} from "../helperFn/helperFn.js";
import { rootState } from "../state/rootState.js";
import assignmentHTML from "../HTML_PARTS/assigment";

let assignmentState = {};

const assignmentFn = ({ state } = {}) => {
  closeNavBar(
    assignmentHTML({
      state: state || JSON.parse(rootState.assignmentState),
    })
  );

  let assignmentForm = document.getElementById("assignmentForm");
  assignmentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("hey");
    extractFormValuesAndAddToLocalState(assignmentState, assignmentForm);
    stateReducer("assignmentState", {
      ...assignmentState,
      assignmentState,
    });
    assignmentForm.reset();
  });
};

export { assignmentFn };
