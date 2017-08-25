/**
 * Created by xiaofeng on 2017/7/28.
 */

    /**
     *
     * @param object
     * @param time
     * @param className
     */
    function cartoon(object,time,className){
        object.each(function(i){
            var el = $(this);
            setTimeout(function(){
                el.show().addClass(className+' animated');
            },time*i);
        });
    }
document.onreadystatechange = function(){
    if(document.readyState == "complete"){
       $('.load').fadeOut();
        cartoon($('.sos'),300,'fadeInUp');
        var winHeight = $(window).height();
        $(window).bind('scroll',function(){
            var winTop = $(window).scrollTop();
            if(winTop > winHeight){
                cartoon($('.com'),300,'fadeInRightBig');
            }
        });
        //cartoon($('.about'),300,'fadeInUp');
        $('.index-banner').height(winHeight);
        $('.nav >li').last().find('span').remove();
        var xtop = $(window).scrollTop();
        var yyop = $('#slide').offset().top;
        $('.slide').click(function(){
            $('html,body').animate({scrollTop:yyop+xtop}, 1000);});
        $('.index-com-l').last().find('p').css({'padding':'60% 12px'});
        $('.index-com-r').last().find('p').css({'padding':'60% 12px'});
        $('.index-serve-tally,.index-serve-annual,.index-serve-pay').hover(function(){
            $(this).find('h3').hide().end().find('div.index-serve-div').slideDown("slow");
        },function(){
            $(this).find('div.index-serve-div').slideToggle('slow').end().find('h3').show('slow');
        });
    }

}
