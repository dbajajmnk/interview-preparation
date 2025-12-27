/**
 * Week 1: Easy String Problems
 * 
 * These are beginner-friendly string problems to get started with DSA in TypeScript.
 */

/**
 * Problem 1: Reverse a String
 * 
 * Given a string, return a new string with characters in reverse order.
 * 
 * APPROACH: Build new string by iterating backwards
 * - Start from the last character (index length - 1)
 * - Go backwards to the first character (index 0)
 * - Append each character to a new string
 * 
 * TIME COMPLEXITY: O(n) where n is the length of the string
 * - We iterate through all n characters once
 * 
 * SPACE COMPLEXITY: O(n)
 * - We create a new string of length n
 * 
 * NOTE: Strings in JavaScript/TypeScript are immutable (can't be changed),
 * so we must create a new string rather than modifying the original.
 * 
 * @param str - Input string
 * @returns Reversed string
 * 
 * Example: "hello" -> "olleh"
 */
export function reverseString(str: string): string {
  let reversed = ""; // Start with empty string
  // Loop backwards: from last index to first
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // Append character to result
  }
  return reversed;
}

/**
 * Problem 2: Check if String is Palindrome
 * 
 * WHAT IS A PALINDROME?
 * A palindrome is a word, phrase, number, or sequence that reads the same
 * forwards and backwards (ignoring spaces, punctuation, and case).
 * 
 * EXAMPLES:
 * - "racecar" -> true
 * - "A man a plan a canal Panama" -> true (ignoring spaces and case)
 * - "hello" -> false
 * 
 * APPROACH: Two-pointer technique
 * - Clean the string (remove non-alphanumeric, convert to lowercase)
 * - Use two pointers: one at start, one at end
 * - Compare characters while moving pointers towards center
 * 
 * TIME COMPLEXITY: O(n)
 * - Cleaning string: O(n)
 * - Two-pointer comparison: O(n)
 * - Total: O(n)
 * 
 * SPACE COMPLEXITY: O(n)
 * - Creating cleaned string requires O(n) space
 * 
 * @param str - String to check
 * @returns true if palindrome, false otherwise
 */
export function isPalindrome(str: string): boolean {
  // Clean the string: convert to lowercase and remove non-alphanumeric characters
  // Regex /[^a-z0-9]/g means: match anything that is NOT a-z or 0-9
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  // Two-pointer technique
  let left = 0;              // Start pointer
  let right = cleaned.length - 1; // End pointer

  // Compare characters from both ends
  while (left < right) {
    // If characters don't match, it's not a palindrome
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    // Move pointers towards center
    left++;
    right--;
  }
  // If we made it through, it's a palindrome
  return true;
}

/**
 * Problem 3: Count Vowels in String
 * 
 * Count the number of vowels (a, e, i, o, u) in a string (case-insensitive).
 * 
 * WHAT ARE VOWELS?
 * Vowels are the letters a, e, i, o, u (and sometimes y).
 * This function counts the standard five vowels.
 * 
 * APPROACH: Use Set for O(1) lookup
 * - Create a Set containing all vowels
 * - Convert string to lowercase for case-insensitive comparison
 * - Check each character: if it's in the vowel set, increment count
 * 
 * WHY USE SET?
 * Set.has() is O(1) average time, faster than checking array.includes() which is O(n)
 * 
 * TIME COMPLEXITY: O(n)
 * - toLowerCase(): O(n)
 * - Iterating through string: O(n)
 * - Set.has(): O(1) per character
 * - Total: O(n)
 * 
 * SPACE COMPLEXITY: O(1)
 * - Set has only 5 elements (constant)
 * - Count variable is constant
 * 
 * @param str - Input string
 * @returns Number of vowels in the string
 * 
 * Example: "hello" -> 2 (e, o)
 * Example: "HELLO" -> 2 (case-insensitive)
 */
export function countVowels(str: string): number {
  // Set provides O(1) lookup time for checking if character is a vowel
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;

  // Convert to lowercase so 'A' and 'a' are treated the same
  for (const char of str.toLowerCase()) {
    // Check if current character is a vowel
    if (vowels.has(char)) {
      count++; // Increment counter
    }
  }
  return count;
}

