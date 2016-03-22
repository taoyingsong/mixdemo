define(['jquery'], function ($) {



	// 首先创建构造函数，和普通函数的区别是首字母大写
	function ScrollTo(opts) {

		// 将用户传递的参数opts覆盖我们默认的参数ScrollTo.DEFAULTS生成一个新的对象{},然后将新的对象返回
		// jqAPI 说明：合并两个或多个对象的内容一起放入第一个对象。
		this.opts = $.extend({}, ScrollTo.DEFAULTS, opts);

		// 局部变量对重复或者说复杂变量的缓存
		// 大部分浏览器滚动条位于html上, 但是chrome位于body上，所以同时选中保证兼容性
		this.$el = $('html, body');
	}	



	//延迟到达顶部
	//这里我们将所有的方法添加到构造函数的原型上，这样可以使内存中只保留一份所有的方法，比较经济
	ScrollTo.prototype.move = function () {

		//局部变量对重复或者说复杂变量的缓存
		var opts = this.opts,
			dest = opts.dest;

		//不在顶部且动画没有正在执行才会触发动画
		if ($(window).scrollTop() != dest) {
			if (!this.$el.is(':animated')) {
				this.$el.animate({
					scrollTop: dest
				}, opts.speed);
			}
		}
	}

	//一下就到顶部了
	ScrollTo.prototype.go = function () {
		var dest = this.opts.dest;
		if ($(window).scrollTop() != dest) {
			this.$el.scrollTop(dest);
		}
	}

	

	// 如果将下边的默认值定义在ScrollTo中,我们的每一个实例中都会有这样一个私有的变量，这样其实是一种浪费
	// 所以这里直接写在构造函数上,这其实形成了一个静态的属性
	ScrollTo.DEFAULTS = {
		dest: 0,
		speed: 800
	};

	return {
		ScrollTo: ScrollTo
	}
});