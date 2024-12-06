$(document).ready(function () {
    $(".story p").css("animation-duration", "2s")
    $(".story p").addClass("animate__animated animate__fadeInDown"); 

    $(".story p").on("animationend", function () {
        if ($(".clickable").hasClass("hidden")) {
            $(".clickable").removeClass("hidden").textillate({
                in: {
                    effect: "fadeInUp",
                    delay: 900,
                    sync: true,
                },
                autoStart: true
            });
        }
    });

   $(".clickable").click(function (e) {
        e.preventDefault();
        const destination = $(this).parent("a").attr("href");

        $(".story, .clickable").css("animation-duration", "2s")
        $(".story, .clickable").addClass("animate__animated animate__zoomOut");

        setTimeout(() => {
            $(".story, .clickable").addClass("hidden");
            window.location.href = destination;
        }, 1000);
    });

});

