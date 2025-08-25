function missingNumber(nums) {
    let n = nums.length;
    let somaEsperada = (n * (n + 1)) / 2;

    let somaReal = 0;
    for (let num of nums) {
        somaReal += num;
    }

    return somaEsperada - somaReal;
}

// Exemplos:
console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));    