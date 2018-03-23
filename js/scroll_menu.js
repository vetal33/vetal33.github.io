$(window).scroll(function(){
    var docscroll=$(document).scrollTop();
    if(docscroll>80){
        $('div[id=nav_]').addClass('fixed');
        /*var $img_1 = $('img[class=logo_visible]');
        var $img_2 = $('img[class=logo_hide]');
        $img_1.removeClass('logo_visible');
        $img_1.addClass('logo_hide');
        $img_2.removeClass('logo_hide');
        $img_2.addClass('logo_visible');*/

    }else if (docscroll<80){

        $('div[id=nav_]').removeClass('fixed');


    }
});