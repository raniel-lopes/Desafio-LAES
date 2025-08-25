function climbStairs(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let anterior = 2;
    let penultimo = 1;
    let formas = 0;

    for (let i = 3; i <= n; i++) {
        formas = anterior + penultimo;
        penultimo = anterior;
        anterior = formas;
    }

    return formas;
}

// Teste
console.log(climbStairs(1)); // 1
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
console.log(climbStairs(5)); // 8