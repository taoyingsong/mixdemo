// JavaScript Document
$(function(){
		
	$('.operate .more').click(function(){
		$(this).find('.PaymentRight').slideToggle();
	});
	$('.btn_delremark').click(function(){
		orderid = $(this).prev().val();
		window.location.href = "/jiuyi/personalCenter/deletePJ.do?orderserial="+orderid;
	});
});