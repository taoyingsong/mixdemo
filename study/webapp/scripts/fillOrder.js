// JavaScript Document
$(function(){

	$('.operate .more').click(function(){
		$(this).find('.PaymentRight').slideToggle();
	});
	
});

function update(){
	var _h=$('.upgrade').height();
	$('.upgrade').css('margin-top',-_h/2+'px');
	$('.upgrade').show();
	$('.mask').show();
}

$('.doneOrder').click(function(){
	$(this).parents('.upgrade').hide();
	$('.mask').hide();
	window.location.href = "/jiuyi/personalCenter/queryOrder.do?index=0";
});

$('.doneOrder').click(function(){
	$(this).parents('.upgrade').hide();
	$('.mask').hide();
	window.location.href = "/jiuyi/personalCenter/queryOrder.do?index=0";
});


$('.fillAdd').click(function(){
	$(this).parents('#add_d').hide();
	$('.mask').hide();
});

function add_a(){
	var _h=$('#add_d').height();
	$('#add_d').css('margin-top',-_h/2+'px');
	$('#add_d').show();
	$('.mask').show();
}

$(".content_button").click(function(){
	var add_h = $("#add_h").val();
	if(add_h==0){
		add_a();
		return;
	}
	var _id = "";
	var _count = "";
	$('.shopText').each(function(i,n){
	     var objpid = $(n).find("input[class*='hidden_pid']").val();
	     var objpcount = $(n).find("input[class*='hidden_pcount']").val();
	     _id = _id + objpid +",";
	     _count = _count + objpcount + ",";
	});
	_id = _id.substring(0,_id.length-1);
	_count = _count.substring(0,_count.length-1);
	
	var amount = $("#p_amount").html()+"";
	amount = amount.substring(1,amount.length);
	var flag = $("#hidden_flag").val();
	$.ajax({
        type: 'post',
        url: '/jiuyi/orderModule/saveOrder.do',
        data: {
        	productid:_id,
        	count:_count,
        	amount:amount,
        	flag:flag
        },
        async: false,
        dataType:"json",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        success: function(data) {
            if (data != 'error') {
            	update();
            } else if (data == '2') {
            	alert("生成订单失败，请重新生成！");
            } else{
            	window.location.href = "/jiuyi/loginRegister/loginPage.do";
            }
        },
        err: function() {}
    });
});