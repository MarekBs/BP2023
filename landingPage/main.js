let swch = document.getElementById("flexSwitchCheckDefault");
let header = document.querySelector("header");
let headerContainer = document.getElementById("header-container");
let nav = document.querySelector(".navbar");
let intro = document.getElementById("intro");
let nadpis = document.getElementsByClassName("nadpis");
let line = document.getElementById("line")


function changeMode(){
    
    if(swch.checked){
      header.style.backgroundColor = "black";
        changeColors("url('../images/newGM.svg')","#172130","white","#101722","white","white","white","white");
        changeBG();
        
        
        
;
    }
    else {
      header.style.backgroundColor = "white";
        changeColors("url('../images/newBG.svg')","#f3f4f6","black","#1c2c34","grey","black","black","grey");
        changeBG();
    }
    
}


function changeColors(image,bodyColor,headerTextColor,navBg,introColor,nadpisColor,lineColor,introColor){
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

window.addEventListener('resize', function() {
    changeBG();});

window.addEventListener("load",function(){
  changeBG();
})

function changeBG() {
  if (window.innerWidth < 1150) {
    if (swch.checked) {
      headerContainer.style.backgroundColor = "rgba(0,0,0,0.5)";
      console.log("nejde")
    }else {
      headerContainer.style.backgroundColor = "rgba(255,255,255,0.6)";
    }
    }else {
      headerContainer.style.backgroundColor = "transparent";}
}


const navToggler = document.querySelector('.navbar-toggler');

function checkNavbarCollapsed() {
  if (navToggler.getAttribute('aria-expanded') === 'true') {
    headerContainer.style.visibility = "hidden";
  } else {
    headerContainer.style.visibility = "visible";
  }
}

navToggler.addEventListener("click",function(){
  checkNavbarCollapsed();
})



$(document).ready(function() {
  var isMouseOver = false;

  $("#navbarDarkDropdownMenuLink").mouseenter(function() {
    isMouseOver = true;
    $(".dropdown-menu-white").slideDown(200);
  });

  $("#navbarDarkDropdownMenuLink").mouseleave(function() {
    isMouseOver = false;
    setTimeout(function() {
      if (!isMouseOver) {
        $(".dropdown-menu-white").slideUp(200);
      }
    }, 200);
  });

  $(".dropdown-menu-white").mouseenter(function() {
    isMouseOver = true;
  });

  $(".dropdown-menu-white").mouseleave(function() {
    isMouseOver = false;
    setTimeout(function() {
      if (!isMouseOver) {
        $(".dropdown-menu-white").slideUp(200);
      }
    }, 200);
  });

  $(".dropdown-item").click(function(event) {
    event.stopPropagation();
  });
});
