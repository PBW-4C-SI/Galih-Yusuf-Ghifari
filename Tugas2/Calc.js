const calculator = (operator, ...numbers) => {
    let result = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {
        switch (operator) {
            case '+': 
                result += numbers[i]; 
                break;
            case '-': 
                result -= numbers[i]; 
                break;
            case '*': 
                result *= numbers[i]; 
                break;
            case '/': 
                result /= numbers[i]; 
                break;
            case '%': 
                result %= numbers[i]; 
                break;
            default: 
                return "Operator tidak valid!";
        }
    }

    return result;
}

console.log(calculator('+', 1, 5));  
console.log(calculator('-', 3, 4));    
console.log(calculator('*', 10, 3));  
console.log(calculator('/', 15, 5));   
console.log(calculator('%', 9, 3));    