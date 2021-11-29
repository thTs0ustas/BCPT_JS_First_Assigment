import { individualStudentHTML } from "./individualStudentHTML";
import { pullDataFromAssignment, stateReducer } from "../../helperFn";
import { rootState } from "../../state/rootState";
import { studentAssignments } from "../../HTML_injection_fn/studentAssignments";

let localState = [];
export const individualStudentFn = ({ key, state }) => {
  // Inject HTML part
  let main = document.getElementById("main");
  main.innerHTML = individualStudentHTML({
    key,
    state,
  });

  // Add assignment property as an array
  let student = JSON.parse(rootState.studentState);
  let sKey = Object.keys(student)[0];
  student[sKey].assignments = [];

  // get the desired assigment from state and add it to local state
  document?.getElementById("assignments")?.addEventListener("change", () => {
    console.log(student[sKey]);
    student[sKey].assignments.push(
      pullDataFromAssignment(
        JSON.parse(rootState.assignmentState),
        "assignments",
        {}
      )
    );

    localState.push(
      Object.assign(student[sKey], { assignments: student[sKey].assignments })
    );
  });

  // Add assignment to the individual student assigment table.
  // TODO: Add functionality to oral and total mark

  document
    ?.getElementsByClassName("addNewAssignment")[0]
    .addEventListener("click", (e) => {
      e.preventDefault();

      stateReducer("studentState", {
        studentState: {
          ...JSON.parse(rootState.studentState),
          [sKey]: student[sKey],
        },
      });
      studentAssignments(JSON.parse(rootState.studentState)[sKey].assignments);
    });
  studentAssignments(JSON.parse(rootState.studentState)[sKey].assignments);
};
