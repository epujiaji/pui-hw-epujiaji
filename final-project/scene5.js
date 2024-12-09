document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.body.classList.add("fade-in");
    }, 50);
});

$(document).ready(function () {
    $(".story p").css("animation-duration", "3s")
    $(".story p").addClass("animate__animated animate__backInUp"); 

    $(".story p").on("animationend", function () {
        if ($(".clickable").hasClass("hidden")) {
            $(".clickable").removeClass("hidden").textillate({
                in: {
                    effect: "bounceInUp",
                    delay: 1000,
                    sync: true,
                    sequence: false
                },
                autoStart: true
            });
        }
    });

   $(".clickable").click(function (e) {
        e.preventDefault();
        const destination = $(this).parent("a").attr("href");

        $(".story, .clickable").addClass("animate__animated animate__slideOutDown");

        setTimeout(() => {
            $(".story, .clickable").addClass("hidden");
            window.location.href = destination;
        }, 2000);
    });

});