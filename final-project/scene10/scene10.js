document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.body.classList.add("fade-in");
    }, 200);
        const letter = document.querySelector(".letter");
    
        setTimeout(() => {
            letter.style.opacity = 1; // Reveal the letter smoothly
            letter.style.transform = "rotate(0deg) scale(1)"; // Reset rotation and size

        }, 1000);
    
});


$(document).ready(function () {
    $(".story p").css("animation-duration", "5s")
    $(".story p").addClass("animate__animated animate__fadeIn"); 

    $(".story p").on("animationend", function () {
        if ($(".clickable").hasClass("hidden")) {
            $(".clickable").removeClass("hidden").textillate({
                in: {
                    effect: "fadeIn",
                    delay: 90,
                    sync: false,
                    sequence: true
                },
                autoStart: true
            });
        }
    });

   $(".clickable").click(function (e) {
        e.preventDefault();
        const destination = $(this).parent("a").attr("href");

        $(".story p").css("animation-duration", "5s")
        $(".story, .clickable").addClass("animate__animated animate__fadeOut");

        setTimeout(() => {
            $(".story, .clickable").addClass("hidden");
            window.location.href = destination;
        }, 1000);
    });

});
