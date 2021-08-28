$(document).ready(function () {
    // slove for about scroll
    $(window).scroll(function(e) {
        var locationWindow = $(window).scrollTop();
        if(locationWindow >= $('.wrap-one__body').offset().top - 200) {
            $('.wrap-one__body-about-content').addClass('active');
            $('.wrap-one__body-about-list').addClass('active');
        }

    })



});