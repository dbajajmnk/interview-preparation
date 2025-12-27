/**
 * Week 1: Easy Array Problems
 * 
 * These are beginner-friendly array problems to get started with DSA in TypeScript.
 * 
 * TERMINOLOGY:
 * - Array: A collection of elements stored in contiguous memory locations
 * - Index: The position of an element in an array (starts at 0)
 * - Time Complexity: How the runtime grows with input size (Big O notation)
 * - Space Complexity: How much extra memory the algorithm uses
 * - O(1): Constant time/space - operation takes same time regardless of input size
 * - O(n): Linear time/space - grows proportionally with input size
 * - In-place: Modifies the original array without creating a new one
 */

/**
 * Problem 1: Find Maximum Element in Array
 * 
 * Given an array of numbers, find the maximum element.
 * 
 * APPROACH:
 * - Start with the first element as the initial maximum
 * - Compare each subsequent element with the current maximum
 * - Update maximum if we find a larger value
 * 
 * TIME COMPLEXITY: O(n)
 * - We iterate through the array once, visiting each element exactly once
 * - n = number of elements in the array
 * 
 * SPACE COMPLEXITY: O(1)
 * - We only use a constant amount of extra space (one variable: max)
 * - Space doesn't grow with input size
 * 
 * @param arr - Array of numbers
 * @returns The maximum number in the array
 * @throws Error if array is empty
 */
