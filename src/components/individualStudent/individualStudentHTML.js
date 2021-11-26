import { rootState } from "../../state/rootState";

export let individualStudentHTML = ({
  key,
  state,
  localState,
}) => /* HTML */ `<section class="w-100">
  <div class="container-fluid w-100">
    <div class="row w-100 justify-content-center">
      <div class="col-lg-12 pt-5 w-100""> <div class="card mb-4 w-100""> <div
      class="card-body p-5 w-100"">
      <div class="row">
        <div class="col-sm-3">
          <p class="mb-0">Full Name</p>
        </div>
        <div class="col-sm-9">
          <p class="text-muted mb-0">
            ${state[key].firstName + " " + state[key].lastName}
          </p>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-sm-3">
          <p class="mb-0">Email</p>
        </div>
        <div class="col-sm-9">
          <p class="text-muted mb-0">${state[key].email}</p>
        </div>
      </div>
      <hr />

      <hr />
      <div class="row">
        <div class="col-sm-3">
          <p class="mb-0">Mobile</p>
        </div>
        <div class="col-sm-9">
          <p class="text-muted mb-0">${state[key].phone}</p>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col-sm-3">
          <p class="mb-0">Address</p>
        </div>
        <div class="col-sm-9">
          <p class="text-muted mb-0">${state[key].address}</p>
        </div>
      </div>
      <hr />
      <hr />
      <div class="row">
        <select class="w-100" id="assignments" required>
          <option value="" selected name="courses">-</option>
          ${Object.keys(JSON.parse(rootState.assignmentState)).map(
            (assignment) =>
              `<option value="${assignment}" name="assignments">
                        ${assignment}
                      </option>`
          )}
        </select>
        <button class="w-25 m-3 addNewAssignment">Add Assignment</button>
      </div>
      <hr />
      <hr />
      <hr />
      <div class="row">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Assignment</th>
              <th scope="col">Oral Mark</th>
              <th scope="col">Total Mark</th>
              <th scope="col">Deadline</th>
            </tr>
          </thead>
          <tbody id="tbody">
            <tr>
              <th scope="row">No assignments</th>
              <td>-</td>
              <td>-</td>
              <td id="submDate">00-00-00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>`;
