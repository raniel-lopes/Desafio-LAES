function twoSum(nums, target) {
    const obj = {};

    for (let i = 0; i < nums.length; i++) {
        let complemento = target - nums[i];

        if (obj.hasOwnProperty(complemento)) {
            return [obj[complemento], i];
        }
        obj[nums[i]] = i;
    }
}

// Teste
console.log("Teste 1:", twoSum([2, 7, 11, 15], 9)); // Esperado: [0,1]
console.log("Teste 2:", twoSum([3, 2, 4], 6)); // Esperado: [1,2]
console.log("Teste 3:", twoSum([3, 3], 6)); // Esperado: [0,1]