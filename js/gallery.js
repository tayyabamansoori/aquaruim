
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


window.addEventListener("scroll", function() {
    let text = document.querySelector(".letter");
    let textPos = text.getBoundingClientRect().top;
    let screenPos = window.innerHeight / 1.3;

    if (textPos < screenPos) {
        text.classList.add("show");
    }
});


window.addEventListener("scroll", function() {
    let element = document.querySelector(".fade-in");
    let position = element.getBoundingClientRect().top;
    let screenHeight = window.innerHeight / 1.3;

    if (position < screenHeight) {
        element.classList.add("show");
    }
});


window.addEventListener("scroll", function() {
    let element = document.querySelector(".scroll-animation");
    let position = element.getBoundingClientRect().top;
    let screenHeight = window.innerHeight / 1.3;

    if (position < screenHeight) {
        element.classList.add("show");
    }
});
