d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)

  let datafilter = data.filter(d => d.ocupacion == 'comandante' || d.ocupacion == 'especialista aeroespacial' || d.ocupacion == 'ingeniero aeroespacial',)

  chart = Plot.plot({
    marks: [
      Plot.dot(datafilter, {
        y: 'mision_hs',
        x: 'eva_mision_hs',
        fill: 'ocupacion',
        fillOpacity: 0.6,
        title: 'ocupacion',
      }),
      Plot.frame(),
    ],
    grid: true,
    nice: true,
    zero: true,
    width: 800,
    height: 200,
    facet: {
      data: datafilter,
      x: 'ocupacion',
    },
    x: { ticks: 3 },
  })
  d3.select('#chart').append(() => chart)
})