const index = () => {
    calc();
    map();
}

const inf = () => {
    calc();
    map();
}

// const mapInfo = [
//     {
//         lang: "Telugu",
//         info: "Something about it"
//     },
//     {
//         lang: "Hindi",
//         info: "Something about it"
//     },
//     {
//         lang: "English",
//         info: "Something about it"
//     },
//     {
//         lang: "Marathi",
//         info: "Something about it"
//     },
//     {
//         lang: "Tamil",
//         info: "Something about it"
//     },
//     {
//         lang: "Kannada",
//         info: "Something about it"
//     },
//     {
//         lang: "Malayalam",
//         info: "Something about it"
//     },
//     {
//         lang: "Bengali",
//         info: "Something about it"
//     },
//     {
//         lang: "Assamese",
//         info: "Something about it"
//     },
//     {
//         lang: "Oriya",
//         info: "Something about it"
//     },
//     {
//         lang: "Bhojpuri",
//         info: "Something about it"
//     },
//     {
//         lang: "Gujarati",
//         info: "Something about it"
//     },
//     {
//         lang: "Punjabi",
//         info: "Something about it"
//     },
//     {
//         lang: "Bihari",
//         info: "Something about it"
//     },
// ]

const mapInfo = [
    {
        lang: "English"
    },
    {
        lang: "French"
    }, 
    {
        lang: "German",
    },
    {
        lang: "Spanish",
    },
    {
        lang: "Indian Languages"
    }
];

const calc = () => {
    let first = 0;
    let second = 0;
    let hours = 0;
    let employees_req_value = 0; 
    let money = 0;
    document.querySelector(".input_track").addEventListener("input", (evt) => {
        const value = evt.target.value;
        if (parseInt(value) > evt.target.max) {
            evt.target.value = evt.target.max;
        }
        else if (parseInt(value) < evt.target.min) {
            evt.target.value = evt.target.min;
        }
        document.querySelector(".calc_range_1").value = evt.target.value; 
        tracker();  
    });
    
    
    document.querySelector(".calc_range_1").addEventListener("input", (evt) => {
        document.querySelector(".input_track").value = evt.target.value;
        tracker();
    });
    
    function tracker() {
        const element = document.querySelector(".calc_range_1");
        const value = element.value;
        const per = (value / element.max) * 100;
        element.style.background = `linear-gradient(to right, #3C9C8C 0%, #3C9C8C ${per}%, #254745 ${per}%, #254745 100%)`;
    }

    document.querySelector(".input_influ").addEventListener("input", (evt) => {
        const value = parseInt(evt.target.value);
        if (value > evt.target.max) {
            evt.target.value = evt.target.max;
        }
        else if (value < evt.target.min) {
            evt.target.value = evt.target.min;
        }
        document.querySelector(".calc_range_2").value = evt.target.value; 
        influencer();
    });
    
    document.querySelector(".calc_range_2").addEventListener("input", (evt) => {
        document.querySelector(".input_influ").value = evt.target.value;
        influencer();
    });
    
    function influencer() {
        const element = document.querySelector(".calc_range_2");
        const value = element.value;
        const per = (value / element.max) * 100;
        element.style.background = `linear-gradient(to right, #3C9C8C 0%, #3C9C8C ${per}%, #254745 ${per}%, #254745 100%)`;
        valuesSetter();
    }
    
    function valuesSetter() {
        const platformValue = document.querySelector(".calc_range_3").value;
        let rough = 450 / (5 * platformValue);
        first = ((15000)+(document.querySelector(".calc_range_2").value * document.querySelector(".calc_range_3").value) * 100)/80;
        employees_req_value = document.querySelector(".calc_range_2").value / rough;
        second = (employees_req_value * 25000)/80;
        hours = employees_req_value * 8 * 22;
        money = (second / first) * 100;
        document.querySelector(".employees_req").innerText = Math.round(employees_req_value);
        document.getElementById("calc_first_price").innerText = +first.toFixed(2);
        document.getElementById("calc_second_price").innerText = +second.toFixed(2);
        document.querySelector(".more_money").innerText = +money.toFixed(2);
        document.querySelector(".hours").innerText = +hours.toFixed(0);
    }
    
    
    document.querySelector(".input_plat").addEventListener("input", (evt) => {
        const value = parseInt(evt.target.value);
         if (value > evt.target.max) {
            evt.target.value = evt.target.max;
        }
        else if (value <= evt.target.min) {
            evt.target.value = evt.target.min;
        }
        document.querySelector(".calc_range_3").value = evt.target.value; 
        platforms();
    });
    
    document.querySelector(".calc_range_3").addEventListener("input", (evt) => {
        document.querySelector(".input_plat").value = evt.target.value;
        platforms();
    });
    
    function platforms() {
        const element = document.querySelector(".calc_range_3");
        const value = element.value;
        const per = (value / element.max) * 100 - 5;
        element.style.background = `linear-gradient(to right, #3C9C8C 0%, #3C9C8C ${per}%, #254745 ${per}%, #254745 100%)`;
        valuesSetter();
    }
}

