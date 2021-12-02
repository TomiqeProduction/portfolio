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
    $('.slick').slick({
        autoplay:true,
        autoplaySpeed:3000,
        arrows: false,
    });
    $('.branding').on('click', function() {
        if ($(window).width() < 1200) {
            $(this).toggleClass('branding--open');
            $(this).find(".arrow").toggleClass('arrow--open');
            $(this).find(".branding__text").toggleClass('branding__text--open');
        }
    });
    $('.webdesign').on('click', function() {
        if ($(window).width() < 1200) {
            $(this).toggleClass('webdesign--open');
            $(this).find(".arrow").toggleClass('arrow--open');
            $(this).find(".web__text").toggleClass('web__text--open');
        }
    });
    $('.socialmedia').on('click', function() {
        if ($(window).width() < 1200) {
            $(this).toggleClass('socialmedia--open');
            $(this).find(".arrow").toggleClass('arrow--open');
            $(this).find(".socials__text").toggleClass('socials__text--open');
        }
    });
    $('.logodesign').on('click', function() {
        if ($(window).width() < 1200) {
            $(this).toggleClass('logodesign--open');
            $(this).find(".arrow").toggleClass('arrow--open');
            $(this).find(".logo__text").toggleClass('logo__text--open');
        }
    });
    $('.print').on('click', function() {
        if ($(window).width() < 1200) {
            $(this).toggleClass('print--open');
            $(this).find(".arrow").toggleClass('arrow--open');
            $(this).find(".print__text").toggleClass('print__text--open');
        }
    });
    $('.photo').on('click', function() {
        if ($(window).width() < 1200) {
            $(this).toggleClass('photo--open');
            $(this).find(".arrow").toggleClass('arrow--open');
            $(this).find(".photo__text").toggleClass('photo__text--open');
        }
    });
    $('.form').validate({
        rules: {
            fname: "required",  
            lname: "optional",      
            email: {
                required: true,
                email: true
            },
            subject: "required",
            message: "required",
        },
        errorElement: "span" ,                            
        messages: {
            fullname: "Please enter your first name",
            email: "Please enter valid email address",
            subject: "Please enter subject of your message",
            message: "Please write the message"
        },
        submitHandler: function(form) {
            var dataparam = $('.form').serialize();

            $.ajax({
                type: 'POST',
                async: true,
                url: 'mail.php',
                data: dataparam,
                datatype: 'json',
                cache: true,
                global: false,
                success: function(data) {
                    if(data == 'Success'){
                        console.log(data);
                    } else {
                        $('.no-config').show();
                        console.log(data);
                    }
                },
            });
        }                
    });
});
