<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
	<title>九易</title>
    <link href="/jiuyi/style/basisStyle.css" rel="stylesheet">
</head>

<body>
	<header id="header_bar">
    	<div class="operate">
        	<a href="javascript:void(0);" class="black"></a>
            <span class="list">修改密码
            </span>
            <div class="more" style="display:inline;">
                <div class="Payment PaymentRight">
	                <p><a href="/jiuyi/shoppingCenter/index.do?num=0" >首页</a></p>
	                <p><a href="/jiuyi/shoppingCenter/index.do?num=1" class="lm">类目</a></p>
	                <p><a href="/jiuyi/shoppingCenter/index.do?num=2" class="gwc">购物车</a></p>
	                <p><a href="/jiuyi/shoppingCenter/index.do?num=3" class="wdjy">我的九易</a></p>
                </div>
            </div>
        </div>	
    </header>
    <article class="page_content">
    	<section class="step1">
        	<div class="LoginOpera">
            	<div class="editInput passInput">
                	<input type="password" placeholder="输入原密码" id="orignalPwd"/>
                </div>
                <div class="editInput passInput">
                	<input type="password" placeholder="输入新密码" id="newPwd1"/>
                </div> 
                <div class="editInput passInput">
                	<input type="password" placeholder="确认新密码" id="newPwd2"/>
                </div>
                <div class="login"><a href="#" class="addAddress_a addMBottom">确认</a></div>
            </div>
        </section>

        
    </article>
    <div class="mask"></div>
    <div class="shengji" id="mima">
    	<h3>提示</h3>
        <ul>
        	<li><font>&nbsp;</font><span>&nbsp;</span></li>
            <li><font>&nbsp;</font><span>两次密码输入不一致！</span></li>
            <li><font>&nbsp;</font><span>&nbsp;</span></li>
        </ul>
        <div class="btnTishi">
        	<input type="button" value="确定" class="Btnsj">
        </div>
    </div>
    
    <div class="shengji" id="mimac">
    	<h3>提示</h3>
        <ul>
        	<li><font>&nbsp;</font><span>&nbsp;</span></li>
            <li><font>&nbsp;</font><span>密码更改成功！</span></li>
            <li><font>&nbsp;</font><span>&nbsp;</span></li>
        </ul>
        <div class="btnTishi">
        	<input type="button" value="确定" class="Btnsj">
        </div>
    </div>
    
    <div class="shengji" id="mimae">
    	<h3>提示</h3>
        <ul>
        	<li><font>&nbsp;</font><span>&nbsp;</span></li>
            <li><font>&nbsp;</font><span>密码更改失败！</span></li>
            <li><font>&nbsp;</font><span>&nbsp;</span></li>
        </ul>
        <div class="btnTishi">
        	<input type="button" value="确定" class="Btnsj">
        </div>
    </div>
    
    <footer id="footer_bar">
    	<div>
    		<a href="/jiuyi/shoppingCenter/index.do?num=0">
	    		<span class="photo"></span>
				<span>首页</span>
    		</a>
		</div>
		<div>
			<a href="/jiuyi/shoppingCenter/index.do?num=1" >
				<span class="photo lm"></span>
				<span>类目</span>
			</a>
		</div>
		<div>
			<a href="#" onclick="gwc_a();">
				<span class="photo gwc"></span>
				<span>购物车</span>
			</a>
		</div>
		<div>
			<a href="/jiuyi/shoppingCenter/index.do?num=3">
				<span class="photo wdjy"></span>
				<span>我的</span>
			</a>
		</div>
    </footer>
    
	<script src="/jiuyi/scripts/jquery.js"></script>
	<script src="/jiuyi/scripts/changePwd.js"></script>
	<script src="/jiuyi/scripts/history.js"></script>
</body>
</html>
