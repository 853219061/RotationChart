

function getStyle(dom, attr) {
    return window.getComputedStyle(dom, null)[attr]
}


//之前弹性运动的封装方法
function startBufferMove(dom, attrObj, callback) {
  var iStop = false;
    clearInterval(dom.timer);
    dom.timer =  setInterval(() => {
        var iSpeed = null;
        var iCur = null;
        iStop = true;
        for( var i in attrObj){

            if(i == "opacity"){
                iCur = parseFloat(getStyle(dom,'opacity')) *100;
            }else{
                iCur = parseInt(getStyle(dom,i));
            }

            iSpeed =  (attrObj[i]  -   iCur) / 7; 
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

            if( i == 'opacity'){
                dom.style.opacity = (iCur + iSpeed) /100;
            }else{
                dom.style[i] = iCur + iSpeed + 'px'; 
            }

            if(iCur  != attrObj[i]){
                iStop = false;
            }
        }

        if(iStop ){
            clearInterval(dom.timer);
            typeof callback == 'function' && callback();
        }



    }, 30);
}