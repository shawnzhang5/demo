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