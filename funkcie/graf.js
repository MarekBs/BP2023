var parameters = {
    target: '#myFunction',
    graphType: 'polyline',
    data: [{
      fn: 'sin(x)', 
      graphType: 'polyline',
      visible: "false",
      derivative: {
        fn: "cos(x)",
        graphType: 'polyline',
        x0: 5,
        
      }
   }/* ,{
    fn:"sin(1)-(1/cos(1))(x-1)"
   } */
    
    
    
   ],
    grid: true,
    yAxis: {domain: [-1, 1]},
    xAxis: {domain: [0, 2*Math.PI]}
  };
  
  function plot(width) {
    var f = document.querySelector("#function").value;
    var xMin = document.querySelector("#xMin").value;
    var xMax = document.querySelector("#xMax").value;
    var yMin = document.querySelector("#yMin").value;
    var yMax = document.querySelector("#yMax").value;
    var color = document.querySelector("#color").value;
    var point = document.querySelector("#bodDotyku").value;


    
    if(f.includes("ln")){
        f =f.replace("ln", "log");
        
    }
     

    let result1 = calcNormal(f,point);
    
    parameters.data[0].fn = f;
    parameters.xAxis.domain = [xMin, xMax];
    parameters.yAxis.domain = [yMin, yMax];
    parameters.data[0].color = color;
    parameters.data[0].derivative.x0 = parseFloat(point);
    parameters.data[0].derivative.fn = calcDerivate(f);
    parameters.width = width;
    if(window.innerWidth<903){
      parameters.width = window.innerWidth*0.95;
    }
    
    /* parameters.data[1].fn = result1 */
  

    
    
    document.getElementById("normala").textContent = "Normála: "+result1;

    
   

    functionPlot(parameters);
  
    
  }


  

function changeSize(){
    if(window.innerWidth<903){
      plot(window.innerWidth*0.95);
    }else {
      plot(550)
    }
    
    
    
  }
  var input = document.querySelector("#functionInput");
  var res = document.querySelector("#resultDerivate");
  $("#derivateBtn").click(function(){
    let f = input.value;
    if(f.includes("ln")){
        f =f.replace("ln", "log");
        
    }
    let der = calcDerivate(f);
    res.innerHTML = " Derivácia =  "+der;
    
  });   

$("#clrBtn").click(function(){
  res.innerHTML = "Derivácia =";
  input.value = "";

});