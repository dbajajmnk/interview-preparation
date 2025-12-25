/**
 * WEEK 1 - SESSION 1 QUIZ: Primitives and Basic Types
 * 
 * Instructions:
 * 1. Answer each question by writing code or explanations
 * 2. Check your answers by running: npx ts-node week1-session1-quiz.ts
 * 3. Review the solutions and explanations
 */

// ========== QUIZ QUESTIONS ==========

/**
 * Q1: Fix the type errors in the following code
 */
function quiz1() {
  let value: any = "hello";
  let number: number = value; // What's wrong here?
  console.log(number.toFixed(2)); // What could go wrong?
  
  // Your fix:
  // TODO: Replace 'any' with a safer type and add proper type checking
}

/**
 * Q2: Write a function that accepts an unknown value and safely converts it to a number
 * Requirements:
 * - If input is a number, return it
 * - If input is a string that can be parsed as a number, return the parsed number
 * - Otherwise, throw an error
 */
function quiz2(input: unknown): number {
  // TODO: Implement this function
  throw new Error("Not implemented");
}

/**
 * Q3: What's the difference between 'void' and 'never'?
 * Write examples of functions that use each.
 */
function quiz3() {
  // TODO: Write a function that returns void
  // TODO: Write a function that returns never
}

/**
 * Q4: Explain when you would use:
 * - 'any' type
 * - 'unknown' type
 * - 'never' type
 * 
 * Write your explanation as comments:
 */
// TODO: Add your explanation here

/**
 * Q5: Fix the following code to handle null and undefined properly
 */
function quiz5(value: string | null | undefined): string {
  // TODO: Handle null and undefined cases
  return value.toUpperCase(); // This will error - fix it!
}

// ========== SOLUTIONS (Uncomment to see answers) ==========

/*
// Q1 Solution:
function quiz1Solution() {
  let value: unknown = "hello";
  if (typeof value === "number") {
    let number: number = value;
    console.log(number.toFixed(2));
  } else {
    console.error("Value is not a number");
  }
}

// Q2 Solution:
function quiz2Solution(input: unknown): number {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    const parsed = Number(input);
    if (!isNaN(parsed)) {
      return parsed;
    }
  }
  throw new Error("Input cannot be converted to a number");
}

// Q3 Solution:
function voidExample(): void {
  console.log("This function doesn't return anything");
}

function neverExample(): never {
  throw new Error("This function never returns normally");
}

// Q4 Explanation:
// - 'any': Use when migrating JS to TS or when type is truly dynamic (rare)
// - 'unknown': Use when you don't know the type but want type safety (preferred over any)
// - 'never': Use for functions that never return (errors, infinite loops) or impossible types

// Q5 Solution:
function quiz5Solution(value: string | null | undefined): string {
  if (value === null || value === undefined) {
    throw new Error("Value cannot be null or undefined");
  }
  return value.toUpperCase();
}
*/

// Run quiz
if (require.main === module) {
  console.log("TypeScript Week 1 Session 1 Quiz");
  console.log("Review the questions above and implement the solutions");
}

