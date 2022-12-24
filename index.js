const header = document.querySelector("#header")
const home = document.querySelector("#home")
let team = document.getElementById("team")
let projects = document.getElementById("projects")
let contact = document.getElementById("contact")
let article = document.getElementById("article")
home.addEventListener("click", () => {
    if (home.id == "home"){
        header.innerHTML = 'HOME';
    }
});    

team.addEventListener('click',() => {
    if (team.id == "team"){
        header.innerHTML = "TEAM";
    }
});
projects.addEventListener('click',() => {
    if (projects.id == "projects"){
        header.innerHTML = "PROJECTS";
    }
});
contact.addEventListener('click',() => {
    if (contact.id == "contact"){
        header.innerHTML = "CONTACT";
    }
});
document.addEventListener('keyup',() => {

       article.style.backgroundColor ="lightblue";
    
});
//if you want to make changes to the document, make sure to add an event listener to the document object
document.addEventListener('mouseup',() => {

       team.style.fontFamily ="cursive";
    
});
//if you want to make changes to the document, make sure to add an event listener to the document object