/**
 * Problem 4: Count Words in String
 * 
 * Count the number of words in a string (words are separated by spaces).
 * 
 * WHAT IS A WORD?
 * A word is a sequence of characters separated by whitespace (spaces, tabs, etc.)
 * 
 * APPROACH: Split by whitespace and count
 * - Trim leading/trailing whitespace
 * - Split by one or more whitespace characters
 * - Count the resulting array length
 * 
 * REGEX EXPLANATION: /\s+/
 * - \s = matches any whitespace character (space, tab, newline)
 * - + = one or more occurrences
 * - So /\s+/ matches one or more consecutive whitespace characters
 * 
 * TIME COMPLEXITY: O(n)
 * - trim(): O(n)
 * - split(): O(n)
 * - length: O(1)
 * 
 * SPACE COMPLEXITY: O(n)
 * - split() creates an array of words
 * 
 * @param str - Input string
 * @returns Number of words in the string
 * 
 * Example: "hello world" -> 2
 * Example: "  hello   world  " -> 2 (handles extra spaces)
 */
export function countWords(str: string): number {
  // Handle empty string or string with only whitespace
  if (str.trim().length === 0) {
    return 0;
  }
  // trim() removes leading/trailing whitespace
  // split(/\s+/) splits by one or more whitespace characters
  // length gives us the word count
  return str.trim().split(/\s+/).length;
}

/**
 * Problem 5: Capitalize First Letter
 * 
 * Capitalize the first letter of each word in a string.
 * Also converts the rest of each word to lowercase.
 * 
 * EXAMPLE:
 * Input: "hello WORLD"
 * Output: "Hello World"
 * 
 * APPROACH: Split, transform, join
 * - Split string into words
 * - For each word: capitalize first letter, lowercase the rest
 * - Join words back together
 * 
 * STRING METHODS USED:
 * - toUpperCase(): Converts character to uppercase
 * - toLowerCase(): Converts character(s) to lowercase
 * - slice(1): Gets substring from index 1 to end (all characters except first)
 * 
 * TIME COMPLEXITY: O(n)
 * - split(): O(n)
 * - map(): O(n) where n is number of words
 * - join(): O(n)
 * 
 * SPACE COMPLEXITY: O(n)
 * - Arrays and new string require O(n) space
 * 
 * @param str - Input string
 * @returns String with first letter of each word capitalized
 * 
 * Example: "hello world" -> "Hello World"
 * Example: "HELLO WORLD" -> "Hello World"
 */
