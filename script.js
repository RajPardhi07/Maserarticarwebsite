function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);


    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();




}

function loaderh1Move() {
    $('#loader h1').textillate({
        in: {
            effect: 'fadeInUp',
            delayScale: 1,
        }
    });
}

function loaderMove() {
    var loader = gsap.timeline()

    loader.from("#text-anime", {
        x: -500,
        opacity: 0,
        duration: 0.8,

    })
        .to("#text-anime", {
            y: -50,
            opacity: 0,
            duration: 0.8,
            delay: 2
        })

        .from("#loader video", {
            x: 200,
            opacity: 0,
            duration: 0.8
        }, "-=2")
        .to("#loader video", {
            y: 50,
            opacity: 0,
            duration: 0.8,

        },)

        .to("#loader", {
            top: "-100vh",
            duration: 0.1,

        })

}

function navMove() {
    var tl = gsap.timeline()
    tl.from("#nav-part1 h5", {
        y: -50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.25,
        delay: 4.2

    })

        .from("#nav img", {
            y: -50,
            opacity: 0,
            stagger: 0.25,
            delay: 0.8
        })

        .from("#nav-part2 i", {
            y: -50,
            opacity: 0,
            stagger: 0.25,
            delay: 0.6
        })

}


function page1Move() {
    $('#page1 h1').textillate({
        in: {
            effect: 'fadeInUp',
            delayScale: 14,
            // delay:20,

        }
    }, "=15");
}


function page2H5() {
    gsap.from("#page2 h5", {
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        scrollTrigger: {
            trigger: "#page2 h5",
            scroller: "#main",
            start: "top 70%",
            end: "top 69%",
            scrub: 3,
            // markers:true
        }
    })
}

function page2H1() {
    gsap.from("#page2 h1", {
        x: -100,
        opacity: 0,
        duration: 1.5,
        // stagger:0.25,
        scrollTrigger: {
            trigger: "#page2 h1",
            scroller: "#main",
            start: "top 70%",
            end: "top 69%",
            scrub: 3,
            // markers:true
        }
    })
}

function page2H2() {
    gsap.from("#page2 h2", {
        x: 100,
        opacity: 0,
        duration: 1.1,
        delay: 0.4,
        stagger: 0.25,
        scrollTrigger: {
            trigger: "#page2 h2",
            scroller: "#main",
            start: "top 70%",
            end: "top 69%",
            scrub: 3,
            // markers:true
        }
    })

}

function page2P() {
    gsap.from("#page2 p", {
        x: 100,
        opacity: 0,
        duration: 1.5,
        delay: 0.6,
        scrollTrigger: {
            trigger: "#page2 h2",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            scrub: 3,

        }
    })
}

function swiperMove() {
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    gsap.from(".swiper-slide video", {
        x: 200,
        opacity: 0,
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
            trigger: ".swiper-slide video",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            scrub: 3
        }
    })

    // gsap.from(".swiper-slide .btn1", {
    //     y: 50,
    //     opacity: 0,
    //     duration: 1,
    //     // delay:0.5,
    //     scrollTrigger: {
    //         trigger: ".swiper-slide .btn1",
    //         scroller: "#main",
    //         start: "top 90%",
    //         end: "top 89%",
    //         scrub: 3
    //     }
    // })

    gsap.from(".swiper-slide h3", {
        y: 50,
        opacity: 0,
        duration: 1,
        // delay:0.5,
        scrollTrigger: {
            trigger: ".swiper-slide h3",
            scroller: "#main",
            start: "top 100%",
            end: "top 89%",
            scrub: 3
        }
    })

}

function box1Move() {
    gsap.to("#box1", {
        width: "60%",
        height: "50%",
        duration: 3,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 30%",

            end: "top 20%",
            scrub: 4,
            pin: true,
            // markers:true
        }
    })
}

function page5Timeline() {
    var page5TL = gsap.timeline({
        scrollTrigger: {
            trigger: "#page5",
            scroller: "#main",
            //   markers:true,
            scrub: 2,
            pin: true
        }
    })
    page5TL.to("#page5 #zara", {
        scale: 4,
        filter: "blur(20px)",
        opacity: 0,
    })
    page5TL.to("#page5 #para", {
        opacity: 1,
    })
}

