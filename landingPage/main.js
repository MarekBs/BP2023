let swch = document.getElementById("flexSwitchCheckDefault");
let header = document.querySelector("header");
let headerContainer = document.getElementById("header-container");
let nav = document.querySelector(".navbar");
let intro = document.getElementById("intro");
let nadpis = document.getElementsByClassName("nadpis");
let line = document.getElementById("line")


function changeMode(){
    
    if(swch.checked){
        changeColors("url('../images/mainBGN.svg')","#172130","white","#101722","white","white","white");
        
;
    }
    else {
        changeColors("url('../images/mainBGM.svg')","#f3f4f6","black","#1c2c34","grey","black","black");
        
    }
    
}


function changeColors(image,bodyColor,headerTextColor,navBg,introColor,nadpisColor,lineColor){
    header.style.backgroundImage = image;
        document.body.style.backgroundColor = bodyColor;
        headerContainer.style.color = headerTextColor;
        nav.style.backgroundColor = navBg;
        intro.style.color = introColor;
        for (let i= 0; i< nadpis.length ; i++){
            nadpis[i].style.color = nadpisColor
        }
        line.style.color = lineColor;
}