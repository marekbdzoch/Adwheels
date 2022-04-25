var mapScrollIn = gsap.timeline({
    scrollTrigger: {
        trigger: ".mapContainer",
        start: "center 80%",
        end: "top top",
        scrub: true,
        // markers: true,
    }
})

mapScrollIn.fromTo(".hScrollIn path",{
    drawSVG: "0%",
    }, {
    drawSVG: "100%",
});



var mapScrollOut = gsap.timeline({
    scrollTrigger: {
        trigger: ".mapContainer",
        start: "top top",
        end: "bottom top", // need to scroll 100vh to complete
        pin: true,
        scrub: true,
        // markers: true,
    }
})


var initMapScale = 1.2
var endMapScale = 0.8

mapScrollOut.to([".mapContainer img", ".mapContainer svg"],{
    // scale: initMapScale,
    // }, {
    scale: endMapScale,
    ease: "none",
    duration: 4,
});

mapScrollOut.fromTo(".hScrollOut path",{
    drawSVG: "0%",
    }, {
    drawSVG: "100%",
    duration: 4,
    },
    "<"
);

mapScrollOut.fromTo(".mapEurope",{
    opacity: 0,
    }, {
    opacity: 1,
    duration: 2,
    },
    "<"
);

mapScrollOut.to(".map h2",{
    opacity: 0,
    duration: 0.5,
    },
    "<"
);