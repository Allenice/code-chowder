var style = require('./style.css');
var content = require('./content.js');

document.write('<div class="'+ style.header +'">'+ content +'</div>');

console.log(style);

var btnShow = document.getElementById('btn-show'),
    btnHide = document.getElementById('btn-hide'),
    pop = document.getElementById('pop');

btnShow.onclick = function() {
    pop.style.display = 'block';
}

btnHide.onclick = function() {
    pop.style.display = 'none';
}