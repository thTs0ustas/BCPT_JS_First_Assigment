(()=>{"use strict";const e=()=>{document.getElementById("main").innerHTML='<div class="headings-container">\n    <h2 class="heading1">Private</h2>\n    <h2 class="heading2">School</h2>\n  </div>',document.getElementById("navbar-toggler").ariaExpanded=!1,document.getElementById("navbar-toggler").classList.add("collapsed"),document.getElementById("navbarNavDropdown").classList.remove("show")};let t="Javascript",n="Java",s="C#",a="Python";const d=e=>{let t=document.getElementById(e)?.querySelectorAll("input, select, textarea");for(let e=0;e<t.length;e++)switch(t[e].type.toLowerCase()){case"text":case"number":case"currency":case"password":case"date":case"textarea":case"hidden":console.log(t[e].value.value),t[e].setAttribute("value",""),t[e].innerText="";break;case"radio":case"checkbox":t[e].checked&&(t[e].checked=!1);break;case"select-one":case"select-multi":t[e].selectedIndex=-1}},l=e=>Number(String(e).replace(/\D*/g,"").replace(/00$/,"")),i=e=>{let t=e.target.value;e.target.value=t?l(t):""},o=e=>{let t=e.target.value;e.target.value=t?l(t).toLocaleString("de-DE",{maximumFractionDigits:2,currency:"EUR",style:"currency"}):""};let r=window.localStorage;r.setItem("studentState",JSON.stringify({Name1:{address:"Address 1",courses:"Java",dateOfBirth:"2021-11-11",email:"th@gmail.com",fee:"2.500,00 €",firstName:"fName1",lastName:"lastName1",phone:"6969696969",assignments:[]},Name2:{address:"Address 2",courses:"JavaScript",dateOfBirth:"2021-11-11",email:"th@gmail.com",fee:"2.500,00 €",firstName:"fName2",lastName:"lastName2",phone:"6969696969",assignments:[]}})),r.setItem("teachersState",JSON.stringify({Teacher1:{email:"th@gmail.com",firstName:"Teacher1",lastName:"Teacher1",subject:"Javascript"},Teacher2:{email:"th@gmail.com",firstName:"Teacher2",lastName:"Teacher2",subject:"Javascript"}})),r.setItem("courseState",JSON.stringify({Java:{cost:"2.000,00 €",courseName:"Java",endDate:"2021-12-05",startingDate:"2021-11-01",stream:"Java",type:"PartTime"},Javascript:{cost:"2.000,00 €",courseName:"Javascript",endDate:"2021-12-05",startingDate:"2021-11-01",stream:"Javascript",type:"PartTime"}})),r.setItem("assignmentState",JSON.stringify({assignment1:{assignmentName:"assignment1",description:"description",submDate:"2021-11-16"},assignment2:{assignmentName:"assignment2",description:"description",submDate:"2021-11-16"}})),r.setItem("conditional",JSON.stringify(!1));const c=(e,t={})=>{r.setItem(e,JSON.stringify({...t[e]}))},m=(e,t)=>e[t.elements[0].value]=[...t.elements].reduce(((e,t)=>t.id?{...e,[t.id]:t.value}:{...e}),{}),u=e=>{document.getElementById("main").innerHTML=e,document.getElementById("navbar-toggler").ariaExpanded=!1,document.getElementById("navbar-toggler").classList.add("collapsed"),document.getElementById("navbarNavDropdown").classList.remove("show")},p=(e,t,n)=>{try{const s=document.getElementById("table");let a=s.rows.length;for(let d=0;d<=a;d++){const l=s.rows[d],i=l.cells[n].childNodes[3],o=l.cells[0].id;if(i.id===e){s.deleteRow(d);const{[o]:e,...n}=t;return a--,n}}}catch(e){console.log(e)}},b=(e,t={},n)=>{const{callback:s,buttonId:a,eventType:d,state:l,stateKey:i}=t;for(let t=0;t<=e;t++)document.getElementById(`${a}${t}`)?.addEventListener(d,(()=>{let e=s(`${a}${t}`,l,n);c(i,{...l,teachersState:e})}))};let v={};const g=({state:e,cond:l}={})=>{u((({state:e,cond:d})=>` <div\n  class="form-container"\n>\n  <form id="courseForm">\n    <div class="outer_parts">\n      <h1>Course Creation</h1>\n    </div>\n    <div class="form">\n      <table>\n        <tr>\n          <td>\n            <label for="courseName">Course Name</label>\n          </td>\n\n          <td colspan="2">\n            ${d?'<input\n                  required\n                  type="text"\n                  id="courseName"\n                  placeholder="Enter Course Name...."\n                  \n                />':`<select id="courses" required>\n                  <option value="" selected name="courses">\n                    -\n                  </option>\n                  ${Object.keys(e).map((e=>`<option value="${e}" name="courses">\n                  ${e}\n                </option>`))}\n                </select>`}\n          </td>\n        </tr>\n\n        <tr>\n          <td>\n            <label for="stream">Stream</label>\n          </td>\n          <td colspan="2">\n            <select id="stream" ${d?"":"disabled"} required>\n              <option value="" disabled selected name="stream">-</option>\n              <option value="${t}" name="stream">\n                ${t}\n              </option>\n              <option value="${n}" name="stream">\n                ${n}\n              </option>\n              <option value="${s}" name="stream">\n                ${s}\n              </option>\n              <option value="${a}" name="stream">\n                ${a}\n              </option>\n            </select>\n          </td>\n        </tr>\n\n        <tr>\n          <td>\n            <label for="type">Type</label>\n          </td>\n          <td colspan="2">\n            <select\n              id="type"\n              ${d?"":"disabled"}\n              readonly="true"\n              required\n            >\n              <option value="" disabled selected name="type">-</option>\n              <option value="PartTime" name="type">Part Time</option>\n              <option value="FullTime" name="type">Full Time</option>\n            </select>\n          </td>\n        </tr>\n\n        <tr>\n          <td>\n            <label for="cost">Cost</label>\n          </td>\n          <td colspan="2">\n            <input\n              type="text"\n              ${d?"":"disabled"}\n              step="any"\n              min="1"\n              required\n              id="cost"\n            />\n          </td>\n        </tr>\n\n        <tr>\n          <td>\n            <label for="startingDate">Starting Date</label>\n          </td>\n          <td colspan="2">\n            <input\n              type="date"\n              ${d?"":"disabled"}\n              required\n              id="startingDate"\n            />\n          </td>\n        </tr>\n\n        <tr>\n          <td>\n            <label for="endDate">End Date</label>\n          </td>\n          <td colspan="2">\n            <input\n              type="date"\n              ${d?"":"disabled"}\n              required\n              id="endDate"\n            />\n          </td>\n        </tr>\n      </table>\n      <div class="outer_parts">\n        <button ${d?"disabled":""} class="addNew" type="button">\n          Add New\n        </button>\n        <div class="buttons">\n          <button ${d?"":"disabled"} class="submit" type="submit">Submit</button>\n          <button class="reset" >Cancel</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>`)({state:e||JSON.parse(r.courseState),cond:l||JSON.parse(r.conditional)})),document.getElementById("cost").addEventListener("focus",i),document.getElementById("cost").addEventListener("blur",o);let p=document.getElementById("courseForm");document?.getElementById("courses")?.addEventListener("change",(()=>{((e,t)=>{let n=document?.getElementById("courses"),s=n?.options[n.selectedIndex].value;for(let t in e[s]){let n=document?.getElementById(t);console.log(n),"stream"!==t&&"type"!==t?n?.setAttribute("value",e[s][t]):[...n].forEach(((a,d)=>{a&&a.value===e[s][t]&&n[d]&&(n[d].selected="selected")}))}})(JSON.parse(r.courseState)),m(v,p)})),document.getElementById("courseForm").addEventListener("submit",(e=>{e.preventDefault(),m(v,p),c("courseState",{...v,courseState:v}),r.setItem("conditional",JSON.stringify(!0!==JSON.parse(r.conditional))),g({state:JSON.parse(r.courseState),cond:JSON.parse(r.conditional)})})),document.getElementsByClassName("reset")[0].addEventListener("click",(e=>{e.preventDefault(),d("courseForm")}));let b=document?.getElementsByClassName("addNew")[0];b.addEventListener("click",(()=>{r.setItem("conditional",JSON.stringify(!0!==JSON.parse(r.conditional))),g({state:JSON.parse(r.courseState),cond:JSON.parse(r.conditional)})}))};let h={};const y=`<div class="form-container">\n    <form id="teachersForm">\n      <div class="outer_parts">\n        <h1>Trainer Registration</h1>\n      </div>\n\n      <div class="form">\n        <table>\n          <tr>\n            <td>\n              <label for="firstName">First Name</label>\n            </td>\n            <td colspan="2">\n              <input\n                required\n                type="text"\n                id="firstName"\n                placeholder="Enter First Name...."\n              />\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <label for="lastName">Last Name</label>\n            </td>\n            <td colspan="2">\n              <input\n                required\n                type="text"\n                id="lastName"\n                placeholder="Enter Last Name...."\n              />\n            </td>\n          </tr>\n\n          <tr>\n            <td>\n              <label for="subject">Subject</label>\n            </td>\n            <td colspan="2">\n              <select id="subject" required>\n                <option value="" selected name="subject">-</option>\n                <option value="${t}" name="subject">\n                  ${t}\n                </option>\n                <option value="${n}" name="subject">\n                  ${n}\n                </option>\n                <option value="${s}" name="subject">\n                  ${s}\n                </option>\n                <option value="${a}" name="subject">\n                  ${a}\n                </option>\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <label for="email">E-mail</label>\n            </td>\n            <td colspan="2">\n              <input\n                required\n                type="email"\n                id="email"\n                placeholder="Enter Email...."\n              />\n            </td>\n          </tr>\n        </table>\n        <div class="outer_parts">\n          <div class="buttons">\n            <button type="submit">Submit</button>\n            <button type="reset">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>`,N=[];let E={};const f=()=>{var e;u((e=JSON.parse(r.courseState),`\n  <div class="form-container">\n    <form id="studentsForm">\n      <div class="outer_parts">\n        <h1>Student Registration</h1>\n      </div>\n      <div class="form">\n        <table>\n          <tr>\n            <td>\n              <label for="firstName">First Name</label>\n            </td>\n            <td colspan="2">\n              <input\n                type="text"\n                id="firstName"\n                placeholder="Enter First Name...."\n              />\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <label for="lastName">Last Name</label>\n            </td>\n            <td colspan="2">\n              <input\n                type="text"\n                id="lastName"\n                placeholder="Enter Last Name...."\n              />\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <label for="courses">Lesson Selection</label>\n            </td>\n            <td colspan="2">\n              <select id="courses" required>\n                <option value="" selected name="courses">-</option>\n                ${Object.keys(e).map((e=>`<option value="${e}" name="courses">\n                  ${e}\n                </option>`))}\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <label for="dateOfBirth">Date Of Birth</label>\n            </td>\n            <td colspan="2">\n              <input type="date" required id="dateOfBirth" />\n            </td>\n          </tr>\n\n          <tr>\n            <td>\n              <label for="fee">Tuition Fee</label>\n            </td>\n            <td colspan="2">\n              <input type="text" value="0.00 €" disabled id="fee" />\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <label for="fee">Phone</label>\n            </td>\n            <td colspan="2">\n              <input\n                required\n                type="tel"\n                pattern="[+dd]?[0-9]{10}"\n                placeholder="Enter Phone...."\n                id="phone"\n              />\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <label for="fee">Address</label>\n            </td>\n            <td colspan="2">\n              <input\n                type="text"\n                id="address"\n                required\n                placeholder="Enter Address...."\n              />\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <label for="email">E-mail</label>\n            </td>\n            <td colspan="2">\n              <input\n                type="email"\n                required\n                id="email"\n                placeholder="Enter Email...."\n              />\n            </td>\n          </tr>\n        </table>\n        <div class="outer_parts">\n          <div class="buttons">\n            <button type="submit">Submit</button>\n            <button class="reset">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n`)),document.getElementById("courses").addEventListener("change",(()=>((e,t)=>{let n=document.getElementById("courses"),s=n.options[n.selectedIndex].value;console.log(s),document.getElementById("fee").setAttribute("value",e[s]?.cost||"0")})(JSON.parse(r.courseState))));let t=document.getElementById("studentsForm"),n=document.getElementsByClassName("reset")[0];var s;s=d,n.addEventListener("click",(e=>{e.preventDefault(),s("studentsForm")})),t.addEventListener("submit",(e=>{e.preventDefault(),m(E,t),c("studentState",{...E,studentState:E}),document.getElementById("fee").setAttribute("value","0,00 €"),t.reset()}))},S=e=>{console.log(e),document.getElementById("tbody").innerHTML=e.map((e=>{let t=Object.keys(e)[0];return`\n             <tr style="text-align: center">\n              <th scope="row">${e[t].assignmentName}</th>\n              <td>${e[t].oralMark}</td>\n              <td>${e[t].totalMark}</td>\n              <td id="submDate">${e[t].submDate}</td>\n            </tr>\n  `})).join("").replace(/,\s/g,"")};let $=[];const B=()=>{document.getElementById("main").innerHTML='<div class="form-container">\n    <form id="teachersEditForm">\n      <div class="outer_parts">\n        <h1>Edit Students</h1>\n      </div>\n\n      <div class="form">\n        <table id="hTable" style="min-height: 100px">\n          <thead>\n            <th>Name</th>\n            <th>Contact</th>\n            <th>Course</th>\n            <th>Tuition Fee</th>\n\n            <th>Edit</th>\n          </thead>\n          <tbody id="table"></tbody>\n        </table>\n        <div class="outer_parts">\n          <div class="buttons"></div>\n        </div>\n      </div>\n    </form>\n  </div>',document.getElementById("navbar-toggler").ariaExpanded=!1,document.getElementById("navbar-toggler").classList.add("collapsed"),document.getElementById("navbarNavDropdown").classList.remove("show");let e=document.getElementById("table"),[t,n]=((e,t)=>{let n=0;return[Object.keys(e).map(((s,a)=>(n=a,`\n          <tr id="tr_${a}">\n            <td id="${e[s].firstName}">\n              ${e[s].firstName} ${e[s].lastName}\n            </td>\n\n            <td>${e[s].email}</td>\n\n            <td>\n              <select\n                class="subject"\n                name="subject"\n                id="editSubj${a}"\n                disabled\n                required\n              >\n                ${Object.keys(t).map((e=>`<option value="${e}" name="courses">\n                  ${e}\n                  </option>`))}\n              </select>\n            </td>\n            <td>${e[s].fee}</td>\n            <td>\n              <button id="editButton${a}" type="button">\n                <img src="../../assets/edit-button.png" alt="" />\n              </button>\n              <button id="delete${a}" type="button">\n                <img src="../../assets/trash.png" alt="" />\n              </button>\n            </td>\n          </tr>\n        `))).join("").replace(/,\s/g,""),n]})(JSON.parse(r.studentState),JSON.parse(r.courseState));e.innerHTML=t;const s={callback:p,buttonId:"delete",eventType:"click",state:JSON.parse(r.studentState),stateKey:"studentState"};b(n,s,4);for(let t=0;t<=n;t++)document.getElementById(`editButton${t}`)?.addEventListener("click",(()=>{if(e.rows[t].cells[2].childNodes[1].disabled)e.rows[t].cells[2].childNodes[1].disabled=!1;else{e.rows[t].cells[2].childNodes[1].disabled=!0;let n=e.rows[t].cells[0].id,s=e.rows[t].cells[2].childNodes[1].name.split(" ")[0],a=e.rows[t].cells[2].childNodes[1].value,d=JSON.parse(r.studentState);console.log(n),c("studentState",{studentState:{...d,[n]:{...d[n],[s]:a}}})}}));e.querySelectorAll("tr").forEach((e=>e.cells[0].addEventListener("click",(()=>(({key:e,state:t})=>{document.getElementById("main").innerHTML=(({key:e,state:t})=>`<section\n  class="w-100"\n>\n  <div class="container-fluid w-100">\n    <div class="row w-100 justify-content-center">\n      <div class="col-lg-12 pt-5 w-100""> <div class="card mb-4 w-100""> <div\n      class="card-body p-5 w-100"">\n      <div class="row">\n        <div class="col-sm-3">\n          <p class="mb-0">Full Name</p>\n        </div>\n        <div class="col-sm-9">\n          <p class="text-muted mb-0">\n            ${t[e].firstName+" "+t[e].lastName}\n          </p>\n        </div>\n      </div>\n      <hr />\n      <div class="row">\n        <div class="col-sm-3">\n          <p class="mb-0">Email</p>\n        </div>\n        <div class="col-sm-9">\n          <p class="text-muted mb-0">${t[e].email}</p>\n        </div>\n      </div>\n      <hr />\n\n      <hr />\n      <div class="row">\n        <div class="col-sm-3">\n          <p class="mb-0">Mobile</p>\n        </div>\n        <div class="col-sm-9">\n          <p class="text-muted mb-0">${t[e].phone}</p>\n        </div>\n      </div>\n      <hr />\n      <div class="row">\n        <div class="col-sm-3">\n          <p class="mb-0">Address</p>\n        </div>\n        <div class="col-sm-9">\n          <p class="text-muted mb-0">${t[e].address}</p>\n        </div>\n      </div>\n      <hr />\n      <hr />\n      <div class="row">\n        <select class="w-100" id="assignments" required>\n          <option value="" selected name="courses">-</option>\n          ${Object.keys(JSON.parse(r.assignmentState)).map((e=>`<option value="${e}" name="assignments">\n                        ${e}\n                      </option>`))}\n        </select>\n        <button class="w-25 m-3 addNewAssignment">Add Assignment</button>\n      </div>\n      <hr />\n      <hr />\n      <hr />\n      <div class="row">\n        <table class="table">\n          <thead>\n            <tr>\n              <th scope="col">Assignment</th>\n              <th scope="col">Oral Mark</th>\n              <th scope="col">Total Mark</th>\n              <th scope="col">Deadline</th>\n            </tr>\n          </thead>\n          <tbody id="tbody">\n            <tr>\n              <th scope="row">No assignments</th>\n              <td>-</td>\n              <td>-</td>\n              <td id="submDate">00-00-00</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</section>`)({key:e,state:t});let n=JSON.parse(r.studentState),s=Object.keys(n)[0];document?.getElementById("assignments")?.addEventListener("change",(()=>{console.log(n[s]),n[s].assignments.push(((e,t,n)=>{let s=document?.getElementById("assignments"),a=s?.options[s.selectedIndex].value;for(let t in e[a])n[a]=e[a],"assignmentName"===t&&(n[a].prop={...n[a].prop,prop:e[a].prop}),"submDate"===t&&(n[a].prop={...n[a].prop,prop:e[a].prop});return n[a].oralMark=0,n[a].totalMark=0,console.log(n),n})(JSON.parse(r.assignmentState),0,{})),$.push(Object.assign(n[s],{assignments:n[s].assignments}))})),document?.getElementsByClassName("addNewAssignment")[0].addEventListener("click",(e=>{e.preventDefault(),c("studentState",{studentState:{...JSON.parse(r.studentState),[s]:n[s]}}),S(JSON.parse(r.studentState)[s].assignments)})),S(JSON.parse(r.studentState)[s].assignments)})({key:e.cells[0].id,state:JSON.parse(r.studentState)})))))};document.addEventListener("DOMContentLoaded",(()=>e())),document.getElementsByClassName("navbar-brand")[0].addEventListener("click",(()=>e())),document.getElementsByClassName("assigment")[0].addEventListener("click",(()=>(({state:e}={})=>{u((e||JSON.parse(r.assignmentState),' <div\n  class="form-container"\n>\n  <form id="assignmentForm">\n    <div class="outer_parts">\n      <h1>Assigment</h1>\n    </div>\n    <div class="form">\n      <table>\n        <tr>\n          <td>\n            <label for="assignmentName">Title</label>\n          </td>\n\n          <td colspan="2">\n            <input\n              required\n              type="text"\n              id="assignmentName"\n              placeholder="Enter Course Name...."\n            />\n          </td>\n        </tr>\n\n        <tr>\n          <td>\n            <label for="description">Description</label>\n          </td>\n          <td colspan="2">\n            <input type="text" required id="description" />\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <label for="submDate">Submition Date</label>\n          </td>\n          <td colspan="2">\n            <input type="date" required id="submDate" />\n          </td>\n        </tr>\n      </table>\n      <div class="outer_parts">\n        <div class="buttons">\n          <button type="submit">Submit</button>\n          <button type="reset">Reset</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>'));let t=document.getElementById("assignmentForm");t.addEventListener("submit",(e=>{e.preventDefault(),m(h,t),c("assignmentState",{...h,assignmentState:h}),t.reset()}))})())),document.getElementsByClassName("course")[0].addEventListener("click",(()=>g())),document.getElementsByClassName("teacher")[0].addEventListener("click",(()=>(()=>{u(y);const e=document.getElementById("teachersForm");e.addEventListener("submit",(t=>{t.preventDefault(),m(N,e),c("teachersState",{...N,teachersState:N}),e.reset()}))})())),document.getElementsByClassName("teacherEdit")[0].addEventListener("click",(()=>(()=>{u('<div class="form-container">\n    <form id="teachersEditForm">\n      <div class="outer_parts">\n        <h1>Edit Trainers</h1>\n      </div>\n\n      <div class="form">\n        <table id="hTable" style="min-height: 100px">\n          <thead>\n            <th>Name</th>\n            <th>Last Name</th>\n            <th>Contact</th>\n            <th>Course</th>\n            <th>Edit</th>\n          </thead>\n          <tbody id="table"></tbody>\n        </table>\n        <div class="outer_parts">\n          <div class="buttons"></div>\n        </div>\n      </div>\n    </form>\n  </div>');let e=document.getElementById("table"),[d,l]=(e=>{let d=0;return[Object.keys(e).map(((l,i)=>(d=i,`<tr id="tr_${i}">\n          <td id="${e[l].firstName}">${e[l].firstName}</td>\n          <td>${e[l].lastName}</td>\n          <td>${e[l].email}</td>\n          <td>\n            <select\n              class="subject"\n              name="subject"\n              id="editSubj${i}"\n              disabled\n              required\n            >\n              <option\n                ${e[l].subject===t&&"selected"}\n                value="${t}"\n                name="subject"\n              >\n                ${t}\n              </option>\n\n              <option\n                ${e[l].subject===n?"selected":""}\n                value="${n}"\n                name="subject"\n              >\n                ${n}\n              </option>\n              <option\n                ${e[l].subject===s?"selected":"false"}\n                value="${s}"\n                name="subject"\n              >\n                ${s}\n              </option>\n              <option\n                ${e[l].subject===a?"selected":""}\n                value="${a}"\n                name="subject"\n              >\n                ${a}\n              </option>\n            </select>\n          </td>\n          <td>\n            <button id="editButton${i}" type="button">\n              <img src="../../assets/edit-button.png" alt="" />\n            </button>\n            <button id="delete${i}" type="button">\n              <img src="../../assets/trash.png" alt="" />\n            </button>\n          </td>\n        </tr> `))).join("").replace(/,/g,""),d]})(JSON.parse(r.teachersState));e.innerHTML=d;const i={callback:p,buttonId:"delete",eventType:"click",state:JSON.parse(r.teachersState),stateKey:"teachersState"},o={cell:3,tableNode:e,buttonId:"editButton",eventType:"click",state:JSON.parse(r.teachersState),stateKey:"teachersState"};b(l,i,4),((e,t={})=>{let{tableNode:n,cell:s}=t;for(let a=0;a<=e;a++)document.getElementById(`${t.buttonId}${a}`)?.addEventListener(t.eventType,(()=>{let e=n.rows[a].cells[s]?.childNodes[1]?.disabled;if(e)n.rows[a].cells[s].childNodes[1].disabled=!1;else{n.rows[a].cells[s].childNodes[1].disabled=!0;let e=n.rows[a].cells[0].id,d=n.rows[a].cells[s].childNodes[1].name,l=n.rows[a].cells[s].childNodes[1].value,i=t.state;console.log(e),c(t.stateKey,{teachersState:{...i,[e]:{...i[e],[d]:l}}})}}))})(l,o)})())),document.getElementsByClassName("student")[0].addEventListener("click",(()=>f())),document.getElementsByClassName("studentEdit")[0].addEventListener("click",(()=>B())),document.getElementsByClassName("aboutUs")[0].addEventListener("click",(()=>u(' <div class="about-section">\n  <div class="inner-container">\n    <h1>About Us</h1>\n    <p class="text">\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit\n      ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus\n      eius dicta a voluptates sit deleniti autem error eos totam nisi neque\n      voluptates sit deleniti autem error eos totam nisi neque.\n    </p>\n    <div class="skills"></div>\n  </div>\n</div>'))),console.log(r)})();