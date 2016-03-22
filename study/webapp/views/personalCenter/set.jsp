<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
	<title>九易</title>
    <link href="/jiuyi/style/basisStyle.css" rel="stylesheet">
    <script src="/jiuyi/scripts/jquery.js"></script>
</head>

<body>
	<header id="header_bar">
    	<div class="operate">
        	<a href="javascript:void(0);" class="black"></a>
            <span class="list">设置
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
        <section class="step">
        	
         <div class="set">
         	<a href="/jiuyi/personalCenter/queryPwd.do" class="a_setAddress">
            	<span>修改密码 </span>
            </a>
         </div>
         <div class="set">
         	<a href="#" class="a_setAddress" onclick="huancun();">
            	<span>清空本地缓存图片 </span>
            </a>
         </div>
         <div class="set">
         	<a href="/jiuyi/personalCenter/code.do" class="a_setAddress">
            	<span>二维码 </span>
            </a>
         </div>
         <div class="set">
         	<a href="#" class="a_setAddress" onclick="update();">
            	<span>版本信息 </span>
            </a>
         </div>
         <div class="set">
         	<a href="#" class="a_setAddress" onclick="guanyu();">
            	<span>关于我们 </span>
            </a>
         </div>
         
         <div class="addAddress" style="bottom:6rem;">
         	<a href="#" onclick="logout();">退出登录</a>
         </div>
         
        </section>
        <!-----侧滑------>
        
    </article>
    <div class="mask"></div>
    <div class="shengji" id="banben">
    	<h3>提示</h3>
        <ul>
        	<li><font>&nbsp;</font><span>&nbsp;</span></li>
            <li><font>&nbsp;</font><span>已经是最新版本了！</span></li>
            <li><font>&nbsp;</font><span>&nbsp;</span></li>
        </ul>
        <div class="btnTishi">
        	<input type="button" value="确定" class="Btnsj">
        </div>
    </div>
    
    <div class="shengji" id="guanyu">
    	<h3>关于我们</h3>
        <ul>
        	<li><font>1、</font><span>介绍1</span></li>
            <li><font>2、</font><span>介绍2</span></li>
            <li><font>3、</font><span>介绍3</span></li>
        </ul>
        <div class="btnTishi">
        	<input type="button" value="确定" class="Btnsj">
        </div>
    </div>
    
    <div class="shengji" id="huancun">
    	<h3>提示</h3>
        <ul>
        	<li><font>&nbsp;</font><span>&nbsp;</span></li>
            <li><font>&nbsp;</font><span>确认要清空缓存吗！</span></li>
            <li><font>&nbsp;</font><span>&nbsp;</span></li>
        </ul>
        <div class="d_huan">
        	<input type="button" value="取消" class="Btnagin">&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="确定" class="Btnsj">
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
    <script src="/jiuyi/scripts/set.js"></script>
    <script src="/jiuyi/scripts/history.js"></script>
</body>
</html>
