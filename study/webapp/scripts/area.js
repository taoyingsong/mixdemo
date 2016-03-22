$(document).ready(function() {
	getProv();// 获取省下拉列表;
});

/**
 * 获取省份信息;
 * @return option 集合
 */
function getProv(){
	//省份和省级市数组集合;
	var citys = new Array();

	var optionStr = '';
	$.ajax({
		url:'/jiuyi/common/city.json',
		data:'next='+Math.random(),
		dataType:'json',
		method:'post',
		success:function(data){
			$.each(data, function(i, item){
				var city = new Array();//省份或省级市数组,[0]:存放id也就是areacode,[1]:存放中文名;
				var proid = item.proid;//省份id;
				var proname = item.proname;//省份name;
				if(proid != 'hot'){
					city[0] = proid;
					city[1] = proname;
					
					citys.push(city);
				}else{
					var city_items = item.citys;//城市数组;
					$.each(city_items, function(j, itemval){
						var cityid = itemval.cityid;//城市名称;
						var cityname = itemval.cityname;//城市名称;
						
						city = new Array();
						city[0] = cityid;
						city[1] = cityname;
						
						citys.push(city);
					});
				}
			});
			optionStr = getoptions(citys);
			$('#province').html(optionStr);
			//**************************获取市级信息************************************//
			var proid = $('#province>option:selected').val();//获取省份id(areacode);
			//getCitys(proid);//获取市级单位信息;
		},
		err:function(){}
	});
}
/**
 * 根据省份id获取市信息;
 * @param proid
 * @return
 */
function getCitys(proid){
	var cities = new Array();//城市数组;
	if("00000000"!=proid){
		if("11000000"!=proid&&"31000000"!=proid&&"12000000"!=proid&&"50000000"!=proid){
			$("#proLabel").attr("class","dist");
			$("#cityLabel").attr("class","dist");
			$("#divDistrict").attr("class","dist");
			$("#divDistrict").show();
		}
		else{
			$("#proLabel").attr("class","city");
			$("#cityLabel").attr("class","city");
			$("#divDistrict").attr("class","city");
			$("#divDistrict").hide();
		}
	}
	else{
		$("#proLabel").attr("class","city");
		$("#cityLabel").attr("class","city");
		$("#divDistrict").attr("class","city");
	}
	
		
	
	if(proid != null && '' != proid){
		$.ajax({
			url:'/jiuyi/common/city.json',
			data:'next='+Math.random(),
			dataType:'json',
			method:'post',
			success:function(data){
				$.each(data, function(i, item){
					var _proid = item.proid;//省份id;
					if(_proid == proid){
						var vals = item.citys;
						$.each(vals, function(j, itemval){
							var city = new Array();//城市数组，用于存放市级单位,city[0]:存放areacode,city[1]:存放中文名称;
							var cityid = itemval.cityid;//城市id,即areacode;
							var cityname = itemval.cityname;//城市中文名称;
							city.push(cityid);
							city.push(cityname);
							cities.push(city);
						});
					}
				});
				if(cities.length == 0){
					$('#cityLabel').hide();
					$('#sel_qx').html("<option>请选择</option>");
					if(proid!="00000000"){
					getQx(proid);
					
					}
				}else{
					$('#cityLabel').show();
					var optionStr = getoptions(cities);
					$('#city').html(optionStr);
					var _cityid = $('#city>option:selected').val();
					if(_cityid!="00000000"){
					getQx(_cityid);
					}else{
						$("#sel_qx").nextAll().remove();
						$('#sel_qx').html("<option>请选择</option>");
					}
				}
			},
			err:function(){}
		});
	}
}
/**
 * 获取区县信息;
 * @param cityid 市级单位areaCode;
 * @return
 */
