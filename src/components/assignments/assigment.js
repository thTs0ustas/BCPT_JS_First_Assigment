import {
  closeNavBar,
  extractFormValuesAndAddToLocalState,
  stateReducer,
} from "../../helperFn";
import { rootState } from "../../state/rootState.js";
import assignmentHTML from "./assigmentHTML";

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

    extractFormValuesAndAddToLocalState(assignmentState, assignmentForm);

    stateReducer("assignmentState", {
      ...assignmentState,
      assignmentState,
    });
    assignmentForm.reset();
  });
};

export { assignmentFn };
