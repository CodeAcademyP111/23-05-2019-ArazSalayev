
var myInput = document.getElementById("userpassword");
var confirm = document.getElementById("confirm_p")
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var conf_mess=document.getElementById("confirm_message")
var submit_btn=document.querySelector(".btn")
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;




myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}


myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}


myInput.onkeyup = function() {
 
  
  if(myInput.value.match(lowerCaseLetters)) { 
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
    conf_mess.style.color = 'red';
    conf_mess.innerHTML = 'Password must contain lower case letter';
}

  
  
  if(myInput.value.match(upperCaseLetters)) { 
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
    conf_mess.style.color = 'red';
    conf_mess.innerHTML = 'Password must contain upper case letter';
  }

 
  
  if(myInput.value.match(numbers)) { 
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
    conf_mess.style.color = 'red';
    conf_mess.innerHTML = 'Password must contain number';
  }

 
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
    conf_mess.style.color = 'green';
    conf_mess.innerHTML = 'Suitable length';
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
    conf_mess.style.color = 'red';
    conf_mess.innerHTML = 'Password must contain at least 8 symbols';
  }
}





submit_btn.addEventListener("click",function(e){
      
    if (myInput.value == confirm.value && myInput.value.match(upperCaseLetters) && myInput.value.match(lowerCaseLetters) && myInput.value.match(numbers) && myInput.value.length >= 8) {
      

        conf_mess.style.color = 'green';
        conf_mess.innerHTML = 'It is okay :) Passwords are matching';
       
    } else {
        e.preventDefault();
        conf_mess.style.color = 'red';
        conf_mess.innerHTML = 'Passwords are not matching :(';
    }
})









