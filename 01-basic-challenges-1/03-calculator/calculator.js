function calculator(num1, num2, operator) {
    let result;

    switch(operator) {
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
            result = num1 / num2;
            break;
        default:
            result = 'Choose an operator';
    }
        
return result;
}
console.log(calculator(1, 2, '*'));
module.exports = calculator;
