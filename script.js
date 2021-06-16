// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);
var chart_2 = am4core.create("chartdiv_2", am4charts.XYChart);

const data = [{
  "country": "Lithuania",
  "litres": 501.9
}, {
  "country": "Czech Republic",
  "litres": 301.9
}, {
  "country": "Ireland",
  "litres": 201.1
}, {
  "country": "Germany",
  "litres": 165.8
}, {
  "country": "Australia",
  "litres": 139.9
}, {
  "country": "Austria",
  "litres": 128.3
}, {
  "country": "UK",
  "litres": 99
}, {
  "country": "Belgium",
  "litres": 60
}, {
  "country": "The Netherlands",
  "litres": 50
}]

chart.data = data;
chart.tapToActivate = true;

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "country";

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
categoryAxis.title.text = "Countries";
valueAxis.title.text = "Litres sold (M)";

var series = chart.series.push(new am4charts.LineSeries());
series.name = "Test";
series.stroke = am4core.color("#CDA2AB");
series.strokeWidth = 3;
series.dataFields.valueY = "litres";
series.dataFields.categoryX = "country";

chart.cursor= new am4charts.XYCursor();

var scrollbarX = new am4charts.XYChartScrollbar();
scrollbarX.series.push(series);
chart.scrollbarX = scrollbarX;
scrollbarX.series.data = data;
// chart.scrollbarX = new am4core.Scrollbar();
// chart.scrollbarY = new am4core.Scrollbar();

chart_2.data = data;
chart_2.dragGrip.disabled = false;
chart_2.dragGrip.position = "bottom";
chart_2.dragGrip.background.strokeWidth = 0;
chart_2.dragGrip.background.fillOpacity = 1;
chart_2.dragGrip.width = 50;
chart_2.dragGrip.filters.push(new am4core.DropShadowFilter);

var categoryAxis = chart_2.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "country";

var valueAxis = chart_2.yAxes.push(new am4charts.ValueAxis());
categoryAxis.title.text = "Countries";
valueAxis.title.text = "Litres sold (M)";

var series2 = chart_2.series.push(new am4charts.LineSeries());
series2.name = "Test";
series2.stroke = am4core.color("#CDA2AB");
series2.strokeWidth = 3;
series2.dataFields.valueY = "litres";
series2.dataFields.categoryX = "country";

chart_2.cursor= new am4charts.XYCursor();

var scrollbarX2 = new am4charts.XYChartScrollbar();
scrollbarX2.series.push(series2);
chart_2.scrollbarX = scrollbarX2;
scrollbarX2.series.data = data;
// chart_2.scrollbarX = new am4core.Scrollbar();
// chart_2.scrollbarY = new am4core.Scrollbar();
