$(function(){
	$("#grid").Grid({
		url : "/jiuyi/order/queryAllOrder",
		dataType: "json",
		height: 'auto',
		colums:[
		    {id:'2',text:'订单编号',name:"orderserial",index:'1',align:'center',color:'green'},
		    {id:'3',text:'用户姓名',name:"customername",index:'1',align:'center',color:'green'},
			{id:'4',text:'商品编号',name:"productid",index:'1',align:'center',color:'green'},
			{id:'5',text:'商品名称',name:"productname",index:'1',align:'center',color:'green'},
			{id:'6',text:'商品现价',name:"price",index:'1',align:'center',color:'green'},
			{id:'7',text:'会员价格',name:"memprice",index:'1',align:'center',color:'green'},
			{id:'8',text:'订单状态',name:"orderstatus",index:'1',align:'center',color:'green'},
			{id:'9',text:'生成时间',name:"remark",index:'1',align:'center',color:'green'},
			{id:'10',text:'操作类型',name:"flag",index:'1',align:'center',color:''}
		],
		rowNum:10,
		sorts:true,
		pager : true,
		number:true,
		multiselect: false
	});	

});

$(function(){
	$("#orderno").focusin(function() {
		var value=$("#orderno").val();
        if(value=="请输入订单编号"){
			$("#orderno").val("");
		}
    });
	$("#orderno").focusout(function() {
		var value=$("#orderno").val();
        if(value == ""){
			$("#orderno").val("请输入订单编号");
		}
    });

	$(".seach_btn").click(function(){
		var orderno = $("#orderno").val();
		if(orderno == "请输入订单编号"){
			orderno = "";
		}
		$("#grid").html("");
		$("#grid").Grid({
			url : "/jiuyi/order/queryAllOrder?orderno="+orderno,
			dataType: "json",
			height: 'auto',
			colums:[
				    {id:'2',text:'订单编号',name:"orderserial",index:'1',align:'center',color:'green'},
				    {id:'3',text:'用户姓名',name:"customername",index:'1',align:'center',color:'green'},
					{id:'4',text:'商品编号',name:"productid",index:'1',align:'center',color:'green'},
					{id:'5',text:'商品名称',name:"productname",index:'1',align:'center',color:'green'},
					{id:'6',text:'商品现价',name:"price",index:'1',align:'center',color:'green'},
					{id:'7',text:'会员价格',name:"memprice",index:'1',align:'center',color:'green'},
					{id:'8',text:'订单状态',name:"orderstatus",index:'1',align:'center',color:'green'},
					{id:'9',text:'生成时间',name:"remark",index:'1',align:'center',color:'green'},
					{id:'10',text:'操作类型',name:"flag",index:'1',align:'center',color:''}
				],
			rowNum:10,
			sorts:true,
			pager : true,
			number:true,
			multiselect: false
		});
		
	});
});

function openWindow(obj){
	var id=$(obj).parent().parent().attr("id").split("_")[1];
	$("body").window({
		"id":"window1", 
		"url":"/jiuyi/order/updateOrder?orderno="+id,
		"title":"商品基本信息", 
		"content":"",
		"hasIFrame":true,
		"width":800, 
		"height":550, 
		"resizing":false,
		"diyButton":[{
		 				"id": "btOne",
		 				"btClass": "def_btn",
		 				"value": "保存",
		 				"btFun": function() {
		 					$obj = $(document.getElementById('window1_iframe').contentWindow.document);
		 					var orderserial = $obj.find("table").eq(1).find("#orderserial").val();
		 					var orderstatus=$obj.find("table").eq(1).find("#orderstatus").val();
		 					
		 					$.ajax({
		 						url : "/jiuyi/order/updateOrderInfo",
		 						type : "post",
		 						data:{
		 							orderserial:orderserial,
		 							orderstatus:orderstatus
		 							
		 						},
		 						success : function(data){
		 							msgSuccess("", "保存成功！",function(){
		 								window.parent.frames['I2'].location.reload();
		 							});
		 							$("#window1").remove();
		 							$(".all_shadow").remove();
		 						},
		 						error : function(){
		 							msgSuccess("", "保存失败！");
		 						}
		 					});
		 					$("#window1").remove();
		 					$(".all_shadow").remove();
		 					}	
		 				},{
			"id": "btTwo",
			"btClass": "def_btn",
			"value": "取 消",
			"btFun": function() {
				$("#window1").remove();
				$(".all_shadow").remove();
				}
			}
		]
	});
};


function delRow(obj){
	var row = $(obj).parents('tr');
	$.ajax({
		url : "/jiuyi/order/deleteOrder?orderno="+row.attr("id").split("_")[1],
		type : "post",
		success : function(isdelete){
			if(isdelete=="success"){
				msgSuccess("", "删除成功！",function(){
					window.parent.frames['I2'].location.reload();
				});
				row.remove();
			}else{
				msgSuccess("", "删除失败！");
			}
		},
		error : function(){
			msgSuccess("", "操作失败！");
		}
	});  
	 
}
