let swch = document.getElementById("flexSwitchCheckDefault");

function changeMode(){
    if(swch.checked){
        document.body.style.backgroundImage = "url('images/nightBG.png')";
        document.body.style.backgroundColor = "grey";
        document.getElementById("header-container").style.backgroundColor = "rgba(255,255,255,0.6)"
;
    }
    else {
        document.body.style.backgroundImage = "url('images/headBG.png')";
        document.body.style.backgroundColor = "#f3f4f6";
        document.getElementById("header-container").style.backgroundColor = "rgba(255, 69, 0, 0.1)"
    }
}