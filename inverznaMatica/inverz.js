const math = require('mathjs');

let matrix = [[1, 2], [3, 4]];
let inverse = math.inv(matrix);
console.log(inverse);  // [[-2, 1], [1.5, -0.5]]

//mathjs