$( document ).ready(function() {
    /* ↓ MENU ↓ *
    $(window).scroll(function(){
        var windowTopPosition = $(this).scrollTop();
        if(windowTopPosition > 0) {
            $('header').addClass('white-header');
        }else{
            $('header').removeClass('white-header');
        }
    });
    $('#mobile-menu-btn').click(function(){
        if($(this).hasClass('opened')){
            $(this).removeClass('opened').siblings('.menu-list').removeClass('opened').closest('nav').removeClass('opened');
        }else{
            $(this).addClass('opened').siblings('.menu-list').addClass('opened').closest('nav').addClass('opened');
        }
    });
    /* ↑ MENU ↑ */

    /* ↓ DETAIL_TABS ↓ */
    $('.detail-info-tabs').find('.detail-info-tab').click(function(){
        var tabIndex = $(this).index();

        $(this).addClass('active').siblings().removeClass('active');
        $(this).closest('.detail-info-tabs').siblings('.detail-info-tabs-content').find('.detail-info-tab-content').eq(tabIndex).fadeIn(100).siblings().hide();
    });
    /* ↑ DETAIL_TABS ↑ */

    /* ↓ SIMPLE_DROPDOWN_LIST ↓ */
    $('.simple-dropdown-list').children('li').click(function(){
        $(this).toggleClass('opened').find('.simple-dropdown-descr').stop().slideToggle(100);
    });
    /* ↑ SIMPLE_DROPDOWN_LIST ↑ */
    
    /* ↓ PHONE_INPUT_MASK ↓ */
    $('.phone-masked-input').mask('+7 (999) 999-99-99');
    /* ↑ PHONE_INPUT_MASK ↑ */

    /* ↓ SCROLL_LINK ↓ */
    $('a.scroll_link').click(function(event){
        event.preventDefault();
        
        var object_name = $(this).attr('href').replace('#', '');
            $scroll_object = $('a[name="' + object_name + '"]');
        
        if($scroll_object.length){
            $('html, body').animate({
                scrollTop: $scroll_object.offset().top
            }, 600);
        }
    });
    /* ↑ SCROLL_LINK ↑ */
    
    /* ↓ SCROLL_UP_DOWN_BTN ↓ */
    $(window).scroll(function(){
        var scrollUpDownBtn = $('#scroll-up-down-btn');
        if($(this).scrollTop() >= 300){
            scrollUpDownBtn.addClass('scroll-up-btn');
        }else{
            scrollUpDownBtn.removeClass('scroll-up-btn');
        }
    });
    $('#scroll-up-down-btn').click(function(){
        var windowPosition = $(window).scrollTop();
        var $this = $(this);

        if($this.hasClass('scroll-down-btn')){
            if($this.hasClass('scroll-up-btn')){
                $this.data('win-pos',windowPosition);
                $('html, body').stop().animate({
                    scrollTop: 0
                }, 300, function(){
                    $('#scroll-up-down-btn').addClass('scroll-down-btn');
                });
            }else{
                var lastWindowPosition = $this.data('win-pos');
                $('html, body').stop().animate({
                    scrollTop: lastWindowPosition
                }, 300);
                $this.removeClass('scroll-down-btn');
            }
        }else{
            if($this.hasClass('scroll-up-btn')){
                $this.data('win-pos',windowPosition);
                $('html, body').stop().animate({
                    scrollTop: 0
                }, 300, function(){
                    $('#scroll-up-down-btn').addClass('scroll-down-btn');
                });
            }
        }
    });
    /* ↑ SCROLL_UP_DOWN_BTN ↑ */
});