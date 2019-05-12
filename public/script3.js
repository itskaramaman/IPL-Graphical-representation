const csv = require('csv-parser')
const fs = require('fs')
const results = {};
 
fs.createReadStream('csv/umpires.csv')
  .pipe(csv())
  .on('data', (data) => {
    if(data.Nationality!=='India'){
        if(!results[data.Nationality]){
            results[data.Nationality]=0;
        }
        results[data.Nationality]+=1;
    }
  })
  .on('end', () => {
    fs.writeFile('problem-json/problem3.json', JSON.stringify(results),()=>{});
  });