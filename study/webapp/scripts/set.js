// JavaScript Document
$(function(){

	$('.operate .more').click(function(){
		$(this).find('.PaymentRight').slideToggle();
	});
	
});

function logout(){
	window.location.href = "/jiuyi/loginRegister/logout.do";
}

function huancun(){
	var _h=$('#huancun').height();
	$('#huancun').css('margin-top',-_h/2+'px');
	$('#huancun').show();
	$('.mask').show();
}

function update(){
	var _h=$('#banben').height();
	$('#banben').css('margin-top',-_h/2+'px');
	$('#banben').show();
	$('.mask').show();
}

function guanyu(){
	var _h=$('#guanyu').height();
	$('#guanyu').css('margin-top',-_h/2+'px');
	$('#guanyu').show();
	$('.mask').show();
}

$('.Btnsj').click(function(){
	$(this).parents('.shengji').hide();
	$('.mask').hide();
});

$('.Btnagin').click(function(){
	$(this).parents('.shengji').hide();
	$('.mask').hide();
});