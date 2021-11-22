import subjects from "../functions";

const courseHTML =
  /* HTML */
  ` <div class="form-container">
    <form id="courseForm">
      <div class="outer_parts">
        <h1>Student Registration</h1>
      </div>
      <div class="form">
        <table>
          <tr>
            <td>
              <label for="course-name">Course Name</label>
            </td>
            <td colspan="2">
              <input
                required
                type="text"
                id="course-name"
                placeholder="Enter Course Name...."
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="Subject">Stream</label>
            </td>
            <td colspan="2">
              <select id="stream" required>
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
              <label for="Subject">Type</label>
            </td>
            <td colspan="2">
              <select id="type" readonly="true" required>
                <option value="" disabled selected name="type">-</option>
                <option value="Part Time" name="type">Part Time</option>
                <option value="Full Time" name="type">Full Time</option>
              </select>
            </td>
          </tr>

          <tr>
            <td>
              <label for="startingDate">Starting Date</label>
            </td>
            <td colspan="2">
              <input type="date" required id="startingDate" />
            </td>
          </tr>

          <tr>
            <td>
              <label for="endDate">End Date</label>
            </td>
            <td colspan="2">
              <input type="date" required id="endDate" />
            </td>
          </tr>
        </table>
        <div class="outer_parts">
          <div class="buttons">
            <button type="submit">Submit</button>
            <button type="reset">Cancel</button>
          </div>
        </div>
      </div>
    </form>
  </div>`;
export default courseHTML;
