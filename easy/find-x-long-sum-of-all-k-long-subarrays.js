// You are given an array nums of n integers and two integers k and x.

// The x - sum of an array is calculated by the following procedure:

// Count the occurrences of all elements in the array.
// Keep only the occurrences of the top x most frequent elements.If two elements have the same number of occurrences, the element with the bigger value is considered more frequent.
// Calculate the sum of the resulting array.
// Note that if an array has less than x distinct elements, its x - sum is the sum of the array.

// Return an integer array answer of length n - k + 1 where answer[i] is the x - sum of the subarray nums[i..i + k - 1].



//     Example 1:

// Input: nums = [1, 1, 2, 2, 3, 4, 2, 3], k = 6, x = 2

// Output: [6, 10, 12]

// Explanation:

// For subarray[1, 1, 2, 2, 3, 4], only elements 1 and 2 will be kept in the resulting array.Hence, answer[0] = 1 + 1 + 2 + 2.
// For subarray[1, 2, 2, 3, 4, 2], only elements 2 and 4 will be kept in the resulting array.Hence, answer[1] = 2 + 2 + 2 + 4. Note that 4 is kept in the array since it is bigger than 3 and 1 which occur the same number of times.
// For subarray[2, 2, 3, 4, 2, 3], only elements 2 and 3 are kept in the resulting array.Hence, answer[2] = 2 + 2 + 2 + 3 + 3.
// Example 2:

// Input: nums = [3, 8, 7, 8, 7, 5], k = 2, x = 2

// Output: [11, 15, 15, 15, 12]

// Explanation:

// Since k == x, answer[i] is equal to the sum of the subarray nums[i..i + k - 1].



//     Constraints:

// 1 <= n == nums.length <= 50
// 1 <= nums[i] <= 50
// 1 <= x <= k <= nums.length

// pseudocode: initial idea to brute force and repopulate a hash map every time and on every loop. better idea (more optimized): to use a sliding window and update only the number that is leaving and the number that is entering the window. This way you don't have to repopulate each number, only what is changing. then create a helper function to sort the object by frequency and then to sum the top x num of frequencies. call the function on each loop and push the result to an array to return at the end.

var findXSum = function (nums, k, x) {
    let seen = {};
    let result = [];
    nums.slice(0, k).forEach(num => seen[num] = (seen[num] || 0) + 1)

    function calculateSum(obj, x) {
        let sorted = Object.entries(obj).sort((a, b) => b[1] - a[1] || b[0] - a[0])
        return sorted.slice(0, x).reduce((acc, [num, count]) => acc + Number(num) * count, 0);
    }

    result.push(calculateSum(seen, x))

    // sliding loop:
    for (let i = k; i < nums.length; i++) {
        let leaving = nums[i - k];
        let entering = nums[i];
        seen[leaving]--;
        if (seen[leaving] === 0) delete seen[leaving];
        seen[entering] = (seen[entering] || 0) + 1;
        result.push(calculateSum(seen, x))
    }
    return result;
};