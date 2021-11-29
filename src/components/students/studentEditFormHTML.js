// HTML part for edit of the student. It is a table
// and every name cell can be pressed so we can see a more detailed part
// for tha student.

const studentEditFormHTML =
  /* HTML */
  `<div class="form-container">
    <form id="teachersEditForm">
      <div class="outer_parts">
        <h1>Edit Students</h1>
      </div>

      <div class="form">
        <table id="hTable" style="min-height: 100px">
          <thead>
            <th>Name</th>
            <th>Contact</th>
            <th>Course</th>
            <th>Tuition Fee</th>

            <th>Edit</th>
          </thead>
          <tbody id="table"></tbody>
        </table>
        <div class="outer_parts">
          <div class="buttons"></div>
        </div>
      </div>
    </form>
  </div>`;

export default studentEditFormHTML;
