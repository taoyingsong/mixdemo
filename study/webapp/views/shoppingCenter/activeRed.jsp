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
    <link href="/jiuyi/style/lb.css" rel="stylesheet">
</head>

<body>
	<header id="header_bar">
    	<div class="operate">
        	<a href="javascript:void(0);" class="black"></a>
        	<c:if test="${index eq '0'}">
	            <div class="list" style="display:inline;">推荐<i></i>
	            	<div class="Payment w60">
	                	<p>促销</p><input type="hidden" value="1" />
	                    <p>热销</p><input type="hidden" value="2" />
	                </div>
	            </div>
            </c:if>
            <c:if test="${index eq '1'}">
	            <div class="list" style="display:inline;">促销<i></i>
	            	<div class="Payment w60">
	                    <p>推荐</p><input type="hidden" value="0" />
	                    <p>热销</p><input type="hidden" value="2" />
	                </div>
	            </div>
            </c:if>
            <c:if test="${index eq '2'}">
	            <div class="list" style="display:inline;">热销<i></i>
	            	<div class="Payment w60">
	                    <p>推荐</p><input type="hidden" value="0" />
	                	<p>促销</p><input type="hidden" value="1" />
	                </div>
	            </div>
            </c:if>
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
          
          <div id="slide" class="slide_showr">
	        <div class="swipe-wrap">
	             <div><a href="javascript:;"><img src="/jiuyi/image/l1.jpg"/></a></div>
	             <div><a href="javascript:;"><img src="/jiuyi/image/l1.jpg" /></a></div>
	             <div><a href="javascript:;"><img src="/jiuyi/image/l1.jpg" /></a></div>
	        </div>
	        <ul id="position">
	            <li class="on"></li><li class=""></li><li class=""></li>
	        </ul>
    	  </div>
    	
          <div class="productList">
          	<ul>
          		<c:forEach var="item" items="${productinfo}"> 
	            	<li>
	                	<a href="/jiuyi/shoppingCenter/findProduct.do?productid=${item.productid }">
	                    	<div class="productPhone"><img src="/jiuyi/uploads/${item.productid }.jpg">
	                        	<p>${item.productname }</p>
	                            <span class="circular">${item.remark }</span>
	                        </div>
	                        <p><font class="red18"><c:if test="${usertype eq '3' }">￥${item.memprice }</c:if><c:if test="${usertype ne '3' }">￥${item.price }</c:if>
	                        </font> <%-- <del>￥${item.oriprice }</del> --%></p>
	                    </a>
	                </li>
                </c:forEach>
            </ul>
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
	<script src="/jiuyi/scripts/jquery.js"></script>
	<script src="/jiuyi/scripts/lb.js"></script>
    <script src="/jiuyi/scripts/recommend.js"></script>
    <script src="/jiuyi/scripts/history.js"></script>
    <script>
        var slider = Swipe(document.getElementById('slide'), {			
            auto:3500,
            continuous: true,
            disableScroll: true,			
            callback: function(pos) {
                var i = bullets.length;				
                while (i--) {
                    bullets[i].className = ' ';
                }
                bullets[pos].className = 'on';
            }
        });
        var bullets = document.getElementById('position').getElementsByTagName('li');
    </script>
</body>
</html>
