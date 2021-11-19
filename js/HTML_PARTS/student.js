const studentHTML = `
<div class="form-container">
        <form id="studentsForm">
          <div class="outer_parts">
            <h1>Sign Up</h1>
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
                  <label for="screen-name">Screen Name</label>
                </td>
                <td colspan="2">
                  <input
                    type="text"
                    id="screen-name"
                    placeholder="Enter Screen Name...."
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="month">Date of Birth</label>
                </td>
                <td colspan="2" id="date">
                  <select name="date" class="date" id="month">
                    <option value="Month">Month</option>
                  </select>
                  <select name="date" class="date">
                    <option value="Day">Day</option>
                  </select>
                  <select name="date" class="date">
                    <option value="Year">Year</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Gender</label>
                </td>
                <td colspan="2" id="gender">
                  <input type="radio" name="gender" id="gender-man" />
                  <label for="gender-man">Man</label>

                  <input type="radio" name="gender" id="gender-woman" />
                  <label for="gender-woman">Woman</label>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="county">Country</label>
                </td>
                <td colspan="2">
                  <select id="county">
                    <option value="USA" selected name="county">USA</option>
                    <option value="2" name="county">2</option>
                    <option value="3" name="county">3</option>
                    <option value="4" name="county">4</option>
                    <option value="5" name="county">5</option>
                    <option value="6" name="county">6</option>
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
                    id="email"
                    placeholder="Enter Email...."
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="phone">Phone</label>
                </td>
                <td colspan="2">
                  <input type="tel" id="phone" placeholder="Enter Phone...." />
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