function page6Swiper() {
    var swiper = new Swiper("#page6 .mySwiper", {
        slidesPerView: 3,
        // centeredSlides: true,

        spaceBetween: 24,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: "#page6 .swiper-button-next",
            prevEl: "#page6 .swiper-button-prev",
        },
    });

    gsap.from("#page6 .swiper-slide", {
        y: 50,
        opacity: 0,
        duration: 1.3,
        delay: 0.3,
        stagger: 0.25,
        scrollTrigger: {
            trigger: "#page6 .swiper-slide",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            scrub: 4,
        }
    })

}

function page7Box2() {
    gsap.to("#box2-page7", {
        width: "60%",
        height: "50%",
        duration: 3,
        scrollTrigger: {
            trigger: "#page7",
            scroller: "#main",
            start: "top 40%",

            end: "top 30%",
            scrub: 4,
            pin: true,
            // markers:true
        }
    })
}

function page8H1() {
    gsap.from("#page8 h1", {
        y: 100,
        rotate: 7,
        opacity: 0,
        // stagger:1,

        scrollTrigger: {
            trigger: "#page8 h1",
            scroller: "#main",
            start: "top 80%",
            end: "top 79%",
            scrub: 3
        }
    })
}

function page8H2() {
    gsap.from("#page8 h2", {
        y: 100,
        rotate: 7,
        opacity: 0,
        // stagger:1,

        scrollTrigger: {
            trigger: "#page8 h2",
            scroller: "#main",
            start: "top 80%",
            end: "top 79%",
            scrub: 3,
            // markers:true
        }
    }, "=0.3")
}

function page8H3() {
    gsap.from("#page8 h3", {
        y: 100,
        rotate: -7,
        opacity: 0,
        // stagger:1,

        scrollTrigger: {
            trigger: "#page8 h3",
            scroller: "#main",
            start: "top 90%",
            end: "top 89%",
            scrub: 3,
            // markers:true
        }
    }, "=0.5")

}

function carColor() {
    var nick1 = document.querySelector("#nick1")
    var nick2 = document.querySelector("#nick2")
    var nick3 = document.querySelector("#nick3")
    var nick4 = document.querySelector("#nick4")
    var nick5 = document.querySelector("#nick5")
    var nick6 = document.querySelector("#nick6")
    var nick7 = document.querySelector("#nick7")
    var nick8 = document.querySelector("#nick8")


    var red = document.querySelector("#red")
    var blackcar = document.querySelector("#black-car")
    var white = document.querySelector("#white")
    var blue = document.querySelector("#blue")
    var yellow = document.querySelector("#yellow")
    var gray = document.querySelector("#gray")
    var darkblue = document.querySelector("#dark-blue")


    nick1.addEventListener("click", function () {
        blackcar.style.opacity = 1
    })

    nick2.addEventListener("click", function () {
        red.style.left = 0
    })

    nick3.addEventListener("click", function () {
        white.style.left = 0
    })


    nick4.addEventListener("click", function () {
        blue.style.left = 0
    })

    nick5.addEventListener("click", function () {
        yellow.style.left = 0
    })

    nick6.addEventListener("click", function () {
        gray.style.left = 0
    })

    nick7.addEventListener("click", function () {
        darkblue.style.left = 0
    })
}


function leftPage10() {
    var term = gsap.timeline();

    term.from("#page10 h6", {
        y: 50,
        opacity: 0,
        stagger: 0.25,
        duration: 0.6,
        scrollTrigger: {
            trigger: "#page10 h6",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            scrub: 3,
            // markers:true
        }
    })

        .from("#page10 h1", {
            y: 50,
            opacity: 0,
            stagger: 0.25,
            duration: 0.6,
            delay: 0.4,
            scrollTrigger: {
                trigger: "#page10 h1",
                scroller: "#main",
                start: "top 60%",
                end: "top 40%",
                scrub: 3,
                // markers:true
            }
        })

    term.from("#page10 h3", {
        y: 50,
        opacity: 0,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.4,
        scrollTrigger: {
            trigger: "#page10 h3",
            scroller: "#main",
            start: "top 70%",
            end: "top 69%",
            scrub: 3,
            // markers:true
        }
    })
}

