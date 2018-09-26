	$(document).ready(function(){
	may1.style.backgroundColor="#0a45af";
	$("#contain2").hide()
	$("#contain3").hide()
	$("#contain4").hide()
	$("#contain5").hide()
})

$(document).ready(function(){
for (let i=1;i<6;i++) {
	var id = "#may"+i;
	$(id).mouseenter(
		function(){   
			$("#contain"+i).show();
			$("#contain"+i).siblings().hide();
			id.style.backgroundColor="#0a45af";
			$(id).siblings().backgroundColor="#fff"
		}
	)
}
})