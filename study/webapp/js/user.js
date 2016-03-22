$(function(){
	$("#grid").Grid({
		url : "/app/user/queryAllUser",
		dataType: "json",
		height: 'auto',
		colums:[
			{id:'2',text:'用户编号',name:"customerid",index:'1',align:'center',color:'green'},
			{id:'3',text:'用  户  名',name:"customername",index:'1',align:'center',color:'green'},
			{id:'4',text:'手  机  号',name:"telphone",index:'1',align:'center',color:'green'},
			{id:'5',text:'类型',name:"type",index:'1',align:'center',color:'green'},
			{id:'6',text:'注册时间',name:"url",index:'1',align:'center',color:'green'},
			{id:'7',text:'操作类型',name:"flag",index:'1',align:'center',color:''}
		],
		rowNum:10,
		sorts:true,
		pager : true,
		number:true,
		multiselect: false
	});	

});

$(function(){
	$("#userid").focusin(function() {
		var value=$("#userid").val();
        if(value=="请输入用户编号"){
			$("#userid").val("");
		}
    });
	$("#userid").focusout(function() {
		var value=$("#userid").val();
        if(value == ""){
			$("#userid").val("请输入用户编号");
		}
    });

	$(".seach_btn").click(function(){
		var userid = $("#userid").val();
		if(userid == "请输入用户编号"){
			userid = "";
		}
		$("#grid").html("");
		$("#grid").Grid({
			url : "/app/user/queryAllUser?customerid="+userid,
			dataType: "json",
			height: 'auto',
			colums:[
					{id:'2',text:'用户编号',name:"customerid",index:'1',align:'center',color:'green'},
					{id:'3',text:'用  户  名',name:"customername",index:'1',align:'center',color:'green'},
					{id:'4',text:'手  机  号',name:"telphone",index:'1',align:'center',color:'green'},
					{id:'5',text:'类型',name:"type",index:'1',align:'center',color:'green'},
					{id:'6',text:'注册时间',name:"url",index:'1',align:'center',color:'green'},
					{id:'7',text:'操作类型',name:"flag",index:'1',align:'center',color:''}
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
		"url":"/app/user/loadUser?customerid="+id,
		"title":"用户基本信息", 
		"content":"",
		"hasIFrame":true,
		"width":500, 
		"height":400, 
		"resizing":false,
		"diyButton":[{
		 				"id": "btOne",
		 				"btClass": "def_btn",
		 				"value": "保存",
		 				"btFun": function() {
		 					$obj = $(document.getElementById('window1_iframe').contentWindow.document);
		 					var customerid = $obj.find("table").eq(1).find("#customerid").val();
		 					var customername=$obj.find("table").eq(1).find("#customername").val();
		 					var telphone=$obj.find("table").eq(1).find("#telphone").val();
		 					var sex=$obj.find("table").eq(1).find("#sex").val();
		 					var type=$obj.find("table").eq(1).find("#type").val();
		 					
		 					$.ajax({
		 						url : "/app/user/updateUser",
		 						type : "post",
		 						data:{
		 							customerid:customerid,
		 							customername:customername,
		 							telphone:telphone,
		 							sex:sex,
		 							type:type
		 							
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
		url : "/app/user/deleteUser?userid="+row.attr("id").split("_")[1],
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
