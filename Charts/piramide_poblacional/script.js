d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)

  let fem = data.filter(
    d => d.genero == 'femenino',
  )
  /*
  let masc = data.filter(
    d => d.genero == 'masculino',
  )
  
  let fem30a35 = fem.filter(d => d.edad_mision == 31 || d.edad_mision == 32 || d.edad_mision == 33 || d.edad_mision == 34 || d.edad_mision == 35,)
  let fem36a40 = fem.filter(d => d.edad_mision == 36 || d.edad_mision == 37 || d.edad_mision == 38 || d.edad_mision == 39 || d.edad_mision == 40,)
  let fem41a45 = fem.filter(d => d.edad_mision == 41 || d.edad_mision == 42 || d.edad_mision == 43 || d.edad_mision == 44 || d.edad_mision == 45,)
  let fem46a50 = fem.filter(d => d.edad_mision == 46 || d.edad_mision == 47 || d.edad_mision == 48 || d.edad_mision == 49 || d.edad_mision == 50,)
  let fem51a55 = fem.filter(d => d.edad_mision == 51 || d.edad_mision == 52 || d.edad_mision == 53 || d.edad_mision == 54 || d.edad_mision == 55,)
  let fem56a60 = fem.filter(d => d.edad_mision == 56 || d.edad_mision == 57 || d.edad_mision == 58 || d.edad_mision == 59 || d.edad_mision == 60,)

  let masc30a35 = masc.filter(d => d.edad_mision == 31 || d.edad_mision == 32 || d.edad_mision == 33 || d.edad_mision == 34 || d.edad_mision == 35,)
  let masc36a40 = masc.filter(d => d.edad_mision == 36 || d.edad_mision == 37 || d.edad_mision == 38 || d.edad_mision == 39 || d.edad_mision == 40,)
  let masc41a45 = masc.filter(d => d.edad_mision == 41 || d.edad_mision == 42 || d.edad_mision == 43 || d.edad_mision == 44 || d.edad_mision == 45,)
  let masc46a50 = masc.filter(d => d.edad_mision == 46 || d.edad_mision == 47 || d.edad_mision == 48 || d.edad_mision == 49 || d.edad_mision == 50,)
  let masc51a55 = masc.filter(d => d.edad_mision == 51 || d.edad_mision == 52 || d.edad_mision == 53 || d.edad_mision == 54 || d.edad_mision == 55,)
  let masc56a60 = masc.filter(d => d.edad_mision == 56 || d.edad_mision == 57 || d.edad_mision == 58 || d.edad_mision == 59 || d.edad_mision == 60,)

  let newfem =  fem41a45
  //(fem30a35 || fem36a40 ||  || fem46a50 || fem51a55 || fem56a60)
  let newmasc = masc30a35 || masc36a40 || masc41a45 || masc46a50 || masc51a55 || masc56a60
  */
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
        stroke: 'genero'
        }),
    ],
    marginTop: 0,
    y: {
      ticks: [30,35,40,45,50,55,60 ],
      domain: d3.sort(data, (a, b) => d3.descending(a.edad_mision, b.edad_mision)).map(d => d.edad_mision),
      grid: true, 
      label: "Edad",
    },
    x: {
      label:"Horas de mision",
      tickFormat: (Math.abs),
      domain: [-40000, 40000],
      labelAnchor: "center", 
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


