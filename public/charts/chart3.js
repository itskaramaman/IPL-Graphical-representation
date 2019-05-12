fetch('problem-json/problem3.json')
   .then(function(response) {
    response.json().then(function(data) {
      Highcharts.chart('container3', {
         chart : {
           type: 'column',
         },
         title : {
            text: 'Foreign umpire analysis',
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
               text: 'umpires by country',        
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