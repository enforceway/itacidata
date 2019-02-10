define([
    'https://cdn.bootcss.com/echarts/3.8.5/echarts.js'
], function(echarts) {
    function debounce(fn, time) {
        var handler = null;
        var startTime = null;
        return function() {
            var self = this;
            startTime = +new Date();
            window.clearTimeout(handler);
            handler = setTimeout(function() {
                var endTime = +new Date();
                if((endTime - startTime) > time) {
                    fn.call(self);
                }
            }, time);
        };
    };
    // console.log('echarts:',echarts);
    Vue.component('aci-echart-bid', {
        template: '<div class="aci-echart-bid">'
        + '<div ref="inst" style="width: 100%; height: 100%;"></div>'
        + '</div>',
        props: ['option', 'ginstance'],
        data: function() {
            return {
                einstance: null,
                styleTmpl: '.aci-echart-bid {width: 100%; height: 100%;min-height: 10vmin;}'
            };
        },
        mounted: function() {
            if(Object.prototype.toString.call(this.option) != '[object Object]') {
                throw new Error('option属性不是结构正确object类型');
            }
            var instance = echarts.init(this.$refs.inst);
            this.einstance = instance;
            instance.setOption(this.option);

            if(this.ginstance) {
                this.ginstance(instance);
            }
            window.addEventListener('resize', debounce(function() {
                if(instance) {
                    instance.resize();
                }
            }, 400));
        },
        created: function() {
            var style = document.createElement('style');
            style.setAttribute('type', 'text/css');
            style.innerHTML = this.styleTmpl;
            document.head.appendChild(style);
        },
        watch: {
            'option': {
                deep: true,
                handler: debounce(function() {
                    console.log(this.einstance);
                    // this.einstance.setOption();
                }, 300)
            },
            'option.update': function(nValue, oValue) {

                
            }
        }
    });
});