// let collectedWorksFile = require("./works.json")
// import collectedWorksFile from './works.json' assert { type: 'JSON' };

 var collectedWorks;
 fetch('./works.json')
     .then((response) => response.json())
     .then((json) => collectedWorks = JSON.parse(collectedWorksFile));
//var collectedWorksFile = '{"works": [{"idx" : 1,"title": "Homo Stultus - for gods", "desc": "Homo Stultus, for gods is a collection of nine fictional pieces of academic writing (i.e. lectures, court rulings, patent filing forms, etc.), supposedly compiled in the year 3055 and time-shipped back to us, which address ethical, philosophical, and social governance issues from their day. While generally humorous and light-hearted, it sets out several novel views on morality and philosophy of mind, particularly in applications of artificial intelligences. It also includes three versions of the true, and as yet untold, story of a former member of the Twelve Tribes cult.", "b1link": "http://cslabcms.nju.edu.cn/problem_solving/images/4/46/Problem_Solving_with_C%2B%2B_%289th_Savitch%29.pdf", "b2link": ""}]}';


//var collectedWorks = JSON.parse(collectedWorksFile);
for (work in collectedWorks){
  addWork(work);
}
addEventListens();

function addEventListens(){
  document.getElementById("pubButton").addEventListener("click", function() {showHide("publications")});
  document.getElementById("persButton").addEventListener("click", function() {showHide("personal")});
}

function showHide(str) {
  var docInQuestion = document.getElementById(str);
  if (docInQuestion.style.display === "block") {
    docInQuestion.style.display = "none";
  } else {
    docInQuestion.style.display = "block";
  }
}


function addWork(w) {
  parentElement = document.getElementById('pendingBox');
  if (w.status === "Published") {
    parentElement = document.getElementById('publishedBox');
  }
  const newChildTitle = document.createElement("div");
  newChildTitle.className = "title";
  newChildTitle.appendChild(document.createTextNode(w.title));

  const newChildDesc = document.createElement("div");
  newChildDesc.classList.add("workDesc");
  newChildDesc.appendChild(document.createTextNode(w.desc));
  var newChild1, newChild2 = null;
  if (!(w.b1link === "")) {
    newChildB1 = document.createElement("div");
    newChildB1.className = "linkButton";
    const newChildB1_A = document.createElement('a');
    newChildB1_A.setAttribute('href' , w.b1link);
    newChildB1_A.setAttribute("download", "True");
    newChildB1_A.innerText = "PDF";
    newChildB1.appendChild(newChildB1_A);
  }
  if (!(w.b2link === "")) {
    newChildB2 = document.createElement("div");
    newChildB2.className = "linkButton";
    const newChildB2_A = document.createElement('a');
    newChildB2_A.setAttribute('href' , w.b2link);
    newChildB2_A.setAttribute("download", "True");
    newChildB2_A.innerText = "BUY";
    newChildB2.appendChild(newChildB2_A);
  }
  
  const newChildBBar = document.createElement("div");
  newChildBBar.className = "linkButtonContainer";
  if (newChildB1) newChildBBar.appendChild(newChildB1);
  if (newChildB2) newChildBBar.appendChild(newChildB2);

  const newChild = document.createElement("div");
  newChild.classList.add("work");
  newChild.setAttribute("id", w.idx);
  newChild.appendChild(newChildTitle);
  newChild.appendChild(newChildBBar);
  newChild.appendChild(newChildDesc);
  
  parentElement.appendChild(newChild);
}
/* <div class = "work" id = "IDIOTS">
<div class = "title"> Homo Stultus - for gods</div>
<div class = "linkButtonContainer">
    <div class = "linkButton">
        <a href = "" download>
            PDF
        </a
    </div>
    <div class = "linkButton">BUY</div>
</div>
<div class = "workDesc"> A collection of shit</div>
</div> */