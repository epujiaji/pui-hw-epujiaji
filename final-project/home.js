document.addEventListener("DOMContentLoaded", function () {
    // Add the fade-in class to body after the page has loaded
    document.body.classList.add("fade-in");
});

$(document).ready(function () {
  const prologueTexts = $(".prologue");
  let currentIndex = 0;

  function showNextPrologue() {
    if (currentIndex < prologueTexts.length) {
        $(prologueTexts[currentIndex])
            .removeClass("hidden")
            .textillate({
                in: {
                    effect: "fadeInUp",
                    sync: true,
                    //delay: 100
                },
                out: {
                    effect: "fadeOutUp",
                    sync: true,
                    //delay: 100
                },
                minDisplayTime: 2000,
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
      $(".titleText").removeClass("hidden").textillate({ in: {
        effect: "fadeIn",
        delay: 100
      }
    });
      $(".subText").removeClass("hidden").textillate({ in: {
        effect: "fadeIn",
        delay: 50
      }
    });
    $(".letterIcon").removeClass("hidden").css("display", "block").addClass("animate__animated animate__fadeIn");
    
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

      $(".landing").addClass("animate__animated animate__fadeOut");

      setTimeout(() => {
          $(".landing").addClass("hidden");
          window.location.href = "./scene1/scene1.html";
      }, 1000);
  });
});
