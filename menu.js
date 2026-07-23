const menuBtn = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");
const menuIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("show");

    if(navMenu.classList.contains("show")){
        menuIcon.classList.remove("bx-menu");
        menuIcon.classList.add("bx-x");
    }else{
        menuIcon.classList.remove("bx-x");
        menuIcon.classList.add("bx-menu");
    }

});

// إغلاق القائمة عند الضغط على أي رابط
document.querySelectorAll("nav ul a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("show");

        menuIcon.classList.remove("bx-x");
        menuIcon.classList.add("bx-menu");

    });

});