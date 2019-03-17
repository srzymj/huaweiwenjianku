function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}
window.onload=function(){
    $("#topbanner").style.display="block";
    $("#close").onclick=function(){
      $("#topbanner").style.display="none";
		}
		

		// 顶部的划过事件
		 for(var i=0;i<=4;i++){
			 $(".header_top_caidan")[i].parentNode.onmouseover=function(){
			 $(".header_top_caidan")[i].style.display="block";
			 }
			 $(".header_top_caidan")[i].parentNode.onmouseout=function(){
				$(".header_top_caidan")[i].style.display="none";
		}
	  	
		
	}
		
		
		
}