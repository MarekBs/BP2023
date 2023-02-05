let swch = document.getElementById("flexSwitchCheckDefault");
let header = document.querySelector("header");
let headerContainer = document.getElementById("header-container");
let nav = document.querySelector(".navbar");

function changeMode(){
    if(swch.checked){
        header.style.backgroundImage = "url('../images/nightBG1.svg')";
        document.body.style.backgroundColor = "grey";
        headerContainer.style.backgroundColor = "rgba(255,255,255,0.6)";
        nav.style.backgroundColor = "#101722";
;
    }
    else {
        header.style.backgroundImage = "url('../images/mainBG.svg')";
        document.body.style.backgroundColor = "#f3f4f6";
        headerContainer.style.backgroundColor = "rgba(255, 69, 0, 0.1)";
        nav.style.backgroundColor = "#1c2c34";
    }
    
}



