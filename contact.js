(function () {
    emailjs.init({
        publicKey: "CtTvbSOaQCwc2YFKA",
    });
})();

const form = document.getElementById("contact-form");
if (!form) return;

form.addEventListener("submit", function (e) {
    e.preventDefault();


    const button = form.querySelector("button");

button.disabled = true;
button.innerHTML = "Sending...";

    emailjs.sendForm(
        "service_1y3t7gr",
        "template_jl6eb9h",
        this
    )
    .then(function () {
       button.innerHTML =
    document.documentElement.lang === "ar"
        ? "إرسال الرسالة"
        : "Send Message";
        const toast = document.getElementById("toast");

toast.classList.add("show");

setTimeout(() => {
    toast.classList.remove("show");
},3000);
        form.reset();
    })
    .catch(function (error) {
      button.innerHTML =
    document.documentElement.lang === "ar"
        ? "إرسال الرسالة"
        : "Send Message";
        console.error(error);
      
    });
});