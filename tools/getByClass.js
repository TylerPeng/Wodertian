/**
 * Created by TylerLiu on 2015/10/30.
 */
/*
    ͨ��class��ȡdom����������
    �ɽ��ܵĲ���Ϊclass,���ҷ�Χ(����dom�����޲���ʱĬ��document)����ǩ���޲���ʱĬ��ȫ����ǩ��
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