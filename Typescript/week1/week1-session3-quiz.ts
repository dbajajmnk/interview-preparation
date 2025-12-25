/**
 * WEEK 1 - SESSION 3 QUIZ: Functions
 */

// ========== QUIZ QUESTIONS ==========

/**
 * Q1: Write a function with the following requirements:
 * - Accepts a string and an optional number
 * - If number is provided, repeat the string that many times
 * - If number is not provided, return the string once
 * - Return type should be string
 */
// TODO: Implement your solution here

/**
 * Q2: Create function overloads for a function that:
 * - Accepts a string and returns a string (uppercase)
 * - Accepts a number and returns a number (doubled)
 * - Accepts an array of numbers and returns the sum
 */
// TODO: Implement your solution here

/**
 * Q3: Write a generic function that:
 * - Accepts an array of any type
 * - Accepts a predicate function (returns boolean)
 * - Returns a new array with filtered items
 */
// TODO: Implement your solution here

/**
 * Q4: Create a function type for a validator that:
 * - Accepts a value of any type
 * - Returns a boolean
 * Then write a function that uses this type to validate multiple values
 */
// TODO: Implement your solution here

/**
 * Q5: Write an async function that:
 * - Accepts a URL string
 * - Fetches data from that URL
 * - Returns the parsed JSON as a typed object
 * - Handles errors gracefully
 */
// TODO: Implement your solution here

// ========== SOLUTIONS ==========

/*
// Q1 Solution:
function repeatString(str: string, count?: number): string {
  const times = count ?? 1;
  return str.repeat(times);
}

// Q2 Solution:
function transform(value: string): string;
function transform(value: number): number;
function transform(value: number[]): number;
function transform(value: string | number | number[]): string | number {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 2;
  }
  return value.reduce((sum, num) => sum + num, 0);
}

// Q3 Solution:
function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  return arr.filter(predicate);
}

// Q4 Solution:
type Validator<T> = (value: T) => boolean;

function validateAll<T>(values: T[], validator: Validator<T>): boolean {
  return values.every(validator);
}

// Q5 Solution:
async function fetchTypedData<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return null;
    }
    return await response.json() as T;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
*/

if (require.main === module) {
  console.log("TypeScript Week 1 Session 3 Quiz");
  console.log("Review the questions and implement the solutions");
}

