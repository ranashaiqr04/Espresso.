window.onscroll = function() {
    const nav = document.querySelector(".nav-2.navbar-expand-lg "); // Use the correct class name
    const header = document.querySelector(".header");


    if (window.scrollY > header.offsetTop) {
        console.log("testt");
        nav.classList.add("scrollNavBar"); 
    } else {
        nav.classList.remove("scrollNavBar"); 
    }
};


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



 