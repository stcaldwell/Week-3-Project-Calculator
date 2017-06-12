function inputZero() {
  document.calc.display.value += 0;
}

function inputOne() {
  document.calc.display.value += 1;
}

function inputTwo() {
  document.calc.display.value += 2;
}

function inputThree() {
  document.calc.display.value += 3;
}

function inputFour() {
  document.calc.display.value += 4;
}

function inputFive() {
  document.calc.display.value += 5;
}

function inputSix() {
  document.calc.display.value += 6;
}

function inputSeven() {
  document.calc.display.value += 7;
}

function inputEight() {
  document.calc.display.value += 8;
}

function inputNine() {
  document.calc.display.value += 9;
}

function inputDecimal() {
  document.calc.display.value += ".";
}


function inputDivide() {
  document.calc.display.value += "/";
}

function inputAddition() {
  document.calc.display.value += "+";
}

function inputSubtract() {
  document.calc.display.value += "-";
}

function inputMultiply() {
  document.calc.display.value += "*";
}

function inputClear() {
  document.calc.display.value = "";
}


function doEvaluate() {
  var evaluation = eval(document.calc.display.value);

  document.calc.display.value = evaluation;

}
