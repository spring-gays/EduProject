
	
//样式~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var mouse1=document.getElementById('tupian1');
console.log(mouse1)
// var mouse1_1=document.getElementById('yanshi1');
var mouse2=document.getElementById('tupian2');
var mouse2_1=document.getElementById('yanshi2');
var mouse3=document.getElementById('tupian4');
var mouse3_1=document.getElementById('yanshi3');
var mouse4=document.getElementById('tupian5');
var mouse4_1=document.getElementById('yanshi4');
var scrtime;

console.log(JSON.parse(localStorage.getItem("userInfo")));

// mouse1.onmouseover=function(){
//     clearInterval(scrtime);
//     mouse1_1.style.display='block';
//     var i=105;
//     scrtime=setInterval(function(){
//         i-=5;
//         if(i<=35){
//             i=35;
//             clearInterval(scrtime);
//         }
//         mouse1_1.style.right=i+'px';
//     },50)
// }
// mouse1.onmouseout=function(){
//     clearInterval(scrtime);
//     mouse1_1.style.display='none';
//     mouse1_1.style.right=105+'px';
// }

// mouse2.onmouseover=function(){
//     clearInterval(scrtime);
//     mouse2_1.style.display='block';
//     var i=105;
//     scrtime=setInterval(function(){
//         i-=5;
//         if(i<=35){
//             i=35;
//             clearInterval(scrtime);
//         }
//         mouse2_1.style.right=i+'px';
//     },50)
// }
// mouse2.onmouseout=function(){
//     clearInterval(scrtime);
//     mouse2_1.style.display='none';
//     mouse2_1.style.right=105+'px';
// }

mouse3.onmouseover=function(){
    clearInterval(scrtime);
    mouse3_1.style.display='block';
    var i=105;
    scrtime=setInterval(function(){
        i-=5;
        if(i<=35){
            i=35;
            clearInterval(scrtime);
        }
        mouse3_1.style.right=i+'px';
    },50)
}

mouse3.onmouseout=function(){
    clearInterval(scrtime);
    mouse3_1.style.display='none';
    mouse3_1.style.right=105+'px';
}

mouse4.onmouseover=function(){
    clearInterval(scrtime);
    mouse4_1.style.display='block';
    var i=105;
    scrtime=setInterval(function(){
        i-=5;
        if(i<=35){
            i=35;
            clearInterval(scrtime);
        }
        mouse4_1.style.right=i+'px';
    },50)
}

mouse4.onmouseout=function(){
    clearInterval(scrtime);
    mouse4_1.style.display='none';
    mouse4_1.style.right=105+'px';
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//放回顶部~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
mouse3.onclick=function(){
    var time=setInterval(function(){
            /*获取滚动条Y轴滚动的距离*/
        var scrolly=window.scrollY;
        var speed=scrolly/10;
        var target=scrolly-speed;
        if(scrolly<=20){
            target=0;
            clearInterval(time);/*先运行完定时器Interval中的代码后才会清除定时器*/
        }
        window.scrollTo(0,target);
    },10)
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~	

//用户登录~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$("#memberLoginPanel").hide();
var clicknum=0;
var zuoboxnum=0;//判断是否登录成功
var username="";//存放登录后的用户账户
$(document).ready(function(){
$("#zuobox1").click(function(){
  document.getElementById("memberAcct").value="";
    document.getElementById("memberPwd").value="";
  if(clicknum==0){
    $("#memberLoginPanel").show();
    clicknum=1;
   }
  else{
      $("#memberLoginPanel").hide();
    clicknum=0;
  }
});
});



$(function(){
$("#lgMiddle").click(function(){
    if(zuoboxnum==1){
        username="";
        zuoboxnum=0;
        document.getElementById("lgMiddle").innerHTML="登录";
        $("#memberLoginPanel").hide();
        alert("成功退出登录");
        return;
    }
    var zuoboxname=document.getElementById("memberAcct").value;
    var zuoboxpassword=document.getElementById("memberPwd").value;
    if(zuoboxpassword==""||zuoboxname=="") 
         {alert("请输入用户名和密码");}
    else {
        // $.getJSON("denluzhuce.json", function (data){
        //      $.each(data, function (infoIndex, info){
        //          if(info["name"]==zuoboxname&&info.password==zuoboxpassword){
        //              username=info["name"];
        //              zuoboxnum=1;
        //              document.getElementById("zuoboxname").value="";
        //             document.getElementById("zuoboxpassword").value="";
        //             document.getElementById("zuoboxbutton").innerHTML="退出登录";
        //             $("#zuobox1_1").hide();
        //              alert("登录成功");
        //              return false;
        //          }
        //      })
        //      if(zuoboxnum==0){
        //          alert("请输入正确的用户名和密码");
        //          document.getElementById("zuoboxname").value="";
        //         document.getElementById("zuoboxpassword").value="";
        //      }
        // })
        localStorage.setItem("username",zuoboxname);
        console.log(localStorage.getItem("username"));
        window.location.reload();
    }
})
})