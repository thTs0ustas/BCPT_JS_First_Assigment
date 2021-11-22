import subjects from "../functions";

const studentHTML = /* HTML */ `
  <div class="form-container">
    <form id="studentsForm">
      <div class="outer_parts">
        <h1>Student Registration</h1>
      </div>
      <div class="form">
        <table>
          <tr>
            <td>
              <label for="first-name">First Name</label>
            </td>
            <td colspan="2">
              <input
                type="text"
                id="first-name"
                placeholder="Enter First Name...."
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="last-name">Last Name</label>
            </td>
            <td colspan="2">
              <input
                type="text"
                id="last-name"
                placeholder="Enter Last Name...."
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="Subject">Lesson Selection</label>
            </td>
            <td colspan="2">
              <select id="subject" required>
                <option value="" selected name="subject">-</option>
                <option value="${subjects.javascript}" name="subject">
                  ${subjects.javascript}
                </option>
                <option value="${subjects.java}" name="subject">
                  ${subjects.java}
                </option>
                <option value="${subjects["C#"]}" name="subject">
                  ${subjects["C#"]}
                </option>
                <option value="${subjects.python}" name="subject">
                  ${subjects.python}
                </option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label for="email">E-mail</label>
            </td>
            <td colspan="2">
              <input
                type="email"
                required
                id="email"
                placeholder="Enter Email...."
              />
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
  </div>
`;

export default studentHTML;
