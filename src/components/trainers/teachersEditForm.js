import teachersEditFormHTML from "./teachersEditFormHTML.js";
import {
  closeNavBar,
  deleteRow,
  deleteRowFn,
  editSubjectTab,
} from "../../helperFn";
import { rootState } from "../../state/rootState.js";
import { mapTableRows } from "../../HTML_injection_fn";

const teacherEditFormFn = () => {
  //Close nav dropdown when loading HTML
  closeNavBar(teachersEditFormHTML);

  let table = document.getElementById("table");
  let [htmlPart, index] = mapTableRows(JSON.parse(rootState.teachersState));
  table.innerHTML = htmlPart;

  const deleteRowOptions = {
    callback: deleteRow,
    buttonId: "delete",
    eventType: "click",
    state: JSON.parse(rootState.teachersState),
    stateKey: "teachersState",
  };
  const editTabsOptions = {
    cell: 3,
    tableNode: table,
    buttonId: "editButton",
    eventType: "click",
    state: JSON.parse(rootState.teachersState),
    stateKey: "teachersState",
  };

  //
  //  Delete Row
  //
  deleteRowFn(index, deleteRowOptions, 4);

  //
  //  edit subject tab
  //
  editSubjectTab(index, editTabsOptions);
};

export { teacherEditFormFn };
