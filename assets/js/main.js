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

function scrollToSection(event, sectionId) {
    event.preventDefault(); 

    
    const section = document.getElementById(sectionId);
    if (section) {
        
        section.scrollIntoView({
            behavior: 'smooth', 
            block: 'start'      
        });
    }
}



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


// دالة للتمرير إلى القسم المطلوب
function scrollToSection(event, sectionId) {
    event.preventDefault();  // منع الرابط من الانتقال الفوري

    // البحث عن القسم الذي نريد التمرير إليه
    const section = document.getElementById(sectionId);

    if (section) {  // تحقق من أن القسم موجود قبل محاولة التمرير إليه
        // التمرير إلى القسم
        section.scrollIntoView({
            behavior: "smooth", // التمرير بسلاسة
            block: "start" // بداية التمرير من أعلى القسم
        });

        // إغلاق القائمة المنسدلة عند النقر على عنصر
        const navbarCollapse = document.getElementById('navbarNavDropdown');
        const navbarToggler = document.querySelector('.navbar-toggler');

        // التحقق إذا كانت القائمة مفتوحة (تحتوي على class 'show')، ثم إغلاقها
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click(); // محاكاة الضغط على زر التبديل لإغلاق القائمة
        }
    } else {
        console.error(`القسم ${sectionId} غير موجود.`);
    }
}




 