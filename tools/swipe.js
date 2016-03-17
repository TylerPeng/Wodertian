var x, y,xx,yy,swipeX,swipeY;
var swipeLeft = document.createEvent("Event");
var swipeRight = document.createEvent("Event");
var swipeTop = document.createEvent("Event");
var swipeBottom = document.createEvent("Event");
swipeLeft.initEvent("swipeLeft",true,true);
swipeRight.initEvent("swipeRight",true,true);
swipeTop.initEvent("swipeTop",true,true);
swipeBottom.initEvent("swipeBottom",true,true);

function addEventSwipe(obj){
    obj.addEventListener("touchstart",function(e){
        e.preventDefault();
        xx = x = e.touches[0].clientX;
        yy = y = e.touches[0].clientY;
    })
    obj.addEventListener("touchmove",function(e){
        e.preventDefault();
        xx = e.touches[0].clientX;
        yy = e.touches[0].clientY;
    })
    obj.addEventListener("touchend",function(e){
        e.preventDefault();
        swipeX = xx-x;
        swipeY = yy-y;
        if(Math.abs(swipeX)>Math.abs(swipeY)&&Math.abs(swipeX)>20){
            if(swipeX>0){
                this.dispatchEvent(swipeRight);
            }else{
                this.dispatchEvent(swipeLeft);
            }
        }else if(Math.abs(swipeY)>Math.abs(swipeX)&&Math.abs(swipeY)>20){
            if(swipeY>0){
                this.dispatchEvent(swipeBottom);
            }else{
                this.dispatchEvent(swipeTop);
            }
        }
    }.bind(obj))
}
