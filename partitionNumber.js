/**
 * Created by TylerLiu on 2015/10/26.
 */

/* 千位分隔，传入数字或字符串，返回字符串 */

function partitionNumber(num){
    var num = num.toString();
    var str="";                             //整数部分
    var numArr="";
    if(num.indexOf(".")!=-1){
        var temp = num.length-num.indexOf(".");
        str = num.substr(0,num.length-temp);
        numArr = num.substr(num.length-temp,temp);
    }else{
        str = num;
        numArr=".00";
    }

    if(str.length<=3){
        numArr = str+numArr;
    }else{
        for(var i=str.length-1;i>=0;i=i-3){
            if(i===2){
                numArr = str[0]+str[1]+str[2]+numArr;
            }
            if(i===1){
                numArr = str[0]+str[1]+numArr;
            }
            if(i===0){
                numArr = str[0]+numArr;
            }
            if(i>2){
                numArr = ","+str[i-2]+str[i-1]+str[i]+numArr;
            }
        }
    }
    return numArr;
}
