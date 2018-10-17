var inputNumber = document.querySelector('#input-number');
var checkButton = document.querySelector('#check-button');
var messageDiv = document.querySelector('.message')

function bindInput (e) {
  e.preventDefault(); // Prevent default behaviour to happen
  // Replace all every character apart from digits with an empty string
  var text = inputNumber.value.replace(/\D+/g, '');
  // Ony take the first 3 digits
  inputNumber.value = text.slice(0, 3);
  if (inputNumber.value.length === 3) {
    checkButton.className = '';
  } else {
    checkButton.className = 'is-deactivated';
  }

  if (e.keyCode === 13) {
    checkButton.click();
  } else {
    // Hide and reset the div content to an empty string
    messageDiv.style.display = 'none';
    messageDiv.textContent = '';
  }
}

function checkInput (e) {
  var num = inputNumber.value.toString();
  if (num.length === 3) {
    checkButton.className = '';
    messageDiv.style.display = 'block';
    if (Math.pow(num[0],3) + Math.pow(num[1],3) + Math.pow(num[2], 3) == num) {
      messageDiv.textContent = num + ' is an Armstrong number since ' +
      num[0] + '**3 + ' + num[1] + '**3 + ' + num[2] + '**3 = ' + num;
      messageDiv.className = 'message';
    } else {
      messageDiv.textContent = num + ' is not an Armstrong number since ' +
      num[0] + '**3 + ' + num[1] + '**3 + ' + num[2] + '**3 != ' + num;
      messageDiv.className = 'message has-error';
    }
  } else {
    checkButton.className = 'is-deactivated';
    messageDiv.textContent = 'Please enter a number of three digits';
    messageDiv.className = 'message has-error';
    messageDiv.style.display = 'block';
  }
}

inputNumber.addEventListener('keyup', bindInput);
