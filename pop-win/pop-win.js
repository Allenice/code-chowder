/**
* 弹窗组件
* @date: 2014-12-03
*/

(function(global) {

	// constructor
	function PopWin(options) {
		this._init(options);
	}

	PopWin.prototype = {
		// 初始化
		_init: function(options) {
			// 默认选项
			var defaultOptions = {
				title: "Title",
				width: 300,
				height: 150,
				content: '',
				className: '',
				zIndex: 1,
				buttons: [
					{
						id: "ok-btn",
						btnText: "确定",
						className: ""
					}
				]
			};

			$.extend(this, defaultOptions, options);

			this._initDom();
			this._bindEvent();
		},

		// dom 初始化
		_initDom: function() {
			// 将 html 加到 dom 中
			this.$mask = $('<div class="pop-win-mask"></div>');
			this.$win = $('<div class="pop-win"></div>');
			this.$winHeader = $('<div class="win-header"></div>');
			this.$winBody = $('<div class="win-body"></div>');
			this.$winFooter = $('<div class="win-footer"></div>');
			this.$winTitle = $('<div class="win-title"></div>');
			this.$closeBtn = $('<div class="win-close-btn"></div>');

			this.$winHeader.append(this.$winTitle, this.$closeBtn);
			this.$winFooter.append(this.$actionBtn);
			this.$win.append(this.$winHeader, this.$winBody, this.$winFooter);
			$('body').append(this.$mask, this.$win);

			// 计算样式
			this._setStyle();

			// 设置自定义项
			this.$winTitle.html(this.title);
			this.$winBody.html(this.content);
			this.$win.addClass(this.className);

			// 底部按钮
			for(var i = 0; i < this.buttons.length; i++) {
				var btn = this.buttons[i],
						$actionBtn = $('<a class="win-action-btn" href="javascript:void(0);"></a>');

				btn.btnText && $actionBtn.text(btn.btnText);
				$actionBtn.addClass(btn.className);
				$actionBtn.data('id', btn.id);
				this.$winFooter.append($actionBtn);
			}
		},

		//绑定内部 dom 事件
		_bindEvent: function() {
			var self = this;
			// 关闭按钮
			this.$closeBtn.on('click', function() {
				self.trigger('close-btn-click');
				self.hide();
			});

			// 底部动作按钮 actoin btn 
			this.$win.find('.win-action-btn').click(function() {
				self.trigger('action-btn-click'+ $(this).data('id'));
			});

			// 当弹窗的高度大于浏览器窗口的高度时，position 设置为 absolute
			$(window).on('resize.pop-win', function() {
				var winHeight = $(window).height();
				if(self.height > winHeight) {
					var top = $(window).scrollTop() + 10;
					self.$win.css({"position": "absolute", "top": top, "margin-top": 0});
				} else {
					self.$win.css({"position": "fixed", "top": "50%", "margin-top": -(self.height / 2)});
				}
			});

			$(window).trigger('resize.pop-win');
		},

		// 设置样式
		_setStyle: function() {
			this.$mask.css({
				"z-index": this.zIndex
			});

			this.$win.css({
				"width": this.width, 
				"height": this.height, 
				"margin-left": - this.width / 2, 
				"margin-top": -this.height / 2, 
				"z-index": this.zIndex + 1
			});
		},

		// 外部调用，监听
		on: function(eventType, selector, callback) {
			if(typeof selector === 'string') {
				eventType += selector;
			} else {
				callback = selector;
			}

			this.$win.on(eventType, $.proxy(callback, this));
		},

		// 触发事件
		trigger: function(eventType) {
			this.$win.trigger(eventType);
		},

		// 设置弹窗内容
		setContent: function(html) {
			this.$winBody.html(html);
		},

		// 设置弹窗高度
		setHeight: function(height) {
			this.height = height;

			this.$win.css({
				"height": this.height, 
				"margin-top": -this.height / 2
			});

			$(window).trigger('resize.pop-win');
			
		},

		// 设置弹窗宽度
		setWidth: function(width) {
			this.width = width;

			this.$win.css({
				"width": this.width, 
				"margin-left": - this.width / 2
			});
		},

		// 显示弹窗
		show: function() {
			this.$mask.show();
			this.$win.show();
			this.trigger('show');
			$(window).trigger('resize.pop-win');
		},

		// 隐藏弹窗
		hide: function() {
			this.$mask.hide();
			this.$win.hide();
			this.trigger('hide');
		}
	}

	global.PopWin = PopWin;
})(window);