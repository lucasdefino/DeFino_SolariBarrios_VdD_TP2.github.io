d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)

  let fem = data.filter(
    d => d.genero == 'femenino',
  )

  fem.forEach( function(d) { 
    d.mision_hs = -d.mision_hs; 
  })
  
  let chart = Plot.plot({
    facet: {
      data: fem,
      label: 'genero',
    },
    marks: [
      Plot.barX(data,
        {
        y: 'edad_mision',
        x: 'mision_hs',
        fill: 'genero',
        }),
        //Plot.axisX({color: "red", anchor, facetAnchor: facetAnchor === "genero" ? undefined : facetAnchor}),
      Plot.line({
        x: 0,
        fill: 'blue'
      }
      )
    ],
    y: {
      domain: d3.sort(data, (a, b) => d3.descending(a.edad_mision, b.edad_mision)).map(d => d.edad_mision),
      grid: true, 
      line: true, 
      zero: true, 
      nice: true, 
    },
    x: {
      tickFormat: (Math.abs),
      domain: [-20000, 40000],
      grid: true, 
      line: true, 
      zero: true, 
      nice: true,
      
     },
     color: {legend: true, scheme: 'dark2'},
  })
  d3.select('#chart').append(() => chart)
})
