let swch = document.getElementById("flexSwitchCheckDefault");
let header = document.querySelector("header");
let headerContainer = document.getElementById("header-container");
let nav = document.querySelector(".navbar");
let intro = document.getElementById("intro");

function changeMode(){
    if(swch.checked){
        header.style.backgroundImage = "url('../images/nightBG1.svg')";
        document.body.style.backgroundColor = "#172130";
        headerContainer.style.backgroundColor = "rgba(0,0,0,0.6)";
        headerContainer.style.color = "white";
        nav.style.backgroundColor = "#101722";
        intro.style.color = "white";
;
    }
    else {
        header.style.backgroundImage = "url('../images/mainBG.svg')";
        document.body.style.backgroundColor = "#f3f4f6";
        headerContainer.style.backgroundColor = "rgba(255, 69, 0, 0.2)";
        headerContainer.style.color = "black";
        nav.style.backgroundColor = "#1c2c34";
        intro.style.color = "grey";
    }
    
}



