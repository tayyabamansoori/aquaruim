AOS.init({
    duration: 1000,
    // once: true,
    mirror: false,
    debug: true,  // Debugging mode enable
});
window.addEventListener('scroll', function() {
    AOS.refresh();
});
<script>
    document.addEventListener("DOMContentLoaded", function () {
        AOS.init({
            duration: 1000,  // Animation speed (1000ms = 1 second)
        })
    })
</script>
