// back end logic:

function fToc(fahrenheit)

{

  var ftoCel = function (tempF) {
    return (tempF -32) * 5 / 9;
};



//front end logic

$(document).readyfunction() {
  $("form#tempF").submit(function(event) {

  event.preventDefault();
  var tempF = parseInt($("#tempF").val());
  var result = ftoCel(tempF);

$("#output").text(result);

  alert("tempF");
  });
}
