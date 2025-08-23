function fizzBuzz(n) {
    const resposta = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            resposta.push("FizzBuzz");
        } else if (i % 3 === 0) {
            resposta.push("Fizz");
        } else if (i % 5 === 0) {
            resposta.push("Buzz");
        } else {
            resposta.push(i.toString());
        }

    }
    return resposta;
}

// Teste
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15))