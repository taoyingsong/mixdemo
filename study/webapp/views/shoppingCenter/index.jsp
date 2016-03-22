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
        	<li class="one active"></li>
            <li class="two"></li>
            <li class="third"></li>
        </ul>
    </header>
    <article class="page_content">
    	<section class="step">
        	<div class="search">
            	<i></i><input type="text" placeholder="搜索" onfocus="search();">
            </div>
            <div class="liquor">
            	<ul class="noBj">
                	<li><a href="javascript:void(0);"><i></i><img src="/jiuyi/image/01.jpg"></a></li>
                    <li><a href="javascript:void(0);"><i class="cx"></i><img src="/jiuyi/image/02.jpg"></a></li>
                    <li><a href="javascript:void(0);"><i class="rx"></i><img src="/jiuyi/image/03.jpg"></a></li>
                </ul>
            	<ul>
                    <li><a href="/jiuyi/shoppingCenter/findResult.do?kind=1"><img src="/jiuyi/image/jy1.png">
                        <p>白酒</p></a>
                    </li>
                    <li class="pj"><a href="/jiuyi/shoppingCenter/findResult.do?kind=2"><img src="/jiuyi/image/pj.png">
                        <p>啤酒</p></a>
                    </li>
                    <li class="hj"><a href="/jiuyi/shoppingCenter/findResult.do?kind=3"><img src="/jiuyi/image/hj.png">
                        <p>红酒</p></a>
                    </li>
                    <li class="yj"><a href="/jiuyi/shoppingCenter/findResult.do?kind=4"><img src="/jiuyi/image/yj.png">
                        <p>洋酒</p></a>
                    </li>
                    <li class="yl"><a href="/jiuyi/shoppingCenter/findResult.do?kind=5"><img src="/jiuyi/image/yl.png">
                        <p>保健酒</p></a>
                    </li>
                    <li class="gj"><a href="/jiuyi/shoppingCenter/findResult.do?kind=6"><img src="/jiuyi/image/gj.png">
                        <p>果酒</p></a>
                    </li>
                </ul>
            	
            </div>
        </section>
        
        <section class="step stepHide">
        	<div class="search">
            	<i></i><input type="text" placeholder="搜索" onfocus="search();">
            </div>
           <div class="liquorKind">
           		<a href="/jiuyi/shoppingCenter/findResult.do?kind=1">
				<h3>白酒</h3>
                <p>茅台/五粮液/汾酒</p>
                </a>
           </div>
           <div class="liquorKind hj">
           		<a href="/jiuyi/shoppingCenter/findResult.do?kind=2">
				<h3>啤酒</h3>
                <p>青岛/燕京/蓝带</p>
                </a>
           </div>
           <div class="liquorKind hj1">
           		<a href="/jiuyi/shoppingCenter/findResult.do?kind=3">
				<h3>红酒</h3>
                <p>拉斐庄/拉图庄/奥比安庄</p>
                </a>
           </div>
           <div class="liquorKind pj" style="height:6.5rem;">
           		<a href="/jiuyi/shoppingCenter/findResult.do?kind=4">
				<h3>洋酒</h3>
                <p>白兰地/人头马/马爹利</p>
                </a>
           </div>
           <div class="liquorKind pjj">
           		<a href="/jiuyi/shoppingCenter/findResult.do?kind=5">
				<h3>保健酒</h3>
                <p>龙虎酒/三鞭酒/宁夏红</p>
                </a>
           </div>
           <div class="liquorKind yl">
           		<a href="/jiuyi/shoppingCenter/findResult.do?kind=6">
				<h3>果酒</h3>
                <p>苹果酒/野樱桃/咖啡奶</p>
                </a>
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
			<a href="javascript:void(0);" onclick="gwc_a();">
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
    <div class="mask"></div>
	
    <script src="/jiuyi/scripts/index.js"></script>
    <script src="/jiuyi/scripts/history.js"></script>
</body>
</html>
