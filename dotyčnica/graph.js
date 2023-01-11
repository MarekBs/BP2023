import functionPlot from 'function-plot';
functionPlot({
    target: '#root',
    yAxis: {domain: [-1, 9]},
    data: [{
      fn: 'x^2',
      derivative: {
        fn: '2 * x',
        x0: 2
      }
    }]
  });