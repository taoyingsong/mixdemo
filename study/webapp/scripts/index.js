// JavaScript Document

$(function(){
	var num = $("#num").val();
	var temp = $("#temp").val();

	if(num==3){
		$('.mask').toggle();
		$('.Login').next('.sideslip').animate({left:0, opacity: 'show'},300);
	}else{
		$('#header_bar li').eq(num).addClass('active').siblings().removeClass('active');
		$('.page_content .step').eq(num).show().siblings().hide();
	}
	
	
	var _height=$(window).height();
	$('.sideslip').css('height',_height);
	
	//导航切换
	$('#header_bar li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var _aIndex=$(this).index();
		if(_aIndex==2){
			
			$.ajax({
		        type: 'post',
		        url: '/jiuyi/shoppingCenter/check.do',
		        async: false,
		        dataType:"json",
		        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
		        success: function(data) {
		            if (data == '1') {
		            	window.location.href = "/jiuyi/loginRegister/loginPage.do";
		            }else{
		            	window.location.href = "/jiuyi/shoppingCenter/findTempInfo.do";
		            }
		        },
		        err: function() {}
		    });
		}else{
			$('.page_content .step').eq(_aIndex).show().siblings().hide();
		}
	});
	
	//侧导航
	$('.Login').click(function(){
		$('.mask').toggle();
		$(this).next('.sideslip').animate({left:0, opacity: 'show'},300);
	});
	$('.mask').click(function(){
		$('.mask').hide();
		$(this).prev('.sideslip').animate({left:-24.4+'rem', opacity: 'hide'},300);
	});
	

	$('.noBj li').click(function(){
		var _index = $(this).index();
		window.location.href="/jiuyi/shoppingCenter/recommend.do?index="+_index;
	});

});

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

//分享
$('.a_delete').click(function(){
	$('.mask_share').show();
	$('.sharemask').animate({bottom:0, opacity: 'show'},300);
});
$('.sharemask .a_qxs').click(function(){
	$('.mask_share').hide();
	$(this).parents('.sharemask').animate({bottom:-10+'rem', opacity: 'hide'},300);
});
$('.a_collect').click(function(){
	$(this).addClass('active');
});


//购物计数器
var $text=$('.text');
	
function minus(obj){
	var _this = $("#"+obj.id);
	var val=_this.next().val()*1;
	var minNum = _this.next().data('min');
	if(val>minNum){
		_this.next().val(val-1);
	}
}

function plus(obj){
	var _this = $("#"+obj.id);
	var val=_this.prev().val()*1;
	var maxNum = _this.prev().data('max');
	if(val<maxNum){
		_this.prev().val(val+1);
	}
}

$text.keyup(function(){
	var val=$(this).val().replace(/[^\d]/g,'');
	var minNum = $(this).data('min');
	var maxNum = $(this).data('max');
	if(val<=minNum){
		$(this).val(minNum);
	}else if(val>=maxNum){
		$(this).val(maxNum);
	}
});


function search(){
	window.location.href="/jiuyi/shoppingCenter/findSearch.do";
}