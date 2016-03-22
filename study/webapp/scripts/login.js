function hide(){
	$('.waitLogin').hide();
	$('.mask').hide();
}


$("input").focus(function(){
	$('.tips').css({'display':'none'});
});

function login(){
	$('.tips').css({'display':'none'});
	var obj_name = $("#username");
	var obj_pwd = $("#userpwd");
	
	if(obj_name.val()==""){
		var navH = obj_name.position().top;
		var navL = obj_name.position().left; 
		obj_name.next().css({"top":(navH-10)+'px',"left":(navL+100)+'px',"display":""});
		obj_name.next().find('span').html("用户名不能为空！");
		return ;
	}
	
	 var regName = /^(((13[0-9]{1})|159|153)+\d{8})$/;
     if(!regName.test(obj_name.val())) {
        var navH = obj_name.position().top;
 		var navL = obj_name.position().left; 
 		obj_name.next().css({"top":(navH-10)+'px',"left":(navL+100)+'px',"display":""});
 		obj_name.next().find('span').html("请输入有效的手机号码！")
 		return ;
     }
	
     if(obj_pwd.val()==""){
 		var navH = obj_pwd.position().top;
 		var navL = obj_pwd.position().left; 
 		obj_pwd.next().css({"top":(navH-10)+'px',"left":(navL+100)+'px',"display":""});
 		obj_pwd.next().find('span').html("密码不能为空！")
 		return ;
 	 }
     
     var regPwd = /^[0-9a-zA-Z_]{6,18}$/;
     if(!regPwd.test(obj_pwd.val())) {
        var navH = obj_pwd.position().top;
 		var navL = obj_pwd.position().left; 
 		obj_pwd.next().css({"top":(navH-10)+'px',"left":(navL+100)+'px',"display":""});
 		obj_pwd.next().find('span').html("只能包含数字、字符，长度6~18！")
 		return ;
     }
   
	$.ajax({
        type: 'post',
        url: '/jiuyi/loginRegister/login.do',
        data: {
        	username:obj_name.val(),
        	password:obj_pwd.val()
        },
        async: false,
        dataType:"json",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        beforeSend: function(XMLHttpRequest){
        	$('.waitLogin').show();
        	setTimeout("hide()",3000);
		},
        success: function(data) {
            if (data.data == '1') {
            	$('.waitLogin').hide();
            	var navH = obj_pwd.position().top;
         		var navL = obj_pwd.position().left; 
         		obj_pwd.next().css({"top":(navH-10)+'px',"left":(navL+100)+'px',"display":""});
         		obj_pwd.next().find('span').html("用户名和密码不匹配！")
            } else if (data.data == '2') {
                window.location.href = "/jiuyi/loginRegister/home.do";
            } 
        },
        complete: function(XMLHttpRequest, textStatus){
		},
        err: function() {}
    });
}

