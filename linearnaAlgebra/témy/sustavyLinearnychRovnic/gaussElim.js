function elimination(mat) {
  for (let i = 0; i < mat.length - 1; i++) {
    // check for zero on diagonal
    if (mat[i][i] === 0) {
      // swap rows with a row below that has a non-zero value in that column
      let found = false;
      for (let j = i + 1; j < mat.length; j++) {
        if (mat[j][i] !== 0) {
          [mat[i], mat[j]] = [mat[j], mat[i]];
          found = true;
          break;
        }
      }
      if (!found) {
        throw new Error('Matrix is singular');
      }
    }
    // eliminate elements below diagonal
    for (let j = i + 1; j < mat.length; j++) {
      const factor = mat[j][i] / mat[i][i];
      for (let k = i; k < mat.length + 1; k++) {
        mat[j][k] -= factor * mat[i][k];
      }
    }
  }
}




// zisťovanie a vrátenie súčastného stavu riešenia matice-> nemá riešenie, má jedno, nemá žiadne
function getSolutionStatus(mat) {
    
  let status = 'unique' //  The state of solution ： unsolvable , More solutions , Unique solution 

  if (mat.some(row => row.slice(0, -1).every(val => val === 0) && row[row.length - 1] !== 0)) status = 'no'
    
  

  if (mat.some(row => row.every(val => val === 0))) status = 'multiple'

  return status
}
// Spätná substitúcia
function back_substitution(mat) {
    console.log(mat)
  const rowLen = mat.length
  const columnLen = mat[0].length
  const result = Array(rowLen).fill()

  for (let t = rowLen - 1; t >= 0; t--) {
    
    const divisor = result.reduceRight((pre, cur, idx) => {
    
      if (cur === undefined) {
    
        return pre
      } else {
    
        return pre - mat[t][idx] * cur
      }
    }, mat[t][columnLen - 1])

    result[t] = divisor / mat[t][t]
  }


  return result
}

// Gaussova eliminácia, Rozšírená matica rovníc 
function gaussian_elimination(mat) {
    
  
  const rowLen = mat.length
  const columnLen = mat[0].length

  if (columnLen - rowLen !== 1) {
    
    throw new Error('treba zadať rozšírenú maticu!');
  }

  //  Eliminácia
  elimination(mat)

  //  Získanie výsledku
  const solutionStatus = getSolutionStatus(mat) //   unsolvable , More solutions , Unique solution 


  if (solutionStatus === 'no') {
    return -5;
  } else if (solutionStatus === 'multiple') {
    return -2;
    
  } else {
    
    
    return back_substitution(mat);
  }
}


  //  Testovacie matice
  const arr = [
    [2, 1, -1, 8],
    [-3, -1, 2, -11],
    [-2, 1, 2, -3]
  ] // output: [2, 3, -1]
  
  const arr2 = [
    [1, 1, 1, 1, 1, 1],
    [16, 8, 4, 2, 1, 3],
    [81, 27, 9, 3, 1, 5],
    [256, 64, 16, 4, 1, 7],
    [625, 125, 25, 5, 1, 2020]
  ] // output: [ 83.79166666667061,-837.9166666667011,2932.7083333334544,-4187.5833333335095,2010.0000000000857 ]
  
  const arr3 = [
    [1, 2, 3, 4,0],
    [7, 14, 20, 27,0],
    [5, 10, 16, 19, -2],
    [3, 5, 6, 13, 5]
  ] // output: [ 0.9999999999999997, 2.0000000000000004, -1.0000000000000002 ]
  
  const arr4 = [
    [1, 2, 2, 1,5],
    [3, 2, 1, 2,0],
    [2, 1, 2, 1,2],
    [1, 3, 2, 1,2]
  ] 

 console.log(gaussian_elimination(arr3)); 

  
  /* gaussian_elimination(arr4); */



