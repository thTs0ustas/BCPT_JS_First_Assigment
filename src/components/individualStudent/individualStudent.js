import { individualStudentHTML } from "./individualStudentHTML";
import { pullDataFromAssignment, stateReducer } from "../../helperFn";
import { rootState } from "../../state/rootState";
import { studentAssignments } from "../../HTML_injection_fn/studentAssignments";

let localState = [];
export const individualStudentFn = ({ key, state }) => {
  let main = document.getElementById("main");
  main.innerHTML = individualStudentHTML({
    key,
    state,
  });

  let student = JSON.parse(rootState.studentState);

  student[key].assignments = [];
  document?.getElementById("assignments")?.addEventListener("change", () => {
    console.log(student[key]);
    student[key].assignments.push(
      pullDataFromAssignment(
        JSON.parse(rootState.assignmentState),
        "assignments",
        {}
      )
    );

    localState.push(
      Object.assign(student[key], { assignments: student[key].assignments })
    );
  });
  document
    ?.getElementsByClassName("addNewAssignment")[0]
    .addEventListener("click", (e) => {
      e.preventDefault();

      stateReducer("studentState", {
        studentState: {
          ...JSON.parse(rootState.studentState),
          [key]: student[key],
        },
      });
      studentAssignments(JSON.parse(rootState.studentState)[key].assignments);
    });
  studentAssignments(JSON.parse(rootState.studentState)[key].assignments);
};
