
var romans = ["I", "V", "X", "L", "C", "D","M"];
var breaknumbers = [1, 5, 10, 50, 100, 500, 1000];
var outputArray = [];
var outputString = "";


var numeralProcessing = function(number, indexOfLarger) {
  var howManyRoman;
  var numberRemainder;
    howManyRoman = Math.floor(number/breaknumbers[indexOfLarger-1]);
    numberRemainder=(number%breaknumbers[indexOfLarger-1]);
    console.log("number = " + number + " howManyRoman = " + howManyRoman + "  AND numberRemainder =" + numberRemainder);
    if (howManyRoman === 4) {
      // console.log("BEFORE output Array =" + outputArray);
      outputArray.pop();
      outputArray.push(romans[indexOfLarger-1]);
      outputArray.push(romans[indexOfLarger]);
      // numberRemainder = 0
      // console.log("AFTER output Array =" + outputArray);
      numeralize(numberRemainder);
    } else {
      for (var i = 0; i <= howManyRoman; i ++){
        outputArray.push(romans[indexOfLarger-1]);
        // console.log("output Array if REMAINDER NOT 4=" + outputArray);
      };
      numeralize(numberRemainder);
    };


};

var numeralize = function(number){
  // debugger;
  for(var i=0; i<breaknumbers.length; i++){
    if (number===breaknumbers[i]){
      outputArray.push(romans[i]);

      return;
    } else if (number < breaknumbers[i]){
      numeralProcessing(number, i);
      return;
      // return "The number is less than " + breaknumbers[i];
    } else if (number > 1000) {
      numeralProcessing(number, 6);
      return;
    };
  };

};


  $(function(){
    $("#romanNumber").submit(function(){
      event.preventDefault();
      outputString = "";
      outputArray = [];
      var output;
      var number = parseInt($("input#number").val());
      output = numeralize(number);
      outputString = outputArray.join("");
      console.log(outputString);

    });//submit
















});
