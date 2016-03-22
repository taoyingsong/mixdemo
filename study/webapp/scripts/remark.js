// JavaScript Document
$(function(){
	//导航
	$('.operate .more').click(function(){
		$(this).find('.PaymentRight').slideToggle();
	});
	
});

function pingjia_level(){
	var _h=$('#pingjia_level').height();
	$('#pingjia_level').css('margin-top',-_h/2+'px');
	$('#pingjia_level').show();
	$('.mask').show();
}

function pingjia_content(){
	var _h=$('#pingjia_content').height();
	$('#pingjia_content').css('margin-top',-_h/2+'px');
	$('#pingjia_content').show();
	$('.mask').show();
}

$('.Btnsj').click(function(){
	$(this).parents('.shengji').hide();
	$('.mask').hide();
});

$("#addAddress").click(function(){
	var productid = "";
	var level = "";
	var content = "";
	var flag1 = "0";
	var flag2 = "0"
	$('.pj').each(function(i,n){
	     var i = $(n).find("input[class='hid_id']").val();
	     var l = $(n).find("input[class='hid_level']").val();
	     var c = $(n).find("input[class='textPj']").val();
	     if(l==0){
	    	flag1 = "1";
	 		return false;
	 	}
	 	if(c==''){
	 		flag2 = "1";
	 		return false;
	 	}
	     productid = productid + i + ",";
	     level = level + l + ",";
	     content = content + c + ",";
	});
	
	if(flag1==1){
		pingjia_level();
		return;
	}
	if(flag2==1){
		pingjia_content();
		return;
	}
	
	productid = productid.substring(0,productid.length-1);
	level = level.substring(0,level.length-1);
	content = content.substring(0,content.length-1);
	var serial = $("#hid_serial").val();
	
	$.ajax({
        type: 'post',
        url: '/jiuyi/personalCenter/saveRemark.do',
        data: {
        	productid:productid,
        	level:level,
        	content:content,
        	serial:serial
        },
        async: false,
        dataType:"json",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        success: function(data) {
            window.location.href = "/jiuyi/personalCenter/queryOrder.do?index=0";
        },
        err: function() {}
    });
	
});

function rate(obj,oEvent){ 
	var imgSrc = '/jiuyi/image/start2.png'; 
	var imgSrc_2 = '/jiuyi/image/start1.png'; 

	if(obj.rateFlag) 
		return; 
	var e = oEvent || window.event; 
	var target = e.target || e.srcElement;  
	var imgArray = obj.getElementsByTagName("img"); 
	for(var i=0;i<imgArray.length;i++){ 
		imgArray[i]._num = i; 
		imgArray[i].onclick=function(){ 
		    if(obj.rateFlag) 
		    	return; 
		    obj.rateFlag=true; 
		    $(this).parent().parent().find(".hid_level").val(this._num+1);
		}; 
	} 
	if(target.tagName=="IMG"){ 
		for(var j=0;j<imgArray.length;j++){ 
		    if(j<=target._num){ 
		    	imgArray[j].src=imgSrc_2; 
		    } else { 
		    	imgArray[j].src=imgSrc; 
		    } 
		} 
	} else { 
		for(var k=0;k<imgArray.length;k++){ 
			imgArray[k].src=imgSrc; 
		} 
	} 
} 