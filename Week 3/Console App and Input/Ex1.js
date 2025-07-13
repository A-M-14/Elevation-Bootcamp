const [, , arg1, operator, arg2] = process.argv;

const num1 = parseFloat(arg1);
const num2 = parseFloat(arg2);

if (isNaN(num1) || isNaN(num2)) {
  console.error('Error: Both arguments must be valid numbers.');
  process.exit(1);
}

let result;
switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    if (num2 === 0) {
      console.error('Error: Division by zero.');
      process.exit(1);
    }
    result = num1 / num2;
    break;
    
  default:
    console.error(`Error: Invalid operator "${operator}". Use one of +, -, *, /.`);
    process.exit(1);
}

console.log(`Result: ${result}`);