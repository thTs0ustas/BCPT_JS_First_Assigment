import { individualStudentHTML } from "./individualStudentHTML";
import { pullDataFromAssignment } from "../../helperFn";
import { rootState } from "../../state/rootState";
// import {
//   extractFormValuesAndAddToLocalState,
//   pullDataFromCourse,
// } from "../../helperFn/helperFn";
// import { rootState } from "../../state/rootState";

let localState = {};
export const individualStudentFn = ({ key, state }) => {
  let main = document.getElementById("main");
  main.innerHTML = individualStudentHTML({
    key,
    state,
  });

  document?.getElementById("assignments")?.addEventListener("change", () => {
    let student = JSON.parse(rootState.studentState);
    let key = Object.keys(student)[0];
    console.log(student[key]);
    student[key].assignments.push(
      pullDataFromAssignment(
        JSON.parse(rootState.assignmentState),
        "assignments",
        {}
      )
    );

    localState[key] = {
      ...student[key],
      assignments: student[key].assignments,
    };

    console.log(localState);
  });

  document
    ?.getElementsByClassName("addNewAssignment")[0]
    .addEventListener("click", (e) => {
      e.preventDefault();
      individualStudentHTML({
        key,
        state,
        localState,
      });
    });
};
