d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({

    //defino los ejes, elegi la marca dot para
    //representar cada entidad
    marks: [
      Plot.barY(data, {
        x: 'ocupacion',
        y: 'mision_hs',
        z: 'genero',
        //agrego data al eje y
        
        //resalto la marca
        //r: 'nacionalidad',
        //color del borde de la marca
        stroke: 'genero',
        //fill agrupa segun 
        fill: 'genero',
        sort: 'genero',
        //opacity: *entre 0 y 1*,
      }),
      
    ],
    x: {
      tickFormat: 'd',
    },
    //agrego el grid
    x: { grid: true, line: true, zero: true, nice: true, },
    y: { grid: true, line: true, zero: true, nice: true, },

    //parametros de la marca
    //r: { range: [0, 50] },

    //leyendas de color
    color: {
      legend: true,
    }
    

  })
  // Agregamos chart al div#chart de index.html
  d3.select('#chart').append(() => chart)
})
