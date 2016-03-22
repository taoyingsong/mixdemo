// JavaScript Document
$(function(){
	$('.list').click(function(){
		$(this).find('.Payment').slideToggle();
	});
	
	$('.operate .more').click(function(){
		$(this).find('.PaymentRight').slideToggle();
	});
	
	$('.Payment p').click(function(){
		window.location.href="/jiuyi/shoppingCenter/recommend.do?index="+$(this).next().val();
	});
});