function getQx(cityid){
	var ctx = $("#ctx").val();
	if(cityid!="00000000"){
		var qxes = new Array();//区县集合;
		$.ajax({
			url:"/jiuyi/personalCenter/getProvinceData.do",
			type:"post",
			data:{
				code:cityid,
				next:Math.random()
			},
			dataType:"json",
			contentType: 'application/x-www-form-urlencoded;charset=utf-8',
			success: function(data){
				var _data = eval(data.data);
				$.each(_data, function(i, item){
					var qx = new Array();//区县数组.qx[0]:areacode;qx[1]:存放区县中文名称 ;
					var qxid = item.name;//区县areaCode;
					var qxname = item.value;//区县中文名称;
					
					if(qxid.length == 6 && qxid.substring(4) != '00'){
						qx[0] = qxid;
						qx[1] = qxname;
						
						if('420104'==qxid){
							qx[1] = '硚口区';
						}
						if('420505'==qxid){
							qx[1] = '猇亭区';
						}
						
						qxes.push(qx);
					}
				});
				if(qxes.length > 0){
					var qxStr = getoptions(qxes);
					$("#divDistrict").show();
					$("#sel_qx").nextAll().remove();
					if("000000"==cityid.substring(2,8)){
						$("#proLabel").attr("class","city");
						$("#cityLabel").attr("class","city");
						$("#divDistrict").attr("class","city");
					}
					else{
						$("#proLabel").attr("class","dist");
						$("#cityLabel").attr("class","dist");
						$("#divDistrict").attr("class","dist");
					}
					$("#sel_qx").html(qxStr);
				}else{
					$("#sel_qx").nextAll().remove();
					$("#divDistrict").hide();
				}
			},
			error:function(){}
		});
	}else{
		$("#sel_qx").html('<option value="00000000">请选择</option>');
	}
}

/**
 * 获取省市下拉列表;
 */
function getoptions(datas){
	var optionStr = '<option  value="00000000">请选择</option>';
	
	$.each(datas, function(i, item){
		optionStr += '<option value = "' + item[0] + '">' + item[1] + '</option>';
	});
	
	return optionStr;
}

function addAddress(){
	var obj_name = $("#name");
	var obj_tel = $("#tel");
	var obj_post = $("#post");
	
	$('.tips').css({'display':'none'});
	
	if(obj_name.val()==""){
		var navH = obj_name.position().top;
		var navL = obj_name.position().left; 
		obj_name.next().css({"top":(navH-10)+'px',"left":(navL+100)+'px',"display":""});
		obj_name.next().find('span').html("收件人姓名不能为空！");
		return ;
	}
	
	 var regName = /^[\u4e00-\u9fa5]+$/;
     if(!regName.test(obj_name.val())) {
        var navH = obj_name.position().top;
 		var navL = obj_name.position().left; 
 		obj_name.next().css({"top":(navH-10)+'px',"left":(navL+100)+'px',"display":""});
 		obj_name.next().find('span').html("收件人姓名不合法！")
 		return ;
     }
     
     if(obj_tel.val()==""){
 		var navH = obj_tel.position().top;
 		var navL = obj_tel.position().left; 
 		obj_tel.next().css({"top":(navH-10)+'px',"left":(navL+100)+'px',"display":""});
 		obj_tel.next().find('span').html("收件人手机号不能为空！");
 		return ;
 	}
 	
 	 var regName = /^(((13[0-9]{1})|159|153)+\d{8})$/;
      if(!regName.test(obj_tel.val())) {
         var navH = obj_tel.position().top;
  		var navL = obj_tel.position().left; 
  		obj_tel.next().css({"top":(navH-10)+'px',"left":(navL+100)+'px',"display":""});
  		obj_tel.next().find('span').html("请输入有效的手机号码！")
  		return ;
      }
	
      if(obj_post.val()==""){
   		var navH = obj_post.position().top;
   		var navL = obj_post.position().left; 
   		obj_post.next().css({"top":(navH-10)+'px',"left":(navL+100)+'px',"display":""});
   		obj_post.next().find('span').html("邮编号码不能为空！");
   		return ;
   	}
   	
   	 var regName = /^\d{6}$/;
        if(!regName.test(obj_post.val())) {
           var navH = obj_post.position().top;
    		var navL = obj_post.position().left; 
    		obj_post.next().css({"top":(navH-10)+'px',"left":(navL+100)+'px',"display":""});
    		obj_post.next().find('span').html("请输入有效的邮编号码！")
    		return ;
        }
	
	
	var provice = $("#province>option:selected").html();
	var city = $("#city>option:selected").html();
	var qx = $("#sel_qx>option:selected").html();
	var content = $("#content").val();
	$.ajax({
        type: 'post',
        url: '/jiuyi/personalCenter/saveAddress.do',
        async: false,
        data:{
        	name:obj_name.val(),
        	tel:obj_tel.val(),
        	post:obj_post.val(),
        	provice:provice,
        	city:city,
        	qx:qx,
        	content:content
        },
        dataType:"json",
        contentType: 'application/x-www-form-urlencoded;charset=utf-8',
        success: function(data) {
            if (data.message == "success") {
            	window.location.href = "/jiuyi/personalCenter/queryAddress.do";
            }else{
            	window.location.href = "/jiuyi/loginRegister/loginPage.do";
            }
        },
        error: function() {
        }
	});
}

