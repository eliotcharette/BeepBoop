var beepboop = function (input) {

  if (input < 0){
    alert("Please enter a positive number.");
  }
  var number1 = [];

  for (var i = 0; i <= input; i++){
    number1.push(i);
  }
  //replaces all divisibles of 3 with "I'm sorry, Dave I'm afraid I can't do that."
  for (var i = 1; i < number1.length; i++){
    if(number1[i] % 3 === 0){
      number1[i] = ("I'm sorry, Dave I'm afraid I can't do that.");
    }
  }
  //replaces all numbers that end with 1 or 0 with beep or boop
  for (var i = 1; i < number1.length; i++){
    if(number1[i] % 10 === 1){
      number1[i] = ("Boop!");
    }
  }
  for (var i = 0; i < number1.length; i++){
    if(number1[i] % 10 === 0){
      number1[i] = ("Beep!");
    }
  }
  // replaces all numbers that begin with 1 with Boop
  /*for (var i = 1; i < number1.lenth; i++){
  if (number1[i] = 1){
  number1[i] = ("Boop!")
}
}
for (var i = 0; i < number1.length; i++){
if(number1[i] < 19 && number1 > 10){
number1[i] = ("Boop!");
}
}
*/
/*
var num = [1];
for (var i = 1; i < number1.length; i++){
if(num.indexOf(number1[i]) > -1){
var slice_point = i;
}
}
*/
/*for (var i = 1; i < number1.length; i++){
if(num.indexOf(number1[i]) > -1){
number1[i] = ("Boop!")
}
}*/
/*for (var i = 1; i < number1.length; i++){
if(number1.indexOf("1") = 0){
number1[i] = ("Boop!")
}
}*/
/*for (var i = 1; i < number1.length; i++){
if(number1[i].startsWith(1)){
number1[i] = ("Boop!")
}
}*/
var total = number1;

$(".result").text(total)
}

$(function() {
  $("form#number").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#number").val());
    beepboop(input);
  });
});