export function findMax(arr: number[]): number {
  // Edge case: Handle empty array
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }

  // Initialize max with the first element
  let max = arr[0];
  
  // Start from index 1 since we already have arr[0] as max
  for (let i = 1; i < arr.length; i++) {
    // Update max if current element is greater
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

/**
 * Problem 2: Find Minimum Element in Array
 * 
 * Given an array of numbers, find the minimum element.
 * 
 * APPROACH: Similar to findMax, but we look for the smallest value instead
 * 
 * TIME COMPLEXITY: O(n) - Linear time, one pass through the array
 * SPACE COMPLEXITY: O(1) - Constant space, only one variable needed
 * 
 * @param arr - Array of numbers
 * @returns The minimum number in the array
 * @throws Error if array is empty
 */
export function findMin(arr: number[]): number {
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }

  let min = arr[0]; // Start with first element as minimum
  for (let i = 1; i < arr.length; i++) {
    // Update min if current element is smaller
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

/**
 * Problem 3: Calculate Sum of Array Elements
 * 
 * Given an array of numbers, calculate the sum of all elements.
 * 
 * APPROACH: Iterate and accumulate
 * - Start with sum = 0
 * - Add each element to the sum
 * 
 * TIME COMPLEXITY: O(n) - Must visit each element once
 * SPACE COMPLEXITY: O(1) - Only one variable (sum) is used
 * 
 * @param arr - Array of numbers
 * @returns Sum of all elements
 * 
 * Example: [1, 2, 3, 4] -> 10
 */
export function arraySum(arr: number[]): number {
  let sum = 0; // Initialize accumulator
  // for...of loop iterates through each element
  for (const num of arr) {
    sum += num; // Add current number to sum
  }
  return sum;
}

/**
 * Problem 4: Calculate Average of Array Elements
 * 
 * Given an array of numbers, calculate the average (mean).
 * 
 * FORMULA: average = sum of all elements / number of elements
 * 
 * APPROACH: Reuse arraySum function, then divide by length
 * 
 * TIME COMPLEXITY: O(n) - arraySum is O(n)
 * SPACE COMPLEXITY: O(1) - Constant space
 * 
 * @param arr - Array of numbers
 * @returns Average (mean) of all elements
 * @throws Error if array is empty (can't divide by zero)
 * 
 * Example: [2, 4, 6] -> (2+4+6)/3 = 4
 */
export function arrayAverage(arr: number[]): number {
  if (arr.length === 0) {
    throw new Error("Array is empty"); // Can't divide by zero
  }
  return arraySum(arr) / arr.length; // Sum divided by count
}

/**
 * Problem 5: Reverse an Array
 * 
 * Given an array, return a new array with elements in reverse order.
 * 
 * APPROACH: Create a new array and copy elements in reverse order
 * - Start from the last index (length - 1) and go backwards to 0
 * 
 * TIME COMPLEXITY: O(n) - We iterate through all n elements once
 * SPACE COMPLEXITY: O(n) - We create a new array of size n
 * 
 * NOTE: This does NOT modify the original array (non-destructive)
 * 
 * @param arr - Array of any type
 * @returns A new array with elements in reverse order
 * 
 * Example: [1, 2, 3] -> [3, 2, 1]
 */
export function reverseArray<T>(arr: T[]): T[] {
  const reversed: T[] = [];
  // Loop backwards: start at last index, go to 0
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

/**
 * Problem 6: Reverse an Array In-Place
 * 
 * Given an array, reverse it in-place (modify the original array).
 * 
 * APPROACH: Two-pointer technique
 * - Use two pointers: one at the start (left), one at the end (right)
 * - Swap elements at these positions
 * - Move pointers towards each other until they meet
 * 
 * TIME COMPLEXITY: O(n) - We visit each element once (n/2 swaps)
 * SPACE COMPLEXITY: O(1) - We only use a constant amount of extra space (temp variable)
 * 
 * NOTE: This DOES modify the original array (destructive operation)
 * 
 * @param arr - Array to reverse (will be modified)
 * 
 * Example: [1, 2, 3, 4] -> [4, 3, 2, 1] (original array is changed)
 */
export function reverseArrayInPlace<T>(arr: T[]): void {
  let left = 0;              // Pointer at the start
  let right = arr.length - 1; // Pointer at the end

  // Continue swapping until pointers meet in the middle
  while (left < right) {
    // Swap elements using a temporary variable
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    
    // Move pointers towards each other
    left++;
    right--;
  }
}

/**
 * Problem 7: Find Element in Array
 * 
 * Given an array and a target value, return the index if found, -1 otherwise.
 * This is also known as "Linear Search" - the simplest search algorithm.
 * 
 * APPROACH: Linear search
 * - Check each element from start to end
 * - Return index when found
 * - Return -1 if not found after checking all elements
 * 
 * TIME COMPLEXITY: O(n)
 * - Worst case: Target is at the end or not found (check all n elements)
 * - Best case: Target is at index 0 (O(1))
 * - Average case: O(n)
 * 
 * SPACE COMPLEXITY: O(1) - No extra space needed
 * 
 * NOTE: For sorted arrays, Binary Search (O(log n)) would be faster
 * 
 * @param arr - Array to search in
 * @param target - Value to find
 * @returns Index of target if found, -1 otherwise
 * 
 * Example: findElement([3, 7, 2, 9], 7) -> 1
 * Example: findElement([3, 7, 2, 9], 10) -> -1
 */
export function findElement<T>(arr: T[], target: T): number {
  // Iterate through array with index
  for (let i = 0; i < arr.length; i++) {
    // If current element matches target, return its index
    if (arr[i] === target) {
      return i;
    }
  }
  // Target not found
  return -1;
}

/**
 * Problem 8: Count Occurrences
 * 
 * Given an array and a target value, count how many times it appears.
 * 
 * APPROACH: Linear scan and count
 * - Iterate through all elements
 * - Increment counter when element matches target
 * 
 * TIME COMPLEXITY: O(n) - Must check every element
 * SPACE COMPLEXITY: O(1) - Only one counter variable
 * 
 * @param arr - Array to search in
 * @param target - Value to count
 * @returns Number of times target appears in array
 * 
 * Example: countOccurrences([1, 2, 2, 3, 2, 4], 2) -> 3
 * Example: countOccurrences([1, 2, 3], 5) -> 0
 */
export function countOccurrences<T>(arr: T[], target: T): number {
  let count = 0; // Initialize counter
  // Check each element
  for (const item of arr) {
    // If element matches target, increment counter
    if (item === target) {
      count++;
    }
  }
  return count;
}

// Test cases
if (require.main === module) {
  console.log("Testing Array Problems:");
  
  const testArr = [3, 7, 2, 9, 1, 5];
  console.log("Test array:", testArr);
  console.log("Max:", findMax(testArr)); // 9
  console.log("Min:", findMin(testArr)); // 1
  console.log("Sum:", arraySum(testArr)); // 27
  console.log("Average:", arrayAverage(testArr)); // 4.5
  console.log("Reversed:", reverseArray(testArr)); // [5, 1, 9, 2, 7, 3]
  
  const testArr2 = [1, 2, 3, 4, 5];
  reverseArrayInPlace(testArr2);
  console.log("Reversed in place:", testArr2); // [5, 4, 3, 2, 1]
  
  console.log("Find 7:", findElement([3, 7, 2, 9], 7)); // 1
  console.log("Find 10:", findElement([3, 7, 2, 9], 10)); // -1
  console.log("Count 2:", countOccurrences([1, 2, 2, 3, 2, 4], 2)); // 3
}

