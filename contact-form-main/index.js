var firstName=document.getElementById("first");
var secondName=document.getElementById("second");
var email=document.getElementById("email");
var query=document.querySelector('input[name="query"]:checked');
var message=document.getElementById("message");
var consent=document.getElementById("consent");
var form=document.getElementById("form");
var button=document.querySelector("button")

//targeting p element for each class
var firstP=document.querySelector(".first p");
var secondP=document.querySelector(".second p");
var emailP=document.querySelector(".email p");
var queryP=document.querySelector(".query p");
var messageP=document.querySelector(".message p");
var consentP=document.querySelector(".consent P");

var error_color="hsl(0, 66%, 54%)";

button.addEventListener("click",formValidation);

function formValidation(){
   
    if(firstName.value.length <= 0 && secondName.value.length<=0){
        firstName.style.border="1px solid hsl(0, 66%, 54%)";
        firstP.style.display="block";
        firstP.style.color=error_color;
        secondName.style.border="1px solid hsl(0, 66%, 54%)";
        secondP.style.display="block";
        secondP.style.color=error_color;
    }
    else if(firstName.value.length <= 0){
        firstName.style.border="1px solid hsl(0, 66%, 54%)";
        firstP.style.display="block";
        firstP.style.color=error_color;
        secondP.style.display="block";
        secondP.style.visibility="hidden";
        event.preventDefault();
    }
    else if(secondName.value.length<=0){
        secondName.style.border="1px solid hsl(0, 66%, 54%)";
        secondP.style.display="block";
        secondP.style.color=error_color;
        firstP.style.display="block";
        firstP.style.visibility="hidden";
        event.preventDefault();
    }

    if(email.value.length <=0){
        email.style.border="1px solid hsl(0, 66%, 54%)";
        emailP.style.display="block";
        emailP.style.color=error_color;
        event.preventDefault();
    }

    if(!query){
        queryP.style.display="block";
        queryP.style.color=error_color;
    }
    
    if(message.value.length<=0){
        messageP.style.display="block";
        messageP.style.color=error_color;
    }

    if(!consent.checked){
        consentP.style.display="block";
        consentP.style.color=error_color;
    }
}

// doing error-state