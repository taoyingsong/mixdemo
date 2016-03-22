$("input").focus(function(){
	$('.tips').css({'display':'none'});
});

function register(){
	$('.tips').css({'display':'none'});
	var obj_name = $("#username");
	var obj_pwd1 = $("#userpwd_1");
	var obj_pwd2 = $("#userpwd_2");
	var obj_tel = $("#telphone");
	
	if(obj_name.val()==""){
		var navH = obj_name.position().top;
		var navL = obj_name.position().left; 
		obj_name.next().css({"top":(navH-10)+'px',"left":(navL+120)+'px',"display":""});
		obj_name.next().find('span').html("用户名不能为空！");
		return ;
	}
	
	var regName = /^(((13[0-9]{1})|159|153)+\d{8})$/;
    if(!regName.test(obj_name.val())) {
       var navH = obj_name.position().top;
		var navL = obj_name.position().left; 
		obj_name.next().css({"top":(navH-10)+'px',"left":(navL+120)+'px',"display":""});
		obj_name.next().find('span').html("请输入有效的手机号码！")
		return ;
    }
    
	if(obj_pwd1.val()==""){
		var navH = obj_pwd1.position().top;
 		var navL = obj_pwd1.position().left; 
 		obj_pwd1.next().css({"top":(navH-10)+'px',"left":(navL+120)+'px',"display":""});
 		obj_pwd1.next().find('span').html("密码不能为空！")
 		return ;
	}
	
	var regPwd = /^[0-9a-zA-Z_]{6,18}$/;
    if(!regPwd.test(obj_pwd1.val())) {
       var navH = obj_pwd1.position().top;
		var navL = obj_pwd1.position().left; 
		obj_pwd1.next().css({"top":(navH-10)+'px',"left":(navL+120)+'px',"display":""});
		obj_pwd1.next().find('span').html("只能包含数字、字符，长度6~18！")
		return ;
    }
    
    if(obj_pwd2.val()==""){
		var navH = obj_pwd2.position().top;
 		var navL = obj_pwd2.position().left; 
 		obj_pwd2.next().css({"top":(navH-10)+'px',"left":(navL+120)+'px',"display":""});
 		obj_pwd2.next().find('span').html("确认密码不能为空！")
 		return ;
	}
	
	var regPwd = /^[0-9a-zA-Z_]{6,18}$/;
    if(!regPwd.test(obj_pwd2.val())) {
       var navH = obj_pwd2.position().top;
		var navL = obj_pwd2.position().left; 
		obj_pwd2.next().css({"top":(navH-10)+'px',"left":(navL+120)+'px',"display":""});
		obj_pwd2.next().find('span').html("只能包含数字、字符，长度6~18！")
		return ;
    }
    
	
	if(obj_pwd1.val()!=obj_pwd2.val()){
		var navH = obj_pwd2.position().top;
		var navL = obj_pwd2.position().left; 
		obj_pwd2.next().css({"top":(navH-10)+'px',"left":(navL+120)+'px',"display":""});
		obj_pwd2.next().find('span').html("两次输入的密码不一致！")
		return ;
	}
	$.ajax({
        type: 'post',
        url: '/jiuyi/loginRegister/checkName.do',
        data: {
        	username:obj_name.val(),
        	userpwd:obj_pwd1.val(),
        	telphone:obj_tel.val()
        },
        async: false,
        dataType:"json",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        success: function(data) {
        	if(data.code==0){
        		alert("注册失败！");
        	}else{
        		if (data.data == '1') {
                	var navH = obj_name.position().top;
            		var navL = obj_name.position().left; 
            		obj_name.next().css({"top":(navH-10)+'px',"left":(navL+120)+'px',"display":""});
            		obj_name.next().find('span').html("用户名已存在！")
                } else if (data.data == '2') {
                    window.location.href="/jiuyi/loginRegister/login.do";
                } else if(data.data == '3'){
                	alert("注册失败！");
                }
        	}
        },
        err: function() {}
    });
}

