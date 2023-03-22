function createMatrix(rows,cols,input) {
    const numRows = parseInt($(rows).val());
    const numCols = parseInt($(cols).val());
    const matrixInputTable = $(input);
    matrixInputTable.html("");
  
    for (let i = 0; i < numRows; i++) {
      const row = $("<tr></tr>");
  
      for (let j = 0; j < numCols; j++) {
        const cell = $("<td></td>");
        const input = $("<input>");
  
        input.attr("type", "number");
        input.attr("name", `matrix[${i}][${j}]`);
        input.attr("placeholder", "0");
        input.css("width", "1.5rem");
        input.css("text-align", "center");
        input.css("border", "none");
        input.addClass("inputNum");
        cell.append(input);
        row.append(cell);
      }
  
      matrixInputTable.append(row);
    }
  }
  
  $(document).ready(function() {
    // Call createMatrix() when the page loads
    createMatrix("#matrix-rows","#matrix-cols","#matrix-input");
    createMatrix("#matrix-rows1","#matrix-cols1","#matrix-input1");
  
    // Update the matrix when the rows or cols input values change
    $("#matrix-rows, #matrix-cols").on("change", function() {
        createMatrix("#matrix-rows","#matrix-cols","#matrix-input");
        
    });
    $("#matrix-rows1, #matrix-cols1").on("change", function() {
        createMatrix("#matrix-rows1","#matrix-cols1","#matrix-input1");
        
    });
  });
  

  function getMatrix(input) {
    const matrix = [];
    const rows = $(input).find("tr");
    
    rows.each(function(rowIndex) {
      const cells = $(this).find("td input");
      matrix.push([]);
      
      cells.each(function(cellIndex) {
        matrix[rowIndex].push(parseInt($(this).val()));
      });
    });
    
    return matrix;
  }
  
  let matrixFirst;
  let matrixSecond;

  

$("#calcBTN5").on("click",function(){
    const matrix1 = $("#matrix-input");
    const matrix2 = $("#matrix-input1"); 
    matrixFirst = getMatrix(matrix1);
    matrixSecond = getMatrix(matrix2);
    console.log(matrixFirst);
    console.log(matrixSecond);
    multiple(matrixFirst,matrixSecond);
})

$("#clearBTN5").on("click",function(){
  $( "#matrix-output")[0].innerHTML="";
})