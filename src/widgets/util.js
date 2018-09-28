var classLists=document.getElementsByClassName('class-lists');
for(let i=0;i<classLists.length;i++){
    classLists[i].onclick=function(){
        // console.log(this);
        var data=JSON.parse(localStorage.getItem('data'))||'';
        var id=i;
        var title=this.getElementsByClassName('name')[0].innerText;
        var price=this.getElementsByClassName('price')[0].getElementsByTagName('span')[0].innerText;
        var image_url=this.getElementsByTagName('img')[0].src;
        console.log(data.orders)
        if(typeof data.orders=='undefined'){
            console.log('执行if');
            data={
                new_order:{
                    id:id,
                    title:title,
                    price:parseInt(price),
                    image_url:image_url
                },
                orders:[]
                
            }
        }
        else{
            console.log('执行else');
            data.new_order={
                id:id,
                    title:title,
                    price:parseInt(price),
                    image_url:image_url
            }
        }
        
        localStorage.setItem('data',JSON.stringify(data));
        console.log('localstorage',JSON.parse(localStorage.getItem('data')));
        var url='../mods/class-details/courseDetail.html?data='+encodeURI(JSON.stringify(data));
        window.open(url);
    }
}