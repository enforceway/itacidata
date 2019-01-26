var reg = /(localhost)|(127\.0\.0\.1)/g;
var body = document.querySelector('body');
var script = document.createElement('script');
var ifDev = reg.test(window.location.href);
ifDev = false;
if(ifDev === true) {
    var scriptCfg = document.createElement('script');
    scriptCfg.src = "./scripts/requirejs.config.js";
    document.body.appendChild(scriptCfg);
    script.src = './scripts/main.js';
} else {
    script.src = './build/main-built.js';
}
document.body.appendChild(script);
