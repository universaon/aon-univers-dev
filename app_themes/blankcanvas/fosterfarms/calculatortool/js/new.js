
 jQuery(document).ready(function () {
 jQuery(".cts a").click(function (event) {
  event.preventDefault();
  var ccx = jQuery(this).attr('href');
 

jQuery('.plancc').fadeOut(10, function () {});

jQuery(ccx).delay(300).fadeIn('fast').addClass('active');
jQuery(".desc-con").hide();
jQuery(".nav-gs li").removeClass("active");
jQuery(".nav-gs > li:first-child").addClass("active");

jQuery(".desc-con.ds1").show();

  jQuery('.nav-gs').removeClass('act');
    jQuery('.gsc').removeClass('act2');

 jQuery(ccx + ' .nav-gs').addClass('act');
jQuery( ccx + " .gsc").addClass('act2');

 });
 jQuery("#ccb-act a").click(function (event) {
 event.preventDefault();
 var cc = jQuery(this).attr('href');
 
 jQuery("#navi").fadeOut('fast',function () {
 jQuery(cc).fadeIn('fast');
 jQuery(cc + ' .nav-gs').addClass('act');
     jQuery('.gsc').removeClass('act2');
 jQuery(cc + ' .gsc').addClass('act2');
 jQuery(".plan-container").addClass('plan-container2');

 });
 });
var ccd = false; 

 
jQuery(".toggle").click(function () {

var d1 = jQuery(this).attr('data-t1');
var d2 = jQuery(this).attr('data-t2');

if(ccd == false ){
 jQuery(this).parent().parent().parent().addClass("active2");

jQuery(this).removeClass('ac').addClass("ac2").text(d1);
ccd = true
}else{
 jQuery(this).parent().parent().parent().addClass("active2");

jQuery(this).removeClass("ac2").addClass('ac').text(d2);
ccd =false;
 

}
});
 jQuery(".act ul.tp li a ").live('click',function(event) {
 
 if(jQuery(this).parent().has("ul").length){
                            jQuery('.toggle.ac2').trigger('click');

                                          }else{

                                          }
                                          
                                          
 var dx = jQuery(this,'.toggle.ac2').attr('id');
 
  if(jQuery(this).text() == 'See savings with Critical Illness Insurance.') {  jQuery("." + dx).trigger('click');   jQuery('ul li').removeClass("active2");
return false;}
  if(jQuery(this).text() == 'See savings with Accident Insurance.') {  jQuery("." + dx).trigger('click'); jQuery('ul li').removeClass("active2");return false;}

 event.preventDefault();
 var data_green_bar,data_red_bar,data_green,data_red,data_green_popup,data_red_popup,data_green_outpocket,data_red_outpocket,data_extra,data_extra_two;
data_green_bar = jQuery(this).attr('data-green-bar');
 data_red_bar = jQuery(this).attr('data-red-bar');
data_green= jQuery(this).attr('data-green');
data_red= jQuery(this).attr('data-red');
data_green_popup= jQuery(this).attr('data-green-popup');
data_red_popup= jQuery(this).attr('data-red-popup');
data_green_outpocket= jQuery(this).attr('data-green-outpocket');
data_red_outpocket= jQuery(this).attr('data-red-outpocket');
data_extra= jQuery(this).attr('data-extra');
data_extra_two= jQuery(this).attr('data-extra-two');
data_dsc= jQuery(this).attr('data-dsc');
data_green_outpocket_bar= jQuery(this).attr('data-green-outpocket-bar');
data_red_outpocket_bar= jQuery(this).attr('data-red-outpocket-bar');

jQuery(".desc-con").hide();
 
 

 
jQuery(".act ul.tp  li").removeClass("active");
jQuery(this).parent().addClass("active");

if($('.act ul.tp  li').hasClass('active')) {
            $('.act ul.tp li.parent').addClass('active');
    } 


 jQuery(".cts a").click(function (event) {
  event.preventDefault();
  var ccx = jQuery(this).attr('href');
 var cbx = jQuery(this).attr('class');
 
 if(jQuery(this).hasClass('c1')) {
jQuery(".default-1").trigger('click');
 

}
 if(jQuery(this).hasClass('c2')) {
jQuery(".default-2").trigger('click');

}

 if(jQuery(this).hasClass('c3')) {
jQuery(".default-3").trigger('click');
 

}
 if(jQuery(this).hasClass('c4')) {
jQuery(".default-4").trigger('click');

}


 


});
var mi = jQuery(this).attr('class');
 
if( mi == 'navv hide-xs default-2' ||  mi == 'navv hide-xs default-1') {
 
 
 jQuery("." + data_dsc).fadeIn('fast');
jQuery(".act2 .green-tx span").text(data_extra);
jQuery(".act2 .red-tx span").text(data_extra_two);
jQuery(".act2 .greenbb").animate({ height: data_green_bar}, {queue: false,duration: 200, complete: function() {
jQuery(".act2 .greenbb .ctp span").text(data_green).fadeIn(33);;
 

jQuery(".act2 .redbb").animate({ height: data_red_bar}, {queue: false,duration: 200, complete: function() {
jQuery(".act2 .redbb .ctp span").text(data_red).fadeIn(33);

 
 }});

 }});
jQuery(".greenbb-arrow , .otp ,.green-tx span").hide();
jQuery(".redbb-arrow").hide();

return false;
}else{

 
jQuery("." + data_dsc).fadeIn('fast');
jQuery(".act2 .green-tx span").text(data_extra);
jQuery(".act2 .red-tx span").text(data_extra_two);
jQuery(".act2 .greenbb").animate({ height: data_green_bar}, {queue: false,duration: 200, complete: function() {
jQuery(".act2 .greenbb .ctp span").text(data_green).fadeIn(33);;
jQuery(".act2 .greenbb-arrow").empty().hide().text(data_green_popup).animate({"bottom" : jQuery(this).outerHeight() },200).show();

jQuery(".act2 .redbb").animate({ height: data_red_bar}, {queue: false,duration: 200, complete: function() {
jQuery(".act2 .redbb .ctp span").text(data_red).fadeIn(33);

jQuery(".act2 .redbb-arrow").empty().hide().text(data_red_popup).animate({"bottom" : jQuery(this).outerHeight() },200).show();
 }});

 }});
 }

jQuery(".act2 .redbb span,.greenbb span").fadeOut(1);
if(data_red_outpocket){
jQuery(".act2 .redbb .otp span").empty().text(data_red_outpocket).fadeIn('fast').delay(110).animate({"height" :data_red_outpocket_bar},300 , function () {
 
 
});

}
if(data_green_outpocket){
jQuery(".act2 .greenbb .otp span").empty().html(data_green_outpocket).fadeIn('fast').delay(110).animate({"height" :data_green_outpocket_bar},300);;
}
jQuery(".act2 .redbb-arrow").empty().text(data_red_popup).fadeIn('fast');

 });

 

 });
 