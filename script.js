 const phoneNumber = document.getElementById("number");
 const fname = document.getElementById("name");
 const email = document.getElementById("email");


 function emailValidation() {
    if (email.value.length >= 10) {
        email.style.border = "3px solid #89fc00";
       }else {
        email.style.border = "3px solid red";
       };
 }

function fullNameValidation () {
    if (fname.value.length >= 4) {
        fname.style.border = "3px solid #89fc00";
       }else {
        fname.style.border = "3px solid red";
       };
}


 function numberValidation() {
   
    if ( phoneNumber.value.length === 10 ) {
         phoneNumber.style.border = "3px solid #89fc00";
    }else {
        phoneNumber.style.border = "3px solid red";
    };

 }

 email.addEventListener("input", emailValidation);
 fname.addEventListener("input", fullNameValidation);
 phoneNumber.addEventListener("input", numberValidation);