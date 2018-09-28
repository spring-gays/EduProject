var c_title = document.getElementById('title');
	var c_price = document.getElementById('price').getElementsByTagName('span')[2];
	var react_success = document.getElementsByClassName('react-success')[0];
	var addCart = document.getElementById('addCart');
	var url = window.location.search;
	// var data = JSON.parse(decodeURI(url.split('=')[1]));
	var data=JSON.parse(localStorage.getItem('data'));
window.onload = function () {

	var add = document.getElementById('add');
	var sub = document.getElementById('sub');
	var count = document.getElementById('incount');
	var cimg = document.getElementById('cimg').getElementsByTagName('img')[0];//课程图片
	add.onclick = function () {
		count.value = parseInt(count.value) + 1;
	}
	sub.onclick = function () {
		if (count.value == 1) {
			count.value = 1;
		} else {
			count.value = parseInt(count.value) - 1;
		}
	}
	addCart.onclick = function () {
		react_success.style.display = 'block';
		toCart();
		setTimeout(function () {
			react_success.style.display = 'none';
		}, 1000)
	}

	
	// console.log(data);
	cimg.src = data.new_order.image_url;
	c_title.innerHTML = data.new_order.title;
	c_price.innerHTML = data.new_order.price;
	console.log('localStorage',JSON.parse(localStorage.getItem("data")));

}
var buy = document.getElementById('buy');
var incount=document.getElementById('incount');
var new_order={}
// console.log(buy)
buy.onclick = function () {
	toCart();
	window.open('order.html');
}
function toCart(){
	new_order={
		id:data.new_order.id,
		title:data.new_order.title,
		price:data.new_order.price,
		count:parseInt(incount.value)
	}
	data.orders.push(new_order);
	console.log('push一次');
	console.log('加入购物车的data',data);
	localStorage.setItem('data',JSON.stringify(data));
	// var orders_url='order.html?data='+encodeURI(JSON.stringify(data));
}
