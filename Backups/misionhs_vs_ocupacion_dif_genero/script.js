d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)

  let chart = 
  Plot.plot({
    width: 800,
    marginLeft: 60,
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
      Plot.axisX({label: null, lineWidth: 5, marginBottom: 40, anchor: 'bottom',}),
      /*
      Plot.legend({
        color: {
          type: "categorical",
          domain: data.genero, 
          range: ["green", "purple"]
        }
      })
      */
    ],


    x: {grid: true, line: true, zero: true, nice: true, }, 
    y: {grid: true, line: true, zero: true, nice: true, },
    color: {legend: true, scheme: 'dark2'},



  })
  d3.select('#chart').append(() => chart)
})
