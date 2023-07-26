const index = () => {
    calc();
    map();
}

const inf = () => {
    calc();
    map();
}

const mapInfo = [
    {
        lang: "Telugu",
        info: "Something about it"
    },
    {
        lang: "Hindi",
        info: "Something about it"
    },
    {
        lang: "English",
        info: "Something about it"
    },
    {
        lang: "Marathi",
        info: "Something about it"
    },
    {
        lang: "Tamil",
        info: "Something about it"
    },
    {
        lang: "Kannada",
        info: "Something about it"
    },
    {
        lang: "Malayalam",
        info: "Something about it"
    },
    {
        lang: "Bengali",
        info: "Something about it"
    },
    {
        lang: "Assamese",
        info: "Something about it"
    },
    {
        lang: "Oriya",
        info: "Something about it"
    },
    {
        lang: "Bhojpuri",
        info: "Something about it"
    },
    {
        lang: "Gujarati",
        info: "Something about it"
    },
    {
        lang: "Punjabi",
        info: "Something about it"
    },
    {
        lang: "Bihari",
        info: "Something about it"
    },
]

const calc = () => {
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
        document.getElementById("calc_first_price").innerText = ((15000)+(value * document.querySelector(".calc_range_3").value)*100)/80;
        const second = (parseInt(document.querySelector(".employees_req").innerText) * 25000)/80;
        console.log(second);
        document.getElementById("calc_second_price").innerText = second < 1 ? 35 : second;
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
        document.getElementById("calc_first_price").innerText = ((15000)+(value * document.querySelector(".calc_range_3").value)*100)/80;
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
    
    mapInfo.forEach(info => {
        const button = document.createElement("button");
        button.textContent = info?.lang;
        document.querySelector(".list_div").appendChild(button);
        button.addEventListener("click", (evt) => {
            document.querySelector(".map_input").value = evt.target.innerText;
        });
    });

    document.querySelector(".map_input").addEventListener("input", (evt) => {
        const value = evt.target.value;
        mapInfo.forEach((info, idx) => {
            if (info?.lang.toLocaleLowerCase().match(value.toLocaleLowerCase())) {
                document.querySelectorAll(".list_div button")[idx].classList.remove("hide")
            } else {
                document.querySelectorAll(".list_div button")[idx].classList.add("hide")
            }
        });
    });

}

document.querySelector(".footer_input").addEventListener("focus", (evt) => {
    evt.target.parentElement.classList.add("focus");
});

document.querySelector(".footer_input").addEventListener("blur", (evt) => {
    evt.target.parentElement.classList.remove("focus");
});