function rightPage10() {
    gsap.from("#right-page10", {
        y: 100,
        opacity: 0,

        duration: 1,
        scrollTrigger: {
            trigger: "#right-page10",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            scrub: 3,
            // markers:true
        }
    })


    var rightp10 = document.querySelector("#right-page10")

    rightp10.addEventListener("mousemove", function (dets) {
        gsap.to("#fox", {
            top: `${dets.y}px`,
            left: `${dets.x}px`,
            scale: 1
        })
        gsap.from("#right-page10", {
            scale: 0.9
        })
    })

    rightp10.addEventListener("mouseleave", function (dets) {
        gsap.to("#fox", {
            top: `${dets.y}px`,
            left: `${dets.x}px`,
            scale: 0
        })
        gsap.to("#right-page10", {
            scale: 1
        })
    })

}

function page11Swiper() {
    var swiper = new Swiper("#page11 .mySwiper", {
        slidesPerView: 3,
        // centeredSlides: true,

        spaceBetween: 24,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: "#page11 .swiper-button-next",
            prevEl: "#page11 .swiper-button-prev",
        },
    });

    gsap.from("#page11 .swiper-slide", {
        y: 50,
        opacity: 0,
        duration: 1.3,
        delay: 0.3,
        stagger: 0.25,
        scrollTrigger: {
            trigger: "#page11 .swiper-slide",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            scrub: 4,
        }
    })

}

function page12Move() {
    var span = document.querySelector("#page12 span")
    var bot = document.querySelector("#page12 button")
    var ban1 = document.querySelector("#ban1")
    var ban2 = document.querySelector("#ban2")

    var change = 0
    span.addEventListener("click", function () {
        if (change == 0) {
            ban1.style.scale = 0
            ban2.style.scale = 1

            span.style.marginLeft = "30px"
            change = 1
        }
        else {
            ban1.style.scale = 1

            ban2.style.scale = 0
            span.style.marginLeft = "4px"
            change = 0
        }

    })


}

function page12H1() {
    gsap.from("#ban1 h1", {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#ban1 h1",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            // markers:true,
            scrub: 3
        }
    })
}

function page13Move() {


    gsap.from("#inner h1", {
        x: -100,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
            trigger: "#inner h1",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            scrub: 3
        }
    })


}

function page13H4() {
    gsap.from("#inner h4", {
        x: 100,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
            trigger: "#inner h4",
            scroller: "#main",
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        }
    })
}

function page333Move() {
    gsap.from("#page333 h1", {
        x: -200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#page333 h1",
            scroller: "#main",
            start: "top 70%",
            end: "top 69%",
            scrub: 3,
        }
    })


    gsap.from("#page333 h2", {
        x: 200,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
            trigger: "#page333 h2",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            scrub: 3,
        }
    })
}

function page333Image() {
    gsap.from("#page333 #eco1", {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#page333 #eco1",
            scroller: "#main",
            start: "top 70%",
            end: "top 69%",
            scrub: 3
        }
    })

    gsap.from("#page333 #eco2", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#page333 #eco2",
            scroller: "#main",
            start: "top 90%",
            end: "top 89%",
            scrub: 3
        }
    })

    var eco1 = document.querySelector("#eco1")

    eco1.addEventListener("mousemove", function (dets) {
        gsap.to("#fox", {
            top: `${dets.y}px`,
            left: `${dets.x}px`,
            scale: 1
        })
        gsap.from("#eco1", {
            scale: 0.9
        })
    })

    eco1.addEventListener("mouseleave", function (dets) {
        gsap.to("#fox", {
            top: `${dets.y}px`,
            left: `${dets.x}px`,
            scale: 0
        })
        gsap.to("#eco1", {
            scale: 1
        })
    })

    var eco2 = document.querySelector("#eco2")

    eco2.addEventListener("mousemove", function (dets) {
        gsap.to("#fox", {
            top: `${dets.y}px`,
            left: `${dets.x}px`,
            scale: 1
        })
        gsap.from("#eco2", {
            scale: 0.9
        })
    })

    eco2.addEventListener("mouseleave", function (dets) {
        gsap.to("#fox", {
            top: `${dets.y}px`,
            left: `${dets.x}px`,
            scale: 0
        })
        gsap.to("#eco2", {
            scale: 1
        })
    })
}


