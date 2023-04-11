

function splitMatrix(matrix) {
    const allButLastCol = [];
    const lastCol = [];
    
    for (let i = 0; i < matrix.length; i++) {
      const row = [];
      for (let j = 0; j < matrix[i].length; j++) {
        if (j !== matrix[i].length - 1) {
          row.push(matrix[i][j]);
        } else {
          lastCol.push(matrix[i][j]);
        }
      }
      allButLastCol.push(row);
    }
    
    return { allButLastCol, lastCol };
  }
  
  



const matriX = $("#matrix-input");

$( "#calcBTN6" ).click(function() {
    let m = getMatrix(matriX);
    let {allButLastCol, lastCol} = splitMatrix(m);
    console.log(allButLastCol);
    console.log(lastCol);
  });