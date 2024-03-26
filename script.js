const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var tl = gsap.timeline();
    
    tl.from("#nav",{
        y: '30',
        opacity: 0,
        delay: -0.4,
        duration : 1.8, 
        ease: Expo.easeInOut
    })
    .to(".boundelem",{
        y:'0',
        duration: 2.5,
        delay:-2, 
        ease: Expo.easeInOut     
    })
    .to(".el",{
        y:'0',
        delay: -1,
        duration: 1.3 ,

    })
    .from("#mini",{
        y:'0',
        opacity: 0,
        delay: -0.8 ,
        duration:1,
        ease: Expo.easeInOut

    })


}
var timeout;

function mouseChaptakaro(){
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function (dets){
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(0.8,1.2,dets.clientX- xprev);
        yscale = gsap.utils.clamp(0.8,1.2,dets.clientY-yprev);
        xprev = dets.clientX;
        yprev = dets.clientY;
        mousemove(xscale,yscale);

        timeout = setTimeout(function(){
            document.querySelector("#mouse").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)scale(1,1)`;
        },100);
    })
}


function mousemove(xscale,yscale){
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#mouse").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)scale(${xscale},${yscale})`;
    })
}
mouseChaptakaro();
mousemove();
firstPageAnim();

document.querySelectorAll(".elem").forEach(function (elem){
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mousemove", function (dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot= dets.clientX - rotate;
        rotate = dets.clientX;
        
        gsap.to(elem.querySelector("img"), {
            opacity : 1,
            ease : Power2,
            top : diff,
            left : dets.clientX,
            rotate : gsap.utils.clamp(-20,20,diffrot*0.6),
        });
    });
    elem.addEventListener("mouseleave", function (dets){
        
        gsap.to(elem.querySelector("img"), {
            opacity : 0,
            // ease : Power1,
        });
    });
});