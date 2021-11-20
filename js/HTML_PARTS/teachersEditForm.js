const teachersEditFormHTML = `<div class="form-container">
        
        <form id="teachersEditForm">
          <div class="outer_parts">
            <h1>Edit Trainers</h1>
          </div>
          <div class="form">
            <table id="hTable" style="min-height: 100px">
                <thead>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Contact</th>
                    <th>Course</th>
                    <th>Edit</th>
                </thead>
                <tbody id="table"></tbody>
            </table>
            <div class="outer_parts">
              <div class="buttons">
                
              </div>
            </div>
          </div>
        </form>
      </div>`;

export default teachersEditFormHTML;
// <tr>
//   <td>
//     <label for="first-name">First Name</label>
//   </td>
//   <td colspan="2">
//     <input
//     required
//       type="text"
//       id="first-name"
//       placeholder="Enter First Name...."
//     />
//   </td>
// </tr>
// <tr>
//   <td>
//     <label for="last-name">Last Name</label>
//   </td>
//   <td colspan="2">
//     <input
//     required
//       type="text"
//       id="last-name"
//       placeholder="Enter Last Name...."
//     />
//   </td>
// </tr>
// <tr>
//   <td>
//     <label for="subject">Subject</label>
//   </td>
//   <td colspan="2">
//     <select id="subject" required>
//       <option value="Subject" selected name="subject">-</option>
//       <option value="${subjects.javascript}" name="subject">${subjects.javascript}</option>
//       <option value="${subjects.java}" name="subject">${subjects.java}</option>
//       <option value="${subjects["C#"]}" name="subject">${subjects["C#"]}</option>
//       <option value="${subjects.python}" name="subject">${subjects.python}</option>
//     </select>
//   </td>
// </tr>
// <tr>
//   <td>
//     <label for="email" required>E-mail</label>
//   </td>
//   <td colspan="2">
//     <input
//       type="email"
//       id="email"
//       placeholder="Enter Email...."
//     />
//   </td>
// </tr>
