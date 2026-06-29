document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        // إضافة أو إزالة الـ class لتفعيل القائمة
        navLinks.classList.toggle("active");
        
        // تغيير شكل الأيقونة من همبرجر (bars) إلى علامة (X) عند الفتح
        const icon = menuToggle.querySelector("i");
        if (navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });
});

function changeLanguage(){

let page =
window.location.pathname
.split("/")
.pop();

window.location.href=
`arabic/${page}`;

}