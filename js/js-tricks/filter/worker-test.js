onmessage = function(e) {
    var len = e.data;
    var data = [];

    for(var i = 0; i < len; i++) {
        data.push(i);
    }

    postMessage(data);
}