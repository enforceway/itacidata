require([
    'aci-date-picker',
    'aci-echart-bid',
    'aci-search-range',
    'css!./styles/index.css',
    'css!https://cdn.bootcss.com/normalize/8.0.1/normalize.css'
], function(one, two, three) {
    new Vue({
        el: '#name-container',
        data: function() {
            return {
                cfg4Container: (function() {
                    var tmpCfg = {
                        xAxis: {
                            type: 'category',
                            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                        },
                        yAxis: {
                            type: 'value'
                        },
                        series: [{
                            data: [820, 932, 901, 934, 1290, 1330, 1320],
                            type: 'line'
                        }]
                    };
                    return tmpCfg;
                })()
            };
        }
    });
});
