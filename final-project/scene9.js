document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.body.classList.add("fade-in");
    }, 50);
});

$(document).ready(function () {
    $(".story p").css("animation-duration", "3s")
    $(".story p").addClass("animate__animated animate__pulse"); 

    $(".story p").on("animationend", function () {
        if ($(".clickable").hasClass("hidden")) {
            $(".clickable").removeClass("hidden").textillate({
                in: {
                    effect: "flipInX",
                    delay: 1500,
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

        $(".story, .clickable").css("animation-duration", "3s")
        $(".story, .clickable").addClass("animate__animated animate__backOutRight");

        setTimeout(() => {
            $(".story, .clickable").addClass("hidden");
            window.location.href = destination;
        }, 1000);
    });

});