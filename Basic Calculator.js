let expression = '';
 function appendToDisplay(value) {
 expression += value;
 document.getElementById('result').value = expression;
 }
 function clearDisplay() {
 expression = '';
 document.getElementById('result').value = '';
 }
 function calculate() {
    try {
    const result = eval(expression);
    document.getElementById('result').value = result;
    expression = '';
    } catch (error) {
    document.getElementById('result').value = 'Error';
    expression = '';
    }
    }
