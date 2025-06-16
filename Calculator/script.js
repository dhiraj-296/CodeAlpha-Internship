let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

const operators = ['+', '-', '*', '/', '%'];
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerHTML;
        const lastChar = string[string.length - 1];

        if (value === '=') {
            if (string !== "") {
                string = eval(string).toString();
                input.value = string;
            }
        }
        else if (value === 'AC') {
            string = "";
            input.value = string;
        }
        else if (value === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else if (operators.includes(value)) {
            // Prevent starting with an operator
            if (string === "") return;

            // Prevent two operators in a row
            if (operators.includes(lastChar)) return;

            string += value;
            input.value = string;
        }
        else if (value === '.') {
            // Prevent multiple decimals in one number
            
            let lastNumber = string.split(/[\+\-\*\/\%]/).pop(); // gets last number
            if (lastNumber.includes('.')) return;

            string += value;
            input.value = string;
        }
        else {
            string += value;
            input.value = string;
        }
    });
});
