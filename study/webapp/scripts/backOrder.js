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