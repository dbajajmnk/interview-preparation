/**
 * Week 1-2: Basic Hash Map/Set Problems
 * 
 * These problems introduce the use of Maps and Sets for efficient lookups.
 * 
 * WHAT IS A HASH MAP (Map in TypeScript)?
 * A Hash Map is a data structure that stores key-value pairs.
 * It provides O(1) average time complexity for insert, delete, and lookup operations.
 * 
 * WHAT IS A SET?
 * A Set is a collection of unique values (no duplicates).
 * It also provides O(1) average time for add, delete, and has operations.
 * 
 * WHY USE THEM?
 * - Fast lookups: Instead of O(n) linear search, we get O(1) constant time
 * - Track seen elements: Perfect for duplicate detection
 * - Count frequencies: Store counts of elements efficiently
 */

/**
 * Problem 1: Two Sum
 * 
 * Given an array of integers and a target sum, find two numbers that add up to the target.
 * Return their indices.
 * 
 * EXAMPLE:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1] (because nums[0] + nums[1] = 2 + 7 = 9)
 * 
 * APPROACH: Hash Map (One-pass)
 * - For each number, calculate what number we need (complement = target - current)
 * - Check if we've seen the complement before (in our map)
 * - If yes, we found our pair! Return the indices
 * - If no, store current number and its index in the map for future lookups
 * 
 * WHY THIS WORKS:
 * Instead of checking every pair (O(n²)), we use a map to instantly check
 * if we've seen the complement before (O(1) lookup).
 * 
 * TIME COMPLEXITY: O(n)
 * - Single pass through the array: O(n)
 * - Map operations (has, get, set) are O(1) on average
 * - Total: O(n)
 * 
 * SPACE COMPLEXITY: O(n)
 * - In worst case, we store all n elements in the map
 * 
 * @param nums - Array of integers
 * @param target - Target sum
 * @returns Array of two indices [i, j] where nums[i] + nums[j] = target, or null if not found
 */
export function twoSum(nums: number[], target: number): number[] | null {
  // Map stores: number -> its index
  // Example: If we see number 2 at index 0, map will have {2: 0}
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    // Complement is the number we need to pair with nums[i] to get target
    // Example: If target is 9 and nums[i] is 2, complement is 7
    const complement = target - nums[i];
    
    // Check if we've already seen the complement
    if (map.has(complement)) {
      // Found it! Return the index where we saw complement, and current index
      return [map.get(complement)!, i];
    }
    
    // Store current number and its index for future lookups
    map.set(nums[i], i);
  }
  
  // No pair found
  return null;
}

/**
 * Problem 2: Find First Duplicate
 * 
 * Given an array, find the first duplicate element.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function findFirstDuplicate<T>(arr: T[]): T | null {
  const seen = new Set<T>();

  for (const item of arr) {
    if (seen.has(item)) {
      return item;
    }
    seen.add(item);
  }
  
  return null;
}

/**
 * Problem 3: Count Character Frequencies
 * 
 * Count how many times each character appears in a string.
 * 
 * EXAMPLE:
 * Input: "hello"
 * Output: Map { 'h' => 1, 'e' => 1, 'l' => 2, 'o' => 1 }
 * 
 * APPROACH: Use a Map to track counts
 * - Iterate through each character in the string
 * - For each character, increment its count in the map
 * - If character not seen before, initialize count to 1
 * 
 * TIME COMPLEXITY: O(n)
 * - We iterate through the string once: O(n) where n is string length
 * - Map operations (get, set) are O(1) on average
 * 
 * SPACE COMPLEXITY: O(k)
 * - k = number of unique characters in the string
 * - In worst case (all characters unique), k = n
 * - In best case (all same character), k = 1
 * 
 * @param str - Input string
 * @returns Map where keys are characters and values are their frequencies
 * 
 * USAGE:
 * const freq = countCharFrequencies("hello");
 * console.log(freq.get('l')); // 2
 */
