// 信息提示框
function showInfodialog(title,content,url,btn_ok,btn_cancel){
	url = arguments[3]||"";
	btn_ok = arguments[4]||"";
	btn_cancel = arguments[5]||"";
	var txtOk = "OK";
	var txtCancel = "";
	if(btn_ok!="")
	{
		txtOk = btn_ok;
	}
	if(btn_cancel!="")
	{
		txtCancel = btn_cancel;
	}
	var html = '<div class="modal_bg" id="infoModal" style="display:block;" ></div>' + 
			   '<div class="dialog dialog_cont" id="info_modal" style="display:block;">' +
			   		' <p class="dialog_title">' + title + '</p>' +
			   		'<p class="or_line"></p>' +
			   		'<p class="dialog_content">' + content + '</p>' +
			   		'<form id="dialog_form" class="form-vertical clearfix">' +
			   			'<p class="sure_btns">' +
			   				'<input type="button" class="info_btn" value="'+ txtOk + '" >' +
			   			' </p>' +
			   			'<p class="cancel_btns">'+
			   				'<input type="button" class="info_btn" value="'+ txtCancel + '" >' +
			   			'</p>' +
			   		'</form>' +
			   	'</div>';
	$("body").append(html);
	$('.sure_btns').click(function(){
		$("#infoModal").remove();
		$("#info_modal").remove();
		if(url!="")
		{
			window.location.href = url;
		}
	});
	$('.cancel_btns').click(function(){
		$("#infoModal").remove();
		$("#info_modal").remove();
	});
	if (txtCancel === ""){
		$("p.cancel_btns").remove();
		$("P.sure_btns").css("marginLeft","147px");
		$(".sure_btns input").attr("value",txtOk);
	}
}