const assignmentHTML = (/*{ state }*/) => /* HTML */ ` <div
  class="form-container"
>
  <form id="assignmentForm">
    <div class="outer_parts">
      <h1>Assigment</h1>
    </div>
    <div class="form">
      <table>
        <tr>
          <td>
            <label for="assignmentName">Title</label>
          </td>

          <td colspan="2">
            <input
              required
              type="text"
              id="assignmentName"
              placeholder="Enter Course Name...."
            />
          </td>
        </tr>

        <tr>
          <td>
            <label for="description">Description</label>
          </td>
          <td colspan="2">
            <input type="text" required id="description" />
          </td>
        </tr>
        <tr>
          <td>
            <label for="submDate">Submition Date</label>
          </td>
          <td colspan="2">
            <input type="date" required id="submDate" />
          </td>
        </tr>
      </table>
      <div class="outer_parts">
        <div class="buttons">
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </div>
    </div>
  </form>
</div>`;

export default assignmentHTML;
