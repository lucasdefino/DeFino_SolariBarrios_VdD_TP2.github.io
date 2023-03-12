d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)

  chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        y: 'mision_hs',
        x: 'eva_mision_hs',
        fill: 'ocupacion',
        fillOpacity: 0.6,
        //r: 'pop',
        title: 'ocupacion',
      }),
      Plot.frame(),
    ],
    grid: true,
    nice: true,
    zero: true,
    width: 800,
    height: 200,
    r: { range: [0, 18] },
    facet: {
      data: data,
      x: 'ocupacion',
    },
    x: { ticks: 3 },
  })
  d3.select('#chart').append(() => chart)
})