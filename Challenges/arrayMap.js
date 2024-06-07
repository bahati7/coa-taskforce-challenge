function hasContiguousSubarraySum(arr, target) {
  // Initialize variables to store current sum and starting index
  let currentSum = 0;
  let start = 0;

  // Iterate through the array
  for (let end = 0; end < arr.length; end++) {
    // Add the current element to the current sum
    currentSum += arr[end];

    // Check if current sum is greater than or equal to the target
    while (currentSum >= target) {
      // If current sum equals the target, return true
      if (currentSum === target) {
        return true;
      }

      // Subtract the element at the starting index and increment the starting index
      currentSum -= arr[start];
      start++;
    }
  }

  // If no subarray is found, return false
  return false;
}

// Test cases
console.log(hasContiguousSubarraySum([4, 2, 7, 1, 9, 5], 17)); 
console.log(hasContiguousSubarraySum([1, 2, 3, 4, 5], 9));    
console.log(hasContiguousSubarraySum([1, 2, 3, 4, 5], 10));   