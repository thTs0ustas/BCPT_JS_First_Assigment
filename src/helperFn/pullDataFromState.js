//
// pull specific value ('cost') from a course
//

export let pullCostFromCourse = (state, id) => {
  let selectedCourse = document.getElementById(id);
  let value = selectedCourse.options[selectedCourse.selectedIndex].value;
  console.log(value);
  document
    .getElementById("fee")
    .setAttribute("value", state[value]?.cost || "0");
};

//
// custom reset form function
// to pass to a click button event
//

export const resetOnClick = (button, id, callback) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    callback(id);
  });
};
