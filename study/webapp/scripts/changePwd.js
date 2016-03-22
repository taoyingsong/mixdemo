//导航
$('.operate .more').click(function(){
	$(this).find('.PaymentRight').slideToggle();
});

$('.addMBottom').click(function(){
	var orignalPwd = $("#orignalPwd").val();
	var newPwd1 = $("#newPwd1").val();
	var newPwd2 = $("#newPwd2").val();
	
	if(newPwd1!=newPwd2){
		mima();
		$("#newPwd1").val("");
		$("#newPwd2").val("");
	}
	
	$.ajax({
        type: 'post',
        url: '/jiuyi/personalCenter/resetPwd.do',
        data: {
        	oldpwd:orignalPwd,
        	pwd:newPwd1
        },
        async: false,
        dataType:"json",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        success: function(data) {
            if (data.message == "success") {
            	mimac();
            } else{
            	mimae();
            	window.location.href = "/jiuyi/loginRegister/login.do";
            } 
            $('.LoginOpera div input').val("");
        },
        err: function() {}
    });
});

function mima(){
	var _h=$('#mima').height();
	$('#mima').css('margin-top',-_h/2+'px');
	$('#mima').show();
	$('.mask').show();
}

function mimac(){
	var _h=$('#mimac').height();
	$('#mimac').css('margin-top',-_h/2+'px');
	$('#mimac').show();
	$('.mask').show();
}

function mimae(){
	var _h=$('#mimae').height();
	$('#mimae').css('margin-top',-_h/2+'px');
	$('#mimae').show();
	$('.mask').show();
}

$('.Btnsj').click(function(){
	$(this).parents('.shengji').hide();
	$('.mask').hide();
});