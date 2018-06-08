var beepboop = function (input) {

  if (input < 0){
    return "Please enter a positive number.";
  }
  var number1 = [];
  var number2 = [];


  for (var i = 1; i <= input; i++){
    number1.push(i);
  };
 for (var i = 1; i < number1.length; i++){
   if(number1[i] % 3 === 0){
     number1[i] = ("I'm sorry, Dave I'm afraid I can't do that.");
   }
 }

for (var i = 1; i < number1.length; i++){
  if(number1[i] % 10 === 0){
    number1[i] = ("Beep!");
  }
}

 //for (var i = 0; i < number2.length; i++){
//   if(number2[i] )
 //}


  /*if number1 % 3 = 0 {
    number1.remove();
}

for (var i = 0; i <= input; i++){
  number1.push(i);
};

*/

  /*if (input = 3){
    number1.push('Beep!')
  }
  if (input = 4){
    number1.push('Boop!')
  }
  for (var i = 0; i <= input; i++){
    if(input % 3 = 0){
      number1.push(i)
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
