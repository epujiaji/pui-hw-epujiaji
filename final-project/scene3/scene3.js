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
    $(".story p").css("animation-duration", "3s")
    $(".story p").addClass("animate__animated animate__slideInDown"); 

    $(".story p").on("animationend", function () {
        if ($(".clickable").hasClass("hidden")) {
            $(".clickable").removeClass("hidden").textillate({
                in: {
                    effect: "rotateIn",
                    delay: 90,
                    sync: true,
                    sequence: true
                },
                autoStart: true
            });
        }
    });

   $(".clickable").click(function (e) {
        e.preventDefault();
        const destination = $(this).parent("a").attr("href");

        $(".story, .clickable").addClass("animate__animated animate__slideOutUp");

        setTimeout(() => {
            $(".story, .clickable").addClass("hidden");
            window.location.href = destination;
        }, 1000);
    });

});