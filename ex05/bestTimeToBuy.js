
function maxProfit(prices) {
    let minPreco = prices[0];
    let maiorLucro = [0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPreco) {
            minPreco = prices[i];
        } else {
            let lucro = prices[i] - minPreco;
            if (lucro > maiorLucro) {
                maiorLucro = lucro;
            }
        }
    }
    return maiorLucro;
}

// Teste
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));