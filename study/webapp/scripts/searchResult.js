$('.basicInfo dd').click(function(){
	var _this=$(this);
	var _anum=_this.index();
	_this.addClass('active').siblings().removeClass('active');
	_this.parents('dl').next('.total').find('.hide').eq(_anum).show().siblings().hide();
	_this.parents('dl').next('div').find('.hide').eq(_anum).show().siblings().hide();
});

$('.operate .more').click(function(){
	$(this).find('.PaymentRight').slideToggle();
});

function search(){
	window.location.href="/jiuyi/shoppingCenter/findSearch.do";
}