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
    $('.mini-logo').toggleClass("move-right");
    $('.store-header').toggleClass("move-right");
    $('.tablet-logo').toggleClass("move-right");
    $('p').toggleClass("move-right");

  });
});

//Topbar Dropdown

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.gal-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("section01").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Shopping Cart

function openCart() {
  var x = document.getElementById("purchase-side");
  if (x.style.right === "-750px") {
    x.style.right = "0px";
  } else {
    x.style.right = "-750px";
  }
}

/// Contact page

$(function() {
  $(".form-control").on('focus', function(){
      $(this).parents(".form-group").addClass('focused');
  });

});


// Slider   // Code By Webdevtrick ( https://webdevtrick.com )
function beforeAfter() {
  document.getElementById('compare1').style.width = document.getElementById('slider1').value + "%";
  document.getElementById('compare2').style.width = document.getElementById('slider2').value + "%";
  document.getElementById('compare3').style.width = document.getElementById('slider3').value + "%";
  document.getElementById('compare4').style.width = document.getElementById('slider4').value + "%";
  document.getElementById('compare5').style.width = document.getElementById('slider5').value + "%";
  document.getElementById('compare6').style.width = document.getElementById('slider6').value + "%";
}

