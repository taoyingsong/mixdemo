// JavaScript Document
$(function(){
	$('.list').click(function(){
		$(this).find('.orderInfo').slideToggle();
	});
	
	$('.operate .more').click(function(){
		$(this).find('.PaymentRight').slideToggle();
	});
	
	$('.orderInfo p').click(function(){
		window.location.href="/jiuyi/personalCenter/queryOrder.do?index="+$(this).next().val();
	});
});

function shouhuo(orderserial){
	$.ajax({
        type: 'post',
        url: '/jiuyi/personalCenter/updateOrderInfo.do',
        data: {
        	orderserial:orderserial,
        	orderstatus:'4'
        },
        async: false,
        dataType:"json",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        success: function(data) {
        	window.location.href="/jiuyi/personalCenter/queryOrder.do?index=3";
        },
        err: function() {}
    });
}