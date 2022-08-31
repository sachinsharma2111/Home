google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawCharts);
function drawCharts() {
  

  // actual bar chart data
  var barData = google.visualization.arrayToDataTable([
    ['Records', 'Page Views', 'Unique Views'],
    ['Purchase',  1050,      600],
    ['Item ',  1370,      910],
    ['Supplier ',  660,       400],
    ['Staff ',  1030,      540],
    ['Return ',  1000,      480],
    // ['Fri',  1170,      960],
    // ['Sat',  660,       320]
  ]);
  // set bar chart options
  var barOptions = {
    focusTarget: 'category',
    backgroundColor: 'transparent',
    colors: ['red', 'green'],
    fontName: 'Open Sans',
    chartArea: {
      left: 50,
      top: 10,
      width: '100%',
      height: '70%'
    },
    bar: {
      groupWidth: '80%'
    },
    hAxis: {
      textStyle: {
        fontSize: 11
      }
    },
    vAxis: {
      minValue: 0,
      maxValue: 1500,
      baselineColor: '#DDD',
      gridlines: {
        color: '#DDD',
        count: 4
      },
      textStyle: {
        fontSize: 11
      }
    },
    legend: {
      position: 'bottom',
      textStyle: {
        fontSize: 12
      }
    },
    animation: {
      duration: 1200,
      easing: 'out',
			startup: true
    }
  };
  // draw bar chart twice so it animates
  var barChart = new google.visualization.ColumnChart(document.getElementById('bar-chart'));
  //barChart.draw(barZeroData, barOptions);
  barChart.draw(barData, barOptions);
}