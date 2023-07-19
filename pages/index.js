gsap.registerPlugin(ScrollTrigger);

const boxes = gsap.timeline({ delay: 0 });
boxes.to(".fade_box", {
    opacity: 0,
    y: -100,
    stagger: .1
});

boxes.fromTo(".fade_in_box", {
    opacity: 0,
    visibility: "hidden",
    y: -10
}, {
    opacity: 1,
    visibility: "visible",
    y: 0,
    duration: .2
});

boxes.pause();

const mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
    gsap.to(".pinned_element", {
        opacity: 1,
        scrollTrigger: {
            trigger: ".pinned_element",
            pin: true,
            pinSpacer: false,
            start: "top 10%",
            endTrigger: ".end_pin",
            end: "center center",
            zIndex: -1,
        }
    });

    gsap.to(".pinned_element",{
        skewX: -8,
        rotate: 2,
        x: -5,
        duration: .5,
        scrollTrigger: {
            trigger: ".benefits_section",
            start: "10% 40%",
            end: "bottom top",
            toggleActions: "play complete start reverse",
            onEnter: () => { boxes.play(); gsap.to(".fade_footer", { opacity: 0, y: 100 })},
            onEnterBack: () => boxes.play(),
            onLeave: () => boxes.reverse(),
            onLeaveBack: () => setTimeout(() => { boxes.reverse();  gsap.to(".fade_footer", { opacity: 1, y: 0 }) }, 100),
        }
    });
    
    gsap.fromTo(".pinned_element", {
        skewX: -8,
        rotate: 2,
        x: -5,
    }, {
        skewX: 0,
        rotate: 0,
        x: "-=450",
        scrollTrigger: {
            trigger: ".skew_fix",
            start: "center 40%",
            end: "bottom center",
            onEnter: () => {
                gsap.to(".pinned_element", {
                    skewX: 0,
                    rotate: 0,
                    x: "-=450",
                })
            },
            onLeaveBack: () => {
                gsap.to(".pinned_element", { 
                    skewX: -8,
                    rotate: 2,
                    x: -5, 
                    duration: .4
                })
            },
        }
    });
    
    gsap.to(".end_pin", {
        background: "#824FE7",
        duration: .4,
        scrollTrigger: {
            trigger: ".end_pin",
            start: "top center",
            end: "center top",
            onEnter: () => {
                gsap.to(".end_pin", { background: "#824FE7" });
                gsap.to(".skew_fix", { background: "#824FE7" });
            },
            onEnterBack: () => {
                gsap.to(".end_pin", { background: "#824FE7" })
                gsap.to(".skew_fix", { background: "#824FE7" });
            },
            onLeaveBack: () => {
                gsap.to(".skew_fix", { background: "#FBFAF2" });
                gsap.to(".end_pin", { background: "#FBFAF2" })
            }
        }
    });

});

gsap.to(".benefits_section .content", {
    opacity: 1,
    y: 0,
    duration: .7,
    scrollTrigger: {
        trigger: ".benefits_section",
        start: "10% 40%",
        end: "bottom center",
        onEnter: () => {
            gsap.to(".benefits_section .content", {
                opacity: 1,
                y: 0,
                duration: .7,
            })
        },
        onEnterBack: () => {
            gsap.to(".benefits_section .content", {
                opacity: 1,
                y: 0,
                duration: .7,
            })
        },
        onLeave: () => {
            gsap.to(".benefits_section .content", {
                y: -150,
                opacity: 0,
                duration: 1
            })
        },
        onLeaveBack: () => {
            gsap.to(".benefits_section .content", {
                y: 200,
                duration: 1,
                opacity: 0,
            })
        }
    }
});

document.querySelector(".pinned_input").addEventListener("input", (evt) => {
    const value = evt.target.value;
    const per = (value / evt.target.max) * 100;
    document.querySelector(".pinned_img").style.left = per + "%";
    // document.querySelector(".pinned_value").innerText = value;
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 100,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 7000,
});

document.querySelector(".main_input").addEventListener("focus", (evt) => {
    evt.target.parentElement.classList.add("focus");
});

document.querySelector(".main_input").addEventListener("blur", (evt) => {
    evt.target.parentElement.classList.remove("focus");
});