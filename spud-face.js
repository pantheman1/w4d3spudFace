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

  // const inputList = document.querySelectorAll(".form__input");

  // console.log(inputList);
  // console.log(licenseInfo);

  // const title = document.getElementById("title")
  // const firstName = document.getElementById('first-name')
  // const lastName = document.getElementById('last-name')
  // const eyeColor = document.getElementById('eye-color')
  // const height = document.getElementById('height')

  // ** Phase 1B: Update license with event delegation and event.target **


  // ** Phase 2: Add focus and blur events to form inputs **
  const inputs = document.querySelectorAll(".form__input");

  inputs.forEach(input => {
    input.addEventListener("focus", event => {
      event.target.style.backgroundColor = 'lightgreen';
    })
  
    input.addEventListener("blur", event => {
      event.target.style.backgroundColor = "initial";
    })
  })




  // ** Phase 3: Check that license numbers match **
const licenseNum = document.getElementById("license-num");
const confirmNum = document.getElementById("license-num-confirm");

const checkPassword = event => {
  if (licenseNum.value !== confirmNum.value) {
    licenseNum.style.backgroundColor = "lightcoral";
    confirmNum.style.backgroundColor = "lightcoral";
  }
}

confirmNum.addEventListener("input", event => {
  setTimeout(checkPassword, 3000)

})
  // ** Phase 4: Update submit button click count **


});
