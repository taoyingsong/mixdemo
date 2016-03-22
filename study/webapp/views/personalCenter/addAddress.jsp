<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
	<title>九易</title>
    <link href="/jiuyi/style/basisStyle.css" rel="stylesheet">
    <link href="/jiuyi/style/area.css" rel="stylesheet">
    <link href="/jiuyi/style/valid.css" rel="stylesheet">
</head>

<body>
	<header id="header_bar">
    	<div class="operate">
        	<a href="javascript:void(0);" class="black"></a>
            <span class="list">添加地址
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
            <div class="xyk">
            	<p>收件人姓名</p>
                <div class="div_input_text">
                	<input id="name" type="text"  placeholder="姓名" class="validCss"/>
                	<div class="tips" style="display:none;"><span></span></div>
                </div>
                <p>收件人手机号</p>
                <div class="div_input_text">
                	<input id="tel" type="text"  placeholder="手机号" class="validCss"/>
                	<div class="tips" style="display:none;"><span></span></div>
                </div>
                <p>收件人邮编</p>
                <div class="div_input_text">
                	<input id="post" type="text"  placeholder="邮编" class="validCss"/>
                	<div class="tips" style="display:none;"><span></span></div>
                </div>
            </div>
            
            <div class="qtzf"><h3>省/市/县</h3>
	            <div class="block_w_100pc write">
	                <label class="city"  id="proLabel">
	                    <select id="province" name="province" onchange = 'getCitys(this.value);' >
	                        <option value="">请选择</option>
	                    </select>
	                </label>
	                <label class="city" id="cityLabel" >
	                     <select id="city" name="city" onchange = 'getQx(this.value);'>
	                        <option value="">请选择</option>
	                    </select>
	                </label>
	                <label class="city"  id="divDistrict" style="display: none">
	                     <select id="sel_qx" name="sel_qx" >
	                        <option value="">请选择</option>
	                    </select>
	                </label>
            	</div>
           	</div> 
           	<div class="qtzf"><h3>街道详情</h3>
	            <div class="write">	
	              	<textarea id="content" rows="5" class="areainfo" placeholder="请您在此填写街道详情。" maxlength="30" style="height:8rem; line-height:4rem; "></textarea>
	            </div>
           	</div>
           	<br>
           	<br>
           	<p><a href="#" class="addAddress_a addMBottom" onclick="addAddress();">添加</a></p>
        </section>

        
    </article>
    
	<script src="/jiuyi/scripts/jquery.js"></script>
    <script src="/jiuyi/scripts/address.js"></script>
    <script src="/jiuyi/scripts/area.js"></script>
    <script src="/jiuyi/scripts/history.js"></script>
</body>
</html>
