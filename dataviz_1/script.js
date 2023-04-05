d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)

  let chart = Plot.plot({
    marks: [
      Plot.dot(
        data.filter(d => d.nacionalidad == 'EE.UU.'),
        {
          x: 'anio_mision',
          y: 'mision_hs',
          r: 'eva_mision_hs',
          fill :'eva_mision_hs',
          opacity : 0.8,
        },
      ),
    ],
    x: {
      label: "Años  →",
      grid: true,
      tickFormat: 'd',
    },
    y: {
      label: "↑ Horas de mision",
      nice: true,
      grid: true,
    },
    r: {range: [0,10]},
    color: {
      scheme : 'greens',
      legend: true,
      label:"Horas de mision EVA"
    },
    style: {
      backgroundColor: '#edf3ed',
    },
    legend: {
      backgroundColor: '#edf3ed',
    }
  })
  d3.select('#chart').append(() => chart)
})
