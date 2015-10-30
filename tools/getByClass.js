/**
 * Created by TylerLiu on 2015/10/30.
 */
/*
    通过class获取dom，返回数组
    可接受的参数为class,查找范围(传入dom对象，无参数时默认document)，标签（无参数时默认全部标签）
*/

function getByClass(name,element,type){
    var arr = [], element = element?element:document, type = type?type:"*";
    var allItem = element.getElementsByTagName(type);
    for(var i in allItem){
        if(allItem[i].className === name){
            arr.push(allItem[i]);
        }
    }
    return arr;
}