// JavaScript Document
$(function(){
	$('.list').click(function(){
		$(this).find('.orderInfo').slideToggle();
	});
	
	$('.operate .more').click(function(){
		$(this).find('.PaymentRight').slideToggle();
	});
	
	$('.orderInfo p').click(function(){
		window.location.href="/jiuyi/shoppingCenter/recommend.do?index="+$(this).next().val();
	});
});