export function capitalizeWords(str: string): string {
  // Split string into array of words (split by single space)
  const words = str.split(" ");
  
  // Transform each word: capitalize first letter, lowercase rest
  const capitalized = words.map((word) => {
    // Handle empty strings (multiple spaces)
    if (word.length === 0) return word;
    
    // word[0] = first character, toUpperCase() = capitalize it
    // word.slice(1) = all characters from index 1 onwards, toLowerCase() = make lowercase
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  
  // Join words back with spaces
  return capitalized.join(" ");
}

/**
 * Problem 6: Remove Duplicates from String
 * 
 * Remove duplicate characters from a string, keeping the first occurrence.
 * 
 * EXAMPLE:
 * Input: "programming"
 * Output: "progamin" (removed duplicate 'r' and 'g')
 * 
 * APPROACH: Use Set to track seen characters
 * - Maintain a Set of characters we've already seen
 * - For each character: if not seen before, add to result and mark as seen
 * - If seen before, skip it
 * 
 * WHY USE SET?
 * Set.has() provides O(1) lookup to quickly check if we've seen a character
 * 
 * TIME COMPLEXITY: O(n)
 * - Iterate through string: O(n)
 * - Set operations (has, add): O(1) each
 * - String concatenation: O(n) total (though each += is O(1) amortized)
 * 
 * SPACE COMPLEXITY: O(n)
 * - Set can store up to n unique characters
 * - Result string can be up to length n
 * 
 * @param str - Input string
 * @returns String with duplicate characters removed (first occurrence kept)
 * 
 * Example: "programming" -> "progamin"
 * Example: "hello" -> "helo"
 */
export function removeDuplicates(str: string): string {
  // Set to track which characters we've already seen
  const seen = new Set<string>();
  let result = ""; // Build result string

  for (const char of str) {
    // If we haven't seen this character before
    if (!seen.has(char)) {
      seen.add(char);  // Mark as seen
      result += char;  // Add to result
    }
    // If already seen, skip it (don't add to result)
  }
  return result;
}

/**
 * Problem 7: Check if Two Strings are Anagrams
 * 
 * WHAT IS AN ANAGRAM?
 * Anagrams are words or phrases formed by rearranging the letters of another word.
 * They contain the same characters with the same frequency, just in different order.
 * 
 * EXAMPLES:
 * - "listen" and "silent" -> true (same letters: l, i, s, t, e, n)
 * - "hello" and "world" -> false (different letters)
 * - "rail safety" and "fairy tales" -> true (ignoring spaces)
 * 
 * APPROACH: Normalize and compare
 * - Convert both strings to lowercase
 * - Remove non-alphanumeric characters
 * - Sort characters in both strings
 * - Compare the sorted strings
 * 
 * ALTERNATIVE APPROACH (O(n) time):
 * - Count character frequencies in both strings
 * - Compare the frequency maps
 * 
 * TIME COMPLEXITY: O(n log n)
 * - Sorting takes O(n log n) time where n is string length
 * - Other operations are O(n)
 * 
 * SPACE COMPLEXITY: O(n)
 * - Storing normalized strings requires O(n) space
 * 
 * @param str1 - First string
 * @param str2 - Second string
 * @returns true if strings are anagrams, false otherwise
 */
export function areAnagrams(str1: string, str2: string): boolean {
  // Helper function to normalize a string
  // Normalize = clean + sort characters
  const normalize = (s: string) =>
    s.toLowerCase()                    // Convert to lowercase: "Hello" -> "hello"
      .replace(/[^a-z0-9]/g, "")       // Remove non-alphanumeric: "a b" -> "ab"
      .split("")                       // Convert to array: "abc" -> ["a", "b", "c"]
      .sort()                          // Sort alphabetically: ["c", "a", "b"] -> ["a", "b", "c"]
      .join("");                       // Join back to string: ["a", "b", "c"] -> "abc"

  // If normalized strings are equal, they're anagrams
  return normalize(str1) === normalize(str2);
}

/**
 * Problem 8: Find Longest Word
 * 
 * Find the longest word in a string.
 * If multiple words have the same maximum length, returns the first one encountered.
 * 
 * APPROACH: Compare word lengths
 * - Split string into words
 * - Keep track of the longest word seen so far
 * - Compare each word's length with current longest
 * - Update longest if current word is longer
 * 
 * TIME COMPLEXITY: O(n)
 * - split(): O(n) where n is string length
 * - Iterating through words: O(m) where m is number of words
 * - Total: O(n) since we must process the entire string
 * 
 * SPACE COMPLEXITY: O(n)
 * - split() creates array of words: O(n)
 * - longest variable: O(k) where k is length of longest word
 * 
 * @param str - Input string
 * @returns The longest word in the string
 * 
 * Example: "The quick brown fox jumps" -> "quick" (or "jumps", both length 5)
 * Example: "hello world" -> "hello" (length 5)
 */
export function longestWord(str: string): string {
  // Split by one or more whitespace characters
  const words = str.split(/\s+/);
  let longest = ""; // Track longest word found so far

  // Check each word
  for (const word of words) {
    // If current word is longer than our longest, update it
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

// Test cases
if (require.main === module) {
  console.log("Testing String Problems:");
  
  console.log("Reverse 'hello':", reverseString("hello")); // "olleh"
  console.log("Is 'racecar' palindrome?", isPalindrome("racecar")); // true
  console.log("Is 'A man a plan' palindrome?", isPalindrome("A man a plan a canal Panama")); // true
  console.log("Vowels in 'hello':", countVowels("hello")); // 2
  console.log("Words in 'hello world':", countWords("hello world")); // 2
  console.log("Capitalize:", capitalizeWords("hello world")); // "Hello World"
  console.log("Remove duplicates:", removeDuplicates("programming")); // "progamin"
  console.log("Are anagrams?", areAnagrams("listen", "silent")); // true
  console.log("Longest word:", longestWord("The quick brown fox jumps")); // "quick"
}

