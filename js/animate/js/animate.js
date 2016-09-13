
function animate(opts) {
    'use strict'

    let start = new Date

    let id = setInterval( ()=> {
        let timePassed = new Date - start;
        let progress = timePassed / opts.duration;

        if (progress > 1) progress = 1;

        let delta = opts.delta(progress);
        opts.step(delta);

        if (progress == 1) {
            clearInterval(id);
        }


    }, opts.delay || 10)
}