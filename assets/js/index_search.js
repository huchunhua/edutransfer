var nation = [
    {id: 0, text: 'American Educational Institution/美国其他教育机构'},
    {id: 1, text: 'Australia/澳大利亚'},
    {id: 2, text: 'America(University)/美国(大学)'},
    {id: 3, text: 'Japan/日本'},
    {id: 4, text: 'Singapore/新加坡'},
    {id: 5, text: 'New Zealand/新西兰'},
    {id: 6, text: 'England/英国'},
    {id: 7, text: 'America(middleschool)/美国(中学)'}
];
$("#nation").select2({
    // width:"295px",
    placeholder: "请选择国家/Please select Country",
    data:nation
});
$("#nation").on("change",function(){
    var countryId = $(this).val();
        $("#id_searchSchool").select2({
            // width:"360px",
            placeholder: "请选择学校/Please select School",
            data:school
        });
        //  获取学校数据
        var school =  $.ajax({
            url:"http://www.edu.com/index/school_list/"+countryId,
            type:"POST",
            timeout:5000,
            contentType: "application/json; charset=utf-8",
            dataType:"text",
            success:function(txt){
                var data = eval("("+txt+")");
                $("#id_searchSchool").empty();
                    $.each(data,function(i,e){
                        var s = "<option value='"+ e.id +"'>"+ e.school_en + "</option>";
                        if(e.school_ch!="")
                        {
                            var s = "<option value='"+ e.id +"'>"+ e.school_en + "/" + e.school_ch +"</option>";
                        }
                        $("#id_searchSchool").append(s);
                    });
                $("#id_searchSchool").append("<option value='0'>找不到付款对象</option>");
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){
                console.log(XMLHttpRequest+"==="+textStatus+"==="+errorThrown);
            }
        });
    $("#id_input-group").css("padding-left","30px");
});