const map = () => {
    document.querySelector(".map_input").addEventListener("focus", (evt) => {
      evt.target.parentElement.classList.add("focus");
      evt.target.nextElementSibling.classList.add("rotate");
      document.querySelector(".list_div").classList.add("show");
    });

    document.querySelector(".map_input").addEventListener("blur", (evt) => {
      evt.target.parentElement.classList.remove("focus");
      evt.target.nextElementSibling.classList.remove("rotate");
      document.querySelector(".list_div").classList.remove("show");
    });
    
    mapInfo.forEach((info, idx) => {
        const button = document.createElement("button");
        button.textContent = info?.lang;
        if (idx === 0) {
            button.classList.add("focus");
        }
        document.querySelector(".list_div").appendChild(button);
        button.addEventListener("click", (evt) => {
            document.querySelector(".map_input").value = evt.target.innerText;
        });
    });

    let focusIndex = 0;

    document.querySelector(".map_input").addEventListener("input", (evt) => {
        const value = evt.target.value;
        focusIndex = 0;
        if (value.length > 0) {
            document.querySelector(".x_mark").classList.add("show");
            document.querySelector(".map_icon").classList.add("hide");
        } else {
            document.querySelector(".x_mark").classList.remove("show");
            document.querySelector(".map_icon").classList.remove("hide");
        }
        mapInfo.forEach((info, idx) => {
            if (info?.lang.toLocaleLowerCase().match(value.toLocaleLowerCase())) {
                document.querySelectorAll(".list_div button")[idx].classList.remove("hide");
            } else {
                document.querySelectorAll(".list_div button")[idx].classList.add("hide");
            }
            document.querySelectorAll(".list_div button")[idx].classList.remove("focus");
            document.querySelector(".list_div button:not(.hide)")?.classList.add("focus");
        });
    });
    

    document.querySelector(".map_input").addEventListener("keydown", (evt) => {
        if (evt.key === "Enter") {
            document.querySelector(".list_div button.focus")?.click();
            evt.target.blur();
        } else if(evt.key === "ArrowUp") {
            if (focusIndex <= 0) {
                console.log("at top");
                return;
            } else {
                focusIndex--;
                console.log("go up");
            }
        } else if(evt.key === "ArrowDown") {
            if (focusIndex + 1 > document.querySelectorAll(".list_div button:not(.hide)")?.length) {
                console.log("end");
                console.log(focusIndex);
            } else {
                console.log("go down");
                focusIndex++;
                console.log(focusIndex);
            }
        }

    });

    document.querySelector(".x_mark").addEventListener("click", () => {
        document.querySelector(".map_input").value = "";
        const event = new Event('input', { bubbles: true });
        document.querySelector(".map_input").dispatchEvent(event);
    });
}

document.querySelector(".nav_icon_wrapper").addEventListener("click", (evt) => {
    document.querySelector(".mobile_nav").classList.toggle("active");
    document.querySelector(".nav_icon_wrapper").classList.toggle("active");
});

document.querySelector(".footer_input").addEventListener("focus", (evt) => {
    evt.target.parentElement.classList.add("focus");
});

document.querySelector(".footer_input").addEventListener("blur", (evt) => {
    evt.target.parentElement.classList.remove("focus");
});


