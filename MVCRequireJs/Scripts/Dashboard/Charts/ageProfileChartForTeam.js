﻿define(["Services/teamChartService"], function (teamChartService) {
    var currentTeamId;
    var chart;
    var chartIntervalHandler;
    function initChart() {
        chart = new Highcharts.Chart({
            chart: {
                type: 'column',
                renderTo: 'ageProfileChartForTeamContainer',
            },
            title: {
                text: 'Monthly Average Rainfall'
            },
            subtitle: {
                text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: [
                'Jan',
                'Feb',
                'Mar'
            ]
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Rainfall (mm)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.teamId:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                },
                series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function () {
                            alert('Category: ' + this.category + ', team: ' + this.teamId);
                        }
                    }
                }
            }
            },
            series: [{
                name: 'Tokyo',
                data: [
                    {
                        name: 'Point 1',
                        color: '#00FF00',
                        y: 100, 
                        teamId: 25
                    },
                    {
                        name: 'Point 2',
                        color: '#00FF00',
                        y: 80,
                        teamId: 10
                    },
                    {
                        name: 'Point 3',
                        color: '#00FF00',
                        y: 25,
                        teamId: 80
                    }
                ]

            }]
        });
    }
    function create(teamId) {
        currentTeamId = teamId;
        initChart();
        teamChartService.getAgeProfileByTeam(currentTeamId);
    }

    function destroy() {
         clearInterval(chartIntervalHandler);
        chart.destroy();
    }

    return {
        create: create,
        destroy: destroy
    };
});