const emailAddress = document.getElementById("emailAddress"); 
const password = document.getElementById("password");
const confirmPassword = document.getElementById("passwordConfirm");
const signUpButton = document.getElementById("signUpButton");
const messageArea = document.getElementById("messageArea");

signUpButton.addEventListener("click",validate);

function validate(){
    emailOk = false;
    pwOk = false;
    pwcOk = false;

    let checkEmail = emailAddress.value;
    let checkPw = password.value;
    let checkPwc = confirmPassword.value;
   
    if(checkEmail == ""){
       messageArea.textContent = "Email cannot be blank.";      
    } else {
        if(checkStringRegex(0,checkEmail) == true){emailOk = true;messageArea.textContent = ""; }   
    }

}

function checkStringRegex(typeOfElement,stringToCheck){
    
      switch(typeOfElement){
        case 0:                 
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(stringToCheck.match(validRegex)){            
            results = true;
        } else{
            messageArea.textContent = "Email not valid format."; 
            results = false;
        }
        break;

        case 1: //PW.
        break;
        default:
    }
    return results;
}
