// JavaScript Document
$(function(){
	//商品详情购物车
	$('.basicInfo dd').click(function(){
		var _this=$(this);
		var _anum=_this.index();
		_this.addClass('active').siblings().removeClass('active');
		_this.parents('dl').next('.total').find('.hide').eq(_anum).show().siblings().hide();
		_this.parents('dl').next('div').find('.hide').eq(_anum).show().siblings().hide();
	});
	
	//购物计数器
	var $minus=$('#minus'),
		$plus=$('#plus'),
		$text=$('#text'),
		$note=$('#note'),
		maxNum=$text.data('max'),
		minNum=$text.data('min');
	//显示提示信息
	function showNote(note,$a){
//		$note.show().find('em').text(note);
		s_a_r($a,'disabled');
	}
	//隐藏提示信息
	function hideNote(){
//		$note.hide();
		$('a').removeClass('disabled');
	}		
	function s_a_r(o,c){
		o.addClass(c).siblings().removeClass(c);	
	}		
	$minus.click(function(){
		var val=$text.val()*1;
		if(val>minNum){
			$text.val(val-1);
			hideNote();
		}
		if(val==minNum+1){
			showNote('不能少于'+minNum,$(this));	
		}
	})
	$plus.click(function(){
		var val=$text.val()*1;
		if(val<maxNum){
			$text.val(val+1);
			hideNote();
		}
		if(val==maxNum-1){
			showNote('最大不能超过'+maxNum,$(this));	
		}
	})
	$text.keyup(function(){
		var val=$(this).val().replace(/[^\d]/g,'');

		if(val<=minNum){
			$text.val(minNum);
			$note.show().find('em').text('不能少于'+minNum);
			showNote('不能少于'+minNum,$minus);		
		}else if(val>=maxNum){
			$text.val(maxNum);
			showNote('最大不能超过'+maxNum,$plus);
		}else{
			hideNote();
		}
	});

	//获取要定位元素距离浏览器顶部的距离
	var navH = $(".basicInfo dl").offset().top-150;
	//滚动条事件
	$(window).scroll(function(){
		//获取滚动条的滑动距离
		var scroH = $(window).scrollTop()-100;
		//滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
		if(scroH>navH){
			$(".basicInfo dl").css({"position":"fixed","top":5+'rem'});
		}else if(scroH<navH){
			$(".basicInfo dl").css({"position":"static"});
		}
	
	});



	//分享
	$('.a_oprea a:last').click(function(){
		$('.mask').show();
		$('.share').animate({bottom:0, opacity: 'show'},300);
	});
	$('.share .a_qx').click(function(){
		$('.mask').hide();
		$(this).parents('.share').animate({bottom:-10+'rem', opacity: 'hide'},300);
	});


});

//分享
$('.fx').click(function(){
	$(this).addClass('active');
});
//导航
$('.operate .more').click(function(){
	$(this).find('.PaymentRight').slideToggle();
});

$('.Payment p').click(function(){
	window.location.href="/jiuyi/shoppingCenter/recommend.do?index="+$(this).next().val();
});

$(".btn_jrgwc").click(function(){
	var productid = $("#h_productid").val();
	var count = $("#text").val();
	window.location.href="/jiuyi/shoppingCenter/index.do?num=2&productid="+productid+"&count="+count;
});

$(".a_car").click(function(){
	var productid = $("#h_productid").val();
	var count = $("#text").val();
	window.location.href="/jiuyi/shoppingCenter/index.do?num=2&productid="+productid+"&count="+count;
});

$(".btn_ljgm").click(function(){
	var productid = $("#h_productid").val();
	var count = $("#text").val();
	var amount = $("#price").html()+"";
	var amountLength = amount.length;
	amount = amount.substring(1,amountLength)*count;
	window.location.href = "/jiuyi/orderModule/findFillOrder.do?productid="+productid+"&count="+count+"&amount="+amount+"&flag=0";
	
});

function sc(obj){
	var productid = obj;
	$.ajax({
        type: 'post',
        url: '/jiuyi/shoppingCenter/saveSC.do',
        data: {
        	productid:productid
        },
        async: false,
        dataType:"json",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        success: function(data) {
        	if(data == "1"){
        		window.location.href = "/jiuyi/loginRegister/loginPage.do";
        	}
        },
        err: function() {}
    });
}

