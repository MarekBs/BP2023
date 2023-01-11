let matrix = [
    [-3 ,2, 2, 1],
    [1, -3, 2, 4],
    [4, 0, 0, 7],
    [1, 4, -2, 5]
];
let counter = 1;

let riadok = document.getElementById("riadok");
let stlpec = document.getElementById("stlpec");

function loadMartix(){
for(let i =0; i<4;i++){
    for(let j =0; j<4;j++){
        matrix[i][j] = parseInt(document.getElementById(counter).value);
        counter++;
    }
}
}


function calcDet(matrix){
    let det= [];
    let nasobok = [];
    
    for (let i=0; i<matrix[0].length; i++){
        
        let a = matrix[i][0];
        
        let aPoz = a*(-1)**(1+(i+1));
        
        let matr = [[4],[4],[4],[4]];

        
        for (let f=0; f<4;f++){
            for(let g=0; g<4; g++){
                matr[f][g]= matrix[f][g];
            }
        }
        matr.splice(i,1);

        
        
        for(let x = 0; x<matrix[0].length-1;x++ ){
                matr[x].splice(0,1);
        }

        console.log(aPoz+"*",matr,"+");
    

        det[i]=math.det(matr);
        nasobok[i]=aPoz;

        
        
    }

    let vysledok=0;

    for(let i= 0;i<4; i++){
        console.log(nasobok[i]+"*"+det[i]);
        vysledok += nasobok[i]*det[i];
    }

    console.log("="+vysledok)
    
  
}




let button = document.getElementById("vypocitaj");

button.addEventListener("click", function(){
    loadMartix();
    calcDet(matrix);
    counter = 1;
})
