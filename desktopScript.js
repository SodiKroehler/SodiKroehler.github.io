var modal = document.getElementById("window");
var modalContent = document.getElementById("windowContent");
var startMenuOpen = document.getElementById("home");
var startMenu = document.getElementById("startMenu");
var writingWindowOpen = document.getElementById("writing");
var codingWindowOpen = document.getElementById("coding");
var closeButton = document.getElementById("close");

startMenuOpen.addEventListener('click', () => {
    startMenu.style.display= "block";
});

closeButton.addEventListener('click', () => {
    modal.style.display = "none";
    modalContent.innerHTML = "";
});
writingWindowOpen.addEventListener('click', () => {
    modal.style.display = "block";
    document.getElementById("windowName").innerHTML = "WRITINGS";
    modalContent.innerHTML+="<hr><span id=\"creativeText\">CREATIVE</span>" +
            "<hr><div id=\"w_creative\">" +
            "<div class = \"download\">"+
            "<img class= \"fileIcon\" src=\"file.png\"><br>" +
            "<a href=\"./kindsOfLie.docx\" download = \"./kindsOfLie.docx\">" +
                "Three Kinds of Lie </a> </div> </div><hr>"+
                "<span id=\"technicalText\">TECHNICAL</span><hr>"+
            "<div id=\"w_technical\"><div class = \"download\">" +
            "<img class= \"fileIcon\" src=\"file.png\"><br>" +
            "<a href=\"./kindsOfLie.docx\" download = \"./kindsOfLie.docx\">" +
                "Three Kinds of Lie </a> </div></div>";    
});/*
codingWindowOpen.addEventListener('click', () => {
   document.getElementById("codingContent").style.display = "block";
});
codingWindowOpen.addEventListener('mouseout', () => {
    document.getElementById("codingContent").style.display = "none";
 });*/