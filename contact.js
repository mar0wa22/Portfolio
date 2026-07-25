(function () {
    emailjs.init({
        publicKey: "CtTvbSOaQCwc2YFKA",
    });
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_1y3t7gr",
        "template_jl6eb9h",
        this
    )
    .then(function () {
        alert("✅ Message sent successfully!");
        form.reset();
    })
    .catch(function (error) {
        console.error(error);
        alert("❌ Failed to send message.");
    });
});