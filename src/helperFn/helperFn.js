import { rootState } from "../state/rootState.js";

export const stateReducer = (stateKey, state, currentState = {}) => {
  rootState.setItem(stateKey, JSON.stringify({ ...currentState[stateKey] }));
};

export const extractFormValuesAndAddToLocalState = (state, formElements) =>
  (state[formElements.elements[0].value] = [...formElements.elements].reduce(
    (preVal, currentVal) =>
      !currentVal.id
        ? { ...preVal }
        : { ...preVal, [currentVal.id]: currentVal.value },
    {}
  ));

export const deleteRow = (id, state) => {
  try {
    const table = document.getElementById("table");

    let rowCount = table.rows.length;
    for (let i = 0; i < rowCount; i++) {
      const row = table.rows[i];
      const rowObj = row.cells[4].childNodes[3];
      const rowObjName = row.cells[0].id;

      if (rowObj.id === id) {
        table.deleteRow(i);
        // eslint-disable-next-line no-unused-vars
        const { [rowObjName]: remove, ...rest } = state;
        rowCount--;
        return rest;
      }
    }
  } catch (e) {
    console.error(e);
  }
};

export const pullDataFromCourse = (state, id) => {
  let selectedCourse = document?.getElementById(id);
  let value = selectedCourse?.options[selectedCourse.selectedIndex].value;

  for (let prop in state[value]) {
    let elementProp = document?.getElementById(prop);

    if (prop !== "stream" && prop !== "type")
      elementProp?.setAttribute("value", state[value][prop]);
    else {
      [...elementProp].forEach((node, i) => {
        if (node && node.value === state[value][prop] && elementProp[i]) {
          console.log(elementProp[i].value);
          elementProp[i].selected = "selected";
        }
      });
    }
  }
};

export const editSubjectTab = (index, options = {}) => {
  let { tableNode, cell } = options;
  for (let i = 0; i <= index; i++) {
    document
      .getElementById(`${options.buttonId}${i}`)
      ?.addEventListener(options.eventType, () => {
        let selectCell = tableNode.rows[i].cells[cell].childNodes[1].disabled;
        if (selectCell) {
          tableNode.rows[i].cells[cell].childNodes[1].disabled = false;
        } else {
          tableNode.rows[i].cells[cell].childNodes[1].disabled = true;

          let rowObjName = tableNode.rows[i].cells[0].id;
          let subjName = tableNode.rows[i].cells[cell].childNodes[1].name;
          let subjVal = tableNode.rows[i].cells[cell].childNodes[1].value;
          let localState = options.state;

          stateReducer(options.stateKey, localState, {
            teachersState: {
              ...localState,
              [rowObjName]: {
                ...localState[rowObjName],
                [subjName]: subjVal,
              },
            },
          });
        }
      });
  }
};

export const closeNavBar = (html) => {
  document.getElementById("main").innerHTML = html;
  document.getElementById("navbar-toggler").ariaExpanded = false;
  document.getElementById("navbar-toggler").classList.add("collapsed");
  document.getElementById("navbarNavDropdown").classList.remove("show");
};

export const deleteRowFn = (index, options = {}) => {
  const { callback, buttonId, eventType, state, stateKey } = options;
  for (let i = 0; i <= index; i++) {
    document
      .getElementById(`${buttonId}${i}`)
      ?.addEventListener(eventType, () => {
        ``;
        let remainingRows = callback(`${buttonId}${i}`, state);

        stateReducer(stateKey, rootState, {
          ...state,
          teachersState: remainingRows,
        });
      });
  }
};

export let changeCondAndRef = (options) => {
  let { setItem, mainDir, callback } = options;

  rootState.setItem(
    `${setItem}`,
    JSON.stringify(JSON.parse(rootState.conditional) !== true)
  );

  mainDir.innerHTML = callback({
    state: JSON.parse(rootState.courseState),
    cond: JSON.parse(rootState.conditional),
  });
  callback();
};
