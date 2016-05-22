//左侧导航显示隐藏效果
/*var a=document.getElementById("left_Navigation_top");
var a_menu_box= a.getElementsByClassName("menu_box");
for (var i= 0;i<a_menu_box.length;i++){
    a_menu_box[i].index=i;
    a_menu_box[i].onmouseenter=function(){
        utils.addClass(this,'mlw');
        //utils.children(this,"div")[1].css("display", "block");
        utils.css(utils.children(this,"div")[1],"display", "block")
       /!* $(this).children(".menu_box_in").css("display", "block");
        //$(this).children("menu_box_in").css();
        .css("display", "block")
        *!/
    };
    a_menu_box[i].onmouseleave=function(){
        $(this).removeClass('mlw');
        $(this).children(".menu_box_in").css("display", "none");
    };
}*/
~function (){$(".menu_box").on('mouseenter',function(){
    $(this).addClass('mlw');
    $(this).children(".menu_box_in").css("display", "block");
});

    $(".menu_box").on('mouseleave',function(){
        $(this).removeClass('mlw');
        $(this).children(".menu_box_in").css("display", "none");
    });
}();


//火箭效果(遇到的问题  假如点击的元素是a标签  他不会触发效果好像是因为a标签还有个默认的点击行为！！！那怎么取消掉)
var huojian1=document.getElementById("huojian1");
window.onscroll=function(){
    var curTop=document.documentElement.scrollTop||document.body.scrollTop;
    var curHeight=(document.documentElement.clientHeight||document.body.clientHeight)/4;
    huojian1.style.visibility=curTop>curHeight?"visible":"hidden";
    var a=$(".beiAn").offset().top,b=$(document).scrollTop()+$(window).height();
    if(b>a){
        $(".box3").css("bottom",80);
        return;
    }
    $(".box3").css("bottom",0);
};
huojian1.onclick=function(){
    var duration=3000,interval=10,at=document.documentElement.scrollTop||document.body.scrollTop;
    var step=(at/duration)*interval;
    var timer=window.setInterval(function(){
        var curTop=document.documentElement.scrollTop||document.body.scrollTop;
        if (curTop===0){
            window.clearInterval(timer);
            return;
        }
        curTop-=step;
        document.documentElement.scrollTop=curTop;
        document.body.scrollTop=curTop;
    },interval);
};

/*//console.log($(".beiAn").offset().top);
console.log(document.documentElement.scrollTop||document.body.scrollTop);*/
/*window.onscroll=function(){

};*/






//轮播图右面大图。
var changDiv = document.getElementById("home_banner_inner");
var changDivUl = changDiv.getElementsByTagName("ul")[0];
var step = 0, timer = null;
function move() {
    if (step >= 3) {
        step = 0;
        utils.css(changDivUl, "top", 0);
    }
    step++;
    utils.animate(changDivUl, {top: -step * 160}, 300);
    rightMove();
}
timer = window.setInterval(move, 2000);

//轮播图右面小图。
var home_banner_right = document.getElementById("home_banner_right");
var right_out = document.getElementById("home_banner_right_out");
var rightUlLis = home_banner_right.getElementsByTagName("li");
var right_i = home_banner_right.getElementsByTagName("i");
function rightMove() {
    var temp = step;
    temp = (temp >= rightUlLis.length) ? 0 : step;
    utils.animate(right_out, {top: temp * 55}, 300);
    for (var i = 0, len = right_i.length; i < len; i++) {
        i === temp ? utils.removeClass(right_i[i], "zheRao") : utils.addClass(right_i[i], "zheRao");
    }
}
/*home_banner_right.onmouseover = function (e) {

 window.clearInterval(timer);

 /!*  for (var i= 0,len=rightUlLis.length;i<len;i++){
 var cur=rightUlLis[i];
 var curT=utils.offset(cur).top;
 var curL=utils.offset(cur).left;
 }*!/
 /!*做不出这个效果，这个是用鼠标的偏移量在哪个li里面判断的，方法感觉没问题就是反应跟不上是计算不过来还是写的有问题
 console.log(e.pageY);*!/
 if (utils.offset(rightUlLis[0]).top < e.pageY && e.pageY < utils.offset(rightUlLis[0]).top + 46) {
 /!*utils.animate(right_out,{top:0},300);
 utils.animate(changDivUl,{top:0},300);*!/
 utils.removeClass(right_i[0], "zheRao");
 utils.addClass(right_i[1], "zheRao");
 utils.addClass(right_i[2], "zheRao");
 return;
 }
 if (utils.offset(rightUlLis[1]).top < e.pageY && e.pageY < utils.offset(rightUlLis[1]).top + 46) {
 /!* utils.animate(right_out,{top:1},300);
 utils.animate(changDivUl,{top:1},300);*!/
 utils.removeClass(right_i[1], "zheRao");
 utils.addClass(right_i[0], "zheRao");
 utils.addClass(right_i[2], "zheRao");
 return;
 }
 if (utils.offset(rightUlLis[2]).top < e.pageY && e.pageY < utils.offset(rightUlLis[2]).top + 46) {
 /!*utils.animate(right_out,{top:2},300);
 utils.animate(changDivUl,{top:2},300);*!/
 utils.removeClass(right_i[2], "zheRao");
 utils.addClass(right_i[1], "zheRao");
 utils.addClass(right_i[0], "zheRao");
 return;
 }

 };
 home_banner_right.onmouseout = function (e) {
 timer = window.setInterval(move, 2000);

 };*/
