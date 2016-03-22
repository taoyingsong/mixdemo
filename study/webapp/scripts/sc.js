// JavaScript Document
$(function(){
	
	$('.operate .more').click(function(){
		$(this).find('.PaymentRight').slideToggle();
	});
	
	$('.btn_delremark').click(function(){
		var productid = $(this).prev().val();
		window.location.href = "/jiuyi/personalCenter/deleteSC.do?productid="+productid;
	});
});