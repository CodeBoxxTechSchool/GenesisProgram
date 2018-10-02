/** Graphs : Morris
	graphs-morris.html

		<!-- PAGE LEVEL STYLES -->
		loadScript(plugin_path + "raphael-min.js", function(){
			loadScript(plugin_path + "chart.morris/morris.min.js", function(){

				// demo js script
				loadScript("assets/js/view/demo.graphs.morris.js");

			});
		});

		------------------------------------------------------------------------------------------

		01. SALES GRAPH
		02. AREA GRAPH
		03. BAR GRAPH COLOR
		04. NORMAL BAR GRAPH
		05. YEAR GRAPH
		06. DECIMAL GRAPH
		07. DONUT GRAPH
		18. TIME GRAPH
		09. NEGATIVE GRAPH
		10. NOGRID GRAPH
		11. NON CONTINUOUS GRAPH
		12. NON DATE GRAPH
		13. STACKED GRAPH
		14. INTERVAL GRAPH [ refresh 2s - not used on demo]

 ************************************************* **/
	jQuery(window).ready(function() {
		_morris();
	});


	function _morris() {

		/** 01. SALES GRAPH
		******************************************* **/
		if (jQuery('#graph-sales').length > 0) {

			Morris.Area({
				element : 'graph-sales',
				data : [{
					period : '2012 Q1',
					iphone : 2666,
					ipad : null,
					itouch : 2647
				}, {
					period : '2012 Q2',
					iphone : 2778,
					ipad : 2294,
					itouch : 2441
				}, {
					period : '2012 Q3',
					iphone : 4912,
					ipad : 1969,
					itouch : 2501
				}, {
					period : '2012 Q4',
					iphone : 3767,
					ipad : 3597,
					itouch : 5689
				}, {
					period : '2013 Q1',
					iphone : 6810,
					ipad : 1914,
					itouch : 2293
				}, {
					period : '2013 Q2',
					iphone : 5670,
					ipad : 4293,
					itouch : 1881
				}, {
					period : '2013 Q3',
					iphone : 4820,
					ipad : 3795,
					itouch : 1588
				}, {
					period : '2013 Q4',
					iphone : 15073,
					ipad : 5967,
					itouch : 5175
				}, {
					period : '2014 Q1',
					iphone : 10687,
					ipad : 4460,
					itouch : 2028
				}, {
					period : '2014 Q2',
					iphone : 8432,
					ipad : 5713,
					itouch : 1791
				}],
				xkey : 		'period',
				ykeys : 	['iphone', 'ipad', 'itouch'],
				labels : 	['iPhone', 'iPad', 'iPod Touch'],
				pointSize : 2,
				hideHover : 'auto'
			});
	
		}

		/** 02. AREA GRAPH
		******************************************* **/
		if (jQuery('#graph-area').length > 0){ 
			Morris.Area({
			  element: 'graph-area',
			  data: [
			    {x: '2011 Q1', y: 3, z: 3},
			    {x: '2011 Q2', y: 2, z: 0},
			    {x: '2011 Q3', y: 0, z: 2},
			    {x: '2011 Q4', y: 4, z: 4}
			  ],
			  xkey: 'x',
			  ykeys: ['y', 'z'],
			  labels: ['Y', 'Z']
			});
		}
		
		/** 03. BAR GRAPH COLOR
		******************************************* **/
		if (jQuery('#graph-bar').length > 0){ 
			
			Morris.Bar({
			  element: 'graph-bar',
			  data: [
			    {x: '2011 Q1', y: 0},
			    {x: '2011 Q2', y: 1},
			    {x: '2011 Q3', y: 2},
			    {x: '2011 Q4', y: 3},
			    {x: '2012 Q1', y: 4},
			    {x: '2012 Q2', y: 5},
			    {x: '2012 Q3', y: 6},
			    {x: '2012 Q4', y: 7},
			    {x: '2013 Q1', y: 8}
			  ],
			  xkey: 'x',
			  ykeys: ['y'],
			  labels: ['Y'],
			  barColors: function (row, series, type) {
			    if (type === 'bar') {
			      var red = Math.ceil(150 * row.y / this.ymax);
			      return 'rgb(' + red + ',0,0)';
			    }
			    else {
			      return '#000';
			    }
			  }
			});
		
		}
		
		/** 04. NORMAL BAR GRAPH
		******************************************* **/
		if (jQuery('#graph-normal-bar').length > 0){ 
			
			Morris.Bar({
			  element: 'graph-normal-bar',
			  data: [
			    {x: '2011 Q1', y: 3, z: 2, a: 3},
			    {x: '2011 Q2', y: 2, z: null, a: 1},
			    {x: '2011 Q3', y: 0, z: 2, a: 4},
			    {x: '2011 Q4', y: 2, z: 4, a: 3}
			  ],
			  xkey: 'x',
			  ykeys: ['y', 'z', 'a'],
			  labels: ['Y', 'Z', 'A']
			});
		
		}
		
		/** 05. YEAR GRAPH
		******************************************* **/
		if (jQuery('#graph-year').length > 0){ 
			var day_data = [
				{"period": "2012", "licensed": 3407, "sorned": 660},
				{"period": "2011", "licensed": 3351, "sorned": 629},
				{"period": "2010", "licensed": 3269, "sorned": 618},
				{"period": "2009", "licensed": 3246, "sorned": 661},
				{"period": "2008", "licensed": 3257, "sorned": 667},
				{"period": "2007", "licensed": 3248, "sorned": 627},
				{"period": "2006", "licensed": 3171, "sorned": 660},
				{"period": "2005", "licensed": 3171, "sorned": 676},
				{"period": "2004", "licensed": 3201, "sorned": 656},
				{"period": "2003", "licensed": 3215, "sorned": 622}
			];
			Morris.Line({
			  element: 'graph-year',
			  data: day_data,
			  xkey: 'period',
			  ykeys: ['licensed', 'sorned'],
			  labels: ['Licensed', 'SORN']
			})
		}
				
		/** 06. DECIMAL GRAPH
		******************************************* **/
		if (jQuery('#graph-decimal').length > 0){ 
			var decimal_data = [];
			for (var x = 0; x <= 360; x += 10) {
			  decimal_data.push({
			    x: x,
			    y: Math.sin(Math.PI * x / 180).toFixed(4)
			  });
			}
			window.m = Morris.Line({
			  element: 'graph-decimal',
			  data: decimal_data,
			  xkey: 'x',
			  ykeys: ['y'],
			  labels: ['sin(x)'],
			  parseTime: false,
			  hoverCallback: function (index, options) {
			    var row = options.data[index];
			    return "sin(" + row.x + ") = " + row.y;
			  },
			  xLabelMargin: 10
			});
		}
				
		/** 07. DONUT GRAPH
		******************************************* **/
		if (jQuery('#graph-donut').length > 0){ 
			Morris.Donut({
			  element: 'graph-donut',
			  data: [
			    {value: 70, label: 'foo'},
			    {value: 15, label: 'bar'},
			    {value: 10, label: 'baz'},
			    {value: 5, label: 'A really really long label'}
			  ],
			  formatter: function (x) { return x + "%"}
			});
		}
		
		/** 08. TIME GRAPH
		******************************************* **/
		if (jQuery('#graph-time').length > 0){ 
			var week_data = [
			  {"period": "2011 W27", "licensed": 3407, "sorned": 660},
			  {"period": "2011 W26", "licensed": 3351, "sorned": 629},
			  {"period": "2011 W25", "licensed": 3269, "sorned": 618},
			  {"period": "2011 W24", "licensed": 3246, "sorned": 661},
			  {"period": "2011 W23", "licensed": 3257, "sorned": 667},
			  {"period": "2011 W22", "licensed": 3248, "sorned": 627},
			  {"period": "2011 W21", "licensed": 3171, "sorned": 660},
			  {"period": "2011 W20", "licensed": 3171, "sorned": 676},
			  {"period": "2011 W19", "licensed": 3201, "sorned": 656},
			  {"period": "2011 W18", "licensed": 3215, "sorned": 622},
			  {"period": "2011 W17", "licensed": 3148, "sorned": 632},
			  {"period": "2011 W16", "licensed": 3155, "sorned": 681},
			  {"period": "2011 W15", "licensed": 3190, "sorned": 667},
			  {"period": "2011 W14", "licensed": 3226, "sorned": 620},
			  {"period": "2011 W13", "licensed": 3245, "sorned": null},
			  {"period": "2011 W12", "licensed": 3289, "sorned": null},
			  {"period": "2011 W11", "licensed": 3263, "sorned": null},
			  {"period": "2011 W10", "licensed": 3189, "sorned": null},
			  {"period": "2011 W09", "licensed": 3079, "sorned": null},
			  {"period": "2011 W08", "licensed": 3085, "sorned": null},
			  {"period": "2011 W07", "licensed": 3055, "sorned": null},
			  {"period": "2011 W06", "licensed": 3063, "sorned": null},
			  {"period": "2011 W05", "licensed": 2943, "sorned": null},
			  {"period": "2011 W04", "licensed": 2806, "sorned": null},
			  {"period": "2011 W03", "licensed": 2674, "sorned": null},
			  {"period": "2011 W02", "licensed": 1702, "sorned": null},
			  {"period": "2011 W01", "licensed": 1732, "sorned": null}
			];
			Morris.Line({
			  element: 'graph-time',
			  data: week_data,
			  xkey: 'period',
			  ykeys: ['licensed', 'sorned'],
			  labels: ['Licensed', 'SORN'],
			  events: [
			    '2011-04',
			    '2011-08'
			  ]
			});
		}
		
		/** 09. NEGATIVE GRAPH
		******************************************* **/
		if (jQuery('#graph-negative').length > 0){ 
			var neg_data = [
			  {"period": "2011-08-12", "a": 100},
			  {"period": "2011-03-03", "a": 75},
			  {"period": "2010-08-08", "a": 50},
			  {"period": "2010-05-10", "a": 25},
			  {"period": "2010-03-14", "a": 0},
			  {"period": "2010-01-10", "a": -25},
			  {"period": "2009-12-10", "a": -50},
			  {"period": "2009-10-07", "a": -75},
			  {"period": "2009-09-25", "a": -100}
			];
			Morris.Line({
			  element: 'graph-negative',
			  data: neg_data,
			  xkey: 'period',
			  ykeys: ['a'],
			  labels: ['Series A'],
			  units: '%'
			});
		}
		
		/** 10. NOGRID GRAPH
		******************************************* **/
		if (jQuery('#graph-nogrid').length > 0){ 
			var day_data = [
			  {"period": "2012-10-01", "licensed": 3407, "sorned": 660},
			  {"period": "2012-09-30", "licensed": 3351, "sorned": 629},
			  {"period": "2012-09-29", "licensed": 3269, "sorned": 618},
			  {"period": "2012-09-20", "licensed": 3246, "sorned": 661},
			  {"period": "2012-09-19", "licensed": 3257, "sorned": 667},
			  {"period": "2012-09-18", "licensed": 3248, "sorned": 627},
			  {"period": "2012-09-17", "licensed": 3171, "sorned": 660},
			  {"period": "2012-09-16", "licensed": 3171, "sorned": 676},
			  {"period": "2012-09-15", "licensed": 3201, "sorned": 656},
			  {"period": "2012-09-10", "licensed": 3215, "sorned": 622}
			];
			Morris.Line({
			  element: 'graph-nogrid',
			  grid: false,
			  data: day_data,
			  xkey: 'period',
			  ykeys: ['licensed', 'sorned'],
			  labels: ['Licensed', 'SORN']
			});
		}
		
		/** 11. NON CONTINUOUS GRAPH
		******************************************* **/
		if (jQuery('#graph-non-continu').length > 0){ 
			var day_data = [
			  {"period": "2012-10-01", "licensed": 3407},
			  {"period": "2012-09-30", "sorned": 0},
			  {"period": "2012-09-29", "sorned": 618},
			  {"period": "2012-09-20", "licensed": 3246, "sorned": 661},
			  {"period": "2012-09-19", "licensed": 3257, "sorned": null},
			  {"period": "2012-09-18", "licensed": 3248, "other": 1000},
			  {"period": "2012-09-17", "sorned": 0},
			  {"period": "2012-09-16", "sorned": 0},
			  {"period": "2012-09-15", "licensed": 3201, "sorned": 656},
			  {"period": "2012-09-10", "licensed": 3215}
			];
			Morris.Line({
			  element: 'graph-non-continu',
			  data: day_data,
			  xkey: 'period',
			  ykeys: ['licensed', 'sorned', 'other'],
			  labels: ['Licensed', 'SORN', 'Other'],
			  /* custom label formatting with `xLabelFormat` */
			  xLabelFormat: function(d) { return (d.getMonth()+1)+'/'+d.getDate()+'/'+d.getFullYear(); },
			  /* setting `xLabels` is recommended when using xLabelFormat */
			  xLabels: 'day'
			});
		}
		
		/** 12. NON DATE GRAPH
		******************************************* **/
		if (jQuery('#graph-non-date').length > 0){ 
			var day_data = [
			  {"elapsed": "I", "value": 34},
			  {"elapsed": "II", "value": 24},
			  {"elapsed": "III", "value": 3},
			  {"elapsed": "IV", "value": 12},
			  {"elapsed": "V", "value": 13},
			  {"elapsed": "VI", "value": 22},
			  {"elapsed": "VII", "value": 5},
			  {"elapsed": "VIII", "value": 26},
			  {"elapsed": "IX", "value": 12},
			  {"elapsed": "X", "value": 19}
			];
			Morris.Line({
			  element: 'graph-non-date',
			  data: day_data,
			  xkey: 'elapsed',
			  ykeys: ['value'],
			  labels: ['value'],
			  parseTime: false
			});
		}
		
		/** 13. STACKED GRAPH
		******************************************* **/
		if (jQuery('#graph-stacked').length > 0){ 
			Morris.Bar({
			  element: 'graph-stacked',
			  axes: false,
			  grid: false,
			  data: [
			    {x: '2011 Q1', y: 3, z: 2, a: 3},
			    {x: '2011 Q2', y: 2, z: null, a: 1},
			    {x: '2011 Q3', y: 0, z: 2, a: 4},
			    {x: '2011 Q4', y: 2, z: 4, a: 3}
			  ],
			  xkey: 'x',
			  ykeys: ['y', 'z', 'a'],
			  labels: ['Y', 'Z', 'A'],
			  stacked: true
			});
		}
		
		/** 14. INTERVAL GRAPH
		******************************************* **/
		if (jQuery('#graph-interval').length > 0){
			
			var nReloads = 0;
			function data(offset) {
			  var ret = [];
			  for (var x = 0; x <= 360; x += 10) {
			    var v = (offset + x) % 360;
			    ret.push({
			      x: x,
			      y: Math.sin(Math.PI * v / 180).toFixed(4),
			      z: Math.cos(Math.PI * v / 180).toFixed(4)
			    });
			  }
			  return ret;
			}
			var graph = Morris.Line({
			    element: 'graph-interval',
			    data: data(0),
			    xkey: 'x',
			    ykeys: ['y', 'z'],
			    labels: ['sin()', 'cos()'],
			    parseTime: false,
			    ymin: -1.0,
			    ymax: 1.0,
			    hideHover: true
			});
			function update() {
			  nReloads++;
			  graph.setData(data(5 * nReloads));
			  jQuery('#reloadStatus').text(nReloads + ' reloads');
			}
			setInterval(update, 2000);
		}
	
	}
