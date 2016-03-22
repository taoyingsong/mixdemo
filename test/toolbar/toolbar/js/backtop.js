define(['jquery', 'scrollto'], function ($, scrollto) {
	function BackTop(el, opts) {
		this.opts = $.extend({}, BackTop.DEFAULTS, opts);
		this.$el = $(el);
		this.scroll = new scrollto.ScrollTo({
			dest: 0,
			speed: this.opts.speed
		});

		this._checkPosition();

		//_表示方法仅供内部使用
		if (this.opts.mode == 'move') {
			this.$el.on('click', $.proxy(this._move, this));
		}
		else {
			this.$el.on('click', $.proxy(this._go, this));
		}
		$(window).on('scroll', $.proxy(this._checkPosition, this));
	}



	BackTop.DEFAULTS = {
		//当mode的值为move时，运动这到达顶部；其他值时直接返回顶部
		mode: 'move',
		pos: $(window).height(),
		speed: 800
	}



	BackTop.prototype._move = function () {
		this.scroll.move();
	}
	BackTop.prototype._go = function () {
		this.scroll.go();
	}
	BackTop.prototype._checkPosition = function () {

		//局部变量的访问速度是快于点的
		var $el = this.$el;
		if ($(window).scrollTop() > this.opts.pos) {
			$el.fadeIn();
		}
		else {
			$el.fadeOut();
		}
	}

	$.fn.extend({
		backtop: function (opts) {

			//因为this有可能是多个，所以用循环处理,因为this.each返回的也为this(同下边注掉的)，所以这里直接将其返回即可
			return this.each(function () {
				new BackTop(this, opts);
			});

			//此处this为调用对象$('#backTop')，如果是class可能还会有多个
			// return this;
		}
	});

	return {
		BackTop: BackTop
	};
});
