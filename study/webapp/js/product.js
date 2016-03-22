$(function(){
	$("#grid").Grid({
		url : "/jiuyi/product/queryAllProduct",
		dataType: "json",
		height: 'auto',
		colums:[
			{id:'2',text:'商品编号',name:"productid",index:'1',align:'center',color:'green'},
			{id:'3',text:'商品名称',name:"productname",index:'1',align:'center',color:'green'},
			{id:'4',text:'商品类别',name:"kindno",index:'1',align:'center',color:'green'},
			{id:'5',text:'商品现价',name:"price",index:'1',align:'center',color:'green'},
			{id:'6',text:'会员价格',name:"memprice",index:'1',align:'center',color:'green'},
			{id:'7',text:'原始价格',name:"oriprice",index:'1',align:'center',color:'green'},
			{id:'8',text:'操作时间',name:"remark",index:'1',align:'center',color:'green'},
			{id:'9',text:'操作类型',name:"flag",index:'1',align:'center',color:''}
		],
		rowNum:10,
		sorts:true,
		pager : true,
		number:true,
		multiselect: false
	});	

});

$(function(){
	$("#productid").focusin(function() {
		var value=$("#productid").val();
        if(value=="请输入商品编号"){
			$("#productid").val("");
		}
    });
	$("#productid").focusout(function() {
		var value=$("#productid").val();
        if(value == ""){
			$("#productid").val("请输入商品编号");
		}
    });

	$(".seach_btn").click(function(){
		var productid = $("#productid").val();
		if(productid == "请输入商品编号"){
			productid = "";
		}
		$("#grid").html("");
		$("#grid").Grid({
			url : "/jiuyi/product/queryAllProduct?productid="+productid,
			dataType: "json",
			height: 'auto',
			colums:[
					{id:'2',text:'商品编号',name:"productid",index:'1',align:'center',color:'green'},
					{id:'3',text:'商品名称',name:"productname",index:'1',align:'center',color:'green'},
					{id:'4',text:'商品类别',name:"kindno",index:'1',align:'center',color:'green'},
					{id:'5',text:'商品现价',name:"price",index:'1',align:'center',color:'green'},
					{id:'6',text:'会员价格',name:"memprice",index:'1',align:'center',color:'green'},
					{id:'7',text:'原始价格',name:"oriprice",index:'1',align:'center',color:'green'},
					{id:'8',text:'操作时间',name:"remark",index:'1',align:'center',color:'green'},
					{id:'9',text:'操作类型',name:"flag",index:'1',align:'center',color:''}
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
		"url":"/jiuyi/product/updateProduct?productid="+id,
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
		 					var productid = $obj.find("table").eq(1).find("#productid").val();
		 					var productname=$obj.find("table").eq(1).find("#productname").val();
		 					var kindno=$obj.find("table").eq(1).find("#kindno").val();
		 					
		 					var type=$obj.find("table").eq(1).find("#type").val();
		 					
		 					var supplyno=$obj.find("table").eq(1).find("#supplyno").val();
		 					
		 					var storage=$obj.find("table").eq(1).find("#storage").val();
		 					var producttime=$obj.find("table").eq(1).find("#producttime").val();
		 					var keeptime=$obj.find("table").eq(1).find("#keeptime").val();
		 					
		 					var price=$obj.find("table").eq(1).find("#price").val();
		 					
		 					var memprice=$obj.find("table").eq(1).find("#memprice").val();
		 					var oriprice=$obj.find("table").eq(1).find("#oriprice").val();
		 					
		 					var winery=$obj.find("table").eq(1).find("#winery").val();
		 					var longitude=$obj.find("table").eq(1).find("#longitude").val();
		 					
		 					var latitude=$obj.find("table").eq(1).find("#latitude").val();
		 					var originplace=$obj.find("table").eq(1).find("#originplace").val();
		 					var alcohol=$obj.find("table").eq(1).find("#alcohol").val();
		 					
		 					var specifications=$obj.find("table").eq(1).find("#specifications").val();
		 					var flavor=$obj.find("table").eq(1).find("#flavor").val();
		 					var capacity=$obj.find("table").eq(1).find("#capacity").val();
		 					
		 					var material=$obj.find("table").eq(1).find("#material").val();
		 					var conditions=$obj.find("table").eq(1).find("#conditions").val();
		 					var process=$obj.find("table").eq(1).find("#process").val();
		 					
		 					$.ajax({
		 						url : "/jiuyi/product/saveProduct",
		 						type : "post",
		 						data:{
		 							productid:productid,
		 							productname:productname,
		 							kindno:kindno,
		 							type:type,
		 							supplyno:supplyno,
		 							storage:storage,
		 							producttime:producttime,
		 							
		 							keeptime:keeptime,
		 							price:price,
		 							memprice:memprice,
		 							oriprice:oriprice,
		 							winery:winery,
		 							longitude:longitude,
		 							latitude:latitude,
		 							
		 							originplace:originplace,
		 							alcohol:alcohol,
		 							specifications:specifications,
		 							flavor:flavor,
		 							capacity:capacity,
		 							
		 							material:material,
		 							conditions:conditions,
		 							process:process
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


function openAddWindow(){
	$("body").window({
		"id":"window1", 
		"url":"/jiuyi/product/prepareProduct",
		"title":"商品基本信息", 
		"content":"",
		"hasIFrame":true,
		"width":800, 
		"height":550, 
		"resizing":false,
		"diyButton":[{
			"id": "btOne",
			"btClass": "def_btn",
			"value": "保 存",
			"btFun": function() {
				$obj = $(document.getElementById('window1_iframe').contentWindow.document);
				var productid=$obj.find("table").eq(1).find("#productid").val();
				var productname=$obj.find("table").eq(1).find("#productname").val();
				var kindno=$obj.find("table").eq(1).find("#kindno").val();
				var supplyno=$obj.find("table").eq(1).find("#supplyno").val();
				
				var storage=$obj.find("table").eq(1).find("#storage").val();
				var producttime=$obj.find("table").eq(1).find("#producttime").val();
				var keeptime=$obj.find("table").eq(1).find("#keeptime").val();
				
				var price=$obj.find("table").eq(1).find("#price").val();
				
				var memprice=$obj.find("table").eq(1).find("#memprice").val();
				var oriprice=$obj.find("table").eq(1).find("#oriprice").val();
					
				var winery=$obj.find("table").eq(1).find("#winery").val();
				var longitude=$obj.find("table").eq(1).find("#longitude").val();
				
				var latitude=$obj.find("table").eq(1).find("#latitude").val();
				var originplace=$obj.find("table").eq(1).find("#originplace").val();
				var alcohol=$obj.find("table").eq(1).find("#alcohol").val();
				
				var specifications=$obj.find("table").eq(1).find("#specifications").val();
				var flavor=$obj.find("table").eq(1).find("#flavor").val();
				var capacity=$obj.find("table").eq(1).find("#capacity").val();
				
				var material=$obj.find("table").eq(1).find("#material").val();
				var conditions=$obj.find("table").eq(1).find("#conditions").val();
				var process=$obj.find("table").eq(1).find("#process").val();
				$.ajax({
					url : "/jiuyi/product/saveProduct",
					type : "post",
					data:{
						productid:productid,
						productname:productname,
						kindno:kindno,
						supplyno:supplyno,
						storage:storage,
						producttime:producttime,
						
						keeptime:keeptime,
						price:price,
						memprice:memprice,
						oriprice:oriprice,
						winery:winery,
						longitude:longitude,
						latitude:latitude,
						
						originplace:originplace,
						alcohol:alcohol,
						specifications:specifications,
						flavor:flavor,
						capacity:capacity,
						
						material:material,
						conditions:conditions,
						process:process
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
				}	
			}, {
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
	
}


function delRow(obj){
	var row = $(obj).parents('tr');
	$.ajax({
		url : "/jiuyi/product/deleteProduct?productid="+row.attr("id").split("_")[1],
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
