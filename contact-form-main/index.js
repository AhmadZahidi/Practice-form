var firstName=document.getElementById("first");
var secondName=document.getElementById("second");
var email=document.getElementById("email");
var query=document.querySelectorAll('input[name="query"]');
var message=document.getElementById("message");
var consent=document.getElementById("consent");
var form=document.getElementById("form");
var button=document.querySelector("button")
var popUp=document.querySelector(".sucess-state");

//targeting p element for each class
var firstP=document.querySelector(".first p");
var secondP=document.querySelector(".second p");
var emailP=document.querySelector(".email p");
var queryP=document.querySelector(".query p");
var messageP=document.querySelector(".message p");
var consentP=document.querySelector(".consent p");

var error_color="hsl(0, 66%, 54%)";

button.addEventListener("click",formValidation);

function formValidation(){
   event.preventDefault();
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

    if(!query[0].checked && !query[1].checked){
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

    popUp.style.opacity="1";

}

// This will execute when a radio button is clicked
document.querySelectorAll('input[name="query"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        // Get the parent .query-item of the selected radio button
        const parentItem = radio.closest('.query-item');

        // Reset background color for all .query-item elements
        document.querySelectorAll('.query-item').forEach(function(item) {
            item.style.backgroundColor = '';
        });

        // Set background color to green for the selected item
        if (parentItem) {
            parentItem.style.backgroundColor = "var(--primary-green-lighter)";
            parentItem.style.borderColor="hsl(169, 82%, 27%)";
        }
    });
});
