d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)

  let chart = Plot.plot({

    facet: {
      data: data,
      x: 'genero',
    },

    marks: [
      Plot.barY(data, {
        x: 'ocupacion',
        y: 'mision_hs',
        z: 'genero',
        stroke: 'genero',
        fill: 'genero',
        sort: 'genero',
      }),
      
    ],
    x: {
      tickFormat: 'd',
    },

    x: { grid: true, line: true, zero: true, nice: true, },
    y: { grid: true, line: true, zero: true, nice: true, },

  
    color: {
      legend: true,
    }
    

  })
  
  d3.select('#chart').append(() => chart)
})
