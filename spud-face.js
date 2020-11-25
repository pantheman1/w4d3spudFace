window.addEventListener("DOMContentLoaded", (event) => {

  const licenseForm = document.getElementById("drivers-license-form")
//input event listener
//query selector all on form__input class
//event listener on submit button
//input info and submit events
const licenseInfo = document.querySelectorAll(".license__info")

licenseForm.addEventListener("input", event => {
  licenseInfo.forEach(field => {
    if (field.id.includes(event.target.id)) {
      if (event.target.id === "donor-status") {
        let donorStatus = document.getElementById("card-donor-status");
        donorStatus.innerHTML = event.target.checked ? "yes" : "no";
      } else {
        field.innerHTML = event.target.value;
      }
    }
  })
})

  const inputList = document.querySelectorAll(".form__input");

  console.log(inputList);
  console.log(licenseInfo);

  const title = document.getElementById("title")
  const firstName = document.getElementById('first-name')
  const lastName = document.getElementById('last-name')
  const eyeColor = document.getElementById('eye-color')
  const height = document.getElementById('height')

  // ** Phase 1B: Update license with event delegation and event.target ** 


  // ** Phase 2: Add focus and blur events to form inputs **
 

  // ** Phase 3: Check that license numbers match **
 

  // ** Phase 4: Update submit button click count **

 
});