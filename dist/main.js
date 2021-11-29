(()=>{"use strict";const e=e=>{let t=document.getElementById(e)?.querySelectorAll("input, select, textarea");for(let e=0;e<t.length;e++)switch(t[e].type.toLowerCase()){case"text":case"number":case"currency":case"password":case"date":case"textarea":case"hidden":console.log(t[e].value.value),t[e].setAttribute("value",""),t[e].innerText="";break;case"radio":case"checkbox":t[e].checked&&(t[e].checked=!1);break;case"select-one":case"select-multi":t[e].selectedIndex=-1}},t=e=>Number(String(e).replace(/\D*/g,"").replace(/00$/,"")),n=e=>{let n=e.target.value;e.target.value=n?t(n):""},s=e=>{let n=e.target.value;e.target.value=n?t(n).toLocaleString("de-DE",{maximumFractionDigits:2,currency:"EUR",style:"currency"}):""};let a="Javascript",d="Java",l="C#",i="Python",o=window.localStorage;o.setItem("studentState",JSON.stringify({Name1:{address:"Address 1",courses:"Java",dateOfBirth:"2021-11-11",email:"th@gmail.com",fee:"2.500,00 €",firstName:"Name1",lastName:"Name1",phone:"6969696969",assignments:[]},Name2:{address:"Address 2",courses:"JavaScript",dateOfBirth:"2021-11-11",email:"th@gmail.com",fee:"2.500,00 €",firstName:"Name2",lastName:"Name2",phone:"6969696969",assignments:[]}})),o.setItem("teachersState",JSON.stringify({Teacher1:{email:"th@gmail.com",firstName:"Teacher1",lastName:"Teacher1",subject:"Javascript"},Teacher2:{email:"th@gmail.com",firstName:"Teacher2",lastName:"Teacher2",subject:"Javascript"}})),o.setItem("courseState",JSON.stringify({Java:{cost:"2.000,00 €",courseName:"Java",endDate:"2021-12-05",startingDate:"2021-11-01",stream:"Java",type:"PartTime"},Javascript:{cost:"2.000,00 €",courseName:"Javascript",endDate:"2021-12-05",startingDate:"2021-11-01",stream:"Javascript",type:"PartTime"}})),o.setItem("assignmentState",JSON.stringify({assignment1:{assignmentName:"assignment1",description:"description",submDate:"2021-11-16"},assignment2:{assignmentName:"assignment2",description:"description",submDate:"2021-11-16"}})),o.setItem("conditional",JSON.stringify(!1));const r=(e,t={})=>{o.setItem(e,JSON.stringify({...t[e]}))},c=(e,t)=>e[t.elements[0].value]=[...t.elements].reduce(((e,t)=>t.id?{...e,[t.id]:t.value}:{...e}),{}),m=e=>{document.getElementById("main").innerHTML=e,document.getElementById("navbar-toggler").ariaExpanded="false",document.getElementById("navbar-toggler").classList.add("collapsed"),document.getElementById("navbarNavDropdown").classList.remove("show")},u=(e,t,n)=>{try{const s=document.getElementById("table");let a=s.rows.length;for(let d=0;d<=a;d++){const l=s.rows[d],i=l.cells[n].childNodes[3],o=l.cells[0].id;if(i.id===e){s.deleteRow(d);const{[o]:e,...n}=t;return a--,n}}}catch(e){console.log(e)}},p=(e,t={},n)=>{const{callback:s,buttonId:a,eventType:d,state:l,stateKey:i}=t;for(let t=0;t<=e;t++)document.getElementById(`${a}${t}`)?.addEventListener(d,(()=>{let e=s(`${a}${t}`,l,n);r(i,{...l,teachersState:e})}))},b=()=>m('<div class="headings-container">\n    <h2 class="heading1">Private</h2>\n    <h2 class="heading2">School</h2>\n  </div>');let v={};const g=({state:t,cond:u}={})=>{m((({state:e,cond:t})=>` <div class="form-container">\n    <form id="courseForm">\n      <div class="outer_parts">\n        <h1>Course Creation</h1>\n      </div>\n      <div class="form">\n        <table>\n          <tr>\n            <td>\n              <label for="courseName">Course Name</label>\n            </td>\n\n            <td colspan="2">\n              ${t?'<input\n                  required\n                  type="text"\n                  id="courseName"\n                  placeholder="Enter Course Name...."\n                  \n                />':`<select id="courses" required>\n                  <option value="" selected name="courses">\n                    -\n                  </option>\n                  ${Object.keys(e).map((e=>`<option value="${e}" name="courses">\n                  ${e}\n                </option>`))}\n                </select>`}\n            </td>\n          </tr>\n\n          <tr>\n            <td>\n              <label for="stream">Stream</label>\n            </td>\n            <td colspan="2">\n              <select id="stream" ${t?"":"disabled"} required>\n                <option value="" disabled selected name="stream">-</option>\n                <option value="${a}" name="stream">\n                  ${a}\n                </option>\n                <option value="${d}" name="stream">\n                  ${d}\n                </option>\n                <option value="${l}" name="stream">\n                  ${l}\n                </option>\n                <option value="${i}" name="stream">\n                  ${i}\n                </option>\n              </select>\n            </td>\n          </tr>\n\n          <tr>\n            <td>\n              <label for="type">Type</label>\n            </td>\n            <td colspan="2">\n              <select\n                id="type"\n                ${t?"":"disabled"}\n                readonly="true"\n                required\n              >\n                <option value="" disabled selected name="type">-</option>\n                <option value="PartTime" name="type">Part Time</option>\n                <option value="FullTime" name="type">Full Time</option>\n              </select>\n            </td>\n          </tr>\n\n          <tr>\n            <td>\n              <label for="cost">Cost</label>\n            </td>\n            <td colspan="2">\n              <input\n                type="text"\n                ${t?"":"disabled"}\n                step="any"\n                min="1"\n                required\n                id="cost"\n              />\n            </td>\n          </tr>\n\n          <tr>\n            <td>\n              <label for="startingDate">Starting Date</label>\n            </td>\n            <td colspan="2">\n              <input\n                type="date"\n                ${t?"":"disabled"}\n                required\n                id="startingDate"\n              />\n            </td>\n          </tr>\n\n          <tr>\n            <td>\n              <label for="endDate">End Date</label>\n            </td>\n            <td colspan="2">\n              <input\n                type="date"\n                ${t?"":"disabled"}\n                required\n                id="endDate"\n              />\n            </td>\n          </tr>\n        </table>\n        <div class="outer_parts">\n          <button ${t?"disabled":""} class="addNew" type="button">\n            Add New\n          </button>\n          <div class="buttons">\n            <button ${t?"":"disabled"} class="submit" type="submit">\n              Submit\n            </button>\n            <button class="reset">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>`)({state:t||JSON.parse(o.courseState),cond:u||JSON.parse(o.conditional)})),document.getElementById("cost").addEventListener("focus",n),document.getElementById("cost").addEventListener("blur",s);let p=document.getElementById("courseForm");document?.getElementById("courses")?.addEventListener("change",(()=>{((e,t)=>{let n=document?.getElementById("courses"),s=n?.options[n.selectedIndex].value;for(let t in e[s]){let n=document?.getElementById(t);console.log(n),"stream"!==t&&"type"!==t?n?.setAttribute("value",e[s][t]):[...n].forEach(((a,d)=>{a&&a.value===e[s][t]&&n[d]&&(n[d].selected="selected")}))}})(JSON.parse(o.courseState)),c(v,p)})),document.getElementById("courseForm").addEventListener("submit",(e=>{e.preventDefault(),c(v,p),r("courseState",{...v,courseState:v}),o.setItem("conditional",JSON.stringify(!0!==JSON.parse(o.conditional))),g({state:JSON.parse(o.courseState),cond:JSON.parse(o.conditional)})})),document.getElementsByClassName("reset")[0].addEventListener("click",(t=>{t.preventDefault(),e("courseForm")})),document.getElementById("endDate").addEventListener("change",(()=>{let e=document.getElementById("startingDate").value,t=document.getElementById("endDate").value;console.log(e,t),Date.parse(e)>=Date.parse(t)&&(alert("End date should be greater than Start date"),t.value=null)}));let b=document?.getElementsByClassName("addNew")[0];b.addEventListener("click",(()=>{o.setItem("conditional",JSON.stringify(!0!==JSON.parse(o.conditional))),g({state:JSON.parse(o.courseState),cond:JSON.parse(o.conditional)})}))};let h={};const y=`<div class="form-container">\n    <form id="teachersForm">\n      <div class="outer_parts">\n        <h1>Trainer Registration</h1>\n      </div>\n\n      <div class="form">\n        <table>\n          <tr>\n            <td>\n              <label for="firstName">First Name</label>\n            </td>\n            <td colspan="2">\n              <input\n                required\n                type="text"\n                id="firstName"\n                placeholder="Enter First Name...."\n              />\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <label for="lastName">Last Name</label>\n            </td>\n            <td colspan="2">\n              <input\n                required\n                type="text"\n                id="lastName"\n                placeholder="Enter Last Name...."\n              />\n            </td>\n          </tr>\n\n          <tr>\n            <td>\n              <label for="subject">Subject</label>\n            </td>\n            <td colspan="2">\n              <select id="subject" required>\n                <option value="" selected name="subject">-</option>\n                <option value="${a}" name="subject">\n                  ${a}\n                </option>\n                <option value="${d}" name="subject">\n                  ${d}\n                </option>\n                <option value="${l}" name="subject">\n                  ${l}\n                </option>\n                <option value="${i}" name="subject">\n                  ${i}\n                </option>\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <label for="email">E-mail</label>\n            </td>\n            <td colspan="2">\n              <input\n                required\n                type="email"\n                id="email"\n                placeholder="Enter Email...."\n              />\n            </td>\n          </tr>\n        </table>\n        <div class="outer_parts">\n          <div class="buttons">\n            <button type="submit">Submit</button>\n            <button type="reset">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>`,N=[];let E={};const f=()=>{var t;m((t=JSON.parse(o.courseState),`\n  <div class="form-container">\n    <form id="studentsForm">\n      <div class="outer_parts">\n        <h1>Student Registration</h1>\n      </div>\n      <div class="form">\n        <table>\n          <tr>\n            <td>\n              <label for="firstName">First Name</label>\n            </td>\n            <td colspan="2">\n              <input\n                type="text"\n                id="firstName"\n                placeholder="Enter First Name...."\n              />\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <label for="lastName">Last Name</label>\n            </td>\n            <td colspan="2">\n              <input\n                type="text"\n                id="lastName"\n                placeholder="Enter Last Name...."\n              />\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <label for="courses">Lesson Selection</label>\n            </td>\n            <td colspan="2">\n              <select id="courses" required>\n                <option value="" selected name="courses">-</option>\n                ${Object.keys(t).map((e=>`<option value="${e}" name="courses">\n                  ${e}\n                </option>`))}\n              </select>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <label for="dateOfBirth">Date Of Birth</label>\n            </td>\n            <td colspan="2">\n              <input type="date" required id="dateOfBirth" />\n            </td>\n          </tr>\n\n          <tr>\n            <td>\n              <label for="fee">Tuition Fee</label>\n            </td>\n            <td colspan="2">\n              <input type="text" value="0.00 €" disabled id="fee" />\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <label for="fee">Phone</label>\n            </td>\n            <td colspan="2">\n              <input\n                required\n                type="tel"\n                pattern="[+dd]?[0-9]{10}"\n                placeholder="Enter Phone...."\n                id="phone"\n              />\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <label for="fee">Address</label>\n            </td>\n            <td colspan="2">\n              <input\n                type="text"\n                id="address"\n                required\n                placeholder="Enter Address...."\n              />\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <label for="email">E-mail</label>\n            </td>\n            <td colspan="2">\n              <input\n                type="email"\n                required\n                id="email"\n                placeholder="Enter Email...."\n              />\n            </td>\n          </tr>\n        </table>\n        <div class="outer_parts">\n          <div class="buttons">\n            <button type="submit">Submit</button>\n            <button class="reset">Cancel</button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n`)),document.getElementById("courses").addEventListener("change",(()=>((e,t)=>{let n=document.getElementById("courses"),s=n.options[n.selectedIndex].value;console.log(s),document.getElementById("fee").setAttribute("value",e[s]?.cost||"0")})(JSON.parse(o.courseState)))),document.getElementById("dateOfBirth").addEventListener("change",(()=>{let e=document.getElementById("dateOfBirth").value;(e=>{document.getElementById("dateOfBirth");let t=Date.now()-e.getTime(),n=new Date(t);if(Math.abs(n.getUTCFullYear()-1970)>17)return!0;document.getElementById("dateOfBirth").value="",alert("Must be over 18 years old")})(new Date(e))}));let n=document.getElementById("studentsForm"),s=document.getElementsByClassName("reset")[0];var a;a=e,s.addEventListener("click",(e=>{e.preventDefault(),a("studentsForm")})),n.addEventListener("submit",(e=>{e.preventDefault(),c(E,n),r("studentState",{...E,studentState:E}),document.getElementById("fee").setAttribute("value","0,00 €"),n.reset()}))},S=e=>{console.log(e),document.getElementById("tbody").innerHTML=e.map((e=>{let t=Object.keys(e)[0];return`\n             <tr style="text-align: center">\n              <th scope="row">${e[t].assignmentName}</th>\n              <td>${e[t].oralMark}</td>\n              <td>${e[t].totalMark}</td>\n              <td id="submDate">${e[t].submDate}</td>\n            </tr>\n  `})).join("").replace(/,\s/g,"")};let $=[];const B=()=>{document.getElementById("main").innerHTML='<div class="form-container">\n    <form id="teachersEditForm">\n      <div class="outer_parts">\n        <h1>Edit Students</h1>\n      </div>\n\n      <div class="form">\n        <table id="hTable" style="min-height: 100px">\n          <thead>\n            <th>Name</th>\n            <th>Contact</th>\n            <th>Course</th>\n            <th>Tuition Fee</th>\n\n            <th>Edit</th>\n          </thead>\n          <tbody id="table"></tbody>\n        </table>\n        <div class="outer_parts">\n          <div class="buttons"></div>\n        </div>\n      </div>\n    </form>\n  </div>',document.getElementById("navbar-toggler").ariaExpanded="false",document.getElementById("navbar-toggler").classList.add("collapsed"),document.getElementById("navbarNavDropdown").classList.remove("show");let e=document.getElementById("table"),[t,n]=((e,t)=>{let n=0;return[Object.keys(e).map(((s,a)=>(n=a,`\n          <tr id="tr_${a}">\n            <td id="${e[s].firstName}">\n              ${e[s].firstName} ${e[s].lastName}\n            </td>\n\n            <td>${e[s].email}</td>\n\n            <td>\n              <select\n                class="subject"\n                name="subject"\n                id="editSubj${a}"\n                disabled\n                required\n              >\n                ${Object.keys(t).map((e=>`<option value="${e}" name="courses">\n                  ${e}\n                  </option>`))}\n              </select>\n            </td>\n            <td>${e[s].fee}</td>\n            <td>\n              <button id="editButton${a}" type="button">\n                <img src="../../assets/edit-button.png" alt="" />\n              </button>\n              <button id="delete${a}" type="button">\n                <img src="../../assets/trash.png" alt="" />\n              </button>\n            </td>\n          </tr>\n        `))).join("").replace(/,\s/g,""),n]})(JSON.parse(o.studentState),JSON.parse(o.courseState));e.innerHTML=t;const s={callback:u,buttonId:"delete",eventType:"click",state:JSON.parse(o.studentState),stateKey:"studentState"};p(n,s,4);for(let t=0;t<=n;t++)document.getElementById(`editButton${t}`)?.addEventListener("click",(()=>{if(e.rows[t].cells[2].childNodes[1].disabled)e.rows[t].cells[2].childNodes[1].disabled=!1;else{e.rows[t].cells[2].childNodes[1].disabled=!0;let n=e.rows[t].cells[0].id,s=e.rows[t].cells[2].childNodes[1].name.split(" ")[0],a=e.rows[t].cells[2].childNodes[1]?.value,d=JSON.parse(o.studentState);r("studentState",{studentState:{...d,[n]:{...d[n],[s]:a}}})}}));e.querySelectorAll("tr").forEach((e=>e.cells[0].addEventListener("click",(()=>(({key:e,state:t})=>{document.getElementById("main").innerHTML=(({key:e,state:t})=>`<section\n  class="w-100"\n>\n  <div class="container-fluid w-100">\n    <div class="row w-100 justify-content-center">\n      <div class="col-lg-12 pt-5 w-100""> <div class="card mb-4 w-100""> <div\n      class="card-body p-5 w-100"">\n      <div class="row">\n        <div class="col-sm-3">\n          <p class="mb-0">Full Name</p>\n        </div>\n        <div class="col-sm-9">\n          <p class="text-muted mb-0">\n            ${t[e].firstName+" "+t[e].lastName}\n          </p>\n        </div>\n      </div>\n      <hr />\n      <div class="row">\n        <div class="col-sm-3">\n          <p class="mb-0">Email</p>\n        </div>\n        <div class="col-sm-9">\n          <p class="text-muted mb-0">${t[e].email}</p>\n        </div>\n      </div>\n      <hr />\n\n      <hr />\n      <div class="row">\n        <div class="col-sm-3">\n          <p class="mb-0">Mobile</p>\n        </div>\n        <div class="col-sm-9">\n          <p class="text-muted mb-0">${t[e].phone}</p>\n        </div>\n      </div>\n      <hr />\n      <div class="row">\n        <div class="col-sm-3">\n          <p class="mb-0">Address</p>\n        </div>\n        <div class="col-sm-9">\n          <p class="text-muted mb-0">${t[e].address}</p>\n        </div>\n      </div>\n      <hr />\n      <hr />\n      <div class="row">\n        <select class="w-100" id="assignments" required>\n          <option value="" selected name="courses">-</option>\n          ${Object.keys(JSON.parse(o.assignmentState)).map((e=>`<option value="${e}" name="assignments">\n                        ${e}\n                      </option>`))}\n        </select>\n        <button class="w-25 m-3 addNewAssignment">Add Assignment</button>\n      </div>\n      <hr />\n      <hr />\n      <hr />\n      <div class="row">\n        <table class="table">\n          <thead>\n            <tr>\n              <th scope="col">Assignment</th>\n              <th scope="col">Oral Mark</th>\n              <th scope="col">Total Mark</th>\n              <th scope="col">Deadline</th>\n            </tr>\n          </thead>\n          <tbody id="tbody">\n            <tr>\n              <th scope="row">No assignments</th>\n              <td>-</td>\n              <td>-</td>\n              <td id="submDate">00-00-00</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</section>`)({key:e,state:t});let n=JSON.parse(o.studentState),s=Object.keys(n)[0];n[s].assignments=[],document?.getElementById("assignments")?.addEventListener("change",(()=>{console.log(n[s]),n[s].assignments.push(((e,t,n)=>{let s=document?.getElementById("assignments"),a=s?.options[s.selectedIndex].value;for(let t in e[a])n[a]=e[a],"assignmentName"===t&&(n[a].prop={...n[a].prop,prop:e[a].prop}),"submDate"===t&&(n[a].prop={...n[a].prop,prop:e[a].prop});return n[a].oralMark=0,n[a].totalMark=0,console.log(n),n})(JSON.parse(o.assignmentState),0,{})),$.push(Object.assign(n[s],{assignments:n[s].assignments}))})),document?.getElementsByClassName("addNewAssignment")[0].addEventListener("click",(e=>{e.preventDefault(),r("studentState",{studentState:{...JSON.parse(o.studentState),[s]:n[s]}}),S(JSON.parse(o.studentState)[s].assignments)})),S(JSON.parse(o.studentState)[s].assignments)})({key:e.cells[0].id,state:JSON.parse(o.studentState)})))))};document.addEventListener("DOMContentLoaded",(()=>b())),document.getElementsByClassName("navbar-brand")[0].addEventListener("click",(()=>b())),document.getElementsByClassName("assigment")[0].addEventListener("click",(()=>(({state:e}={})=>{m((e||JSON.parse(o.assignmentState),' <div\n  class="form-container"\n>\n  <form id="assignmentForm">\n    <div class="outer_parts">\n      <h1>Assigment</h1>\n    </div>\n    <div class="form">\n      <table>\n        <tr>\n          <td>\n            <label for="assignmentName">Title</label>\n          </td>\n\n          <td colspan="2">\n            <input\n              required\n              type="text"\n              id="assignmentName"\n              placeholder="Enter Course Name...."\n            />\n          </td>\n        </tr>\n\n        <tr>\n          <td>\n            <label for="description">Description</label>\n          </td>\n          <td colspan="2">\n            <input type="text" required id="description" />\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <label for="submDate">Submition Date</label>\n          </td>\n          <td colspan="2">\n            <input type="date" required id="submDate" />\n          </td>\n        </tr>\n      </table>\n      <div class="outer_parts">\n        <div class="buttons">\n          <button type="submit">Submit</button>\n          <button type="reset">Reset</button>\n        </div>\n      </div>\n    </div>\n  </form>\n</div>'));let t=document.getElementById("assignmentForm");t.addEventListener("submit",(e=>{e.preventDefault(),c(h,t),r("assignmentState",{...h,assignmentState:h}),t.reset()}))})())),document.getElementsByClassName("course")[0].addEventListener("click",(()=>g())),document.getElementsByClassName("teacher")[0].addEventListener("click",(()=>(()=>{m(y);const e=document.getElementById("teachersForm");e.addEventListener("submit",(t=>{t.preventDefault(),c(N,e),r("teachersState",{...N,teachersState:N}),e.reset()}))})())),document.getElementsByClassName("teacherEdit")[0].addEventListener("click",(()=>(()=>{m('<div class="form-container">\n    <form id="teachersEditForm">\n      <div class="outer_parts">\n        <h1>Edit Trainers</h1>\n      </div>\n\n      <div class="form">\n        <table id="hTable" style="min-height: 100px">\n          <thead>\n            <th>Name</th>\n            <th>Last Name</th>\n            <th>Contact</th>\n            <th>Course</th>\n            <th>Edit</th>\n          </thead>\n          <tbody id="table"></tbody>\n        </table>\n        <div class="outer_parts">\n          <div class="buttons"></div>\n        </div>\n      </div>\n    </form>\n  </div>');let e=document.getElementById("table"),[t,n]=(e=>{let t=0;return[Object.keys(e).map(((n,s)=>(t=s,`<tr id="tr_${s}">\n          <td id="${e[n].firstName}">${e[n].firstName}</td>\n          <td>${e[n].lastName}</td>\n          <td>${e[n].email}</td>\n          <td>\n            <select\n              class="subject"\n              name="subject"\n              id="editSubj${s}"\n              disabled\n              required\n            >\n              <option\n                ${e[n].subject===a&&"selected"}\n                value="${a}"\n                name="subject"\n              >\n                ${a}\n              </option>\n\n              <option\n                ${e[n].subject===d?"selected":""}\n                value="${d}"\n                name="subject"\n              >\n                ${d}\n              </option>\n              <option\n                ${e[n].subject===l?"selected":"false"}\n                value="${l}"\n                name="subject"\n              >\n                ${l}\n              </option>\n              <option\n                ${e[n].subject===i?"selected":""}\n                value="${i}"\n                name="subject"\n              >\n                ${i}\n              </option>\n            </select>\n          </td>\n          <td>\n            <button id="editButton${s}" type="button">\n              <img src="../../assets/edit-button.png" alt="" />\n            </button>\n            <button id="delete${s}" type="button">\n              <img src="../../assets/trash.png" alt="" />\n            </button>\n          </td>\n        </tr> `))).join("").replace(/,/g,""),t]})(JSON.parse(o.teachersState));e.innerHTML=t;const s={callback:u,buttonId:"delete",eventType:"click",state:JSON.parse(o.teachersState),stateKey:"teachersState"},c={cell:3,tableNode:e,buttonId:"editButton",eventType:"click",state:JSON.parse(o.teachersState),stateKey:"teachersState"};p(n,s,4),((e,t={})=>{let{tableNode:n,cell:s}=t;for(let a=0;a<=e;a++)document.getElementById(`${t.buttonId}${a}`)?.addEventListener(t.eventType,(()=>{let e=n.rows[a].cells[s]?.childNodes[1]?.disabled;if(e)n.rows[a].cells[s].childNodes[1].disabled=!1;else{n.rows[a].cells[s].childNodes[1].disabled=!0;let e=n.rows[a].cells[0].id,d=n.rows[a].cells[s].childNodes[1].name,l=n.rows[a].cells[s].childNodes[1].value,i=t.state;console.log(e),r(t.stateKey,{teachersState:{...i,[e]:{...i[e],[d]:l}}})}}))})(n,c)})())),document.getElementsByClassName("student")[0].addEventListener("click",(()=>f())),document.getElementsByClassName("studentEdit")[0].addEventListener("click",(()=>B())),document.getElementsByClassName("aboutUs")[0].addEventListener("click",(()=>m(' <div class="about-section">\n  <div class="inner-container">\n    <h1>About Us</h1>\n    <p class="text">\n      Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit\n      ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus\n      eius dicta a voluptates sit deleniti autem error eos totam nisi neque\n      voluptates sit deleniti autem error eos totam nisi neque.\n    </p>\n  </div>\n</div>')))})();