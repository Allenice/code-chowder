onmessage = function(e) {
    console.time('worker');
    var data = e.data[0],
        len = e.data[1];

    result = data.filter(function(item) {
        return item.id === len / 2;
    });
    console.timeEnd('worker');

    postMessage(result);
} 