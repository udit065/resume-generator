
function addNewEdufield() {
     let newNode = document.createElement("textarea");
         newNode.classList.add("form-control");
         newNode.classList.add("eduField");
         newNode.classList.add("mt-2");
         newNode.setAttribute("rows", 2);
         newNode.setAttribute("placeholder","Enter here...");

     let educationOb = document.getElementById("education");
     let educationbuttonOb = document.getElementById("educationbutton");

    educationOb.insertBefore(newNode, educationbuttonOb);

}

function addNewExpfield() {
     let newNode = document.createElement("textarea");
         newNode.classList.add("form-control");
         newNode.classList.add("expField");
         newNode.classList.add("mt-2");
         newNode.setAttribute("rows",2);
         newNode.setAttribute("placeholder","Enter here ...");

     let expOb = document.getElementById("exp");
     let expbuttonOb = document.getElementById("expbutton");

     expOb.insertBefore(newNode, expbuttonOb);

}
function addNewSkill() {

let newNode = document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("skillField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",1);
newNode.setAttribute("placeholder","Enter here ...");

let skillOb = document.getElementById("skill");
let skillbuttonOb = document.getElementById("skillbutton");

skillOb.insertBefore(newNode, skillbuttonOb);

}


function addNewproject() {

let newNode = document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("projectField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",1);
newNode.setAttribute("placeholder","Enter here ...");

let projectOb = document.getElementById("project");
let projectbuttonOb = document.getElementById("projectbutton");

projectOb.insertBefore(newNode, projectbuttonOb);

}

function createresume(){


  let nameField = document.getElementById("nameField").value;
  let nametemp = document.getElementById("nametemp");
  nametemp.innerHTML = nameField;

  document.getElementById("contacttemp").innerHTML= document.getElementById("contactField").value;
  document.getElementById("addresstemp").innerHTML= document.getElementById("addressField").value;
  document.getElementById("emailtemp").innerHTML= document.getElementById("emailField").value;
  document.getElementById("fbtemp").innerHTML= document.getElementById("fbField").value;
  document.getElementById("twittertemp").innerHTML= document.getElementById("twitterField").value;
  document.getElementById("linkedintemp").innerHTML= document.getElementById("linkedinField").value;
  document.getElementById("objectivetemp").innerHTML= document.getElementById("objectiveField").value;


let exps = document.getElementsByClassName("expField");
let str = "" ;
for(let e of exps) {
    str = str + `<li> ${e.value} </li>` ;
   }
 document.getElementById("experiencetemp").innerHTML = str;


 let edus = document.getElementsByClassName("eduField");
 let str1 = "" ;
 for ( let e of edus) {
     str1 = str1 + `<li> ${e.value} </li>` ;
   }
  document.getElementById("educationtemp").innerHTML = str1;


   let skillss = document.getElementsByClassName("skillField");
   let str2 = "" ;
   for ( let e of skillss) {
       str2 = str2 + `<li> ${e.value} </li>` ;
    }
    document.getElementById("skilltemp").innerHTML = str2 ;

  let proj = document.getElementsByClassName("projectField");
    let str3 = "" ;
    for ( let e of proj) {
        str3 = str3 + `<li> ${e.value} </li>` ;
     }
     document.getElementById("projecttemp").innerHTML = str3;

    document.getElementById("resumeform").style.display = "none";
    document.getElementById("resumetemp").style.display = "block";

}

function printresume(){
  document.getElementById("printbutton").style.display = "none";
  window.print();

}
