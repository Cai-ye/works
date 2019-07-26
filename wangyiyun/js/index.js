window.onload=function(){
    var height=document.getElementsByClassName('bar')[0].offsetHeight;
var jump=document.getElementsByClassName('jump')[0];
var content=document.getElementsByTagName("iframe")[0];
var barBott=document.getElementsByClassName("bar-bot")[0];
var barRed=document.getElementsByClassName("bar-red")[0];
 window.onscroll=function(){
            if(window.scroll().top>height){
                jump.style.display="block";
            }else{
                jump.style.display="none";
            }
		}
		
// 导航栏点击
var barUl=document.getElementsByClassName("bar-choose")[0];
var barLis=barUl.getElementsByTagName("li");
var barArrow=barUl.getElementsByTagName("i")[0];
for(var i=0;i<barLis.length;i++){
	barLis[i].index=i;
	barLis[i].addEventListener("click",function(){
		animate(barArrow,barLis[this.index].offsetLeft+barLis[this.index].offsetWidth/2);
		if(this.index!=0){
			barBott.style.display="none";
		}
		if(this.index==0){
			barBott.style.display="block";
			barRed.style.height=0;
			content.src="./findmusic.html";
			content.style.height="1739px";
		}else if(this.index==1){
			content.src="./mymusic.html";
			content.style.height="700px";
		}else if(this.index==2){
			content.src="./friend.html";
			content.style.height="700px";
		}
		

	})
}
}