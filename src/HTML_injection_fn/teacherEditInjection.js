import subjects from "../functions";

export const mapTableRows = (state) => {
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
              <option
                ${state[element].subject === subjects.javascript
                  ? "selected"
                  : false}
                value="${subjects.javascript}"
                name="subject"
              >
                ${subjects.javascript}
              </option>

              <option
                ${state[element].subject === subjects.java ? "selected" : ""}
                value="${subjects.java}"
                name="subject"
              >
                ${subjects.java}
              </option>
              <option
                ${state[element].subject === subjects["C#"]
                  ? "selected"
                  : "false"}
                value="${subjects["C#"]}"
                name="subject"
              >
                ${subjects["C#"]}
              </option>
              <option
                ${state[element].subject === subjects.python ? "selected" : ""}
                value="${subjects.python}"
                name="subject"
              >
                ${subjects.python}
              </option>
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
