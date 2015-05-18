var calculation = 0;
var displayedCalculation = "0";
var pendingOperation;
var $display = document.querySelector('.display-number');

function numberButtonPressed(event) {
  var number = Number(event.target.textContent);
    if(pendingOperation !== undefined) {
      switch(pendingOperation){
        case"+":
          calculation += number;
          break;
      }
      pendingOperation = undefined;
    } else{
      displayOrConcatenateNumber(number);
    }


}

function decimalButtonPressed(event) {

}

function operatorButtonPressed(event) {
  pendingOperation = event.target.textContent;
  displayOrConcatenateNumber(calculation);
}

function equalsButtonPressed(event) {
  $display.textContent = calculation;
}

function displayOrConcatenateNumber(inputNumber) {
  if(calculation === 0) {
    calculation = Number(inputNumber);
    displayedCalculation = String(inputNumber);
  } else{
    calculation = Number(displayedCalculation + inputNumber);
    displayedCalculation = String(displayedCalculation + inputNumber);
  }
    $display.textContent = displayedCalculation;
}

[].forEach.call(document.querySelectorAll('.keypad-button.number'), function(el){
  el.addEventListener('click',numberButtonPressed);
}, false);

[].forEach.call(document.querySelectorAll('.keypad-button.operator'), function(el){
  el.addEventListener('click',operatorButtonPressed);
}, false);


document.querySelector('.decimal').addEventListener('click',displayOrConcatenateNumber);
