let matrix = [
  [-3, 2, 2, 1],
  [1, -3, 2, 4],
  [4, 0, 0, 7],
  [1, 4, -2, 5],
];
let counter = 1;
let cnt = 0;

let riadok = document.getElementById("riadok");
let stlpec = document.getElementById("stlpec");
let outputDiv = document.getElementById("mxVysledok1");

function loadMartix() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      matrix[i][j] = parseInt(document.getElementById(counter).value);
      counter++;
    }
  }
}

function calcDet(matrix) {
    let det = [];
    let nasobok = [];

    for (let i = 0; i < matrix[0].length; i++) {
        let a = matrix[i][0];

        let aPoz = a * (-1) ** (1 + (i + 1));

        let matr = [
            [4],
            [4],
            [4],
            [4]
        ];

        for (let f = 0; f < 4; f++) {
            for (let g = 0; g < 4; g++) {
                matr[f][g] = matrix[f][g];
            }
        }
        matr.splice(i, 1);

        for (let x = 0; x < matrix[0].length - 1; x++) {
            matr[x].splice(0, 1);
        }

        console.log(aPoz + "*", matr, "+");

        det[i] = math.det(matr);
        nasobok[i] = aPoz;

        
        let step;
        if (nasobok[i] < 0) {
            step = "(" + nasobok[i] + ") *     ";
        } else {
            step = nasobok[i] + " *     ";
        }


        // create table
        step += "<table style='display: inline-block; border-right: 1px solid grey; border-left: 1px solid grey; margin: 0 6px;'>";
        for (let j = 0; j < matr.length; j++) {
            step += "<tr>";
            for (let k = 0; k < matr[j].length; k++) {
                step += "<td>" + matr[j][k] + "</td>";
            }
            step += "</tr>";
        }
        step += "</table>";
        cnt++;
        if (cnt < matrix[0].length) {
            step += "  +  ";
        }

        step += " = ";
        outputDiv.innerHTML += step;
        console.log("cislo")
    }

    let vysledok = 0;
    
    let step;
    for (let i = 0; i < 4; i++) {
        vysledok += nasobok[i] * det[i];
        if(i<3){
          step = Math.round(nasobok[i])  + "*" + Math.round(det[i])  + " + ";  
        }else {
            step = Math.round(nasobok[i])  + "*" +Math.round(det[i]) + " = " + vysledok; 
        }
        
        outputDiv.innerHTML += step;
        console.log(nasobok[i] + "*" + det[i]);
        
    }

    console.log("=" + vysledok);
}