d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  let chart = Plot.plot({

    height: 500,
    marginLeft: 70,
    marginRight: 20,
    marginBottom: 40,
    marginTop: 40,
    
    marks: [
      Plot.dot(data.filter(d => d.nacionalidad == 'EE.UU.' || d.nacionalidad == 'U.S.S.R/Rusia' || d.nacionalidad == 'Japon' || d.nacionalidad == 'China' || d.nacionalidad == 'Italia'), 
        {
        y: 'mision_hs',
        x: 'eva_mision_hs', 
        r: 'mision_hs',
        fill: 'nacionalidad',
      }),

    ],
    
    
    /*
    Plot.legend({
      filter : data.filter(d => d.nacionalidad == 'EE.UU.' || d.nacionalidad == 'U.S.S.R/Rusia' || d.nacionalidad == 'Japon' || d.nacionalidad == 'China' || d.nacionalidad == 'Italia'),
      color: {
        type: "categorical",
        domain: d3.range(5).map(d => filter), 
        range: ["green", "purple", "orange", "yellow", "blue",]
      },
    }), */

    style:{
      backgroundColor: 'black',
      color: 'white',
      fontFamily: 'monospace',
    },
    x: { grid: true, line: true, zero: true, nice: true, },
    y: { grid: true, line: true, zero: true, nice: true, },

    r: { range: [0, 8] },
    
    color: {
      scheme: 'set1',
      legend: true,
    }


  })
  d3.select('#chart').append(() => chart)
})
