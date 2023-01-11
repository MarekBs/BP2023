
function calcDerivate(f){

    if(f=="ln(x)"){
        let der = "1/x";
        return der;
    }

let der;

der =math.derivative(f, 'x').toString();  
 
return der;
}