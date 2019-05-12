matches=[];
seriesArr=[];
fetch('problem-json/problem4.json')
   .then(function(response) {
    response.json().then(function(data) {
    team=Object.keys(data); 
    series=Object.values(data);   
    years=Object.keys(series[0]);
    for(let i=0;i<series.length;i++){
        matches.push(Object.values(series[i]));
    };
    for(let i=0;i<team.length;i++){
        seriesArr.push({
            name:team[i],
            data: matches[i]
        })
    }
    Highcharts.chart('container4', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Stacked column chart'
        },
        xAxis: {
            categories: years
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Number'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: seriesArr
    });
});
});