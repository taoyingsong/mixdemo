$(".black").click(function(){
	history.go(-1);
});


function gwc_a(){
	$.ajax({
        type: 'post',
        url: '/jiuyi/shoppingCenter/check.do',
        async: false,
        dataType:"json",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        success: function(data) {
            if (data == '1') {
            	window.location.href = "/jiuyi/loginRegister/loginPage.do";
            }else{
            	window.location.href = "/jiuyi/shoppingCenter/findTempInfo.do";
            }
        },
        err: function() {}
    });
}