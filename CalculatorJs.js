$(document).ready(function() {

  var userInput = [''];
  var inputStr;

  // validation
  var ops = ['+', '-', '*', '/', '='];
  var dec = ['.'];
  var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  function getValue(input) {
    if (dec.includes(userInput[userInput.length - 1]) === true && input === ".") {
      console.log("Duplicat '.' ");
    } else if (userInput.length === 1 && ops.includes(input) === false) {
      userInput.push(input);
    } else if (ops.includes(userInput[userInput.length - 1]) === false) {
      userInput.push(input)
    } else if (num.includes(Number(input))) {
      userInput.push(input);
    }
    update();
  }

  function update() {
    inputStr = userInput.join('');
    $('#screen').html(inputStr);
    console.log(userInput);
  }

  function getTotal() {
    inputStr = userInput.join('');
    $("#screen").html(eval(inputStr));
  }

  $('span').on('click', function() {
    if (this.id === 'delete') {
      userInput = [""];
      update();
    } else if (this.id === '=') {
      getTotal();
    } else {
      if (userInput[userInput.length - 1].indexOf("+", "-", "/", "*", ".") === -1) {
        getValue(this.id);
      } else {
        getValue(this.id);
      }
    }
  });

})