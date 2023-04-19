
function calcDerivate(f) {
    const variable = 'x';
    let der;
    
    // Check if f is of the form logb(x)
    const re = /^log([1-9]|[1-9][0-9]*)(\.[0-9]+)?\(([a-zA-Z]+)\)$/;
    const match = f.match(re);
    if (match) {
      const base = parseFloat(match[1] + (match[2] || ''));
      // Replace logb(x) with ln(x) / ln(base)
      f = f.replace(re, 'log($3) / log(' + base + ')');
    }
    // Take the derivative using mathjs
    der = math.derivative(f, variable);
    
    return der.toString();
  }
  