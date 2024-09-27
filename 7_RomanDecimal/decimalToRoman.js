const prompt = require('prompt-sync')()

function decimalToRoman(n){
    const arr = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    let ans = '';

    for (let i=0; i<arr.length; i++){
        while (n >= arr[i].value){
            ans += arr[i].symbol;
            n -= arr[i].value;
        }
    }

    return ans;
}

// Example usage:
let input = prompt("Enter an integer: ");
console.log(decimalToRoman(parseInt(input))); // Outputs the Roman numeral
