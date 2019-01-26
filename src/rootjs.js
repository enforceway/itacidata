var reg = /(localhost)|(127\.0\.0\.1)/g;
var body = document.querySelector('body');
var script = document.createElement('script');
if(reg.test(window.location.href)) {
    script.src = './scripts/main.js';
} else {
    script.src = './scripts/main-built.js';
}
script.src = './foo.js';
document.body.appendChild(script);