export function countCharFrequencies(str: string): Map<string, number> {
  // Map stores: character -> count of occurrences
  const frequencies = new Map<string, number>();

  for (const char of str) {
    // Get current count (default to 0 if character not seen before)
    // Then increment by 1
    frequencies.set(char, (frequencies.get(char) || 0) + 1);
  }

  return frequencies;
}

/**
 * Problem 4: Group Anagrams
 * 
 * Given an array of strings, group the anagrams together.
 * 
 * EXAMPLE:
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
 * 
 * EXPLANATION:
 * - "eat", "tea", "ate" are anagrams (same letters: a, e, t)
 * - "tan", "nat" are anagrams (same letters: a, n, t)
 * - "bat" has no anagrams
 * 
 * APPROACH: Use sorted string as key
 * - Sort characters in each string to create a "signature"
 * - Anagrams will have the same sorted signature
 * - Group strings with the same signature together
 * 
 * EXAMPLE OF SIGNATURE:
 * - "eat" -> sorted -> "aet"
 * - "tea" -> sorted -> "aet" (same signature, so they're grouped)
 * 
 * TIME COMPLEXITY: O(n * k log k)
 * - n = number of strings
 * - k = average length of strings
 * - For each string: split (O(k)) + sort (O(k log k)) + join (O(k))
 * - Total: O(n * k log k)
 * 
 * SPACE COMPLEXITY: O(n * k)
 * - We store all strings in the map
 * 
 * @param strs - Array of strings
 * @returns Array of groups, where each group contains anagrams
 */
export function groupAnagrams(strs: string[]): string[][] {
  // Map stores: sorted_string -> array of original strings that match
  // Example: "aet" -> ["eat", "tea", "ate"]
  const map = new Map<string, string[]>();

  for (const str of strs) {
    // Create signature by sorting characters
    // All anagrams will have the same sorted string
    const sorted = str.split("").sort().join("");
    
    // If this signature is new, create an empty array for it
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    // Add the original string to the group
    map.get(sorted)!.push(str);
  }

  // Convert map values (arrays of anagrams) to a 2D array
  return Array.from(map.values());
}

/**
 * Problem 5: Contains Duplicate
 * 
 * Check if an array contains any duplicate elements.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function containsDuplicate<T>(arr: T[]): boolean {
  const seen = new Set<T>();

  for (const item of arr) {
    if (seen.has(item)) {
      return true;
    }
    seen.add(item);
  }

  return false;
}

/**
 * Problem 6: Find Missing Number
 * 
 * Given an array of n distinct numbers in range [0, n], find the missing number.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
export function findMissingNumber(nums: number[]): number {
  const numSet = new Set(nums);
  const n = nums.length;

  for (let i = 0; i <= n; i++) {
    if (!numSet.has(i)) {
      return i;
    }
  }

  return -1; // Should never reach here
}

/**
 * Problem 7: Intersection of Two Arrays
 * 
 * Find the intersection of two arrays (elements present in both).
 * 
 * Time Complexity: O(n + m) where n and m are array lengths
 * Space Complexity: O(min(n, m))
 */
export function intersection<T>(arr1: T[], arr2: T[]): T[] {
  const set1 = new Set(arr1);
  const result: T[] = [];

  for (const item of arr2) {
    if (set1.has(item)) {
      result.push(item);
      set1.delete(item); // Avoid duplicates in result
    }
  }

  return result;
}

// Test cases
if (require.main === module) {
  console.log("Testing Hash Map/Set Problems:");
  
  console.log("Two Sum [2,7,11,15], target 9:", twoSum([2, 7, 11, 15], 9)); // [0, 1]
  console.log("First duplicate:", findFirstDuplicate([1, 2, 3, 2, 4, 3])); // 2
  
  const freq = countCharFrequencies("hello");
  console.log("Char frequencies of 'hello':");
  freq.forEach((count, char) => console.log(`  ${char}: ${count}`));
  
  console.log("Group anagrams:", groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
  console.log("Contains duplicate:", containsDuplicate([1, 2, 3, 1])); // true
  console.log("Missing number:", findMissingNumber([3, 0, 1])); // 2
  console.log("Intersection:", intersection([1, 2, 2, 1], [2, 2])); // [2]
}

