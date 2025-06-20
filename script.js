let current = '';
let operator = '';
let result = '';
let language = 'en';

const translations = {
  en: 'Kids Calculator 👧👦',
  ar: 'آلة حاسبة للأطفال 👧👦',
  de: 'Kinder Rechner 👧👦',
  fr: 'Calculatrice pour enfants 👧👦'
};

function appendNumber(num) {
  current += num.toString();
  updateDisplay(current);
}

function setOperation(op) {
  if (current === '') return;
  operator = op;
  result = current;
  current = '';
}

function calculate() {
  if (current === '' || result === '' || operator === '') return;

  const a = parseFloat(result);
  const b = parseFloat(current);
  let calc = 0;

  switch (operator) {
    case '+':
      calc = a + b;
      break;
    case '-':
      calc = a - b;
      break;
    case '*':
      calc = a * b;
      break;
  }

  current = calc.toString();
  operator = '';
  result = '';
  updateDisplay(current);
}

function clearDisplay() {
  current = '';
  operator = '';
  result = '';
  updateDisplay('0');
}

function updateDisplay(value) {
  document.getElementById('display').innerText = value;
}

function changeLanguage() {
  const lang = document.getElementById('language').value;
  language = lang;
  document.getElementById('title').innerText = translations[lang];
}
