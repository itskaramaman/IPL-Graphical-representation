const csv = require('csv-parser')
const fs = require('fs')
const results = {};
 
fs.createReadStream('csv/matches.csv')
  .pipe(csv())
  .on('data', (data) => {
        if(!(results[data.team1])){
            results[data.team1]={};
        }
        if(!results[data.team2]){
            results[data.team2]={};
        }
        if(!results[data.team1][data.season]){
            results[data.team1][data.season]=0;
        }
        if(!results[data.team2][data.season]){
            results[data.team2][data.season]=0;
        }
        results[data.team1][data.season]+=1;
        results[data.team2][data.season]+=1;
  })
  .on('end', () => {
      const key = Object.keys(results);
      for(let i=0;i<=key.length-1;i++){
          for(let j=2008;j<=2017;j++){
                var team=key[i];
                if(!results[team][String(j)]){
                  results[team][String(j)]=0;
              }
              }
          } 
    fs.writeFile('problem-json/problem4.json', JSON.stringify(results),()=>{});
  }); 