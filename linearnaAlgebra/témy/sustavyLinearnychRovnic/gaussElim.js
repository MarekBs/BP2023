
function gaussianElimination(a, b) {
    var n = b.length;
    for (var i = 0; i < n; i++) {
        // Search for maximum in this column
        var maxEl = Math.abs(a[i][i]),
            maxRow = i;
        for (var k = i + 1; k < n; k++) {
            if (Math.abs(a[k][i]) > maxEl) {
                maxEl = Math.abs(a[k][i]);
                maxRow = k;
            }
        }
 
        // Check if the pivot element is zero
        if (maxEl == 0) {
            console.log("Matica je singularna");
            return;
        }
 
        // Swap maximum row with current row
        if (i !== maxRow) {
            for (var k = i; k < n + 1; k++) {
                var tmp = a[maxRow][k];
                a[maxRow][k] = a[i][k];
                a[i][k] = tmp;
            }
            var tmp = b[maxRow];
            b[maxRow] = b[i];
            b[i] = tmp;
        }
 
        // Make all rows below this one 0 in current column
        for (k = i + 1; k < n; k++) {
            var c = -a[k][i] / a[i][i];
            for (var j = i; j < n + 1; j++) {
                if (i === j) {
                    a[k][j] = 0;
                } else {
                    a[k][j] += c * a[i][j];
                }
            }
            b[k] += c * b[i];
        }
    }
 
    // Solve equation Ax=b for an upper triangular matrix A
    var x = new Array(n);
    for (var i = n - 1; i > -1; i--) {
        x[i] = b[i] / a[i][i];
        for (var k = i - 1; k > -1; k--) {
            b[k] -= a[k][i] * x[i];
        }
    }
    return x;
}

/* var a = [
    [2, 1, -1],
    [-3, -1, 2],
    [-2, 1, 2]
  ];
var b = [8,-11,-3];
var x = gaussianElimination(a, b);
console.log(x); */