function pageCanvas() {
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/1.webp
https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/2.webp
https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/3.webp
https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/4.webp
https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/5.webp
https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/6.webp
https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/7.webp
https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/8.webp
https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/9.webp
https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/10.webp
 https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/11.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/12.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/13.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/14.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/15.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/16.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/17.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/18.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/19.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/20.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/21.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/22.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/23.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/24.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/25.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/26.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/27.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/28.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/29.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/30.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/31.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/32.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/33.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/34.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/35.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/36.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/37.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/38.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/39.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/40.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/41.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/42.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/43.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/44.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/45.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/46.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/47.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/48.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/49.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/50.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/51.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/52.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/53.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/54.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/55.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/56.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/57.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/58.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/59.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/60.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/61.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/62.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/63.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/64.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/65.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/66.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/67.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/68.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/69.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/70.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/71.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/72.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/73.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/74.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/75.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/76.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/77.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/78.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/79.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/80.webp
 https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/81.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/82.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/83.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/84.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/85.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/86.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/87.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/88.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/89.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/90.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/91.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/92.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/93.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/94.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/95.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/96.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/97.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/98.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/99.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/100.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/101.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/102.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/103.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/104.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/105.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/106.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/107.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/108.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/109.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/110.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/111.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/112.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/113.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/114.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/115.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/116.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/117.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/118.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/119.webp
  https://www.maserati.com/etc.clientlibs/maserati-mc20/clientlibs/clientlib-site/resources/asset/image/sequence/door/120.webp

  
  
 `;
        return data.split("\n")[index];
    }

    const frameCount = 118;

    const images = [];
    const imageSeq = {
        frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: 0.15,
            trigger: `#page`,
            //   set start end according to preference
            start: `top top`,
            end: `600% top`,
            scroller: `#main`,
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({

        trigger: "#page",
        pin: true,
        // markers:true,
        scroller: `#main`,
        //   set start end according to preference
        start: `top top`,
        end: `600% top`,
    });
}

function pageText() {
    gsap.from("#page h1", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        delay: 0.2,
        scrollTrigger: {
            trigger: "#page h1",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            scrub: true
        }
    })

    gsap.from("#page h6", {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.25,
        delay: 0.2,
        scrollTrigger: {
            trigger: "#page h6",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            scrub: true
        }
    })
}

function page17Move() {
    
    gsap.from("#left-page17",{
        scale:0,
        opacity:0,
        duration:0.7,
        delay:0.5,
        scrollTrigger:{
            trigger:"#left-page17",
            scroller:"#main",
            start:"top 70%",
            end:"top 69%",
            scrub:3
        }

    })

    gsap.from("#right-page17 h1", {
        y: 100,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
            trigger: "#right-page17 h1",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            scrub: 3
        }
    })

    gsap.from("#right-page17 h5", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
            trigger: "#right-page17 h5",
            scroller: "#main",
            start: "top 70%",
            end: "top 69%",
            scrub: 3
        }
    })

        gsap.from(".btn-page17", {
            y: 50,
            opacity: 0,
            duration: 0.7,
            scrollTrigger: {
                trigger: ".btn-page17",
                scroller: "#main",
                start: "top 70%",
                end: "top 69%",
                scrub: 3
            }
        })
        var page17 = document.querySelector("#left-page17")

        page17.addEventListener("mousemove", function (dets) {
            gsap.to("#fox", {
                top: `${dets.y}px`,
                left: `${dets.x}px`,
                scale: 1
            })
            
        })
    
        page17.addEventListener("mouseleave", function (dets) {
            gsap.to("#fox", {
                top: `${dets.y}px`,
                left: `${dets.x}px`,
                scale: 0
            })
            
        })
    

}

init();
loaderh1Move();
loaderMove();
navMove();
page1Move();
page2H5();
page2H1();
page2H2();
page2P();
swiperMove();
box1Move();
page5Timeline();
page6Swiper();
page7Box2();
page8H1();
page8H2();
page8H3();
carColor();
leftPage10();
rightPage10();
page11Swiper();
page12Move();
page12H1();
page13Move();
page13H4();
page333Move();
page333Image();
pageCanvas();
pageText();
page17Move();



















