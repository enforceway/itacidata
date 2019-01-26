require.config({
    baseUrl: './',
    // name: 'main'
});

require([
    'scripts/one',
    'scripts/two',
    'scripts/three'
], function(one, two, three) {
    debugger;
    document.querySelector('#name-container').innerHTML = "this is a wonderfull world.";
});
