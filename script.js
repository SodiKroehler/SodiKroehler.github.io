var notAdvancedButton = document.getElementById("inFocusButton");
notAdvancedButton.addEventListener('click', ()=> {
    alert("Here's a link to a resume, so you can be on your way");
});

var advancedButton = document.getElementById("outOfFocusButton");
advancedButton.addEventListener('click', ()=> {
    if(advancedButton.innerHTML === "Advanced"){
        document.getElementById("newDiv").removeAttribute("hidden");
        advancedButton.innerHTML = "Hide Advanced";
    } else {
        document.getElementById("newDiv").setAttribute("hidden",true);
        advancedButton.innerHTML = "Advanced";
    }
});

var contactForm = document.getElementById("contactForm");
var startContactForm = document.getElementById("startContactForm");
var closeContactForm = document.getElementById("closeContactForm");
startContactForm.addEventListener('click', () => {
    contactForm.style.display = "block";
    console.log("should be open");
});
closeContactForm.addEventListener('click', () => {
    contactForm.style.display = "none";
});