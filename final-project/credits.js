document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.body.classList.add("fade-in");
    }, 50);
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