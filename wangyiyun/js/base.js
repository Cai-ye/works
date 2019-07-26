
function scroll(){//封装自己的scrollTop
    if(window.pageYOffset!==undefined){
        return {
            left:window.pageXOffset,
            top:window.pageYOffset
        }
    }
    else if(document.compatMode=='BackCompat'){
        return {
            left:document.body.scrollLeft,
            top:document.body.scrollTop
        }
    }
    return {
        left:document.documentElement.scrollLeft,
        top:document.documentElement.scrollTop
    }
}

function animate(ele,target){
    clearInterval(ele.timer);
    var speed=target>ele.offsetLeft?200:-200;
    ele.timer=setInterval(function(){
        ele.style.left=ele.offsetLeft+speed+"px";
        if(Math.abs(target-ele.offsetLeft)<Math.abs(speed)){
            ele.style.left=target+"px";
            clearInterval(ele.timer);
        }
    },200);
}

