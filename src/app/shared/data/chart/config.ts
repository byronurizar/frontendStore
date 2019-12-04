import * as shape from 'd3-shape';

//BarChart
// options
export var barChartShowXAxis = true;
export var barChartShowYAxis = true;
export var barChartGradient = true;
export var barChartShowLegend = false;
export var barChartShowXAxisLabel = true;
export var barChartXAxisLabel = 'Country';
export var barChartShowYAxisLabel = true;
export var barChartYAxisLabel = 'Population';
export var roundEdges: boolean = true;
export var barChartshowGridLines = false;
export var barChartColorScheme = {
    domain: ["#ab8ce4", "#f3d800", "#FF5370", "#4099ff"]
};

//Pie-Chart
//Options
export var pieChartShowLabels = true;
export var pieChartGradient = false;
export var pieChartcolorScheme = {
    domain: ["#ab8ce4", "#26c6da", "#dc3545", "#00c292", "#f3d800", "#4099ff"]
};
export var chartOptions = { responsive: true };


//Area Chart
export var areaChartshowXAxis = true;
export var areaChartshowYAxis = true;
export var areaChartgradient = false;
export var areaChartshowXAxisLabel = true;
export var areaChartxAxisLabel = 'Country';
export var areaChartshowYAxisLabel = true;
export var areaChartyAxisLabel = 'Population';
export var areaChartcolorScheme = {
    domain: ["#ab8ce4", "#f3d800", "#ff5370"]
}
export var lineChartcurve = shape.curveStep;
export var lineChartcurve1 = shape.curveLinear;
