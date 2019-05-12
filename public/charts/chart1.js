fetch('problem-json/problem1.json')
   .then(function(response) {
    response.json().then(function(data) {
      Highcharts.chart('container', {
         chart : {
           type: 'column',
         },
         title : {
            text: 'IPL scores of each team',
         },
         subtitle : {
            text: 'source: ipl.com',  
         },
         xAxis : {
            categories:Object.keys(data),
         },
         yAxis : {
            min: 0,
            title: {
               text: 'runs'         
            }      
         },
         credits : {
         enabled: false
         },
         series: [{
            name:'runs',
            data:Object.values(data)
            }]     
         });
      });
   })
