fetch('problem-json/problem2.json')
   .then(function(response) {
    response.json().then(function(data) {
      Highcharts.chart('container2', {
         chart : {
           type: 'column',
         },
         title : {
            text: 'Royal Challengers Banglore Batting History',
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
