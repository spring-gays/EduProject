console.log(document.getElementById('header'));
var header_as = document.getElementById('header').querySelectorAll('a');

var header_spans = document.getElementById('header').querySelectorAll('span');
var header_right = document.getElementById('header').querySelector('.header-right');
window.onload = function () {
    //给所有头部banner添加click事件

    for (let i = 0; i < header_as.length; i++) {
        header_as[i].onclick = function () {
            console.log(i);
            headerBannerClick(this.innerHTML);
            this.classList.add('special-a');
            this.parentNode.classList.add('bottom-line');
            for(let j=0;j<header_as.length;j++){
                if(j!=i){
                    header_as[j].classList.remove('special-a');
                    header_as[j].parentNode.classList.remove('bottom-line');
                }
            }
        }
    }
}
var main_page = document.getElementById('main-page');
var freeClass_page = document.getElementById('freeClass-page');
var careePath_page = document.getElementById('careePath-page');
var realFight_page = document.getElementById('realFight-page');

//获取头部banner


function headerBannerClick(str) {
    switch (str) {
        case '首页': main_page.style.display = '';
            freeClass_page.style.display = 'none';
            careePath_page.style.display = 'none';
            realFight_page.style.display = 'none';
            break;
        case '免费课程': freeClass_page.style.display = '';
            main_page.style.display = 'none';
            careePath_page.style.display = 'none';
            realFight_page.style.display = 'none';
            break;
        case '职业路径': careePath_page.style.display = '';
            main_page.style.display = 'none';
            freeClass_page.style.display = 'none';
            realFight_page.style.display = 'none';
            break;
        case '实战课程': realFight_page.style.display = '';
            main_page.style.display = 'none';
            freeClass_page.style.display = 'none';
            careePath_page.style.display = 'none'; break;
    }
}