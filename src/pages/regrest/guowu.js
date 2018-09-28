

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//注册~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
  var sub=document.getElementById('formbutton');
    
  sub.onclick=function(){
	console.log("uname")
    var addjson="";
    var writejson="";
	var uname=document.getElementById("username").value;//账户
	var pwd=document.getElementById('pass').value;//密码
    var pwd1=document.getElementById('pass1').value;//确认码
    var zhucename=document.getElementById('zhucename').value;//用户名
    var email=document.getElementById('email').value;//Email
    var phone=document.getElementById('phone').value;//手机号
    var message=document.getElementById('message').value;//信息
    console.log(uname)

	if(uname==""){
		alert("账户不能为空");
		return;
	}
	if(pwd==""){
		alert("密码不能为空");
		return;
	}
	if(pwd1==""){
		alert("确认码不能为空");
		return;
	}
	if(zhucename==""){
		alert("用户名不能为空");
		return;
	}
	if(email==""){
		alert("Email不能为空");
		return;
	}
	if(email.search(/\d@\b/i)==-1){
		alert("Email格式错误");
		return;
	}
	if(phone==""){
		alert("手机号不能为空");
		return;
	}
	if(pwd!=pwd1){
		alert("密码错误");
		return;
	}
	
    // $.getJSON("denluzhuce.json", function (data){
	// 	$.each(data, function (infoIndex, info){
	//     	if(info.name==uname){
	//     		alert("账户不能重复");
	//     		return;
	//     	}
	//     	if(info.username==zhucename){
	//     		alert("用户名不能重复");
	//     		return;
	//     	}
	//     	if(info.phone==phone){
	//     		alert("手机号不能重复");
	//     		return;
	//     	}
	//     })
	// })

	addjson={
	    "name":uname,
	    "password":pwd,
	    "username":zhucename,
	    "phone":phone,
	    "email":email,
	    "message":message
	}

	console.log('aa',addjson);
	addjson = JSON.stringify(addjson);
	console.log('bb',addjson);
	localStorage.setItem("userInfo",addjson);
	console.log(JSON.parse(localStorage.getItem("userInfo")));
	
	window.location.href="../index.html";



	// $.getJSON("denluzhuce.json", function (data){
  	// var newstr="";
  	// writejson="";
	// 	for(var i=0;i<data.length;i++){
	// 		newstr=JSON.stringify(data[i]);
	// 		writejson+=newstr;
	// 		writejson+=",";
	// 	}  
	// 	addjson=JSON.stringify(addjson);
	//     writejson="["+writejson+addjson+"]";
       
	// })
   }
//   alert(writejson);
 //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

