
function achaMediana(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return achaMediana(nums2, nums1);
    }

    let m = nums1.length;
    let n = nums2.length;
    let min = 0, max = m, meio = Math.floor((m + n + 1) / 2);

    while (min <= max) {
        let i = Math.floor((min + max) / 2);
        let j = meio - i;

        if (i < m && nums2[j - 1] > nums1[i]) {
            min = i + 1;
        } else if (i > 0 && nums1[i - 1] > nums2[j]) {
            max = i - 1;
        } else {
            let ladoEsq;
            if (i === 0) {
                ladoEsq = nums2[j - 1];
            } else if (j === 0) {
                ladoEsq = nums1[i - 1];
            } else {
                ladoEsq = Math.max(nums1[i - 1], nums2[j - 1]);
            }
            if ((m + n) % 2 === 1) {
                return ladoEsq;
            }

            let ladoDir;
            if (i === m) {
                ladoDir = nums2[j];
            } else if (j === n) {
                ladoDir = nums1[i];
            } else {
                ladoDir = Math.min(nums1[i], nums2[j]);
            }

            return (ladoEsq + ladoDir) / 2.0;
        }
    }
    return 0;
}

// Teste
console.log("Teste 1:", achaMediana([1, 3], [2]));
console.log("Teste 2:", achaMediana([1, 2], [3, 4]));
console.log("Teste 3:", achaMediana([0, 0], [0, 0]));
console.log("Teste 4:", achaMediana([], [1]));      