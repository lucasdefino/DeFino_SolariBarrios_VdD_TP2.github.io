d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  
  let dataeeuu = data.filter(
    d => d.nacionalidad === 'EE.UU.' 
  )
  let dataeeuuminmax = d3
  .groups(dataeeuu, d => d.anio_mision)
  .map(d => {
    return {
      anio_mision: d[0],
      min: d3.min(d[1], d => d.mision_hs),
      max: d3.max(d[1], d => d.mision_hs),
    }
  }) 
  let datachina = data.filter(
    d => d.nacionalidad === 'China' 
  )
  let datachinaminmax = d3
  .groups(datachina, d => d.anio_mision)
  .map(d => {
    return {
      anio_mision: d[0],
      min: d3.min(d[1], d => d.mision_hs),
      max: d3.max(d[1], d => d.mision_hs),
    }
  })
  let dataussr = data.filter(
    d => d.nacionalidad === 'U.S.S.R/Rusia'
  )
  let dataussrminmax = d3
  .groups(dataussr, d => d.anio_mision)
  .map(d => {
    return {
      anio_mision: d[0],
      min: d3.min(d[1], d => d.mision_hs),
      max: d3.max(d[1], d => d.mision_hs),
    }
  }) 
  
  let chart = Plot.plot({
    marks: [
      Plot.line(
        dataeeuuminmax,
        {
          x: 'anio_mision',
          y: 'mision_hs',
        },
      ),
      Plot.lineY(dataeeuuminmax,
        { 
          x: 'anio_mision', 
          y: d => (d.max + d.min) / 2,
          sort: 'anio_mision',
          stroke: 'midnightblue',
          strokeWidth: 3,
        }),
      Plot.lineY(datachinaminmax,
        { 
          x: 'anio_mision', 
          y: d => (d.max + d.min) / 2,
          sort: 'anio_mision',
          stroke: 'darkgreen',
          strokeWidth: 3,
        }),
      Plot.lineY(dataussrminmax,
        { 
          x: 'anio_mision', 
          y: d => (d.max + d.min) / 2,
          sort: 'anio_mision',
          stroke: 'maroon',
          strokeWidth: 3,
        }),
    ],
    x: {
      grid: true,
      tickFormat: 'd',
    },
    y: {
      nice: true,
      grid: true,
      label: '↑ promedio_mision_hs'
    },
  })
  d3.select('#chart').append(() => chart)
})
