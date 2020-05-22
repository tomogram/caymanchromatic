// Loading

    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    });

// Mobile Dropdown

$('.mob-btn').click(function(){
    $(this).toggleClass("click");
    $('.mob-nav').toggleClass("show");
    $('.imglist').toggleClass("move-right");
    $('.cov-box').toggleClass("move-right");
})

    $('.gal-btn').click(function(){
        $('nav ul .gal-show').toggle(200);
        $('nav ul .rotate').toggleClass("rotate");
    });

    $('.nav ul li').click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })


// Hamburger Menu

const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
    $('.mob-nav').toggleClass("show");
    $('.cov-box').toggleClass("move-right");
    $('.container').toggleClass("move-right");
    // $('.imglist').toggleClass("move-right");
    // $('.gallery-title').toggleClass("move-right");
  });
});
