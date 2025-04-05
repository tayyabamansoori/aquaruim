document.addEventListener("DOMContentLoaded", () => {
    const pricingPlans = document.querySelectorAll(".plan");

    function revealOnScroll() {
        pricingPlans.forEach((plan) => {
            const planPosition = plan.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2; // Adjust for better timing

            if (planPosition < screenPosition) {
                plan.style.transform = "translateY(0)";
                plan.style.opacity = "1";
            }
        });
    }

    // Initial check in case some elements are already in view
    revealOnScroll();

    window.addEventListener("scroll", revealOnScroll);
});


document.addEventListener("DOMContentLoaded", () => {
    const eventCards = document.querySelectorAll(".event-card");
    
    function revealEventsOnScroll() {
        eventCards.forEach((card) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (cardPosition < screenPosition) {
                card.style.transform = "translateY(0)";
                card.style.opacity = "1";
            }
        });
    }
    
    revealEventsOnScroll();
    window.addEventListener("scroll", revealEventsOnScroll);
});

document.addEventListener("scroll", function () {
    let texts = document.querySelectorAll(".text");
    let screenHeight = window.innerHeight / 1.3;

    texts.forEach(text => {
        let position = text.getBoundingClientRect().top;
        if (position < screenHeight) {
            text.classList.add("show");
        }
    });
});

function revealImageOnScroll() {
    let image = document.querySelector(".image");
    let position = image.getBoundingClientRect().top;
    let screenHeight = window.innerHeight / 1.2; // Adjusted for better effect

    if (position < screenHeight) {
        image.classList.add("show");
    }
}

document.addEventListener("scroll", revealImageOnScroll);
revealImageOnScroll(); // Check once on load

let testimonials = document.querySelectorAll(".testimonial");
let index = 0;

document.querySelector(".next").addEventListener("click", () => {
    testimonials[index].style.display = "none";
    index = (index + 1) % testimonials.length;
    testimonials[index].style.display = "block";
});

document.querySelector(".prev").addEventListener("click", () => {
    testimonials[index].style.display = "none";
    index = (index - 1 + testimonials.length) % testimonials.length;
    testimonials[index].style.display = "block";
});

// Initialize first testimonial
testimonials.forEach((t, i) => {
    if (i !== 0) t.style.display = "none";
});



