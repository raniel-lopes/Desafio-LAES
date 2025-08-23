
function isPalindrome(s) {
    let cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    return cleaned === cleaned.split('').reverse().join('');
}

// Teste
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" "));
