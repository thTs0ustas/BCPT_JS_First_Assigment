//
// HTML part to be added when student link is pressed.
// It takes the courses part of the state.
//

const studentHTML = (courses) => /* HTML */ `
  <div class="form-container">
    <form id="studentsForm">
      <div class="outer_parts">
        <h1>Student Registration</h1>
      </div>
      <div class="form">
        <table>
          <tr>
            <td>
              <label for="firstName">First Name</label>
            </td>
            <td colspan="2">
              <input
                type="text"
                id="firstName"
                placeholder="Enter First Name...."
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="lastName">Last Name</label>
            </td>
            <td colspan="2">
              <input
                type="text"
                id="lastName"
                placeholder="Enter Last Name...."
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="courses">Lesson Selection</label>
            </td>
            <td colspan="2">
              <select id="courses" required>
                <option value="" selected name="courses">-</option>
                ${Object.keys(courses).map(
                  (course) =>
                    `<option value="${course}" name="courses">
                  ${course}
                </option>`
                )}
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label for="dateOfBirth">Date Of Birth</label>
            </td>
            <td colspan="2">
              <input type="date" required id="dateOfBirth" />
            </td>
          </tr>

          <tr>
            <td>
              <label for="fee">Tuition Fee</label>
            </td>
            <td colspan="2">
              <input type="text" value="0.00 €" disabled id="fee" />
            </td>
          </tr>
          <tr>
            <td>
              <label for="fee">Phone</label>
            </td>
            <td colspan="2">
              <input
                required
                type="tel"
                pattern="[+dd]?[0-9]{10}"
                placeholder="Enter Phone...."
                id="phone"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="fee">Address</label>
            </td>
            <td colspan="2">
              <input
                type="text"
                id="address"
                required
                placeholder="Enter Address...."
              />
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
            <button class="reset">Cancel</button>
          </div>
        </div>
      </div>
    </form>
  </div>
`;

export default studentHTML;
