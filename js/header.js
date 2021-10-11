$(function() {
    const header = $('.header');
    const headerLogo = $('.header__logo');
    const headerContent = $('.header__content');

    $(window).scroll(function() {
        if($(this).scrollTop() > 300) {
            header.css({
                'background': '#fefefe',
                'transition': '.3s',
                'box-shadow': 'rgba(0, 0, 0, 0.16) 0px 1px 4px'

            });
            headerContent.css({
                'transition': '.3s',
               'height': '60px'
            });
            headerLogo.fadeOut(150);
        } else {
            header.css({
                'background': 'transparent',
                'transition': '.3s',
                'box-shadow': 'none'
            });
            headerContent.css({
                'transition': '.3s',
                'height': '105px'
            });
            headerLogo.fadeIn();
        }
    });
});