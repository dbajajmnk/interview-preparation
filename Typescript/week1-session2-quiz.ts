/**
 * WEEK 1 - SESSION 2 QUIZ: Union and Intersection Types
 */

// ========== QUIZ QUESTIONS ==========

/**
 * Q1: Create a union type for a function parameter that can accept:
 * - A string
 * - A number
 * - An array of numbers
 * Then write a function that handles all three cases
 */
// TODO: Implement your solution here

/**
 * Q2: Create an intersection type that combines:
 * - A User interface (name, email)
 * - A Permissions interface (canRead, canWrite)
 * - A Timestamped interface (createdAt)
 * Then create an instance of this type
 */
// TODO: Implement your solution here

/**
 * Q3: Fix the type error in this discriminated union function
 */
type Result<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

function processResult<T>(result: Result<T>): T {
  // TODO: Fix the type error - how do you safely extract the data?
  return result.data; // This will error - fix it!
}

/**
 * Q4: Write a type guard function that checks if a value is a number or string
 */
function isNumberOrString(value: unknown): value is number | string {
  // TODO: Implement this type guard
  return false;
}

/**
 * Q5: Create a union type for HTTP methods and a function that validates them
 */
// TODO: Create a union type for HTTP methods (GET, POST, PUT, DELETE, PATCH)
// TODO: Write a function that accepts this union type and returns a boolean

// ========== SOLUTIONS ==========

/*
// Q1 Solution:
type FlexibleInput = string | number | number[];

function handleFlexibleInput(input: FlexibleInput): string {
  if (typeof input === "string") {
    return input.toUpperCase();
  }
  if (typeof input === "number") {
    return input.toString();
  }
  return input.join(",");
}

// Q2 Solution:
interface User {
  name: string;
  email: string;
}

interface Permissions {
  canRead: boolean;
  canWrite: boolean;
}

interface Timestamped {
  createdAt: Date;
}

type UserWithPermissions = User & Permissions & Timestamped;

const admin: UserWithPermissions = {
  name: "Admin",
  email: "admin@example.com",
  canRead: true,
  canWrite: true,
  createdAt: new Date()
};

// Q3 Solution:
function processResultSolution<T>(result: Result<T>): T {
  if (result.success) {
    return result.data;
  }
  throw new Error(result.error);
}

// Q4 Solution:
function isNumberOrStringSolution(value: unknown): value is number | string {
  return typeof value === "number" || typeof value === "string";
}

// Q5 Solution:
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

function isValidHttpMethod(method: string): method is HttpMethod {
  return ["GET", "POST", "PUT", "DELETE", "PATCH"].includes(method);
}
*/

if (require.main === module) {
  console.log("TypeScript Week 1 Session 2 Quiz");
  console.log("Review the questions and implement the solutions");
}

