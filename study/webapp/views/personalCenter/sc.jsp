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
            <span class="list">我的收藏
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
	         <c:forEach var="item" items="${productinfo}"> 
	         	<c:if test="${!empty productinfo}">
	         		<div class="numIndent">
			          	<input type="hidden" value="${item.productid }"/>	
			           	<input type="button" value="删除" class="content_button btn_delremark">
		          		<a href="#">商品编号：${item.productid }</a>
	          		</div>
	         	</c:if>
	          	<div class="cartCon dfk">
	          		<a href="/jiuyi/shoppingCenter/findProduct.do?productid=${item.productid }">
						<div class="shoppCon relative">
						<img src="/jiuyi/uploads/${item.productid }.jpg">
		             	</div>
			            <div class="shopText">
			            	<p>${item.productname }<br>（${item.capacity }）</p>
			                <p> ￥<font class="red"><c:if test="${usertype eq '3' }">${item.memprice }</c:if><c:if test="${usertype ne '3' }">${item.price }</c:if></font><del>￥${item.oriprice }</del></p>
			            </div>
		            </a>
	          	</div>
	         </c:forEach>
          
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
    <script src="/jiuyi/scripts/sc.js"></script>
    <script src="/jiuyi/scripts/history.js"></script>
</body>
</html>
