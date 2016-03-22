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
    <link href="/jiuyi/style/mark.css" rel="stylesheet">
</head>

<body>
	<header id="header_bar">
    	<div class="operate">
        	<a href="javascript:void(0);" class="black"></a>
            <span class="list">评论
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
        	
          <div class="numIndent">	
          	订单号：${orderserial }
          	<input type="hidden" value="${orderserial }" id="hid_serial" />
          </div>
          
          <c:forEach var="item" items="${productInfo}"> 
         	<div class="cartCon dfk">
				<div class="shoppCon relative">
					<img src="/jiuyi/uploads/${item.productid }.jpg">
					<p class="explain">等待评价</p>
            	</div>
	           	<div class="shopText">
	           		<p>${item.productname }<br>（${item.capacity }）</p>
	               	<p> ￥<font class="red"><c:if test="${usertype eq '3' }">${item.memprice }</c:if><c:if test="${usertype ne '3' }">${item.price }</c:if></font><del>￥${item.oriprice }</del></p>
	           	</div>
         	</div>
         	
         	<div class="cartCon pj">
	          	好就五星哦
	          	<input type="hidden" value="${item.productid }" class="hid_id"/>
	          	<input type="hidden" value="" class="hid_level"/>
	            <div class="starWrjiuyier" style="margin-right:3rem;margin-bottom:0.5rem;"></div>
	            <input type="text"  placeholder="快说说，这酒怎么样？" class="textPj" maxlength="50"/>
          	</div>
	     </c:forEach>
          
<!--          <div class="addAddress"> -->
<!--          	<a href="#">提交评论</a> -->
<!--          </div> -->
         <p><a href="#" class="addAddress_a addMBottom" id="addAddress">提交评论</a></p>
        </section>
        
        <div class="mask"></div>
        <div class="shengji" id="pingjia_level">
	    	<h3>提示</h3>
	        <ul>
	        	<li><font>&nbsp;</font><span>&nbsp;</span></li>
	            <li><font>&nbsp;</font><span>评价等级不能为空！</span></li>
	            <li><font>&nbsp;</font><span>&nbsp;</span></li>
	        </ul>
	        <div class="btnTishi">
	        	<input type="button" value="确定" class="Btnsj">
	        </div>
    	</div>
    	
    	<div class="shengji" id="pingjia_content">
	    	<h3>提示</h3>
	        <ul>
	        	<li><font>&nbsp;</font><span>&nbsp;</span></li>
	            <li><font>&nbsp;</font><span>评价内容不能为空！</span></li>
	            <li><font>&nbsp;</font><span>&nbsp;</span></li>
	        </ul>
	        <div class="btnTishi">
	        	<input type="button" value="确定" class="Btnsj">
	        </div>
    	</div>
    </article>
    
	<script src="/jiuyi/scripts/jquery.js"></script>
	<script src="/jiuyi/scripts/remark.js"></script>
	<script src="/jiuyi/scripts/history.js"></script>
	<script src="/jiuyi/scripts/comment.js"></script>
</body>
</html>
