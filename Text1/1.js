$(document).ready(function () {
    $(".navbar-brand").click(function () {
        $("html,body").animate({scrollTop:0},1000)
    });
    $('.nav-item:nth-child(1) a').click(function () {
        $("html,body").animate({scrollTop: $('.about').offset().top},1000);
    });
    $('.nav-item:nth-child(2) a').click(function () {
        $("html,body").animate({scrollTop: $('.services').offset().top},1000);
    });
    $('.nav-item:nth-child(3) a').click(function () {
        $("html,body").animate({scrollTop: $('.portfolio').offset().top},1000);
    });
    $('.nav-item:nth-child(4) a').click(function () {
        $("html,body").animate({scrollTop: $('.contact').offset().top},1000);
    });
    $(window).scroll(function () {
       var vitri= $("body,html").scrollTop();
       console.log(vitri);
       if(vitri >= 100)
       {
           $(".navbar").addClass("menuthem");
       }
       else{
            $(".navbar").removeClass("menuthem");
       }
    });
});