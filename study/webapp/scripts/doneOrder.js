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
	
	$(".btn_remark").click(function(){
		var hid_serial = $(this).parent().find("input[type='hidden']").val();
		window.location.href = "/jiuyi/personalCenter/queryOrderRemark.do?orderserial="+hid_serial;
	});
});