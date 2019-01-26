define(function() {
    Vue.component('aci-date-picker', {
        data: function () {
            return {
                count: 0
            }
        },
        template: '<div class="aci-date-picker">aci-date-picker</div>',
        mounted: function() {
            console.log('mounted');
        },
        created: function() {
            console.log('created');
        }
    });
});
