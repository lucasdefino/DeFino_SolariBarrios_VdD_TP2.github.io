d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)

  let chart = Plot.plot({

    marks: [
      Plot.tickX(data,
        {
        y: 'nacionalidad',
        x: 'eva_mision_hs',
        }),
    ],
    x: { grid: true, line: true, zero: true, nice: true, },
    y: { grid: true, line: true, zero: true, nice: true, },
    marginLeft: 150,
    height: 600,
    

  })
  d3.select('#chart').append(() => chart)
})
