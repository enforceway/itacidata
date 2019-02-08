define([
    'https://cdn.bootcss.com/echarts/3.8.5/echarts.js'
], function(echarts) {
    // console.log('echarts:',echarts);
    Vue.component('aci-echart-bid', {
        template: '<div class="aci-echart-bid">'
        + '<div ref="inst" style="width: 100%; height: 100%;"></div>'
        + '</div>',
        props: ['option', 'ginstance'],
        data: function() {
            return {
                styleTmpl: '.aci-echart-bid {width: 100%; height: 100%;min-height: 10vmin;}'
            };
        },
        mounted: function() {
            // console.log('mounted:', this.$refs.inst);
            if(Object.prototype.toString.call(this.option) != '[object Object]') {
                throw new Error('option属性不是结构正确object类型');
            }
            var instance = echarts.init(this.$refs.inst);
            instance.setOption(this.option);

            if(this.ginstance) {
                this.ginstance(instance);
            }
        },
        created: function() {
            this.styleTmpl;
            var style = document.createElement('style');
            style.setAttribute('type', 'text/css');
            style.innerHTML = this.styleTmpl;
            document.head.appendChild(style)
        }
    });
});