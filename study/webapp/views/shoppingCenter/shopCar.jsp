<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="ctx" value="${pageContext.request.contextPath}" />
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
	<input type="hidden" id="num" value="${num }" />
	<input type="hidden" id="temp" value="${temp }" />
	<header id="header_bar">
    	<a href="javascript:void(0);" class="Login"><i></i>	
        </a>
        <div class="sideslip">
            <div class="peoInfo">
            	<c:if test="${empty username}">
            		<p><a href="/jiuyi/loginRegister/loginPage.do" style="margin-right:0px;">登陆</a></p>
            	</c:if>
            	<c:if test="${!empty username}">
            		<p><a href="javascript:void(0);">会员</a> ${username }</p>
            	</c:if>
            </div>
            <p><a href="/jiuyi/personalCenter/queryOrder.do?index=0">我的订单</a></p>
            <p><a href="/jiuyi/personalCenter/querySC.do" class="sc">我的收藏</a></p>
            <p><a href="/jiuyi/personalCenter/queryPJ.do" class="jl">我的评价</a></p>
            <p><a href="/jiuyi/personalCenter/queryAddress.do" class="dz">地址管理</a></p>
            <p><a href="/jiuyi/personalCenter/querySet.do" class="sz">设置</a></p>
        </div>
        
        <div class="mask"></div>
        <ul>
        	<li class="one"></li>
            <li class="two"></li>
            <li class="third active"></li>
        </ul>
    </header>
    <article class="page_content">
        <section class="step">
        	<div class="shoppingCart">	
          		我的购物车
          		<c:if test="${!empty tempInfo}">
	          		<span class="inpu_checkbox">
		            	<font class="checkBoxSpan fr"></font>
		            </span>
          		</c:if>
          	</div>
          	<c:forEach var="item" items="${tempInfo}" varStatus="status"> 
	          	<div class="cartCon clearFloat">
		          	<div class="shoppCon">
		            	<img src="/jiuyi/uploads/${item.productid }.jpg">
		            </div>
		            <div class="shopText">
		            	<p>${item.productname }<br>（${item.capacity }）</p>
		                <p> ￥<font class="red" ><c:if test="${usertype eq '3' }">${item.memprice }</c:if><c:if test="${usertype ne '3' }">${item.price }</c:if>
		                </font><del>￥${item.oriprice }</del></p>
		                <p class="label">库存${item.storage }件 <i id="minus${status.index }" style="margin-left:3rem;" onclick="minus(this);"></i><input type="text" value="${item.remark }" class="text" data-max='5000' data-min='1' style="margin-left:1rem;height:2.5rem;line-height:3rem;width:6rem;"/><i id="plus${status.index }" class="add" onclick="plus(this);"></i></p>
		            </div>
		            <div class="shopOpre">
		            	<span class="checkBox inpu_checkbox">
		            		<font class="checkBoxSpan fr"></font><input type="hidden" value="${item.productid }" />
		            	</span>
		            </div>
	          	</div>
          	</c:forEach>
	        <div class="shoppingCartBottom">
	          	<p>商品总价（不含运费）： <font id="price">￥0.00</font></p>
	            <p><a href="#" class="a_collect">收藏</a> <a href="#" class="a_delete">分享</a> 
	            <input type="button" value="确认支付" class="content_button"></p>
	        </div>
	        
	        <div class="sharemask">
	          	<ul class=" clearfix">
	            	<li><a href="#" title="QQ空间" class="bshare-qzone" onclick="shareInfo();javascript:bShare.share(event,'qzone');return false;">QQ空间</a></li>
	                <li class="tx"><a href="#" title="腾讯微博" class="bshare-qqmb" onclick="shareInfo();javascript:bShare.share(event,'qqmb');return false;">腾讯微博</a></li>
	                <li class="xl"><a href="#" title="新浪微博" class="bshare-sinaminiblog" onclick="shareInfo();javascript:bShare.share(event,'sinaminiblog');return false;">新浪微博</a></li>
	                <li class="wx"><a href="#" title="微信" onclick="shareInfo();javascript:bShare.share(event,'weixin');return false;">微信</a></li>
	                <li class="wxpy"><a href="#" title="朋友圈" onclick="shareInfo();javascript:bShare.share(event,'qqxiaoyou');return false;">朋友圈</a></li>
	                <li class="db"><a href="#" title="豆瓣网" onclick="shareInfo();javascript:bShare.share(event,'douban');return false;">豆瓣网</a></li>
	                <li class="dx"><a href="#" onclick="shareInfo();javascript:bShare.share(event,'qqim');return false;">QQ</a></li>
	                <li class="yj"><a href="#" title="QQ邮箱" class="bshare-email" onclick="shareInfo();javascript:bShare.share(event,'email');return false;">QQ邮箱</a></li>
            	</ul>
            	<a href="#" class="a_qxs">取消</a>
        	</div>
        	<div class="mask_share"></div>
        </section>
    </article>
    
    <div class="mask"></div>
	<div class="shengji" id="shopcar">
    	<h3>提示</h3>
        <ul>
        	<li><font>&nbsp;</font><span>&nbsp;</span></li>
            <li><font>&nbsp;</font><span>购物车为空请添加商品！</span></li>
            <li><font>&nbsp;</font><span>&nbsp;</span></li>
        </ul>
        <div class="btnTishi">
        	<input type="button" value="确定" class="Btnsj">
        </div>
    </div>
	
    <script src="/jiuyi/scripts/shopCar.js"></script>
    <script src="/jiuyi/scripts/history.js"></script>
    
    <script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/buttonLite.js#uuid=123456789&ssc=true"></script>
	<script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/bshareC3.js"></script>
	<script type="text/javascript">
		function shareInfo(){
			var productname = $("#h_productname").val();
			bShare.addEntry({
			    summary: "欢迎选购"
			});
		}
	</script>
</body>
</html>
