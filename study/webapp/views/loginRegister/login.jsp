<!DOCTYPE>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
	<title>九易</title>
    <link href="/jiuyi/style/basisStyle.css" rel="stylesheet">
    <link href="/jiuyi/style/valid.css" rel="stylesheet">
</head>

<body>
	<header id="header_bar">
    	<div class="operate">
        	<a href="javascript:void(0);" class="black"></a>
            <span class="list">用户登录
            </span>
            <a href="/jiuyi/loginRegister/register.do" class="a_Login">注册</a>
        </div>	
    </header>
    <article class="page_content">
    	<section class="step1">
        	<div class="LoginOpera">
               	<form id="userLogin" method="post">
	            	<div class="editInput controls">
	                	<i></i>
                		<input type="text" placeholder="手机号码/用户名" id="username" name="username" />
						<div class="tips" style="display:none;"><span></span></div>
	                </div>
               	</form>
	                <div class="editInput">
	                	<i class="ps"></i>
	                	<input type="password" placeholder="密码" id="userpwd" />
	                	<div class="tips" style="display:none;"><span></span></div>
	                </div>
                <div class="login"><a href="javascript:void(0);" class="addAddress_a addMBottom" onclick="login();">登录</a></div>
<!--                 <p align="right" class="L28" ><a href="/jiuyi/loginRegister/forgetPwd" class="a_forget">忘记密码？</a></p> -->
            </div>
            
            <div class="mask"></div>
            <div class="waitLogin"><img src="/jiuyi/image/login.gif">
            	<p>马上登录成功，请稍等~</p>
            </div>
        </section>
    </article>
	<script src="/jiuyi/scripts/jquery.js"></script>
    <script src="/jiuyi/scripts/login.js"></script>
    <script src="/jiuyi/scripts/history.js"></script>
    
</body>
</html>
