const themeBtn = document.getElementById("theme-toggle");
const body = document.body;

if (themeBtn) {
    // إذا كان المستخدم اختار Light سابقًا
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeBtn.innerHTML = "<i class='bx bx-sun'></i>";
    }

    themeBtn.onclick = () => {
        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeBtn.innerHTML = "<i class='bx bx-sun'></i>";
        } else {
            localStorage.setItem("theme", "dark");
            themeBtn.innerHTML = "<i class='bx bx-moon'></i>";
        }
    };
}