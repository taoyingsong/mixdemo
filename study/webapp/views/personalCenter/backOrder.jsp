<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
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
            <div class="list" style="display:inline;">待发货订单<i></i>
            	<div class="orderInfo">
                	<p>全部订单</p><input type="hidden" value="0" />
                    <p>待付款订单</p><input type="hidden" value="1" />
                    <p>待发货订单</p><input type="hidden" value="2" />
                    <p>待收货订单</p><input type="hidden" value="3" />
                    <p>已完成订单</p><input type="hidden" value="4" />
                </div>
	        </div>

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
        	
          <c:forEach var="item" items="${orderInfo}" > 
	          <div class="numIndent">	
	          	<a href="/jiuyi/personalCenter/queryOrderDetail.do?orderserial=${fn:substring(item.key, 0, fn:length(item.key)-2)}">订单号：${fn:substring(item.key, 0, fn:length(item.key)-2)}</a>
	          </div>
	          <c:forEach var="it" items="${item.value}"> 
		          	<div class="cartCon dfk">
						<div class="shoppCon relative">
						<img src="/jiuyi/uploads/${it.productid }.jpg">
						<p class="explain">等待发货</p>
	              	</div>
		            <div class="shopText">
		            	<p>${it.productname }<br>（${it.capacity }）</p>
		                <p> ￥<font class="red"><c:if test="${usertype eq '3' }">${it.memprice }</c:if><c:if test="${usertype ne '3' }">${it.price }</c:if></font><del>￥${it.oriprice }</del></p>
		            </div>
		          </div>
	          </c:forEach>
          </c:forEach>
          <div class="add_black">&nbsp;</div>
       </section>
	</article>
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
    <script src="/jiuyi/scripts/backOrder.js"></script>
    <script src="/jiuyi/scripts/history.js"></script>
</body>
</html>
