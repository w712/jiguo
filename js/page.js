$(function () {
    // 报告精选请求
    baogao()
    function baogao() {
        $.ajax({
            type: 'get',
            url: "http://127.0.0.1:3000/report/new",
            success: (function (res_1) {
                console.log(res_1);
                var path_new = template('bg', {
                    res_1: res_1
                })
                $('.baogao').html(path_new)
            })
        })
    }
    // 导购请求
    daogao()
    function daogao() {
        $.ajax({
            type: 'get',
            url: "http://127.0.0.1:3000/guid/new",
            success: (function (res) {
                console.log(res);
                var path_new = template('tpi', {
                    res: res
                })
                $('.daogao').html(path_new)
            })
        })
    }

    //酷玩请求
    kuwan()
    function kuwan() {
        $.ajax({
            type: 'get',
            url: "http://127.0.0.1:3000/play/new",
            success: (function (res_2) {
                console.log(res_2);
                var kuwan_new = template('kw', {
                    res_2: res_2[0]
                })
                $('.kuwan').html(kuwan_new)
            })
        })
    }

    //五一倒计时
    var wuyi = function () {
        var nowtime = new Date();
        var gotime = new Date(2022, 4, 1);
        var time = gotime - nowtime;//时间差
        console.log(time);
        var year = Math.floor(time / 1000 / 60 / 60 / 24);
        year = year < 10 ? '0' + year : year;
        var h = Math.floor(time / 1000 / 60 / 60 % 24);
        h = h < 10 ? '0' + h : h;
        var m = Math.floor(time / 1000 / 60 % 60);
        m = m < 10 ? '0' + m : m;
        var s = Math.floor(time / 1000 % 60);
        s = s < 10 ? '0' + s : s;
        var time_he = '距离五一还有：' + year + '天' + h + ':' + m + ':' + s;
        $('.timer span').html(time_he)
    }
    setInterval(wuyi, 1000);



})