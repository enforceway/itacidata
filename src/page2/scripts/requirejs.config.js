require.config({
    baseUrl: './',
    paths: {
        'aci-map-world': '../vcomponents/aci-map-world',
        'aci-date-picker': '../vcomponents/aci-date-picker',
        'aci-echart-bid': '../vcomponents/aci-echart-bid',
        'aci-search-range': '../vcomponents/aci-search-range',
        'aci-echart-richlegend': '../vcomponents/aci-echart-richlegend',
    },
    map: {
        '*': {
            css: '../../node_modules/require-css/css'
        }
    }
    // name: 'main'
});