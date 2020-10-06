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