home_banner_right.onmouseover = function (e) {

    window.clearInterval(timer);
    /*var target = e.target;
     if (target.tagName.toLocaleUpperCase()==="I") {
     utils.removeClass(target,"zheRao");
     var tarPar=target.parentNode;
     var a=utils.siblings(tarPar);
     for (var i= 0,len= a.length;i<len;i++){
     utils.addClass(utils.firstChild(a[i]),"zheRao");
     }
     /!* console.log(utils.index(target.tagName));
     utils.index(target.tagName);*!/
     utils.animate(right_out, {top: temp * 55}, 300);
     return;
     }
     if(target.tagName.toLocaleUpperCase()==="IMG"){
     utils.removeClass(utils.prev(target),"zheRao");
     tarPar=target.parentNode;
     a=utils.siblings(tarPar);
     for (i= 0,len= a.length;i<len;i++){
     utils.addClass(utils.firstChild(a[i]),"zheRao");
     }
     return;
     }
     if(target.tagName.toLocaleUpperCase()==="LI"){
     utils.removeClass(utils.firstChild(target),"zheRao");
     a=utils.siblings(target);
     for (i= 0,len= a.length;i<len;i++){
     utils.addClass(utils.firstChild(a[i]),"zheRao");
     }
     return;
     }*/
    /*if(target.className==="home_banner_right_out"||target.tagName.toLocaleUpperCase()==="EM"){

     }*/

};
home_banner_right.onmouseout = function (e) {
    timer = window.setInterval(move, 2000);

};
moveOut();
function moveOut() {
    for (var i = 0, len = rightUlLis.length; i < len; i++) {
        var a = rightUlLis[i];
        a.index = i;
        a.onmouseover = function () {
            utils.animate(right_out, {top: this.index * 55}, 300);
            utils.animate(changDivUl, {top: -this.index * 160}, 300);
            for (var k = 0, lenk = right_i.length; k < lenk; k++) {
                k === this.index ? utils.removeClass(right_i[this.index], "zheRao") : utils.addClass(right_i[k], "zheRao");
            }

        }
    }
}
/*var small_banner = document.getElementById("small_banner");
var small_banner_move = small_banner.getElementsByClassName("small_banner_move");
var small_bannerLis = small_banner.getElementsByTagName("li");*/
~function ($) {
    //direction:计算进入或者离开的方向
    function direction(pageX, pageY) {
        var $o = $(this).offset(),
            $w = $(this).outerWidth(),
            $h = $(this).outerHeight();
        //->计算鼠标指针位于当前元素“比例空间”中的坐标位置:“比例空间”->以元素中心为坐标原点,以元素左边位置为X轴的-1,以元素右边位置为X轴的1,以元素顶部位置为Y轴的-1,以元素底部位置为Y轴的1,的直角坐标空间
        var $x = (pageX - $o.left - ($w / 2)) * ($w > $h ? ($h / $w) : 1);
        var $y = (pageY - $o.top - ($h / 2)) * ($h > $w ? ($w / $h) : 1);

        //->计算鼠标指针位于当前元素“比例空间”中的方位:0、1、2、3 => 上、右、下、左
        //->Math.PI:圆周率π
        //->Math.atan2($y, $x):返回-PI到PI之间的值,是从X轴正向逆时针旋转到点($y,$x)时经过的角度
        return Math.round((((Math.atan2($y, $x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
    }

    //->根据方向实现对应的动画操作
    function mouseAnimate(interval) {
        interval = interval || 200;
        $(this).on("mouseenter mouseleave", function (e) {
            var $mark = $(this).children(".small_banner_move"), $posL = 0, $posT = 0, $tarL = 0, $tarT = 0, $dir = direction.call(this, e.pageX, e.pageY);
            if (e.type === "mouseenter") {
                $dir === 0 ? $posT = "-100%" : null;
                $dir === 1 ? $posL = "100%" : null;
                $dir === 2 ? $posT = "100%" : null;
                $dir === 3 ? $posL = "-100%" : null;
                $mark.css({top: $posT, left: $posL, display: "block"}).stop().animate({
                    top: $tarT,
                    left: $tarL
                }, interval);
                return;
            }
            $dir === 0 ? $tarT = "-100%" : null;
            $dir === 1 ? $tarL = "100%" : null;
            $dir === 2 ? $tarT = "100%" : null;
            $dir === 3 ? $tarL = "-100%" : null;
            $mark.stop().animate({top: $tarT, left: $tarL}, interval, function () {
                $mark.css({
                    display: "none"
                });
            });
        });
    }

    $.fn.extend({mouseAnimate: mouseAnimate});
}(jQuery);

$(".small_banner li").mouseAnimate(200);
/*右下切换*/
var right_Ul = document.getElementById("right_Ul");
var right_Ul_lis=right_Ul.getElementsByTagName("li");
var hotList=document.getElementById("hotList");
var hotList_R=document.getElementById("hotList_R");
right_Ul_lis[0].onclick=function(){
    this.className="right_UlBg";
    right_Ul_lis[1].className="";
    hotList.style.display="block";
    hotList_R.style.display="none";
};
right_Ul_lis[1].onclick=function(){
    this.className="right_UlBg";
    right_Ul_lis[0].className="";
    hotList_R.style.display="block";
    hotList.style.display="none";
};





















