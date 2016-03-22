requirejs.config({
	paths: {
		jquery: 'jquery-1.11.3'
	}
});

// requirejs(['jquery', 'scrollto'], function ($, scrollto) {
// 	// $('body').css('background-color', 'red');
// 	// console.log(validate.isEqual(1, 1));



// 	//使用模块前需要先实例化一下

// 	//使用默认参数
// 	var scroll = new scrollto.ScrollTo({}); 
// 	//使用自定义参数
// 	var scroll = new scrollto.ScrollTo({
// 		dest: 500,
// 		speed: 2000
// 	}); 



// 	//直接写scroll.move指向的是前边的#backTop，proxy处理后指向的为scroll实例
// 	$('#backTop').on('click', $.proxy(scroll.move, scroll));
// 	// $('#backTop').on('click', $.proxy(scroll.go, scroll));

// 	//监听滚动
// 	$(window).on('scroll', function() {
// 		checkPosition($(window).height());
// 	});

// 	//加载时执行一次
// 	checkPosition($(window).height());

// 	//延迟到达顶部
// 	function move() {
// 		//  大部分浏览器滚动条位于html上, 但是chrome位于body上，所以同时选中保证兼容性
// 		$('html, body').animate({
// 			 scrollTop: 0
// 		}, 800);
// 	}

// 	//一下就到顶部了
// 	function go() {
// 		$('html, body').scrollTop(0);	
// 	}
// 	function checkPosition(pos) {
// 		if($(window).scrollTop() > pos) {
// 			$('#backTop').fadeIn();
// 		}
// 		else {
// 			$('#backTop').fadeOut();
// 		}
// 	}
// });

requirejs(['jquery', 'backtop'], function ($, backtop) {
	//// 调用模块写法
	// new backtop.BackTop($('#backTop'), {
	// 	mode: 'go'
	// });

	//插件写法
	$('#backTop').backtop({
		mode: 'move'
	});
});