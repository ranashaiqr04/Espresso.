window.onscroll = function() {
    const nav = document.querySelector(".nav-2.navbar-expand-lg"); 
    const header = document.querySelector(".header");
    const contact = document.querySelector("#Contact");
    const blog = document.querySelector("#Blog");

    if (window.scrollY > header.offsetTop) {
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

const btn = document.getElementsByClassName('button-menu');
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}







 