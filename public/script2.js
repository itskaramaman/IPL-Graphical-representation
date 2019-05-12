const csv = require('csv-parser');
const fs = require('fs');
const results = {};
const topTenObject={};
 
fs.createReadStream('csv/deliveries.csv')
  .pipe(csv())
  .on('data', (data) => {
        if(data.batting_team=='Royal Challengers Bangalore'){
            if(!results[data.batsman]){
                results[data.batsman]=0;
            }
            results[data.batsman]=results[data.batsman]+Number(data.total_runs);
        }
        topTen=Object.entries(results);
        topTen.sort((a,b) => b[1]-a[1]);
        topTen = topTen.slice(0,10);
    })
  .on('end', () => {
      for(let i=0;i<10;i++){
        topTenObject[topTen[i][0]]=topTen[i][1];
      }
    
    fs.writeFile('problem-json/problem2.json', JSON.stringify(topTenObject),()=>{});
  });