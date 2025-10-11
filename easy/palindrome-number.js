
// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
//     Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads - 121. From right to left, it becomes 121 -.Therefore it is not a palindrome.
//     Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left.Therefore it is not a palindrome.


//     Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string ?

// without converting the integer to a string:

var isPalindrome = function (x) {
    if (x < 0) return false;
    let original = x;
    let reversed = 0;

    while (x !== 0) {
        reversed = (reversed * 10) + (x % 10)
        x = Math.trunc(x / 10)
        console.log(x)
    }
    return original === reversed;
};

// reversed only half of the number:

var isPalindrome = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversedHalf = 0;

    while (x > reversedHalf) {
        const lastDigit = x % 10;
        reversedHalf = reversedHalf * 10 + lastDigit;
        x = Math.floor(x / 10);
    }
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};

// finally using string conversion:

var isPalindrome = function (x) {
    const str = x.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
};