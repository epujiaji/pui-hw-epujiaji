document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.body.classList.add("fade-in");
    }, 50);
});


$(document).ready(function () {
    $(".story p").css("animation-duration", "7s")
    $(".story p").addClass("animate__animated animate__fadeIn"); 

    $(".story p").on("animationend", function () {
        if ($(".second").hasClass("hidden")) {
            $(".second").removeClass("hidden").textillate({
                in: {
                    effect: "fadeIn",
                    delay: 40,
                    sync: true,
                    sequence: true
                },
                autoStart: true
            });
        }
    });

    $(".second").on("animationend", function () {
        if ($(".clickable").hasClass("hidden")) {
            // Add a delay before showing .clickable
            setTimeout(() => {
                $(".clickable").css("animation-duration", "4s");
                $(".clickable").removeClass("hidden").textillate({
                    in: {
                        effect: "fadeIn",
                        delay: 200,
                        sync: false,
                        sequence: true
                    },
                    autoStart: true
                });
            }, 2000); // 2000ms (2 seconds) delay
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