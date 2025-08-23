function maxSubArray(nums) {
    let maxAtual = nums[0];
    let maxTotal = nums[0];

    for (let i = 1; i < nums.length; i++) {

        maxAtual = Math.max(nums[i], maxAtual + nums[i]);
        maxTotal = Math.max(maxTotal, maxAtual);
    }
    return maxTotal;
}

// Teste
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));