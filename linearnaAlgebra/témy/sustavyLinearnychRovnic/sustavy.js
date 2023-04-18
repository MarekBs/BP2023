
  
  function createMatrix(rows, cols, input) {
    const numRows = parseInt($(rows).val());
    const numCols = parseInt($(cols).val()) + 1;
    const matrixInputTable = $(input);
    matrixInputTable.html("");
  
    for (let i = 0; i < numRows; i++) {
      const row = $("<tr></tr>");
  
      for (let j = 0; j < numCols; j++) {
        const cell = $("<td></td>");
        const input = $("<input>");
  
        input.attr("type", "number");
        input.attr("name", `matrix[${i}][${j}]`);
  
        // set the placeholder attribute
        if (j === numCols - 1) {
          input.attr("placeholder", `b${i+1}`); // add b1, b2, b3, ... to the last column
          input.addClass("blue-background"); // make the background blue for the last column
        } else {
          input.attr("placeholder", `x${j+1}`); // add x1, x2, x3, ... to the other columns
        }
  
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
    createMatrix("#matrix-cols","#matrix-cols","#matrix-input");

    $("#matrix-cols").on("change", function() {
      createMatrix("#matrix-cols","#matrix-cols","#matrix-input");
      
  });
  });
  
  




  $( "#calcBTN6" ).click(function() {
    let m = getMatrix($("#matrix-input"));
    if(m  == 1) {
      document.getElementById("result").innerHTML = `<span style="color: red;">Zadaj všetky čísla!</span>`; 
    } else {
      let x = gaussian_elimination(m); 
      if(x == -5) {
        document.getElementById("result").innerHTML = `<span style="color: red;">sústava nemá riešenie!</span>`;
      } else if (x == -2) {
        document.getElementById("result").innerHTML = `<span style="color: red;">Sústava má nekonečne veľa riešení!</span>`;
      } else {
        let count = 0;
        let resultsStr = "";
        for (let i = 0; i < x.length; i++) {
          if(isNaN(x[i])) {
            count++;
          } else {
            resultsStr += `x${i + 1} = ${x[i]}<br>`;
          }
        }
        if(count == 0) {
          document.getElementById("result").innerHTML = resultsStr; 
        } else {
          document.getElementById("result").innerHTML = `<span style="color: red;">Sústava má nekonečne veľa riešení alebo nemá riešenie!</span>`;
        }
      }
    }
  });
  

  $( "#clearBTN6" ).click(function() {
    document.getElementById("result").innerHTML = ""; 
    createMatrix("#matrix-cols","#matrix-cols","#matrix-input");
  });

  function updateMainMargin(){}