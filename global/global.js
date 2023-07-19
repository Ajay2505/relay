
document.querySelector(".calc_range_1").addEventListener("input", (evt) => {
    const value = evt.target.value;
    const per = (value / evt.target.max) * 100;
    evt.target.style.background = `linear-gradient(to right, #3C9C8C 0%, #3C9C8C ${per}%, #254745 ${per}%, #254745 100%)`;
    // document.getElementById("calc_value_1").innerText = value;
});

document.querySelector(".calc_range_2").addEventListener("input", (evt) => {
    const value = evt.target.value;
    const per = (value / evt.target.max) * 100;
    evt.target.style.background = `linear-gradient(to right, #3C9C8C 0%, #3C9C8C ${per}%, #254745 ${per}%, #254745 100%)`;
    // document.getElementById("calc_value_2").innerText = value;
});

document.querySelector(".footer_input").addEventListener("focus", (evt) => {
    evt.target.parentElement.classList.add("focus");
});

document.querySelector(".footer_input").addEventListener("blur", (evt) => {
    evt.target.parentElement.classList.remove("focus");
});

