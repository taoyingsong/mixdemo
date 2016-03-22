//商品详情购物车
$('.basicInfo dd').click(function(){
	var _this=$(this);
	var _anum=_this.index();
	_this.addClass('active').siblings().removeClass('active');
	_this.parents('dl').next('.total').find('.hide').eq(_anum).show().siblings().hide();
	_this.parents('dl').next('div').find('.hide').eq(_anum).show().siblings().hide();
});

$("#searchBut").click(function(){
	var param = $("#searchCon").val();
	window.location.href = "/jiuyi/shoppingCenter/findResult.do?content="+param;
});

$('.cartCon p').click(function(){
	var _this=$(this);
	window.location.href = "/jiuyi/shoppingCenter/findResult.do?content="+_this.html();
});

$('.operate .more').click(function(){
	$(this).find('.PaymentRight').slideToggle();
});