
$(document).ready(function(){
    $('.carousel').carousel({
    interval: 3000,
})
    $(".search_form").css("display","none");
    $(".s_icon").click(function(){
        $(".search_form").toggle();
    });

    var parallaxNode1 = document.getElementsByClassName('section_1');
    let textBlock = parallaxNode1[0].children[0];
    let speed = parallaxNode1[0].getAttribute('data-speed');
    window.addEventListener('scroll', function (e) {
        parallaxNode1[0].style.backgroundPosition = '0px '+ (window.scrollY * speed) + 'px';  
        textBlock.style.transform = 'translateY('+ window.scrollY*.25 +'px)';
    });

        setTimeout(function(){ 
           $(".section_1").addClass("active"); 
       }, 600);
        
        var scroll = $(window).scrollTop();
        var sec2 = $('.section_2').position().top;
        var sec3 = $('.section_3').position().top;
        var sec4 = $('.section_4').position().top;
        var sec5 = $('.section_5').position().top;
        var sec6 = $('.section_6').position().top;
        var sec7 = $('.section_7').position().top;
        var sec8 = $('.section_8').position().top;
        if (scroll === sec2 || scroll > sec2 - 400) {
            $(".section_2").addClass("animation");
        }else{ 
            $(window).scroll(function() { 
                var scroll = $(window).scrollTop();
                var sec2 = $('.section_2').position().top;
                 if (scroll >= sec2 - 300){
                    $(".section_2").addClass("animation"); 
                 }
            }); 
        }

        if (scroll === sec3 || scroll > sec3 - 500) {
            $(".section_3").addClass("animation");
        }else{ 
            $(window).scroll(function() { 
                var scroll = $(window).scrollTop();
                var sec3 = $('.section_3').position().top;
                 if (scroll >= sec3 - 400){
                    $(".section_3").addClass("animation"); 
                 }
            }); 
        }

            if (scroll === sec4 || scroll > sec4 - 400) {
                $(".section_4").addClass("animation");
                }else{ 
                    $(window).scroll(function() { 
                    var scroll = $(window).scrollTop();
                    var sec4 = $('.section_4').position().top;
                     if (scroll >= sec4 - 300){
                        $(".section_4").addClass("animation"); 
                    }
                }); 
            }

            if (scroll === sec5 || scroll > sec5 - 400) {
                $(".section_5").addClass("animation");
                }else{ 
                    $(window).scroll(function() { 
                    var scroll = $(window).scrollTop();
                    var sec5 = $('.section_5').position().top;
                     if (scroll >= sec5 - 300){
                        $(".section_5").addClass("animation"); 
                    }
                }); 
            }

            if (scroll === sec6 || scroll > sec6 - 400) {
                $(".section_6").addClass("animation");
                }else{ 
                    $(window).scroll(function() { 
                    var scroll = $(window).scrollTop();
                    var sec6 = $('.section_6').position().top;
                     if (scroll >= sec6 - 300){
                        $(".section_6").addClass("animation"); 
                    }
                }); 
            }

            if (scroll === sec7 || scroll > sec7 - 400) {
                $(".section_7").addClass("animation");
                $(".news_content_1").addClass("active");
                 setTimeout(function(){ 
                    $(".news_content_2").addClass("active");
                }, 300);
                
                 setTimeout(function(){ 
                  $(".news_content_3").addClass("active");
                }, 500);
                }else{ 
                    $(window).scroll(function() { 
                    var scroll = $(window).scrollTop();
                    var sec7 = $('.section_7').position().top;
                     if (scroll >= sec7 - 300){
                        $(".section_7").addClass("animation"); 
                        $(".news_content_1").addClass("active");
                       setTimeout(function(){ 
                    $(".news_content_2").addClass("active");
                }, 300);
                
                 setTimeout(function(){ 
                  $(".news_content_3").addClass("active");
                }, 500);
                    }
                }); 
            }


            if (scroll === sec8 || scroll > sec8 - 400) {
                $(".section_8").addClass("animation");
                }else{ 
                    $(window).scroll(function() { 
                    var scroll = $(window).scrollTop();
                    var sec8 = $('.section_8').position().top;
                     if (scroll >= sec8 - 300){
                        $(".section_8").addClass("animation"); 
                    }
                }); 
            }
});


jQuery(function ($) {
    'use strict'
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false,
            mediaPath = 'https://archive.org/download/mythium/',
            extension = '',
            tracks = '',
            buildPlaylist = $(tracks).each(function(key, value) {
                var trackNumber = value.track,
                    trackName = value.name,
                    trackDuration = value.duration;
                if (trackNumber.toString().length === 1) {
                    trackNumber = '0' + trackNumber;
                }
            }),
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).on('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).on('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                }
            }).get(0),
        extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
    }
});
plyr.setup($('#audio1'), {});
