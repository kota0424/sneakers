$(function(){
    $('.hamburger').on('click', function(){
        if($('#header').hasClass('open')){
            $('#header').removeClass('open');
        } else {
            $('#header').addClass('open');
        }
    });
    $('#mask').on('click', function(){
        $('#header').removeClass('open');
    });
    $('#navi a').on('click', function(){
        $('#header').removeClass('open');
    });

    //スムーススクロール
    $('a[href^="#"]').on('click', function(){
        //リンクの取得
        let href = $(this).attr("href");
        //ジャンプ先のid名をセット
        let target = $(href == "#" || href == "" ? 'html' : href);
        //トップからジャンプ要素までの距離を取得
        let position = target.offset().top;
        //animateで実行
        //600msで実行
        $("html, body").animate({scrollTop:position}, 600, "swing");
        return false;
    });
    

    //pick up スライダー
    $('.slide-area').slick({
        arrows: false,
        centerMode: true,
        slidesToShow: 3,
        autoplay: true,
        centerPadding: '50px',
        autoplayspeed: 3000,
        speed: 1000,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    centerPadding: '50px',
                    slidesToShow: 1
                }
            }
        ]
    });

    //スクロール時のイベント
    $(window).scroll(function(){
        //fade-inクラスに対して順に行う
        $('.fade-in').each(function(){
            //スクロールした距離
            let scroll = $(window).scrollTop();
            //fade-inクラス要素までの距離
            let target = $(this).offset().top;
            //画面の高さ
            let windowHeight = $(window).height();
            //fade-inクラスから200px通過した
            //タイミングで要素を表示
            if(scroll > target - windowHeight + 200){
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    });
});