


changeMatrix();



let btn = document.getElementById("calcBTN1");

btn.addEventListener("click", function () {
  let mat = getMatrix("matrixSize", "matrix");
  let index = document.getElementById("index").value;
  calcDet(mat, index - 1);
});

let btn1 = document.getElementById("calcBTN");

btn1.addEventListener("click", function () {
  let matrx = getMatrix("matrix-size", "matrix-input");
  let result = math.det(matrx);
  document.getElementById("mxVysledok").textContent =
    "=" + " " + math.det(Math.round(result));
});

$( "#clearBTN" ).click(function() {
  $( "#mxVysledok1")[0].innerHTML=" = ";
});

$( "#clearBTN2" ).click(function() {
  $( "#mxVysledok")[0].innerHTML=" = ";
});