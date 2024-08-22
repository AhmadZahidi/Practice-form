var firstName=document.getElementById("first");
var secondName=document.getElementById("second");
var email=document.getElementById("email");
var query=document.querySelector('input[name="query"]:checked');
var message=document.getElementById("message");
var consent=document.getElementById("consent");
var form=document.getElementById("form");
var button=document.querySelector("button")

button.addEventListener("click",formValidation);

function formValidation(){
    if(firstName.value.length <= 0){
        firstName.style.border="1px solid hsl(0, 66%, 54%)";
    }

    
}

// doing error-state