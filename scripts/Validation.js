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
    
    if(checkEmail == ""){
       messageArea.textContent = "Email cannot be blank.";      
    } else {
        if(checkStringRegex(0,checkEmail) == true) {
            emailOk = true;
            messageArea.textContent = ""; 
            checkStringRegex(1,"");    
        }   
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
        //Requires HTML to add  <form name="myForm" onsubmit="return validateForm()" method="post">
        let x = password.value;
        let y = confirmPassword.value;
        var validated = false;

        //Required field!.
        if (x == "" || y == "") {messageArea.textContent ="Require Both Password/Confirm field."; return false;} 
        //Not the same!       
        if(y != x ){messageArea.textContent ="Both Passwords Are Not The Same."; return false;}
        //Means we have a match.   
        if(y == x){messageArea.textContent ="Success"; validated = true;}  

        //charactor count.
        if(validated == true){
            if(x.length < 7){messageArea.textContent ="Password length must be atleast 8 characters.";validated == false;return false;}
            if(x.length > 15){messageArea.textContent ="Password length must not exceed 15 characters.";validated == false;return false;}             
            return true;           
        }
        break;
        default:
    }
    return results;
}
