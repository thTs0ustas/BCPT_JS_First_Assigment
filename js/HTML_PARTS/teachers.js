const teachersHTML = `<div class="form-container">
        <form id="teachersForm">
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
                  required
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
                  required
                    type="text"
                    id="last-name"
                    placeholder="Enter Last Name...."
                  />
                </td>
              </tr>
              
             
              <tr>
                <td>
                  <label for="subject">Subject</label>
                </td>
                <td colspan="2">
                  <select id="subject" required>
                    <!-- <option value="USA" selected name="county">USA</option>
                    <option value="2" name="county">2</option>
                    <option value="3" name="county">3</option>
                    <option value="4" name="county">4</option>
                    <option value="5" name="county">5</option>
                    <option value="6" name="county">6</option> -->
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="email" required>E-mail</label>
                </td>
                <td colspan="2">
                  <input
                    type="email"
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
      </div>`

export default teachersHTML