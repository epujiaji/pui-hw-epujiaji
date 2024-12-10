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
        if ($(".clickable").hasClass("hidden")) {
            $(".clickable").removeClass("hidden").textillate({
                in: {
                    effect: "fadeIn",
                    delay: 5000,
                    sync: true,
                    sequence: true
                },
                autoStart: true
            });

        }

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