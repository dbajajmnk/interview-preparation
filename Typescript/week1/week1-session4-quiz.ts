/**
 * WEEK 1 - SESSION 4 QUIZ: Interfaces vs Type Aliases
 */

// ========== QUIZ QUESTIONS ==========

/**
 * Q1: Create an interface for a Car with:
 * - make (string)
 * - model (string)
 * - year (number)
 * - Optional: color (string)
 * - Optional: mileage (number)
 * Then create a type alias that extends this interface with:
 * - isElectric (boolean)
 */
// TODO: Implement your solution here

/**
 * Q2: Create a type alias for a Result that can be either:
 * - Success: { success: true, data: T }
 * - Error: { success: false, error: string }
 * Then write a function that processes this Result
 */
// TODO: Implement your solution here

/**
 * Q3: When would you use an interface vs a type alias?
 * Provide examples of each use case.
 */
// TODO: Write your explanation and examples

/**
 * Q4: Create a generic interface for a Cache that can store any type
 * Methods: get(key: string), set(key: string, value: T), clear()
 */
// TODO: Implement your solution here

/**
 * Q5: Fix the following code - what's wrong with using an interface here?
 */
// TODO: Identify the issue and fix it
type StringOrNumber = string | number; // Should this be an interface?

// ========== SOLUTIONS ==========

/*
// Q1 Solution:
interface Car {
  make: string;
  model: string;
  year: number;
  color?: string;
  mileage?: number;
}

type ElectricCar = Car & {
  isElectric: boolean;
};

// Q2 Solution:
type Result<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

function processResult<T>(result: Result<T>): T {
  if (result.success) {
    return result.data;
  }
  throw new Error(result.error);
}

// Q3 Explanation:
// Use interfaces for:
// - Object shapes that might be extended
// - Contracts for classes to implement
// - Declaration merging needed
//
// Use types for:
// - Unions and intersections
// - Primitives
// - Complex computed types
// - When you need flexibility

// Q4 Solution:
interface Cache<T> {
  get(key: string): T | undefined;
  set(key: string, value: T): void;
  clear(): void;
}

// Q5 Explanation:
// Interfaces cannot represent unions. Use type alias for unions.
// The code is correct as-is - StringOrNumber should be a type, not an interface.
*/

if (require.main === module) {
  console.log("TypeScript Week 1 Session 4 Quiz");
  console.log("Review the questions and implement the solutions");
}

