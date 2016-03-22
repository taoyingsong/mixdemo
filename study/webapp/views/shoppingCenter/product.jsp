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
    <link href="/jiuyi/style/lb.css" rel="stylesheet">
    <script src="/jiuyi/scripts/jquery.js"></script>
</head>

<body>
	<header id="header_bar">
    	<div class="operate">
        	<a href="javascript:void(0);" class="black"></a>
            <span class="list list28">商品详情
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
          <div style="height:15.8rem; position:relative;">
          	 <div class="p_banner">
                <ul class="pbanner-img">
                    <li style="clear:both;"><a href="#"><img src="/jiuyi/uploads/${productinfo.productid }.jpg"></a></li>
                </ul>
                 <div class="a_oprea">
                    <a href="#" class="fx" onclick="sc(${productinfo.productid });"></a>
                    <a href="#" id="fenxiang"></a>
                 </div>
            </div>
          </div>
          <input type="hidden" id="h_productid" value=${productinfo.productid } />
          <input type="hidden" id="h_productname" value=${productinfo.productname } />
          <div class="commodity">
          	<h3>${productinfo.productname }</h3>
            <p>现价：<font class="red18" id="price">￥<c:if test="${usertype eq '3' }">${productinfo.memprice }</c:if><c:if test="${usertype ne '3' }">${productinfo.price }</c:if>
            </font><del>￥${productinfo.oriprice }</del> <font class="redes">${ndiscount }折</font></p>
            <p><i>库存${productinfo.storage }件</i>  <i>销量${count }件</i></p>
          </div>
          
          <div class="calculator">
          	购买数量
	      	<div class="oprea">
	        	<i id="minus"></i>
	            <input type="text" value="1" class="text" id="text"  data-max='5000' data-min='1' style="height:2.5rem;line-height:3rem;width:6rem;"/>
	            <i class="add" id="plus"></i>
	            <p id="note" class="note" style="display:none;"> <b></b>  <em></em> </p>
	        </div>
          </div>
          
          <div class="basicInfo">
          	<dl>
            	<dd class="active fist">基本信息</dd>
                <dd>评价（${fn:length(remarkinfo)}）</dd>
                <dd class="last">地址定位</dd>
            </dl>
            <div class="total">
            	<div class="hide"  style="display:block;">
                	<p>酒厂：${productinfo.winery }</p>
                    <p>产地：${productinfo.originplace }</p>
                    <p>酒精度：${productinfo.alcohol }</p>
                    <p>规格：${productinfo.specifications }</p>
                    <p>香型：${productinfo.flavor }</p>
                    <p>容量：${productinfo.capacity }</p>
                    <p>原料：${productinfo.material }</p>
                    <p>储藏条件：${productinfo.conditions }</p>
                    <p>酿造工艺：${productinfo.process }</p>
                </div>
                
                <div class="hide">
                	<c:forEach var="item" items="${remarkinfo}">
	                	<div class="pjInfo clearfix">
	                    	<span class="tx"><img src="/jiuyi/image/txIco.jpg"></span>
	                        <div class="tr">
	                        	<p>${item.customerid }</p>
	                            <span>${item.remarkcontent }</span>
	                        	<span class="right">
	                        	<c:forEach begin="1" end="${item.remarklevel}" step="1">
									  <img src="/jiuyi/image/star_2.gif"/>
								</c:forEach>
								
								<c:forEach begin="${item.remarklevel + 1}" end="5" step="1">
									  <img src="/jiuyi/image/star_1.gif"/>
								</c:forEach>
	                        	</span>
	                            <span class="right"><fmt:formatDate value="${item.remarktime}" type="both" pattern="yyyy-MM-dd HH:mm:ss" /></span>
	                        </div>
	                    </div>
                    </c:forEach>
                </div>
                
                <div class="hide m0">
                	<div class="img100">
                    	<img src="/jiuyi/image/dt.jpg">
                    </div>
                    <div class="addres">
                    	<p align="center">地址：北京市西城区金融购物街底商202铺</p>
                        <p align="center">电话：010-89651234</p>
                    </div>
            	</div>
            </div>
          </div>
          <div class="moneyCar">
          	<input type="button" value="立即购买" class="btn_ljgm"/>
            <input type="button" value="加入购物车" class="btn_jrgwc"/>
            <a href="#" class="a_car"></a>
          </div>
          <div class="share">
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
            <a href="#" class="a_qx">取消</a>
          </div>
          <div class="mask"></div>
        </section>
        
    </article>
    
    <script src="/jiuyi/scripts/product.js"></script>
    <script src="/jiuyi/scripts/lb.js"></script>
    <script src="/jiuyi/scripts/history.js"></script>
    
    <script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/buttonLite.js#uuid=123456789&ssc=true"></script>
	<script type="text/javascript" charset="utf-8" src="http://static.bshare.cn/b/bshareC3.js"></script>
	<script type="text/javascript">
		function shareInfo(){
			var productname = $("#h_productname").val();
			bShare.addEntry({
			    summary: "欢迎选购"+productname
			});
		}
	</script>
</body>
</html>
