document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("fade-in");
});

$(document).ready(function () {
  const prologueTexts = $(".this");
  let currentIndex = 0;

  function showNextPrologue() {
    if (currentIndex < prologueTexts.length) {
        $(prologueTexts[currentIndex])
            .removeClass("hidden")
            .textillate({
                in: {
                    effect: "fadeIn",
                    sync: true
                },
                out: {
                    effect: "fadeOut",
                    sync: true
                },
                minDisplayTime: 1500,
                initialDelay: 1000,
                autoStart: true,
                loop: false 
            });


        setTimeout(() => {
            $(prologueTexts[currentIndex]).addClass("hidden");
            currentIndex++;
            showNextPrologue();
        }, 2000 + 3000 + 1000);
    } else {
        showMainElements();
    }
}

  function showMainElements() {
    $(".clickable").removeClass("hidden").textillate({ in: {
        effect: "fadeIn",
        delay: 100
      }
    });
  }
  showNextPrologue();
});


$(document).ready(function() {
  $(".clickable").click(function (e) {
      e.preventDefault();

      $(".story").addClass("animate__animated animate__fadeOut");

      setTimeout(() => {
          $(".story").addClass("hidden");
          window.location.href = "./scene10c.html";
      }, 1000);
  });
});
