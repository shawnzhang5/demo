$(document).ready(function(){
    $("#login").mouseover(function(){
      $("#register_value").hide();
             $("#login_value").show();
  });
});
$(document).ready(function(){
    $("#register").mouseover(function(){
      $("#login_value").hide();
             $("#register_value").show();
  });
});
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    },5000000);
    return false;
});
$(document).ready(slideShow());


function slideShow() {
  var listOfSlideShows = document.getElementsByClassName('slideshows');
  for (var i = 0; i < listOfSlideShows.length; i++) {
    listOfSlideShows[i].children[0].style.display = "block";
    listOfSlideShows[i].children[1].style.display = "none";
  }
  var index = false;
  var intervals = setInterval(function() {
    for (var i = 0; i < listOfSlideShows.length; i++) {
      if (index == true) {
        listOfSlideShows[i].children[0].style.display = "block";
        listOfSlideShows[i].children[1].style.display = "none";
      } else {
        listOfSlideShows[i].children[0].style.display = "none";
        listOfSlideShows[i].children[1].style.display = "block";
      }
    }
    index = !index;
  }, 2000);
}

function iconJump(icon) {
  var maxJump = 6;
  var speed = 2;
  var jumpPos = 0;

  var mode = -1;
  if (mode == -1) {
    mode = 0;
    var intervals = setInterval(function() {
      switch (mode) {
        case 0:
          jumpPos = jumpPos + 1 * speed;
          icon.style.top = -jumpPos + "px";
          if (jumpPos >= maxJump)
            mode = 1;
          break;
        case 1:
          jumpPos = jumpPos - 1 * speed;
          icon.style.top = -jumpPos + "px";
          if (jumpPos <= 0) {
            mode = 2;
            icon.style.top = 0 + "px";
          }
          break;
        case 2:
          clearInterval(intervals);
      }
    }, 20);
  }
}
