// JavaScript Document
$(function(){
	var _height=$(window).height();
	$('.sideslip').css('height',_height);
	//复选			
	$('.inpu_checkbox').bind('click',function(){
		var _this =$(this).find('font');
		if(_this.hasClass('active')){
			_this.removeClass('active').find('input').removeAttr('checked');
		}
		else
		{
			_this.addClass('active').find('input').attr('checked',true);
		}
		return false;
	});
	//全选和全不选
	$('.shoppingCart .inpu_checkbox').click(function(){
		var _this=$(this).find('font');
		if(_this.hasClass('active')){
			_this.parents('.step').find('font').each(function() {
              $(this).addClass('active').attr('checked',true);
            });
		}else{
			_this.parents('.step').find('font').each(function() {
              $(this).removeClass('active').removeAttr('checked');
            });
		}
	});
	
	$('.shopOpre .inpu_checkbox').click(function(){
		var _this=$(this).find('font');
		var _aNum=0;
		var _aTotal=$('.step').find('.shopOpre').length;
		$('.step .shopOpre').each(function() {
            if($(this).find('font').hasClass('active')){
			_aNum++;
			}
        });
		if(_aNum ==_aTotal){
			_this.parents('.cartCon').prevAll('.shoppingCart').find('font').addClass('active').attr('checked',true);
		}
		else{
			_this.parents('.cartCon').prevAll('.shoppingCart').find('font').removeClass('active').removeAttr('checked');
		}
		
	});
	
	//导航切换
	$('#header_bar li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var _aIndex=$(this).index();
		if(_aIndex==2){
			
		}
		$('.page_content .step').eq(_aIndex).show().siblings().hide();
	});
	
	//侧导航
	$('.Login').click(function(){
		$('.mask').toggle();
		$(this).next('.sideslip').animate({left:0, opacity: 'show'
},300);
	});
	$('.mask').click(function(){
		$('.mask').hide();
		$(this).prev('.sideslip').animate({left:-24.4+'rem', opacity: 'hide'
},300);
		
	});
	
	$('.list').click(function(){
		$(this).find('.Payment').slideToggle();
	});
	
	//商品详情购物车
	$('.basicInfo dd').click(function(){
		var _this=$(this);
		var _anum=_this.index();
		_this.addClass('active').siblings().removeClass('active');
		_this.parents('dl').next('.total').find('.hide').eq(_anum).show().siblings().hide();
		_this.parents('dl').next('div').find('.hide').eq(_anum).show().siblings().hide();
		//alert(_this.parents('dl').next('div').find('.hide').eq(_anum).html());
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
	$note.show().find('em').text(note);
	s_a_r($a,'disabled');
}
//隐藏提示信息
function hideNote(){
	$note.hide();
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
	//$(this).val(val);
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
//alert(navH);
var scroH = $(window).scrollTop()-100;
//alert(scroH)

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

$('.operate .more').click(function(){
	$(this).find('.PaymentRight').slideToggle();
});


});
//显示3秒后隐藏的方法
function hide(){
	$('.waitLogin').hide();
	$('.mask').hide();
}
	//登陆成功等待
$('.addAddress_a').click(function(){
	
	$('.waitLogin').show();
	setTimeout("hide()",3000);//3秒
});

//更新
$('.update').click(function(){
		
		var _h=$('.upgrade').height();
		$('.upgrade').css('margin-top',-_h/2+'px');
		$('.upgrade').show();
		$('.mask').show();
	});
$('.Btnagin').click(function(){
	$(this).parents('.upgrade').hide();
	$('.mask').hide();
});
$(function(){
//分享
$('.fx').click(function(){
	$(this).addClass('active');
});


});