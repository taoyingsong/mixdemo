function login(){
	var name = $("#username").val();
	var password = $("#userpsw").val();
	var rand = $("#userrank").val();
	if(name==""){
		alert("用户名不能为空！！");
		return ;
	}
	if(password==""){
		alert("密码不能为空！！");
		return ;
	}
	if(rand == ""){
		alert("请输入验证码");
		return;
	}
	
	$.ajax({
        type: 'post',
        url: '/app/back/check',
        data: {
        	username:name,
        	userpwd:password,
        	userrand:rand
        },
        async: false,
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        success: function(data) {
            if (data == '1') {
                alert("验证码不一致");
                changeRand();
            } else if (data == '2') {
                alert("用户名和密码不匹配");
                changeRand();
            } else if (data == '3') {
            	$("#userLogin").attr("action","/app/back/login").submit();
            } 
        },
        err: function() {}
    });
}

function logout(){
	$("#userLogout").attr("action","/app/back/logout").submit();
	window.parent.location.reload();
}
function changeRand() {
    $("#randImage").attr("src", "/app/CreateImage?next=" + Math.random());
}