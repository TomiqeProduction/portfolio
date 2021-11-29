const menu = document.querySelector (".menu");
const sidepanel = document.querySelector (".sidepanel");
const sidepanel__link = document.querySelectorAll("sidepanel__link")

// main toggle
menu.addEventListener("click",() => {
    toggle();
});

// toggle on item click if open
sidepanel__link.forEach((item) => {
    item.addEventListener("click", () => {
        if(menu.classList.contains("open")) {
            toggle();
        }
    })
})

function toggle() {
    menu.classList.toggle("open");
    sidepanel.classList.toggle("open");
}

$(document).ready(function() {
    $('.sidepanel__link').on('click', function() {
        if ($('.sidepanel').hasClass('open')){
            $('.menu').removeClass('open');
            $('.sidepanel').removeClass('open');
        }
    });
});

import Typed from 'typed.js';

