function calcNormal(f, point) {

  let normal;

    if(point<0){
       normal = f + "-(1/" + calcDerivate(f) + ")*(z-(x))";
    }else{
       normal = f + "-(1/" + calcDerivate(f) + ")*(z-x)";
    }

    let result = normal.replace(/x/gi, point);
    return result.replace(/z/gi, "x");
  
  

  
  
}
