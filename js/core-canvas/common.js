function drawGrid(ctx, color, stepx, stepy) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;

    for (var i = stepx + 0.5; i < ctx.canvas.width; i+=stepx) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, ctx.canvas.height);
        ctx.stroke();
    }

    for(var i =  stepy + 0.5; i < ctx.canvas.height; i+=stepy) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(ctx.canvas.width, i);
        ctx.stroke();
    }
    ctx.restore();

}