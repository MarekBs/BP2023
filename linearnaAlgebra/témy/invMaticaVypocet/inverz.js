$( "#clearBTN3" ).click(function() {
    $( "#mxVysledok3")[0].innerHTML="";
  });

  $( "#calcBTN" ).click(function() {
    $( "#mxVysledok3")[0].innerHTML="";
    let matrix = getMatrix("matrix-size", "matrix-input");
    let final = invMath(matrix);
    console.log(final);
    if(final =="nemá inverznú maticu !"){
        $( "#mxVysledok3")[0].innerHTML="nemá inverznú maticu !";
        return;
    }
    
    // create a table element for the inverse matrix
    let invTable = document.createElement("table");
  
    // create a row for each row in the inverse matrix
    for (let i = 0; i < final.length; i++) {
      let row = document.createElement("tr");
  
      // create a cell for each column in the inverse matrix
      for (let j = 0; j < final[i].length; j++) {
        let cell = document.createElement("td");
        cell.textContent = final[i][j].toFixed(1); // limit to 3 decimal places
        cell.style.padding = "0.3rem";
        row.appendChild(cell);
      }
  
      invTable.appendChild(row);
    }
    invTable.style.borderRight = "1px solid black";
    invTable.style.borderLeft = "1px solid black";
    // display the inverse matrix in the mxVysledok3 element
    let mxVysledok3 = $( "#mxVysledok3" )[0];
    mxVysledok3.appendChild(invTable);
  });
  
  function invMath(matrix) {
    try {
      let inv = math.inv(matrix);
      // loop through each element of the matrix and limit the decimal places
      for (let i = 0; i < inv.length; i++) {
        for (let j = 0; j < inv[i].length; j++) {
          inv[i][j] = Number(inv[i][j].toFixed(3)); // convert back to number
        }
      }
      return inv;
    } catch (error) {
      return "nemá inverznú maticu !";
    }
  }