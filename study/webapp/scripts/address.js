// JavaScript Document
$(function(){
	//复选			
	$('.inpu_checkbox').bind('click',function(){
		var _this =$(this).find('font');
		var addressid = _this.next().val();
		if(_this.hasClass('active')){
			_this.removeClass('active');
			$.ajax({
		        type: 'post',
		        url: '/jiuyi/personalCenter/setDefault.do',
		        async: false,
		        data:{
		        	addressid:addressid,
		        	flag:"0"
		        },
		        dataType:"json",
		        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
		        success: function(data) {
		        	if(data=="error"){
		        		window.location.href = "/jiuyi/loginRegister/loginPage.do";
		        	}
		        },
		        err: function() {}
			});
		}
		else
		{
			$('font').removeClass('active');
			_this.addClass('active');
			$.ajax({
		        type: 'post',
		        url: '/jiuyi/personalCenter/setDefault.do',
		        async: false,
		        data:{
		        	addressid:addressid,
		        	flag:"1"
		        },
		        dataType:"json",
		        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
		        success: function(data) {
		        	if(data=="error"){
		        		window.location.href = "/jiuyi/loginRegister/loginPage.do";
		        	}
		        },
		        err: function() {}
			});
		}
		return false;
	});
	
	//导航
	$('.operate .more').click(function(){
		$(this).find('.PaymentRight').slideToggle();
	});

	
});