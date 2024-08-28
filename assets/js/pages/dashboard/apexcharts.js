"use strict";

// Shared Colors Definition
const primary = '#6993FF';
const success = '#1BC5BD';
const info = '#8950FC';
const warning = '#FFA800';
const danger = '#F64E60';

// Class definition
function generateBubbleData(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
  
      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = 'w' + (i + 1).toString();
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}

var KTApexChartsDemo = function () {
	// Private functions
	
	var _demo2 = function () {
		const apexChart = "#chart_2";
		var options = {
			series: [{
				name: 'series1',
				data: [31, 40, 28, 51, 42, 109, 100]
			}],
			chart: {
				height: 300,
				type: 'area'
			},
			dataLabels: {
				enabled: false
			},
			stroke: {
				curve: 'smooth'
			},
			xaxis: {
				type: 'datetime',
				categories: ["2024-08-28T00:00:00.000Z", "2024-08-10T01:30:00.000Z", "2024-04-28T02:30:00.000Z", "2024-01-01T03:30:00.000Z", "2023-08-28T04:30:00.000Z", "2023-06-05T05:30:00.000Z", "2023-04-08T06:30:00.000Z"]
			},
			tooltip: {
				x: {
					format: 'dd/MM/yy HH:mm'
				},
			},
			colors: [primary, success]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo4 = function () {
		const apexChart = "#chart_4";
		var options = {
			series: [{
				name: 'Panne d\'alimentation',
				data: [1, 0, 2, 3,]
			}, {
				name: 'RAM endommanger',
				data: [0, 5, 0, 0]
			}, {
				name: 'Ruban Endommanger',
				data: [2, 3, 4, 0]
			}, {
				name: 'Touche Endommager',
				data: [0, 0, 0, 2]
			},],
			chart: {
				type: 'bar',
				height: 280,
				stacked: true,
			},
			plotOptions: {
				bar: {
					horizontal: true,
				},
			},
			stroke: {
				width: 1,
				colors: ['#fff']
			},
			xaxis: {
				categories: ["Imprimante", "Scanner", "All in One", "Clavier"],
				labels: {
					formatter: function (val) {
						return val
					}
				}
			},
			tooltip: {
				y: {
					formatter: function (val) {
						return val
					}
				}
			},
			title: {text: 'Rebus par type de pannes'},
			fill: {
				opacity: 1
			},
			colors: [primary, success, warning, danger, info]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo9 = function () {
    const apexChart = "#chart_9";
    var options = {
        series: [{
            name: "Imprimante",
            data: [2]
        }, {
            name: "Clavier",
            data: [5]
        }, {
            name: "All in One",
            data: [6]
        }],
        chart: {
            height: 200,
            type: 'scatter',
            zoom: {
                enabled: true,
                type: 'xy'
            }
        },
        xaxis: {
            categories: ["Imprimante", "Clavier", "All in One"], // Label categories on the x-axis
        },
        yaxis: {
            tickAmount: 7,
            labels: {
                formatter: function (val) {
                    return parseFloat(val).toFixed(1); // Numeric figures on the y-axis
                }
            }
        },
        colors: [primary, success, warning]
    };

    var chart = new ApexCharts(document.querySelector(apexChart), options);
    chart.render();
	}

	var _demo11 = function () {
    const apexChart = "#donutChart";
    var options = {
        series: [44, 55, 41, 17, 15],
        chart: {
            width: 320,
            type: 'donut',
        },
        labels: ['Imprimante', 'All in One', 'Scanner', 'Souris', 'Clavier'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'vertical', // Set to 'horizontal', 'vertical', 'diagonal1', or 'diagonal2'
                shadeIntensity: 0.5,
                gradientToColors: ['#A9F0FF', '#B9F8B8', '#FFA800', '#FFC39B', '#e10c18'], // End colors of the gradients
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
		}
    };

    var chart = new ApexCharts(document.querySelector(apexChart), options);
    chart.render();
	}

	var _demo12 = function () {
		const apexChart = "#chart_12";
		var options = {
			series: [44, 55],
			chart: {
				width: 380,
				type: 'pie',
			},
			labels: ['Fonctionnel', 'Non-Fonctionnel'],
			responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: 'bottom'
					}
				}
			}],
			colors: [primary, success]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo13 = function () {
		const apexChart = "#chart_13";
		var options = {
			series: [5, 2, 10, 3],
			chart: {
				height: 210,
				type: 'radialBar',
			},
			plotOptions: {
				radialBar: {
					dataLabels: {
						name: {
							fontSize: '22px',
						},
						value: {
							fontSize: '16px',
						},
						total: {
							show: true,
							label: 'Total',
							formatter: function (w) {
								// By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
								return 20
							}
						}
					}
				}
			},
			labels: ['DSI', 'Acceuil', 'Monetaire', 'Contentieux'],
			colors: [primary, success, warning, danger]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	return {
		// public functions
		init: function () {
			
			_demo2();
			
			_demo4();
			
			
			_demo9();
			
			_demo11();
			_demo12();
			_demo13();
			
		}
	};
}();

jQuery(document).ready(function () {
	KTApexChartsDemo.init();
});
