var listFlag = document.getElementById("titeImg");
var listLeft = document.getElementsByClassName("left")[0];
var list = document.getElementsByClassName("info")[0];
var first = document.getElementsByClassName("first")[0];
var flydiv = document.getElementsByClassName("flydiv")[0];
var swiper = document.getElementsByClassName("swiper")[0];
var swIndex = 1;

var showFlag = true;
listFlag.onclick = function () {
    if (showFlag) {
        showFlag = false;
        list.style.display = 'none';
    } else {
        showFlag = true;
        list.style.display = 'block';
    }
}

var time = setInterval(function() {
    if(swIndex==1){
        swIndex=2;
    }else{
        swIndex=1;
    }
    swiper.style.backgroundImage = "url('../images/banner"+swIndex+".png')";
},3500)



