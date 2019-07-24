function formValidation(){
    var fname = document.forms["feedback"]["fname"].value;
    var lname = document.forms["feedback"]["lname"].value;
    var email = document.forms["feedback"]["email"].value;
    
    
    if (fname.value=""){
        alert("Please enter your first name.");
        fname.focus();
        return false;
    }
    if (lname.value=""){
        alert("Please enter your last name.");
        lname.focus();
        return false;
    }
    if (email.value=""){
        alert("Please enter your e-mail.");
        email.focus();
        return false;
    }
    if (email.value.indexOf("@",0)<0){
        alert("Please enter a valid e-mail address");
        email.focus();
        return false;
    }
    if (email.value.indexOf(".",0)<0){
        alert("Please enter a valid e-mail address");
        email.focus();
        return false;
    }
    ErrorText = "";
    if((feedback.select[0].checked ==false)&&(feedback.select[1].checked ==false)&&(feedback.select[2].checked ==false)){
        alert("You have not rated the website");
        return false;
    }
    if(ErrorText=""){
        feedback.submit()
    }

    }
    return true;
}