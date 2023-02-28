const matrixSizeInput = document.getElementById('matrix-size');
      const matrixInputTable = document.getElementById('matrix-input').querySelector('tbody');
    
      function createMatrix() {
        const matrixSize = parseInt(matrixSizeInput.value);
        matrixInputTable.innerHTML = '';
    
        for (let i = 0; i < matrixSize; i++) {
          const row = document.createElement('tr');
    
          for (let j = 0; j < matrixSize; j++) {
            const cell = document.createElement('td');
            const input = document.createElement('input');
    
            input.type = 'number';
            input.name = `matrix[${i}][${j}]`;
            input.placeholder = "0";
            input.style.width = '1.5rem';
            input.style.textAlign = "center";
            input.style.border = "none";
            input.classList.add("inputNum");
    
            // add event listeners for arrow keys
            input.addEventListener('keydown', (event) => {
              if (event.key === 'ArrowRight') {
                const nextCell = cell.nextElementSibling;
                if (nextCell) {
                  nextCell.querySelector('input').focus();
                }
              } else if (event.key === 'ArrowLeft') {
                const prevCell = cell.previousElementSibling;
                if (prevCell) {
                  prevCell.querySelector('input').focus();
                }
              } else if (event.key === 'ArrowDown') {
                event.preventDefault();
                const nextRow = row.nextElementSibling;
                if (nextRow) {
                  nextRow.children[j].querySelector('input').focus();
                }
              } else if (event.key === 'ArrowUp') {
                event.preventDefault();
                const prevRow = row.previousElementSibling;
                if (prevRow) {
                  prevRow.children[j].querySelector('input').focus();
                }
              }
            });
    
            cell.appendChild(input);
            row.appendChild(cell);
          }
    
          matrixInputTable.appendChild(row);
        }
      }
    
      // create the initial matrix
      createMatrix();
    
      // update the matrix when the user changes the size input
      matrixSizeInput.addEventListener('change', createMatrix);




      function changeMatrix() {
        var size = document.getElementById("size").value;
        var table = document.getElementById("matrix");
        table.innerHTML = "";
        for (var i = 1; i <= size; i++) {
            var row = document.createElement("tr");
            for (var j = 1; j <= size; j++) {
                var cell = document.createElement("td");
                var input = document.createElement("input");
                input.type = "number";
                input.placeholder = "0";
                input.style.width = '1.5rem';
                input.style.textAlign = "center";
                input.style.border = "none";
                input.classList.add("inputNum");
                cell.appendChild(input);
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
    }

    function getMatrix(size,mtx) {
        var size = document.getElementById(size).value;
        var matrix = [];
        for (var i = 1; i <= size; i++) {
            var row = [];
            for (var j = 1; j <= size; j++) {
                var input = document.getElementById(mtx).rows[i-1].cells[j-1].getElementsByTagName("input")[0];
                row.push(parseFloat(input.value));
            }
            matrix.push(row);
        }
        return matrix;
    }

let btn = document.getElementById("calcBTN1");

btn.addEventListener("click",function(){
    let mat =getMatrix("size","matrix");
    calcDet(mat);
});

let btn1 = document.getElementById("calcBTN");

btn1.addEventListener("click",function(){
    let matrx =getMatrix("matrix-size","matrix-input");
    let result = math.det(matrx);
    document.getElementById("mxVysledok").textContent = "="+" "+math.det(result)
});



// get references to the sidebar and main elements
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('main');

// update the margin of the main element on window resize
function updateMainMargin() {
  const sidebarWidth = sidebar.offsetWidth;
  main.style.marginLeft = `${sidebarWidth}px`;
}

window.addEventListener('resize', updateMainMargin);
