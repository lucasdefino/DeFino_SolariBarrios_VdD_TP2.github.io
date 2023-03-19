d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)

  let chart = Plot.plot({

    marks: [
      Plot.dot(data,
        {
        y: 'nacionalidad',
        x: 'eva_mision_hs',
        symbol: 'square'
        }),
    ],
    x: { grid: true, line: true, zero: true, nice: true, },
    y: { grid: true, line: true, zero: true, nice: true, },
    marginLeft: 150,
    height: 600,
    

  })
  d3.select('#chart').append(() => chart)
})
