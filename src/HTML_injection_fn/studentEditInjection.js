export const mapTableStudentRows = (state, stateParts) => {
  let index = 0;
  return [
    Object.keys(state)
      .map((element, i) => {
        index = i;
        return /* HTML */ `<tr id="tr_${i}">
          <td id="${state[element]["first-name"]}">
            ${state[element]["first-name"]}
          </td>
          <td>${state[element]["last-name"]}</td>
          <td>${state[element].email}</td>
          <td>
            <select
              class="subject"
              name="subject"
              id="editSubj${i}"
              disabled
              required
            >
              ${Object.keys(stateParts).map(
                (course) =>
                  `<option value="${course}" name="subject">
                  ${course}
                </option>`
              )}
            </select>
          </td>
          <td>
            <button id="editButton${i}" type="button">
              <img src="../../assets/edit-button.png" alt="" />
            </button>
            <button id="delete${i}" type="button">
              <img src="../../assets/trash.png" alt="" />
            </button>
          </td>
        </tr> `;
      })
      .join("")
      .replace(/,/g, ""),
    index,
  ];
};
