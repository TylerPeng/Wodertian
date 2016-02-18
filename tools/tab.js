//tab标签切换

;(function(){
    'use strict';
    var tabName = [], tabContent, tabNameTemp,activeNameIndex= 0,activeContentIndex=0,
        nameBoxId = "tab-name-box",             //tab标题所在box的id
        contentBoxId = "tab-content-box",       //tab内容所在box的id
        contentClass = "tab-content";           //tab内容的class
    tabNameTemp = document.getElementById(nameBoxId).getElementsByTagName("li");
    tabContent = document.getElementById(contentBoxId).getElementsByClassName(contentClass);
    for(var i= 0,j=tabNameTemp.length;i<j;i++){
        tabName.push(tabNameTemp[i]);
    }
    tabName.map(function(item,index){
        item.onclick = function(){
            if(this.className.indexOf("active")===-1){
                this.className += " active";
                tabContent[index].className += " active";
                tabName[activeNameIndex].className = tabName[activeNameIndex].className.replace("active","");
                tabContent[activeContentIndex].className = tabContent[activeContentIndex].className.replace("active","");
                activeNameIndex = activeContentIndex = index;
            }
        };
    });
})();
