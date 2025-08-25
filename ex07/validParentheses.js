function isValid(s) {
    let pilha = [];
    let pares = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            pilha.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (pilha.length === 0 || pilha.pop() !== pares[char]) {
                return false;
            }
        }
    }

    return pilha.length === 0;
}

// Teste
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true