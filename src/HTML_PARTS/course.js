import subjects from "../functions";

const courseHTML = (state = {}, conditional = false) => /* HTML */ ` <div
  class="form-container"
>
  <form id="courseForm">
    <div class="outer_parts">
      <h1>Course Creation</h1>
    </div>
    <div class="form">
      <table>
        <tr>
          <td>
            <label for="courseName">Course Name</label>
          </td>
          <td colspan="2">
            ${!conditional
              ? `<select id="courses" required>
                  <option value="" selected name="courses">
                    -
                  </option>
                  ${Object.keys(state).map(
                    (course) =>
                      `<option value="${course}" name="courses">
                  ${course}
                </option>`
                  )}
                </select>`
              : `<input
                  required
                  type="text"
                  id="courseName"
                  placeholder="Enter Course Name...."
                />`}
          </td>
        </tr>
        <tr>
          <td>
            <label for="stream">Stream</label>
          </td>
          <td colspan="2">
            <select id="stream" ${!conditional ? "disabled" : ""} required>
              <option value="" disabled selected name="stream">-</option>
              <option value="${subjects.javascript}" name="stream">
                ${subjects.javascript}
              </option>
              <option value="${subjects.java}" name="stream">
                ${subjects.java}
              </option>
              <option value="${subjects["C#"]}" name="stream">
                ${subjects["C#"]}
              </option>
              <option value="${subjects.python}" name="stream">
                ${subjects.python}
              </option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label for="type">Type</label>
          </td>
          <td colspan="2">
            <select
              id="type"
              ${!conditional ? "disabled" : ""}
              readonly="true"
              required
            >
              <option value="" disabled selected name="type">-</option>
              <option value="PartTime" name="type">Part Time</option>
              <option value="FullTime" name="type">Full Time</option>
            </select>
          </td>
        </tr>

        <tr>
          <td>
            <label for="cost">Cost</label>
          </td>
          <td colspan="2">
            <input
              type="currency"
              ${!conditional ? "disabled" : ""}
              step="any"
              min="1"
              required
              id="cost"
            />
          </td>
        </tr>

        <tr>
          <td>
            <label for="startingDate">Starting Date</label>
          </td>
          <td colspan="2">
            <input
              type="date"
              ${!conditional ? "disabled" : ""}
              required
              id="startingDate"
            />
          </td>
        </tr>

        <tr>
          <td>
            <label for="endDate">End Date</label>
          </td>
          <td colspan="2">
            <input
              type="date"
              ${!conditional ? "disabled" : ""}
              required
              id="endDate"
            />
          </td>
        </tr>
      </table>
      <div class="outer_parts">
        <button ${conditional ? "disabled" : ""} id="addNew" type="button">
          Add New
        </button>
        <div class="buttons">
          ${conditional
            ? `<button type="submit">Submit</button>`
            : `<button id='editForm' type="button">Edit</button>`}
          <button type="reset">Cancel</button>
        </div>
      </div>
    </div>
  </form>
</div>`;

export default courseHTML;
