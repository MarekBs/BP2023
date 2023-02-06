let swch = document.getElementById("flexSwitchCheckDefault");
let header = document.querySelector("header");
let headerContainer = document.getElementById("header-container");
let nav = document.querySelector(".navbar");
let intro = document.getElementById("intro");
let nadpis = document.getElementsByClassName("nadpis");
let line = document.getElementById("line")


function changeMode(){
    if(swch.checked){
        header.style.backgroundImage = "url('../images/nightBG1.svg')";
        document.body.style.backgroundColor = "#172130";
        headerContainer.style.backgroundColor = "rgba(0,0,0,0.6)";
        headerContainer.style.color = "white";
        nav.style.backgroundColor = "#101722";
        intro.style.color = "white";
        for (let i= 0; i< nadpis.length ; i++){
            nadpis[i].style.color = "white"
        }
        line.style.color = "white"
        
;
    }
    else {
        header.style.backgroundImage = "url('../images/mainBG.svg')";
        document.body.style.backgroundColor = "#f3f4f6";
        headerContainer.style.backgroundColor = "rgba(255, 69, 0, 0.2)";
        headerContainer.style.color = "black";
        nav.style.backgroundColor = "#1c2c34";
        intro.style.color = "grey";
        for (let i= 0; i< nadpis.length ; i++){
            nadpis[i].style.color = "black"
        }
        line.style.color = "black"
    }
    
}



