


changeMatrix();



let btn = document.getElementById("calcBTN1");

btn.addEventListener("click", function () {
  let mat = getMatrix("matrixSize", "matrix");
  if(mat == 1){
    $( "#mxVysledok1")[0].innerHTML=` = <span style="color: red;"> vyplň všetky vstupy !</span>`;
  }else {
    let index = document.getElementById("index").value;
  calcDet(mat, index - 1);
  }
  
});

let btn1 = document.getElementById("calcBTN");

btn1.addEventListener("click", function () {
  let matrx = getMatrix("matrix-size", "matrix-input");
  if (matrx ==1){
    $( "#mxVysledok")[0].innerHTML=` = <span style="color: red;"> vyplň všetky vstupy !</span>`;
  }else {
    let result = math.det(matrx);
  document.getElementById("mxVysledok").textContent =
    "=" + " " + math.det(Math.round(result));
  }
  
});

$( "#clearBTN" ).click(function() {
  $( "#mxVysledok1")[0].innerHTML=" = ";
  changeMatrix();
});

$( "#clearBTN2" ).click(function() {
  $( "#mxVysledok")[0].innerHTML=" = ";
  createMatrix();
});