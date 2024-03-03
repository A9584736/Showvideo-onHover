// General Selectors
let headings = document.querySelectorAll("h4");
let videos = document.querySelectorAll("video");


// videoShow Animation =<

headings.forEach((heading, index) => {
    let video = videos[index];

    heading.addEventListener("mouseenter", function () {
        gsap.to(video, {
            opacity: 1,
            duration: 0.5,
            ease: "power1.out",
            rotate: 10,
            scale: 1,
        });
    });

    heading.addEventListener("mouseleave", function () {
        gsap.to(video, {
            opacity: 0,
            rotate: 0,
            scale: 0.7,
        });
    });

    heading.addEventListener("mousemove", function (dets) {
        gsap.to(video, {
            left: dets.x,
            top: dets.y
        });
        
        //we can use this code too instead of gsap but 
        //gsap provide a stunning animation =>

        // video.style.left = dets.x + "px";
        // video.style.top = dets.y + "px";

    });
});






