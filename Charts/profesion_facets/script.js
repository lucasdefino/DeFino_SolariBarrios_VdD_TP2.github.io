d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)

  let datafiltered = data.filter(d => d.ocupacion == 'comandante' || d.ocupacion == 'especialista aeroespacial' || d.ocupacion == 'ingeniero aeroespacial',)

  chart = Plot.plot({
    height:1000,
    width:1000,
    marginBottom:30,
    marginLeft:70,
    facet: {
      data: datafiltered,
      x: 'ocupacion',
      label:"",
    },
    marks: [
      Plot.dot(datafiltered, {
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
    x: {
      labelAnchor: "center",
      label:"Horas de mision EVA →"
    },
    y:{
      anchor: "left",
      label: "Horas de mision →",
      labelAnchor: "center",
      labelOffset: 60,
    },
    color: {range: ['#cc6600','#006666','#005000',]},
    style: {
      backgroundColor: '#edf3ed',
    },
  })
  d3.select('#chart').append(() => chart)
})