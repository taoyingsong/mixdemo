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
            <span class="list">地址管理
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
    		<c:forEach var="item" items="${info}" varStatus="status">     
	      		<div class="addManage">
	            	<h3>${item.personname }<font class="fr">${item.provice }-${item.city }-${item.coutry }</font></h3>
	                <p>${item.detail }</p>
	                <p>${item.tel }</p>
	                <div class="mrAdd">设为默认地址 
	                	<span class="inpu_checkbox">
	                		<c:if test="${item.isfirst eq '1'}">
	            				<font class="checkBoxSpan fr active"></font>
	            			</c:if>
	            			<c:if test="${item.isfirst ne '1'}">
	            				<font class="checkBoxSpan fr"></font>
	            			</c:if>
	            		<input type="hidden" value="${item.addressid }"/>
	            		</span>
	                </div>
	            </div>	   
			</c:forEach> 
            
            <div class="addAddress" style="bottom:6rem;">
            	<a href="/jiuyi/personalCenter/addAddress.do">新增收货地址</a>
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
    <script src="/jiuyi/scripts/address.js"></script>
    <script src="/jiuyi/scripts/history.js"></script>
</body>
</html>
