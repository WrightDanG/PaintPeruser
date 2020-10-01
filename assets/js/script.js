/*$("#dropdown").change(function() {
  $("select option:selected").each
}) */

/*$(document).ready(function() {

  var $doc = $(this);
  var azure_blue = $doc.find(".azure-blue");
  var passion_purple =  $doc.find(".passion-purple");
  var blaze_red = $doc.find(".blaze-red");

  $("#dropdown").change(function() {
    var target = $(this).val();
    if (target == "blaze-red") .addClass("blaze-red");
    if (target == "azure-blue") .addClass("azure-blue");
    if (target == "passion_purple").addClass("passion-purple");

  });
});
*/


$(document).ready(function() {
    $("#blaze-red-btn").click(function(){
        $("#main-image").removeClass("passion-purple jewel-green azure-blue calming-teal sunburnt-orange vivid-pink default-hue").addClass("blaze-red");
    });
    $("#azure-blue-btn").click(function(){
        $("#main-image").removeClass("passion-purple jewel-green blaze-red calming-teal sunburnt-orange vivid-pink default-hue").addClass("azure-blue");
    });
    $("#jewel-green-btn").click(function(){
        $("#main-image").removeClass("passion-purple blaze-red azure-blue calming-teal sunburnt-orange vivid-pink default-hue").addClass("jewel-green");
    });
    $("#passion-purple-btn").click(function(){
        $("#main-image").removeClass("blaze-red jewel-green azure-blue calming-teal sunburnt-orange vivid-pink default-hue").addClass("passion-purple");
    });
    $("#vivid-pink-btn").click(function(){
        $("#main-image").removeClass("passion-purple jewel-green azure-blue calming-teal sunburnt-orange blaze-red default-hue").addClass("vivid-pink");
    });
    $("#calming-teal-btn").click(function(){
        $("#main-image").removeClass("passion-purple jewel-green azure-blue blaze-red sunburnt-orange vivid-pink default-hue").addClass("calming-teal");
    });
    $("#sunburnt-orange-btn").click(function(){
        $("#main-image").removeClass("passion-purple jewel-green azure-blue calming-teal blaze-red vivid-pink default-hue").addClass("sunburnt-orange");
    });
});


$('#pick-me-btn').on('click', function() {
  var current_choice = $("#main-image").attr("class");
  switch (current_choice) {
  case "blaze-red": current_choice = "Blaze Red";
  break;
  case "azure-blue": current_choice = "Azure Blue";
  break;
  case "jewel-green": current_choice = "Jewel Green";
  break;
  case "passion-purple": current_choice = "Passion Purple";
  break;
  case "vivid-pink": current_choice = "Vivid Pink";
  break;
  case "sunburnt-orange": current_choice = "Sunburnt Orange";
  break;
  case "calming-teal": current_choice = "Calming Teal";
  break;
  default: current_choice = "Error";
  };
  $('#dropdown-calculator').val(current_choice);
  console.log(current_choice);
  calculatePrice();
});



/* Experiment with if statements to remove the classes

https://forum.jquery.com/topic/combination-of-addclass-hasclass-and-removeclass

Perhaps toggleClass

https://api.jquery.com/toggleclass/ */
