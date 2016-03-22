<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
            <span class="list">注册
            </span>
        </div>	
    </header>
    <article class="page_content">
    	<section class="step1">
        	<div class="LoginOpera">
            	<div class="editInput passInput">
                	<input type="text" placeholder="手机号码/用户名" id="username" maxlength="18"/>
                	<div class="tips" style="display:none;"><span></span></div>
                </div>
                <div class="editInput passInput">
                	<input type="password" placeholder="密码" id="userpwd_1" maxlength="18"/>
                	<div class="tips" style="display:none;"><span></span></div>
                </div> 
                <div class="editInput passInput">
                	<input type="password" placeholder="确认密码" id="userpwd_2" maxlength="18" />
                	<div class="tips" style="display:none;"><span></span></div>
                </div>
                <div class="editInput passInput">
                	<input type="text" placeholder="手机号" id="telphone" maxlength="15"/>
                	<div class="tips" style="display:none;"><span></span></div>
                </div>
                <div class="login"><a href="#" class="addAddress_a addMBottom" onclick="register();">注册</a></div>
            </div>
        </section>

        
    </article>
	<script src="/jiuyi/scripts/jquery.js"></script>
    <script src="/jiuyi/scripts/register.js"></script>
    <script src="/jiuyi/scripts/history.js"></script>
</body>
</html>
