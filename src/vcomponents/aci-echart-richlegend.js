define([
    'aci-echart-bid'
], function() {
    Vue.component('aci-echart-richlegend', {
        template: '<div class="aci-echart-richlegend">'
        + '<aci-echart-bid :option="option" :ginstance="instCallback"></aci-echart-bid>'
        + '<div class="aci-rich-legend">'
        + '<ol><li v-for="(tmp, index) in legend.data" v-on:click="legendSelect(tmp)">'
+ '<span v-html="tmp.name"></span><span v-html="tmp.total"></span><span v-bind:value="(tmp.total / legend.sum)|toSumOdds"></span>'
        + '</li></ol>'
        + '</div>'
        + '</div>',
        props: ['option'],
        data: function() {
            return {
                legend: {},
                instCallback: null,
                instance: null,
                styleTmpl: `.aci-echart-richlegend {height: 100%;} 
                            .aci-echart-richlegend .aci-echart-bid {float: left; width: 65%;}
                            .aci-echart-richlegend .aci-rich-legend {float: left; width: 35%; height: 100%;}
                            .aci-echart-richlegend .aci-rich-legend ol {list-style: none; display: inline-block; vertical-align: middle;}
                            .aci-echart-richlegend .aci-rich-legend li {line-height: normal;}
                            .aci-echart-richlegend .aci-rich-legend li label {cursor: pointer;}`
            };
        },
        filters: {
            toSumOdds: function(value) {
                value = value * 100;
                return value.toFixed(2);
            }
        },
        methods: {
            legendSelect: function(legendItem) {
                this.instance.dispatchAction({
                    type: 'legendToggleSelect',
                    name: legendItem.name
                });
            }
        },
        mounted: function() {
            
        },
        created: function() {
            var style = document.createElement('style');
            var self = this;
            style.setAttribute('type', 'text/css');
            style.innerHTML = this.styleTmpl;
            document.head.appendChild(style);

            this.instCallback = function(inst) {
                self.instance = inst;
            };

            if(this.option.legend) {
                this.option.legend.show = false;

                var legend = this.option.legend;
                var sum = 0;
                var nlegend = [];
                this.option.series.forEach(function(item, index) {
                    var total = 0;
                    item.data.forEach(function(itm) {
                        total += itm;
                        sum += itm;
                    });
                    nlegend.push({
                        name: item.name,
                        total: total
                    });
                });
                this.legend = {
                    data: nlegend,
                    sum: sum,
                };
            }
        }
    });
});