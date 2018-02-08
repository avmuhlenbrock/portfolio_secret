/**
 * Created by Li on 29/01/2018.
 */

$(document).ready(function () {

    setTimeout(function () {
        $('.load').fadeOut(500)
    },2000);


});



$('.titleContainer').click(function () {

    $('#menu').animate({top:'-10%'},2000);
    setTimeout(function () {

        window.location.replace('index.html')

    },1000)

});


$('.selectLine').each(function () {

    var thisLine = $(this);

    thisLine.show();
    thisLine.css({width:0});

    thisLine.parent().mouseenter(function () {

        // thisLine.fadeIn(200)
        thisLine.animate({width:'100%'},100)

    });


    thisLine.parent().mouseleave(function () {

        // thisLine.fadeOut(200)
        thisLine.animate({width:'0%'},100)

    });

});


$('.scrollUpCube').click(function () {

    console.log('top',window.pageYOffset);

    spin(1000);
    setTimeout(function () {
        scrollUp(500);
    },1000)

});


function goto(url) {

    $('.load').fadeIn(500);
    $('.titleContainer').animate({right:'100%'},1000);
    $('#menu').animate({top:'-10%'},1000);
    setTimeout(function () {
        window.location.href = url
        //window.location.replace(url)

    },1000)

}

$('.titleContainer').click(function () {

    goto('index.html')

});

$('#about').click(function () {

    goto('about.html')

});

$('#work').click(function () {

    goto('work.html')

});

$('#contact').click(function () {

    goto('Resume__AvM.pdf')

});


function adapt() {

    if(window.innerWidth<2200){

        $('.titleText').css({'font-size':'36pt'});
        $('.titleCube').css({'width':'36px'});
        $('#menu').css({'font-size':'20pt'});
        $('.detailTitle').css({'font-size':'20pt'});
        $('.detailText').css({'font-size':'14pt'});
        $('.yearText').css({'font-size':'40pt','line-height':'40pt'});
        $('.detailProject').css({'font-size':'40pt'});

        $('.maskText').css({'font-size':'20pt'});
        $('.projectTitle').css({'font-size':'20pt'});
        $('.projectInfo').css({'font-size':'20pt'});
        $('.projectDes').css({'font-size':'14pt'});

    }else{


        $('.titleText').css({'font-size':'60pt'});
        $('.titleCube').css({'width':'60px'});
        $('#menu').css({'font-size':'30pt'});
        $('.detailTitle').css({'font-size':'30pt'});
        $('.detailText').css({'font-size':'20pt'});
        $('.yearText').css({'font-size':'60pt','line-height':'60pt'});
        $('.detailProject').css({'font-size':'60pt'});

        $('.maskText').css({'font-size':'30pt'});
        $('.projectTitle').css({'font-size':'30pt'});
        $('.projectInfo').css({'font-size':'30pt'});
        $('.projectDes').css({'font-size':'20pt'});
    }

}

$( document ).ready(function() {
    adapt()
});

$( window ).resize(function() {
    adapt()
});


function scrollUp(time,to,cb) {

    to = to || 0;

    var scale = window.pageYOffset-to;

    var now = 1;

    var sc = setInterval(function () {

        now -= 10/time;

        var pos = (1-Math.cos(now*Math.PI/2))*scale+to;

        window.scrollTo(0,pos);
        if(now <=0) {

            clearInterval(sc);
            if(cb) cb();

        }

    },10)


}

function spin(time) {

    var cube = $('.scrollUpCube');

    var now = 0;

    var speed = 0;

    var angle = 0;

    var sp = setInterval(function () {

        now += 10/time;

        angle += (speed++)*0.4/Math.PI;

        cube.css({'transform': 'rotate('+angle+'deg)'});

        if(now >=1) {

            clearInterval(sp);
            cube.css({'transform': 'rotate('+0+'deg)'});

        }

    },10)


}
