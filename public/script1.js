const csv = require('csv-parser');
const fs = require('fs');
const results = {};
 
fs.createReadStream('csv/deliveries.csv')
  .pipe(csv())
  .on('data', (data) => {
      if(!results[data.batting_team]){
          results[data.batting_team]=0;
      }
      results[data.batting_team]+=Number(data.total_runs);
  })
  .on('end', () => {
    fs.writeFile('problem-json/problem1.json', JSON.stringify(results),()=>{});
  });