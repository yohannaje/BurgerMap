/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var designWidth = 1351;
var maxFactor = 1920 / designWidth;
var initParams = {};

var state = {
    executive: 1,
    mediaSection: 'none',
    bgHidden: false
};



function scrollToId(selector) {
    $('html, body').animate({
        scrollTop: $(selector).offset().top - $('#bunny-main-nav-id').height() + 2
    }, 1000, function() {
        if($(window).width() < 900) {
            return;
        }

        if(selector === '#bunny-content') {
            state.bgHidden = true;
            $('.bunny-bg').hide();
            window.scrollTo(0, 0);
        }
    });
}


function goHome(){
     if(endsWith(window.location.href, '#/')) {
         scrollToId('body');
     } else {
        if($(window).width() < 900) {
             $.routes.find('comunicado').routeTo();
        } else {
             $.routes.find('home').routeTo();
        }
     }
}

//Comunicado

function loadAbout() {
    //  $('#bunny-nav-center a').each(function() {
    //     if($(this).attr('href').indexOf('#comunicado') !== -1) {
    //         $(this).addClass('bunny-boldpink-color');
    //     } else {
    //         $(this).removeClass('bunny-boldpink-color');
    //     }
    // });


    $("#bunny-content").load("pages/about.html #bunny-about");

    // if(!dontScroll) {
    //     scrollToId('#bunny-content');
    // }
}

// //Mobile
// function hamburgerClick(show) {
//     var menu = $($('.mobile-menu')[0]);
//     var showDefined = typeof show !== "undefined";
//     if(menu.position().left < 0 || (showDefined && show)) {
//         $('#mobile-menu-close-helper').css('display', 'block');
//         menu.animate({
//             left: 0
//         }, 1000);
//     } else {
//         $('#mobile-menu-close-helper').css('display', 'none');
//         menu.animate({
//             left: -menu.width()
//         }, 1000);
//     }
// }

// function hamburgerForce(show) {
//     var menu = $($('.mobile-menu')[0]);
//     if(show) {
//         $('#mobile-menu-close-helper').css('display', 'block');
//         menu.animate({
//             left: 0
//         }, 1000);
//     } else {
//         $('#mobile-menu-close-helper').css('display', 'none');
//         menu.animate({
//             left: -menu.width()
//         }, 1000);
//     }
// }

//Document Ready
$(document).ready(function () {
   
    if(window.location.href.indexOf('#') === -1) {
        window.location.href = window.location.href + "#/";
        
    }

   
});

$.routes.add('about/', 'about', loadAbout);

$.routes.add('/', 'home', function(){
    scrollToId("body");
});

