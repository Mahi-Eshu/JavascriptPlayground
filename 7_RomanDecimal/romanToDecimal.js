const prompt = require('prompt-sync')()

function romanToDecimal(s){
    const arr = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let ans = 0
    for(let i=0;i<s.length;i++){
        if(i < s.length-1 && arr[s[i]] < arr[s[i+1]]){ //in IV, I < V, where V->5, so IV becomes 4
            ans -= arr[s[i]]
        }
        else{
            ans += arr[s[i]]
        }
    }
    return ans;
}

const input = prompt("Enter a Roman: ")
console.log(romanToDecimal(input))