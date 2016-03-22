// JavaScript Document
$(function(){
	var _height=$(window).height();
	$('.sideslip').css('height',_height);

	$('.shoppingCart .inpu_checkbox').find('font').addClass('active').attr('checked',true);
	$('.checkBox').find('font').addClass('active');
	
	var allCount = 0;
	$('.shopText').each(function(i,n){
	     var objPrice = $(n).find("font[class*='red']").html();
	     var objCount = $(n).find("input[class*='text']").val();
	     allCount = allCount + objPrice * objCount;
	});
	$("#price").html("￥"+allCount);

	//导航切换
	$('#header_bar li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var _aIndex=$(this).index();
		window.location.href = "/jiuyi/shoppingCenter/index.do?aIndex="+_aIndex;
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
	
	allCount = 0;
	$('.checkBox').find("font[class*='active']").each(function(i,n){
	     var objPrice = $(n).parent().parent().parent().find("font[class*='red']").html();
	     var objCount = $(n).parent().parent().parent().find("input[class*='text']").val();
	     allCount = allCount + objPrice * objCount;
	});
	$("#price").html("￥"+allCount);
	
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
	allCount = 0;
	$('.checkBox').find("font[class*='active']").each(function(i,n){
	     var objPrice = $(n).parent().parent().parent().find("font[class*='red']").html();
	     var objCount = $(n).parent().parent().parent().find("input[class*='text']").val();
	     allCount = allCount + objPrice * objCount;
	});
	$("#price").html("￥"+allCount);
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
	
	allCount = 0;
	$('.checkBox').find("font[class*='active']").each(function(i,n){
	     var objPrice = $(n).parent().parent().parent().find("font[class*='red']").html();
	     var objCount = $(n).parent().parent().parent().find("input[class*='text']").val();
	     allCount = allCount + objPrice * objCount;
	});
	$("#price").html("￥"+allCount);
}

function plus(obj){
	var _this = $("#"+obj.id);
	var val=_this.prev().val()*1;
	var maxNum = _this.prev().data('max');
	if(val<maxNum){
		_this.prev().val(val+1);
	}
	
	allCount = 0;
	$('.checkBox').find("font[class*='active']").each(function(i,n){
	     var objPrice = $(n).parent().parent().parent().find("font[class*='red']").html();
	     var objCount = $(n).parent().parent().parent().find("input[class*='text']").val();
	     allCount = allCount + objPrice * objCount;
	});
	$("#price").html("￥"+allCount);
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
	
	allCount = 0;
	$('.checkBox').find("font[class*='active']").each(function(i,n){
	     var objPrice = $(n).parent().parent().parent().find("font[class*='red']").html();
	     var objCount = $(n).parent().parent().parent().find("input[class*='text']").val();
	     allCount = allCount + objPrice * objCount;
	});
	$("#price").html("￥"+allCount);
});


function search(){
	window.location.href="/jiuyi/shoppingCenter/findSearch.do";
}

function shopcar(){
	var _h=$('#shopcar').height();
	$('#shopcar').css('margin-top',-_h/2+'px');
	$('#shopcar').show();
	$('.mask').show();
}

$('.Btnsj').click(function(){
	$(this).parents('.shengji').hide();
	$('.mask').hide();
});

$(".content_button").click(function(){
	var objString = $(".shoppingCartBottom").find('font').html()+"";
	var objLength = objString.length;
	objString = objString.substring(1,objLength);
	if(objString==0){
		shopcar();
		return;
	}
	var _value = "";
	var _count = "";
	$('.checkBox').find("font[class*='active']").next().each(function(i,n){
	     var obj = $(n);
	     var objCount = $(n).parent().parent().parent().find("input[class*='text']").val();
	     _value = _value + obj.val() +",";
	     _count = _count + objCount + ",";
	});
	_value = _value.substring(0,_value.length-1);
	_count = _count.substring(0,_count.length-1);
	var amount = $("#price").html()+"";
	var amountLength = amount.length;
	amount = amount.substring(1,amountLength);
	window.location.href = "/jiuyi/orderModule/findFillOrder.do?productid="+_value+"&count="+_count+"&amount="+amount+"&flag=1";

});

$(".a_collect").click(function(){
	var _value = "";
	$('.checkBox').find("font[class*='active']").next().each(function(i,n){
	     var obj = $(n);
	     _value = _value + obj.val() +",";
	});
	_value = _value.substring(0,_value.length-1);
	
	$.ajax({
        type: 'post',
        url: '/jiuyi/shoppingCenter/saveSC.do',
        data: {
        	productid:_value
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
});