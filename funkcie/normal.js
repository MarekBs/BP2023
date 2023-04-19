function calcNormal(f, point) {

  let normal;

    if(point<0){
       normal = f + "-(1/" + calcDerivate(f) + ")*(z-(x))";
    }else{
       normal = f + "-(1/" + calcDerivate(f) + ")*(z-x)";
    }

    let result = normal.replace(/x/gi, point);
    return result.replace(/z/gi, "x");
  
  

  
  
}


document.addEventListener('click', function(event) {
   var isClickInsideNavbar = event.target.closest('#navbar-example2');
   if (!isClickInsideNavbar) {
     var navbarCollapse = document.querySelector('#navbar-example2 .navbar-collapse');
     if (navbarCollapse.classList.contains('show')) {
       navbarCollapse.classList.remove('show');
     }
   }
 });
 