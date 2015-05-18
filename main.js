var calculation = 0;
var displayedCalculation = "0";
var pendingOperation;
var $display = document.querySelector('.display-number');


function numberButtonPressed(event) {
  var number = Number(event.target.textContent);
    if(pendingOperation !== undefined) {
      switch (pendingOperation) {
        case"+":
          calculation += number;
          break;
      }
      pendingOperation = undefined;
      $display.textContent = number;
    } else{
      displayOrConcatenateNumber(number);
    }


}

[].forEach.call(document.querySelectorAll('.keypad-button.number'), function(el){
  el.addEventListener('click',numberButtonPressed);
}, false);

/*function decimalButtonPressed(event) {

}

document.querySelector('.decimal').addEventListener('click',displayOrConcatenateNumber); */

function operatorButtonPressed(event) {
  pendingOperation = event.target.textContent;
  displayOrConcatenateNumber(calculation);
}

[].forEach.call(document.querySelectorAll('.keypad-button.operator'), function(el){
  el.addEventListener('click',operatorButtonPressed);
}, false);



function equalsButtonPressed(event) {
  $display.textContent = calculation;
}

document.querySelector('.equals').addEventListener('click',equalsButtonPressed);


function clearButtonPressed(event) {
  calculation = 0;
}

[].forEach.call(document.querySelectorAll('.ac'), function(el){
  el.addEventListener('click',clearButtonPressed);
}, false);

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
