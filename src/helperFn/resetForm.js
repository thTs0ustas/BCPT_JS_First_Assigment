//
// custom reset form function
//

export const resetForm = (formId) => {
  let frm_elements = document
    .getElementById(formId)
    ?.querySelectorAll("input, select, textarea");

  for (let i = 0; i < frm_elements.length; i++) {
    let field_type = frm_elements[i].type.toLowerCase();

    switch (field_type) {
      case "text":
      case "number":
      case "currency":
      case "password":
      case "date":
      case "textarea":
      case "hidden":
        console.log(frm_elements[i].value.value);
        frm_elements[i].setAttribute("value", "");
        frm_elements[i].innerText = "";
        break;
      case "radio":
      case "checkbox":
        if (frm_elements[i].checked) {
          frm_elements[i].checked = false;
        }
        break;
      case "select-one":
      case "select-multi":
        frm_elements[i].selectedIndex = -1;
        break;
      default:
        break;
    }
  }
};
