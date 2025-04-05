document.addEventListener("scroll", function () {
    let image = document.querySelector(".image-container");
    let position = image.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
        image.classList.add("show");
    }
});

document.addEventListener("scroll", function () {
    let text = document.querySelector(".text");
    let position = text.getBoundingClientRect().top;
    let screenHeight = window.innerHeight / 1.3;

    if (position < screenHeight) {
        text.classList.add("show");
    }
});

document.addEventListener("scroll", function () {
    let image = document.querySelector(".image");
    let position = image.getBoundingClientRect().top;
    let screenHeight = window.innerHeight / 1.3;

    if (position < screenHeight) {
        image.classList.add("show");
    }
});