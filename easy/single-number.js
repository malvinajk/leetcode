// Given a non - empty array of integers nums, every element appears twice except for one.Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.



//     Example 1:

// Input: nums = [2, 2, 1]

// Output: 1

// Example 2:

// Input: nums = [4, 1, 2, 1, 2]

// Output: 4

// Example 3:

// Input: nums = [1]

// Output: 1



// Constraints:

// 1 <= nums.length <= 3 * 104
//     - 3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

// gotta use bitwise XOR operator 
// initial idea was to use a hash map to count occurrences but that would use extra space plus the object cannot grow - it breaks the constant space requirement
// XOR explanation:
// Think of XOR like a “light switch”:

// - Each time you see a number, you flip its switch.

// - If you see it again, you flip it back off.

// - At the end, the only switch still on belongs to the unique number.

var singleNumber = function (nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num;
    }
    return result;
};

