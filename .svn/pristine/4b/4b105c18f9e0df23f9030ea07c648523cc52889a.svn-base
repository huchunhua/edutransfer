
/*验证码*/
$(function(){
    createCode();
    createCode2();
});

var code;
function createCode() {
    code = "";
    var codeLength = 4; //验证码的长度
    var checkCode = document.getElementById("checkCode");
    var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
    for (var i = 0; i < codeLength; i++)
    {
        var charNum = Math.floor(Math.random() * 52);
        code += codeChars[charNum];
    }
    if (checkCode)
    {
        checkCode.className = "code";
        checkCode.innerHTML = code;
    }
}
function validateCode()
{
    var inputCode = document.getElementById("inputCode").value;
    if (inputCode.length <= 0)
    {
        alert("请输入验证码！");
    }
    else if (inputCode.toUpperCase() != code.toUpperCase())
    {
        alert("验证码输入有误！");
        createCode();
    }
    else
    {
        location.href="login.html";
    }
}


function createCode2() {
    code = "";
    var codeLength = 4; //验证码的长度
    var checkCode = document.getElementById("forgetPwd");
    var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
    for (var i = 0; i < codeLength; i++)
    {
        var charNum = Math.floor(Math.random() * 52);
        code += codeChars[charNum];
    }
    if (checkCode)
    {
        checkCode.className = "code";
        checkCode.innerHTML = code;
    }
}
function validateCode2()
{
    var inputCode = document.getElementById("inptForgetCode").value;
    if (inputCode.length <= 0)
    {
        alert("请输入验证码！");
    }
    else if (inputCode.toUpperCase() != code.toUpperCase())
    {
        alert("验证码输入有误！");
        createCode2();
    }
    else
    {
        location.href="findPwd.html";
    }
}

 /* 轮播 */
$(function(){
    var aPage = $('#main .pageCir a');		//分页按钮
    var aImg = $('#main .box .banner');		//图像集合
    var iSize = aImg.size();		//图像个数
    var index = 0;		//切换索引
    var t;
    $('#btnLeft').click(function(){		//左边按钮点击
        index--;
        if(index<0){
            index=iSize-1
        }
        change(index)
    });
    $('#btnRight').click(function(){    //右边按钮点击
        index++;
        if(index>iSize-1){
            index=0
        }
        change(index)
    });
    //分页按钮点击
    aPage.click(function(){
        index = $(this).index();
        change(index)
    });
    //切换过程
    function change(index){
        aPage.removeClass('active');
        aPage.eq(index).addClass('active');
        aImg.stop();
        //隐藏除了当前元素，所以图像
        aImg.eq(index).siblings().animate({
            opacity:0
        },1000);
        //显示当前图像
        aImg.eq(index).animate({
            opacity:1
        },1000)
    }
    function autoshow() {
        index=index+1;
        if(index<=iSize-1){
            change(index);
        }else{
            index=0;
            change(index);
        }
    }
    int=setInterval(autoshow,3000);
    function clearInt() {
        $('#btnLeft,#btnRight,.page a').mouseover(function() {
            clearInterval(int);
        })
    }
    function setInt() {
        $('#btnLeft,#btnRight,.page a').mouseout(function() {
            int=setInterval(autoshow,3000);
        })
    }
    clearInt();
    setInt();
});

// 手机号码格式验证
function IsTel() {
    var tel = document.getElementById("phone").value.trim();
    var mychar = document.getElementById("tel-tips");
    var mstel = document.getElementById("mstel");
    mstel.style.display = "inline-block";
    var reg = /^1[0-9]{10}$/;
    if(tel.length === 0) {
        mychar.style.display = "inline-block";
        mstel.innerHTML = "请输入电话号码";
        mychar.setAttribute('display','inline-block');
    }
    else if(! reg.test(tel)) {
        mychar.style.display = "inline-block";
        mstel.innerHTML = "请输入正确的手机号码";
        mychar.setAttribute('display','inline-block');
    }
    else {
            mychar.style.display = "none";
        }
}
// 验证邮箱格式
function IsEmail(){
    var email = document.getElementById("email").value.trim();        
    var mychar = document.getElementById("email-tips");
    var msemail = document.getElementById("msemail");
    var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        msemail.style.display = "inline-block"; 
        if(email.length == 0) {
            mychar.style.display = "inline-block";
            msemail.innerHTML = "请填写邮箱地址";
            mychar.setAttribute('display','inline-block');
        }
        else if(!reg.test(email)) {
            mychar.style.display = "inline-block";
            msemail.innerHTML = "邮箱格式错误，请重新输入";
            mychar.setAttribute('display','inline-block');
        }
        else {
            mychar.style.display = "none";
        }       
}

// 验证身份证号码
function IsIdnumber(){
    var idnumber = document.getElementById("id_number").value.trim();
    var mychar = document.getElementById("idnumber-tips");
    var msidnumber = document.getElementById("msidnumber");
    var reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/; 
    msidnumber.style.display = "inline-block";
    if(idnumber.length == 0){
        mychar.style.display = "inline-block";
        msidnumber.innerHTML = "请填写身份证号码";
        mychar.setAttribute('display','inline-block');
    }
    else if(!reg.test(idnumber)) {
        mychar.style.display = "inline-block";
        msidnumber.innerHTML = "请填写有效的身份证号码";
        mychar.setAttribute('display','inline-block');
    }
    else {
        mychar.style.display = "none";
    }
}
// 中文名验证
function IsCname(){
    var cname = document.getElementById("chinesename").value.trim();
    var mychar = document.getElementById("cname-tips");
    var mscname = document.getElementById("mscname");
    var reg = /[\u4E00-\u9FA5]{2,5}(?:·[\u4E00-\u9FA5]{2,5})*/;
    mscname.style.display = "inline-block";
    if (cname.length == 0){
        mychar.style.display = "inline-block";
        mscname.innerHTML = "请填写中文姓名";
        mychar.setAttribute('display','inline-block');
    }
    else if(!reg.test(cname)) {
        mychar.style.display = "inline-block";
        mscname.innerHTML = "请正确填写中文姓名";
         mychar.setAttribute('display','inline-block');
    }
    else {
       mychar.style.display = "none"; 
    }
}
// 地址验证
function IsAddress(){
    var address = document.getElementById("address").value.trim();
    var mychar = document.getElementById("address-tips");
    var msaddress = document.getElementById("msaddress");
    msaddress.style.display = "inline-block";
    if(address.length == 0 ) {
        mychar.style.display = "inline-block";
        msaddress.innerHTML = "请填写您的家庭住址";
        mychar.setAttribute('display','inline-block');
    }
    else{
        mychar.style.display = "none"; 
    }
}