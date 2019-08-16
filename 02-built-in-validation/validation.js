// JavaScript Document

//using the constraint validation API to customize an error message

var email = document.getElementById("mail");

  email.addEventListener("input", function(event){
  if(email.validity.typeMismatch) {
    email.setCustomValidity("Please enter your Email Miss :)"); 
  }
  else {
    email.setCustomValidity("");
  }
});
