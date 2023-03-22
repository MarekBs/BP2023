
function multiple(m1,m2){

fil_m1 = m1.length;  
col_m1 = m1[0].length;    
fil_m2 = m2.length;  
col_m2 = m2[0].length;

if (col_m1 != fil_m2)    
throw "Matrices cannot be multiplied";

let multiplication = new Array(fil_m1);  
for (x=0; x<multiplication.length;x++)      
multiplication[x] = new Array(col_m2).fill(0);

for (x=0; x < multiplication.length; x++) {      
    for (y=0; y < multiplication[x].length; y++) {   
        for (z=0; z<col_m1; z++) {              
                   multiplication [x][y] = multiplication [x][y] + m1[x][z]*m2[z][y]; 
                   }      
        }  
    }
    console.log(multiplication);
}
