$("#add_btn").click(function(){
	$("add_btn").css("margin-bottom","10px");
	$("ul.additem").toggle();
	$(".tri").css("border-bottom",'6px solid #fff').css('border-top','none');
	if($('ul.additem').css('display') == "block"){
		$(".tri").css("border-top",'6px solid #fff').css('border-bottom','none');
	}
	$("#chinesename").val("");
	$("#lastname").val("");
	$("#firstname").val("");
	$("#idcard").val("");
	$("#student_num").val("");
	$("#nationnality").val("");
	$("#school").val("");
	$("#id_form").attr("action","http://www.edu.com/user/add_student");
	$("#submit_btn").text("添加");

});
$("#tui").click(function(){
	$("form").toggle();
	$("form .form-group").css("display","none");
	$(".reminderimg").toggle();
	if($(".reminderimg").css("display") == "block"){
		$(".submit").css("display",'none');
	}
	$("form .form-group.tui").css("display",'block');

})
$("#alimony").click(function(){
	$("form").toggle();
	$("form .form-group").css("display","none");
	$(".reminderimg").toggle();
	if($(".reminderimg").css("display") == "block"){
		$(".submit").css("display",'none');
	}
	$("form .form-group.alimony").css("display",'block');
})
$("#ecare").click(function(){
	$("form").toggle();
	$("form .form-group").css("display","none");
	$(".reminderimg").toggle();
	if($(".reminderimg").css("display") == "block"){
		$(".submit").css("display",'none');
	}
	$("form .form-group.ecare").css("display",'block');
})
$("input#country").focus(function(){
	$("#country-item").css("display","inline-block");
})
$("input#self_nationnality").focus(function(){
	$("#nationnality-item").css("display","inline-block");
})
$("input#relation").focus(function(){
	$("#relation-item").css("display","inline-block");
})
$("input#nationnality").focus(function(){
	$("#nation").css("display","inline-block");
	$("#nation").removeClass("select2-hidden-accessible");
})
$("input#school").focus(function(){
	$("#id_searchSchool").css("display","inline-block");
	$("#id_searchSchool").removeClass("select2-hidden-accessible");
})
$("#submit_btn").click(function() {
	if (isNullByID("chinesename")) {
		showInfodialog("错误提示","请输入姓名");
		return;
	}
	if (isNullByID("idcard")) {
		showInfodialog("错误提示","请输入身份证号码");
		return;
	}
	if (isNullByID("id_searchSchool")) {
		showInfodialog("错误提示","请输入就读学校");
		return;
	}
	if (isNullByID("student_num"))
	{
		showInfodialog("错误提示","请输入学号");
		return;
	}
	$("#id_form").submit();
});

$("#edit_btn").click(function(){
	var studentID = jQuery('input[type="radio"][name="optionsStudent"]:checked').val();
	if(isNull(studentID))
		return;
	$.ajax({
		url:"http://www.edu.com/user/student_detail/"+studentID,
		type:"POST",
		timeout:5000,
		contentType: "application/json; charset=utf-8",
		dataType:"text",
		success:function(txt){
			var data = eval("("+txt+")");
			$("add_btn").css("margin-bottom","10px");
			$(".form-horizontal").toggle();
			$("#id_form").attr("action","http://www.edu.com/user/update_student");
			$("#submit_btn").text("更新");

			$("#chinesename").val(data.name);
			$("#lastname").val(data.lastname);
			$("#firstname").val(data.firstname);
			$("#idcard").val(data.idcard);
			$("#student_num").val(data.studentId);
			$("#nationnality").val(data.countryName);
			$("#school").val(data.schoolName);
			$("#id_selected_student").val(studentID);
			$("#self_nationnality").val(data.nationalityName);
			$("#pinyin").val(data.pinyin);
			$("#passport").val(data.passport);
			$("#relation").val(data.relationName);

			var optionCountry = "<option value='"+ data.country +"' selected>"+ data.countryName + "</option>";
			$("#nation").append(optionCountry);
			var optionSchool = "<option value='"+ data.school +"' selected>"+ data.schoolName + "</option>";
			$("#id_searchSchool").append(optionSchool);
		},
		error:function(XMLHttpRequest, textStatus, errorThrown){
			console.log(XMLHttpRequest+"==="+textStatus+"==="+errorThrown);
		}
	});
});

$("#del_btn").click(function(){
	var studentID = jQuery('input[type="radio"][name="optionsStudent"]:checked').val();
	if(isNull(studentID))
		return;
	$("#optionform").submit();
});
//点击弹出入驻每日一语
$('.service_side').click(function(){
	$('.hide_information').show();
	$('.info_box').addClass('op');
	$('.container').addClass('op');
});
//点击提交按钮
$('.sumb').click(function(){
	$('.hide_information_content').hide();
	$('.last_content').show();
});