// Validation function for the birth date to be over 18 years old.

export const dateOfBirthValidation = (date) => {
  document.getElementById("dateOfBirth");
  let ageDifMs = Date.now() - date.getTime();
  let ageDate = new Date(ageDifMs);
  let age = Math.abs(ageDate.getUTCFullYear() - 1970);
  if (age > 17) {
    return true;
  } else {
    document.getElementById("dateOfBirth").value = "";
    alert("Must be over 18 years old");
  }
};
