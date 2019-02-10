define([
    'aci-echart-bid'
], function() {
    Vue.component('aci-echart-richlegend', {
        template: '<div class="aci-echart-richlegend">'
        + '<aci-echart-bid :option="option" :ginstance="instCallback"></aci-echart-bid>'
        + '<div class="richlegend">'
        + '<ul><li v-for="(tmp, index) in legend.data" v-on:click="legendSelect(tmp)">'
+ '<label><span v-html="tmp.name"></span><span v-html="tmp.total"></span><span v-bind:value="(tmp.total / legend.sum)|toSumOdds"></span></label>'
        + '</li></ul>'
        + '</div>'
        + '</div>',
        props: ['option'],
        data: function() {
            return {
                legend: {},
                instCallback: null,
                instance: null,
                styleTmpl: `.aci-echart-richlegend {height: 100%;} 
                            .aci-echart-richlegend .aci-echart-bid {float: left; width: 80%;}
                            .aci-echart-richlegend .richlegend {float: left; width: 20%;}
                            .aci-echart-richlegend .richlegend ul {list-style: none;}
                            .aci-echart-richlegend .richlegend li label {cursor: pointer;}`
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
                debugger;
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