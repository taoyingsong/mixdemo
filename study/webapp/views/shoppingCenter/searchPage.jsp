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
</head>

<body>
	<header id="header_bar">
    	<div class="operate">
    		<a href="javascript:void(0);" class="black"></a>
            <div class="list" style="display:inline;">
	            <div class="search search_1">
	            	<i></i><input type="text" placeholder="搜索" id="searchCon">
	            </div>
            	<input type="button" value="搜索" class="btnSearchTop fl" id="searchBut">
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
        	<div class="basicInfo searchAll">
          	<dl>
            	<dd class="active fist">热门搜索</dd>
                <dd class="last">搜索记录</dd>
            </dl>
            <div>
	        	<div class="cartCon rotSearch hide" style="display:block;">
	                <p>茅台</p>
	                <p>红酒</p>
	                <p>汾酒</p>
	                <p>啤酒</p>
	                <p>果酒</p>
	            </div>
	            <div class="cartCon rotSearch hide">
	            	<c:forEach var="item" items="${search}" varStatus="status"> 
	                	<p>${item }</p>
	                </c:forEach>
	            </div>
            </div>
           </div>
        </section>
        
    </article>
    
    
	<script src="/jiuyi/scripts/jquery.js"></script>
    <script src="/jiuyi/scripts/searchPage.js"></script>
    <script src="/jiuyi/scripts/history.js"></script>
</body>
</html>
