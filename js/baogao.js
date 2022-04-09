// 最热请求
$(function () {

    //更换页面
    $(function () {
        $('.coolsm').on('click', function () {
            $(this).addClass('chred').siblings().removeClass('chred');
            var index = $(this).index();
            $('section').eq(index).show().siblings('section').hide();
        })

    })
})
