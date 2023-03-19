d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  let chart = Plot.plot({
    marks: [
      Plot.barX(data,
        {
        y: 'nombre',
        x: 'eva_mision_hs',
        }),
    ],
    y: {
      domain: d3.sort(data, (a, b) => d3.descending(a.eva_mision_hs, b.eva_mision_hs)).map(d => d.nombre),
    },
    x: { grid: true, line: true, zero: true, nice: true, },
    
    marginLeft: 165,
  })
  d3.select('#chart').append(() => chart)
})
