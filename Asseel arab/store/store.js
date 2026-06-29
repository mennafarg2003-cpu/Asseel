window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/*   numbers   */ 

let pages = document.querySelectorAll(".page");

pages.forEach(page=>{
  page.addEventListener("click",()=>{
    document.querySelector(".active").classList.remove("active");
    page.classList.add("active");
  })
})

