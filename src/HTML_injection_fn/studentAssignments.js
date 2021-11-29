//
// Table row for the assignments for every individual student
//

export const studentAssignments = (state) => {
  console.log(state);
  document.getElementById("tbody").innerHTML = state
    .map((assignment) => {
      let key = Object.keys(assignment)[0];
      return /*HTML*/ `
             <tr style="text-align: center">
              <th scope="row">${assignment[key].assignmentName}</th>
              <td>${assignment[key].oralMark}</td>
              <td>${assignment[key].totalMark}</td>
              <td id="submDate">${assignment[key].submDate}</td>
            </tr>
  `;
    })
    .join("")
    .replace(/,\s/g, "");
};
