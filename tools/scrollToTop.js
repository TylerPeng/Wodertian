/**
 * Created by TylerLiu on 2015/10/29.
 */

/*����������ֱ�ӵ���*/

function scrollToTop(){

    var Y = window.scrollY, Timer;

    Timer = setInterval(scroll,5)

    function scroll(){
        window.scrollY==0&&clearInterval(Timer);
        window.scrollTo(window.scrollX,window.scrollY-Y/50);
    }
}