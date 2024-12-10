document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.body.classList.add("fade-in");
    }, 200);
});

$(document).ready(function () {
    $(".story p").css("animation-duration", "3s")
    $(".story p").addClass("animate__animated animate__slideInUp"); 

    $(".story p").on("animationend", function () {
        if ($(".clickable").hasClass("hidden")) {
            $(".clickable").removeClass("hidden").textillate({
                in: {
                    effect: "fadeIn",
                    delay: 190,
                    sync: true,
                },
                autoStart: true
            });
        }
    });

   $(".clickable").click(function (e) {
        e.preventDefault();
        const destination = $(this).parent("a").attr("href");

        $(".story, .clickable").css("animation-duration", "3s")
        $(".story, .clickable").addClass("animate__animated animate__zoomOut");

        setTimeout(() => {
            $(".story, .clickable").addClass("hidden");
            window.location.href = destination;
        }, 1000);
    });

});