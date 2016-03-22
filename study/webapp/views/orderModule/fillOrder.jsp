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
            <span class="list">填写订单
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
        	<c:if test="${empty addressInfo}">
        		<Input type="hidden" value="0" id="add_h"/>
	       		<p class="write">	
		        	<a href="/jiuyi/personalCenter/queryAddress.do" class="a_writeAddress ">
			          	<span>&nbsp;<font>&nbsp;</font></span>
			            <span>请填写收件地址</span>
		          	</a>
		        </p>	
        	</c:if>
        	<c:if test="${!empty addressInfo}">
        		<p class="write">
		        	<a href="/jiuyi/personalCenter/queryAddress.do" class="a_writeAddress ">
			          	<span>${addressInfo.personname }&nbsp;<font>&nbsp;${addressInfo.provice }-${addressInfo.city }-${addressInfo.coutry }</font></span>
			            <span>${addressInfo.detail }&nbsp;</span>
		          	</a>
	          	</p>
        	</c:if>
         
         <p class="write">
         	<a href="#" class="a_writeAddress bjDelNo">
            	<span>支付方式 <font>在线支付</font></span>
            </a>
         </p>
         
         <c:forEach var="item" items="${productInfo}" varStatus="status">
	         <div class="write">	
	          	<a href="#" class="a_writeAddress bjDelNo">
		          	<div class="cartCon delAll">
			          	<div class="shoppCon relative">
			            	<img src="/jiuyi/uploads/${item.productid }.jpg">
			            </div>
			            <div class="shopText">
			          		<input type="hidden" value="${item.productid }" class="hidden_pid"/>
			            	<input type="hidden" value="${item.remark }" class="hidden_pcount"/>
			            	<p>${item.productname }<br>（${item.capacity }）</p>
			                <p> ￥<font class="red"><c:if test="${usertype eq '3' }">${item.memprice }</c:if><c:if test="${usertype ne '3' }">${item.price }</c:if></font><del>￥${item.oriprice }</del></p>
			            </div>
		          	</div>
	          	</a>
	         </div>
         </c:forEach>
          <div class="write fpInfo " style="padding:0;">
          	<a href="#" class="a_writeAddress bjDelNo">
	          	<h3>发票信息</h3>
	            <p>发票类型：普通发票</p>
	            <p>发票抬头：个人</p>
	            <p>发票内容：礼品-明细</p>
            </a>
          </div>
          <div class="write fpInfo">
          	<h3>备注：<textarea rows="1" class="textBz"></textarea></h3>
          </div>
          <div class="shoppingCartBottom">
          	<p>应付总额： <font id="p_amount">￥${amount }</font></p>
            <p class="show"> <input type="button" value="提交订单" class="content_button"></p>
            <input type="hidden" value="${flag }" id="hidden_flag"/>
          </div>
        </section>
        <!-----侧滑------>
        
    </article>
    
    <div class="mask"></div>
    <div class="upgrade">
    	<h3>订单生成提醒！</h3>
        <ul>
        	<li><font>1.</font><span>订单已生成，稍后工作人员会主动电话联系！</span></li>
            <li><font>2.</font><span>优化体检问题，欢迎您的来电！</span></li>
            <li><font>3.</font><span>联系电话：+86 13333333333！</span></li>
        </ul>
        <div class="btnOper">
        	<input type="button" value="确认" class="Btnagin doneOrder"> <input type="button" value="取消" class="Btnsj doneOrder">
        </div>
    </div>
    
    <div class="shengji" id="add_d">
    	<h3>提示</h3>
        <ul>
        	<li><font>&nbsp;</font><span>&nbsp;</span></li>
            <li><font>&nbsp;</font><span>请填写地址信息！</span></li>
            <li><font>&nbsp;</font><span>&nbsp;</span></li>
        </ul>
        <div class="btnTishi">
        	<input type="button" value="确定" class="Btnsj fillAdd">
        </div>
    </div>
    <script src="/jiuyi/scripts/fillOrder.js"></script>
    <script src="/jiuyi/scripts/history.js"></script>
</body>
</html>
