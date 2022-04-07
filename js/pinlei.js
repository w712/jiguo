// 最热请求
$(function () {
    //最热请求
    kuwan_hot()
    function kuwan_hot() {
        $.ajax({
            type: 'get',
            url: "http://192.168.0.105:3000/play/new",
            success: (function (res_2) {
                console.log(res_2);
                var kuwan_hot = template('hot', {
                    res_2: res_2[1]
                })
                $('.zuire').html(kuwan_hot)
            })
        })
    }


    // 最新请求
    kuwan_new()
    function kuwan_new() {
        $.ajax({
            type: 'get',
            url: "http://192.168.0.105:3000/play/new",
            success: (function (res_2) {
                console.log(res_2);
                var kuwan_new = template('kw', {
                    res_2: res_2[0]
                })
                $('.zuixin').html(kuwan_new)
            })
        })
    }


    //更换页面
    $(function () {
        $('.coolsm').on('click', function () {
            $(this).addClass('chred').siblings().removeClass('chred');
            var index = $(this).index();
            $('section').eq(index).show().siblings('section').hide();
        })

    })
})





