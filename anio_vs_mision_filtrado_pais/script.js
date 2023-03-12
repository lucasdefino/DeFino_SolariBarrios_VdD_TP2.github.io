d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)

  let chart = Plot.plot({
    marks: [
      Plot.dot(
        data.filter(d => d.nacionalidad == 'EE.UU.'),
        {
          x: 'anio_mision',
          y: 'mision_hs',
          r: 'eva_mision_hs'
        },
      ),
    ],
    x: {
      tickFormat: 'd',
    },
    y: {
      nice: true,
      grid: true,
    },
    //r: {range: [0,15]},

    color: {
      legend: true,
    }
    
  })
  d3.select('#chart').append(() => chart)
})
