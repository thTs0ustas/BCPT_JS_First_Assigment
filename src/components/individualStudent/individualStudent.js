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

  for (let sKey in Object.keys(student)) {
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
        studentAssignments(
          JSON.parse(rootState.studentState)[sKey].assignments
        );
      });
  }
  studentAssignments(JSON.parse(rootState.studentState)[sKey].assignments);
};
