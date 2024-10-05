function fadeAnime() {
  $(".content-fave_trigger").each(function () {
    var elemPos = $(this).offset().top - 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("content-fave");
    }
  });
}

$(window).scroll(function () {
  fadeAnime();
});

$(window).on("load", function () {
  fadeAnime();
});
