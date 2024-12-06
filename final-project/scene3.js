$(document).ready(function () {
    $(".story p").css("animation-duration", "3s")
    $(".story p").addClass("animate__animated animate__slideInDown"); 

    $(".story p").on("animationend", function () {
        if ($(".clickable").hasClass("hidden")) {
            $(".clickable").removeClass("hidden").textillate({
                in: {
                    effect: "bounceInUp",
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

        $(".story, .clickable").addClass("animate__animated animate__slideOutDown");

        setTimeout(() => {
            $(".story, .clickable").addClass("hidden");
            window.location.href = destination;
        }, 1000);
    });

});