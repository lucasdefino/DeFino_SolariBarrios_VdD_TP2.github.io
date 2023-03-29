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
        fill: 'genero'
        }),
        //Plot.axisX({color: "red", anchor, facetAnchor: facetAnchor === "genero" ? undefined : facetAnchor}),
    ],
    y: {
      domain: d3.sort(data, (a, b) => d3.descending(a.edad_mision, b.edad_mision)).map(d => d.edad_mision),
      grid: true, 
      label: "Edad"
    },
    x: {
      tickFormat: (Math.abs),
      domain: [-40000, 40000], 
      line: true, 
      zero: true, 
      nice: true,
     },
     color: {range: ['#005000','#cc6600']},
     style: {
      backgroundColor: '#edf3ed',
    },
  })
  d3.select('#chart').append(() => chart)
})


