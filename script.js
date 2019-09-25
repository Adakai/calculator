var zeroBtn = document.getElementById('calc_zero');
var oneBtn = document.getElementById('calc_one');
var twoBtn = document.getElementById('calc_two');
var threeBtn = document.getElementById('calc_three');
var fourBtn = document.getElementById('calc_four');
var fiveBtn = document.getElementById('calc_five');
var sixBtn = document.getElementById('calc_six');
var sevenBtn = document.getElementById('calc_seven');
var eightBtn = document.getElementById('calc_eight');
var nineBtn = document.getElementById('calc_nine');

var displayValElement = document.getElementById('calc_display_val');
var clearBtn = document.getElementById('calc_clear');
var backspacelBtn = document.getElementById('calc_backspace');
var decimalBtn = document.getElementById('calc_decimal');

var calcNumBtns = document.getElementsByClassName('calc-btn-num');
var calcOperatorBtns = document.getElementsByClassName('calc-btn-operator');

var displayVal = '0';
var pendingVal;
var evalStringArray = [];

updateDisplayVal = (clickObj) => {
  var btnText  = clickObj.target.innerText;

  if(displayVal === '0') {
      displayVal = '';
  }

  displayVal += btnText;
  displayValElement.innerText = displayVal;
  
}

var performOperation = (clickObj) => {
  var operator = clickObj.target.innerText;

  switch (operator) {
    case '+':
      pendingVal = displayVal
      displayVal = '0';
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push('+');
      break;

    case '-':
      pendingVal = displayVal
      displayVal = '0';
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push('-');
      break;

    case 'x':
      pendingVal = displayVal
      displayVal = '0';
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push('*');
      break; 
      
    case '÷': 
      pendingVal = displayVal
      displayVal = '0';
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push('/');
      break;

    case '=':
      evalStringArray.push(displayVal);
      var evaluation = eval(evalStringArray.join(' '));
      displayVal = evaluation + '';
      displayValElement.innerText = displayVal;
      evalStringArray = [];
      break;

    default:
      break; 
  }
}

for (let i = 0; i < calcNumBtns.length; i++) {
  calcNumBtns[i].addEventListener('click', updateDisplayVal, false);
}

for (let i = 0; i < calcOperatorBtns.length; i++) {
  calcOperatorBtns[i].addEventListener('click', performOperation, false);
}

clearBtn.onclick = () => {
  displayVal = '0';
  pendingVal = undefined;
  evalStringArray = [];
  displayValElement.innerHTML = displayVal;
}

backspacelBtn.onclick = () => {
  let lengthOfDeisplayVal = displayVal.length;
  displayVal = displayVal.slice(0, lengthOfDeisplayVal - 1);

  if(displayVal === '') {
    displayVal = '0';
  }

  displayValElement.innerText = displayVal;
}

decimalBtn.onclick = () => {
  if(!displayVal.includes('.')) {
    displayVal += '.';
  }

  displayValElement.innerText = displayVal;
}