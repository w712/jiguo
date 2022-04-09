$(function () {
    //1 显示隐藏电梯导航
    top1;
    //当我们 点击了小li   此时不需要执行   页面滚动事件的  li  的背景  选择  添加 current
    var flag = true;//节流阀  互斥锁
    function top1() {
        var out = $('.w_hot_box ').offset().top - 1;
        if ($(document).scrollTop() >= out) {
            $('.fixedtool').fadeIn();
        } else {
            $('.fixedtool').fadeOut();
        }
    }
    $(window).scroll(function () {
        top1();
        //当页面滚动到内容区域某个模块  ，左侧电梯导航， 相应的小li模块，添加current类  ，兄弟移除 
        if (flag) {
            $('nav .ss').each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top - 1) {
                    // console.log(i);
                    $('.fixedtool li').eq(i).addClass('current').siblings().removeClass();
                }
            })
        }
    })

    //2 点击电梯导航页面可以滚动到相应内容区域
    $('.fixedtool li').click(function () {
        flag = false;
        console.log($(this).index());
        //选出对应索引号的内容区的盒子   计算它的offset().top
        var top_ = $('nav .ss').eq($(this).index()).offset().top;
        //页面滚动效果
        $('body, html').animate({
            scrollTop: top_
        }, function () {
            flag = true;
        })
        //点击 小li 添加current类   其他兄弟移除
        $(this).addClass('current').siblings().removeClass();
    })

})