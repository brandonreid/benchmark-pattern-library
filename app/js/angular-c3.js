angular.module('c3', [])
    .directive('c3Chart', function () {
        function link (scope, element, attrs) {
            var chart,
                default_cols = [
                    ['x', moment().format('YYYY-MM-DD')],
                    ['Total Google Ratings', 0]
                ];

            scope.data = {
                bindto: '#chart',
                data: {
                    x: 'x',
                    columns: default_cols
                },
                axis: {
                    x: {
                        type: 'timeseries',
                        tick: {
                            format: '%Y-%m'
                        }
                    }
                }
            };

            chart = c3.generate(scope.data);

            scope.$watch('charts', function(v) {
                if (v && v.columns) {
                    chart.load(v.columns.length === 0 ? {columns: default_cols} : v);
                }
            }, true);
        }
        return {
            restrict: 'E',
            scope: {
                charts: '='
            },
            template: '<div id="chart"></div>',
            link: link
        };
    }).directive('overviewRatingChart', function() {
        function link (scope, element, attrs) {
            var rating = attrs.rating;
            var barColor = '';
            var max = 5;
            if (attrs.max) {
                max = Number(attrs.max);
            }

            // set color based on max
            if (rating < (max / 3)) {
                // low rating = red
                barColor = '#c21a15';
            } else if (rating < (max / 3 * 2)) {
                // medium rating = blue
                barColor = '#eac000';
            } else {
                // high rating = green
                barColor = '#1fa015';
            }

            // create x axis (actually inverted y) values
            var barValues = [0];
            function createValues() {
                for (var i = 0 + 1; i <= max; i++) {
                    barValues.push(i);
                }
            }
            createValues();

            var chart = c3.generate({
                data: {
                    columns: [
                        ['Average', attrs.rating],
                    ],
                    types: { Average: 'bar' }
                },
                axis: {
                    rotated: true,
                    x: { show: false },
                    y: {
                        max: max,
                        tick: {
                            values: barValues
                        },
                        padding: {
                            top: 0
                        }
                    }
                },
                interaction: { enabled: false },
                legend: { show: false },
                size: { height: 50 },
                padding: { left: 5 },
                color: { pattern: [barColor] },
                bindto: '.average-rating-chart'
            });
        }
        return {
            restrict: 'A',
            replace: true,
            scope: {
                charts: '='
            },
            template: '<div class="average-rating-chart"></div>',
            link: link
        };
    }).directive('overviewTopBottomChart', function() {
        function link (scope, element, attrs) {
            var chart = c3.generate({
                data: {
                    x : 'x',
                    columns: [
                        ['x', 'Downtown Mall', 'Abbot Trail and Mountain View', 'Goldenrod Ave and Muldoon'],
                        ['Ratings', 4.91, 4.85, 4.76],
                    ],
                    types: {
                        Ratings: 'bar'
                    }
                },
                axis: {
                    rotated: true,
                    x: {
                        type: 'category' // this needed to load string x value
                    }
                },
                size: { height: 200 },
                color: { pattern: ['#335dab'] },
                bindto: '.top-bottom-chart'
            });
        }
        return {
            restrict: 'A',
            replace: true,
            scope: {
                charts: '='
            },
            template: '<div class="top-bottom-chart"></div>',
            link: link
        };
    }).directive('overviewDistributionChart', function() {
        function link (scope, element, attrs) {
            var chart = c3.generate({
                data: {
                    columns: [
                        ['ammount', 0, 2, 19, 23, 9]
                    ],
                    types: {
                        ammount: 'bar'
                    }
                },
                axis: {
                    x: {
                        type: 'category'
                    }
                },
                size: { height: 280 },
                color: { pattern: ['#335dab'] },
                bindto: '.distribution-chart'
            });
        }
        return {
            restrict: 'A',
            replace: true,
            scope: {
                charts: '='
            },
            template: '<div class="distribution-chart"></div>',
            link: link
        };
    });