import { individualStudentHTML } from "./individualStudentHTML";
// import {
//   extractFormValuesAndAddToLocalState,
//   pullDataFromCourse,
// } from "../../helperFn/helperFn";
// import { rootState } from "../../state/rootState";

export const individualStudentFn = ({ key, state }) => {
  document.getElementById("main").innerHTML = individualStudentHTML({
    key,
    state,
  });
  // document?.getElementById("courses")?.addEventListener("change", () => {
  //   pullDataFromCourse(JSON.parse(rootState.assignmentState), "courses");
  //   extractFormValuesAndAddToLocalState(courseState, courseForm);
  // });
};
