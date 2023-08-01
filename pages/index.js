gsap.registerPlugin(ScrollTrigger);


const mm = gsap.matchMedia();

mm.add("(min-width: 1300px)", () => {
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
    gsap.to(".pinned_element", {
        opacity: 1,
        scrollTrigger: {
            trigger: ".pinned_element",
            pin: true,
            pinSpacer: false,
            start: "top 65px",
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
});
   
// 192481
gsap.to(".end_pin", {
    background: "#824FE7",
    duration: .4,
    scrollTrigger: {
        trigger: ".end_pin",
        start: "top center",
        end: "center top",
        onEnter: () => {
            gsap.to(".end_pin", { background: "#824FE7" });
            // gsap.to(".end_pin", { background: "#824FE7" });
            gsap.to(".end_pin .content_wrapper", { opacity: 1 });
            gsap.to(".end_pin .pinned_element.skew", { opacity: 1 });
            gsap.to(".skew_fix", { background: "#824FE7" });
        },
        onEnterBack: () => {
            gsap.to(".end_pin", { background: "#824FE7" })
            gsap.to(".skew_fix", { background: "#824FE7" });
            gsap.to(".end_pin .content_wrapper", { opacity: 1 });
            gsap.to(".end_pin .pinned_element.skew", { opacity: 1 });
        },
        onLeaveBack: () => {
            gsap.to(".skew_fix", { background: "#FBFAF2" });
            gsap.to(".end_pin", { background: "#FBFAF2" })
            gsap.to(".end_pin .content_wrapper", { opacity: 0 });
            gsap.to(".end_pin .pinned_element.skew", { opacity: 0 });
        }
    }
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

const pinnedInput = document.querySelectorAll(".pinned_input");

pinnedInput[0].addEventListener("input", (evt) => {
    const value = evt.target.value;
    const per = ((value - evt.target.min) / (evt.target.max - evt.target.min)) * 100;
    if(per > 15) {
        document.querySelector(".pinned_img").style.left = per + "%";
    }
    document.querySelector(".pinned_value").innerText = evt.target.value;
});

pinnedInput[1].addEventListener("input", (evt) => {
    const value = evt.target.value;
    const per = ((value - evt.target.min) / (evt.target.max - evt.target.min)) * 100;
    if(per > 15) {
        document.querySelectorAll(".pinned_img")[1].style.left = per + "%";
    }
    document.querySelectorAll(".pinned_value")[1].innerText = evt.target.value;
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
    breakpoints: {
        320: {
        slidesPerView: 2,
        spaceBetween: 20
        },
        480: {
        slidesPerView: 3,
        spaceBetween: 30
        },
        640: {
        slidesPerView: 4,
        spaceBetween: 40
        }
    }
});

document.querySelector(".main_input").addEventListener("input", (evt) => {
    if (evt.target.validity.valid) {
        evt.target.parentElement.classList.remove("error");
        evt.target.nextElementSibling.disabled = false;
    } else {
        evt.target.parentElement.classList.add("error");
        evt.target.nextElementSibling.disabled = true;
    }
    if (evt.target.value < 1) {
        evt.target.nextElementSibling.disabled = true;
    }
});

document.querySelector(".main_input").addEventListener("focus", (evt) => {
    evt.target.parentElement.classList.add("focus");
});

document.querySelector(".main_input").addEventListener("blur", (evt) => {
    evt.target.parentElement.classList.remove("focus");
});


// Get the user agent string
const userAgent = navigator.userAgent.toLowerCase();

// Function to check if the user is on a Mac
function isMac() {
    return /macintosh|mac os x/i.test(userAgent);
}

// Function to check if the user is on Windows
function isWindows() {
    return /windows|win32/i.test(userAgent);
}

// Apply different styles based on the operating system
if (isMac()) {
    document.querySelector('.vector_section').style.background = '#8E5FE7'; //  for Mac users
} else if (isWindows()) {
    document.querySelector('.vector_section').style.background = '#824FE7'; // for Windows users
}

