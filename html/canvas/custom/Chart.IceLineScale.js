/**
 * 自定义坐标轴
 * 2016-04-08 10:45:59
 */


(function() {
    'use strict';

    var root = this,
        Chart = root.Chart,
        helpers = Chart.helpers;

    // 缓存坐标数据
    var cache;

    Chart.IceLineScale = Chart.Scale.extend({

        fit: function() {
            Chart.Scale.prototype.fit.apply(this, arguments);

            // 坐标轴需要更新的时候，清除缓存
            cache = null;
        },

        draw: function(ease) {
            var canvas = this.ctx.canvas;

            if (cache) {
                this.ctx.putImageData(cache, 0, 0);
                return false;
            }

            console.log(this);
            Chart.Scale.prototype.draw.apply(this, arguments);
            cache = this.ctx.getImageData(0, 0, canvas.width, canvas.height);
        }

    });

}).call(this);

