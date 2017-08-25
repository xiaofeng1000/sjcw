/**
 * Created by xiaofeng on 2017/7/28.
 */
$(function($){
    $('.load').hide();
    $('.nav >li').last().find('span').remove();
    $('.list-menuTow ul').find('li').last().append('<span>|</span>');
})
