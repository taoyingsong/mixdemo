<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
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
            <span class="list">订单详情
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
    	<section class="step2">
        	
          <div class="numIndent">	
	         	订单状态
	         	<c:if test="${SaledetailInfo.orderstatus eq '1'}">
	          		<font class="fr fon14">等待付款</font>
				</c:if>
				<c:if test="${SaledetailInfo.orderstatus eq '2'}">
					<font class="fr fon14">等待发货</font>
				</c:if>
				<c:if test="${SaledetailInfo.orderstatus eq '3'}">
					<font class="fr fon14">确认收货</font>
				</c:if>
				<c:if test="${SaledetailInfo.orderstatus eq '4'}">
					<font class="fr fon14">等待评价</font>
				</c:if>
				<c:if test="${SaledetailInfo.orderstatus eq '5'}">
					<font class="fr fon14">已完成</font>
				</c:if>
          </div>
          
          <c:forEach var="item" items="${productInfo}">
		      <div class="cartCon dfk">
		          <div class="shoppCon">
		          	  <img src="/jiuyi/uploads/${item.productid }.jpg">
		          </div>
		          <div class="shopText">
			          <p>${item.productname }<br>（${item.capacity }）</p>
			          <p> ￥<font class="red"><c:if test="${usertype eq '3' }">${item.memprice }</c:if><c:if test="${usertype ne '3' }">${item.price }</c:if></font><del>￥${item.oriprice }</del></p>
		          </div>
		      </div>
          </c:forEach>
          
          <div class="cartCon adgl">
	          <h3>收货地址</h3>
	          <p>地址：${saledetailInfo.orderprovice }-${saledetailInfo.ordercity }-${saledetailInfo.ordercountry }-${saledetailInfo.orderdetail }</p>
	          <p>姓名：${saledetailInfo.orderperson }</p>
	          <p>电话：${saledetailInfo.ordertel }</p>
          </div>
          
          <div class="cartCon adgl">
	          <h3>订单信息</h3>
	          <p>订单号：${orderserial }</p>
	          <p>订单日期：<fmt:formatDate value="${saledetailInfo.ordertime }" type="both" pattern="yyyy-MM-dd HH:mm:ss" /></p>
          </div>
          
          
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
    <script src="/jiuyi/scripts/orderDetail.js"></script>
    <script src="/jiuyi/scripts/history.js"></script>
</body>
</html>
