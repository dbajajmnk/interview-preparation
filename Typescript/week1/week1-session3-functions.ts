/**
 * WEEK 1 - SESSION 3: Functions in TypeScript
 * 
 * THEORY:
 * 
 * FUNCTION TYPES:
 * - TypeScript allows you to type function parameters and return values
 * - Functions can have optional parameters, default parameters, and rest parameters
 * - Function overloading allows multiple function signatures for the same function
 * 
 * KEY CONCEPTS:
 * - Parameter types: (param: type) => returnType
 * - Optional parameters: param?: type
 * - Default parameters: param: type = defaultValue
 * - Rest parameters: ...args: type[]
 * - Function overloading: multiple signatures, one implementation
 * - Arrow functions: (param: type) => returnType
 * - Function types: type MyFunction = (param: type) => returnType
 */

// ========== BASIC FUNCTION TYPING ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 1: BASIC FUNCTION TYPING");
console.log("=".repeat(60) + "\n");

// Simple function with typed parameters and return
function add(a: number, b: number): number {
  return a + b;
}

// Arrow function with types
const multiply = (a: number, b: number): number => {
  return a * b;
};

// Function that returns void
function logMessage(message: string): void {
  console.log(message);
}

console.log("📝 FUNCTION WITH TYPED PARAMETERS AND RETURN:");
console.log(`  add(5, 3) = ${add(5, 3)} (type: number)`);
console.log(`  multiply(4, 7) = ${multiply(4, 7)} (type: number)`);
console.log("\n🔇 FUNCTION THAT RETURNS VOID:");
logMessage("  This function returns void");

// ========== OPTIONAL PARAMETERS ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 2: OPTIONAL PARAMETERS");
console.log("=".repeat(60) + "\n");

// Parameter with ? is optional
function greet(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}`;
  }
  return `Hello, ${name}`;
}

console.log("❓ OPTIONAL PARAMETER (title?: string):");
console.log(`  greet("John") = "${greet("John")}"`);
console.log(`  greet("John", "Dr.") = "${greet("John", "Dr.")}"`);

// ========== DEFAULT PARAMETERS ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 3: DEFAULT PARAMETERS");
console.log("=".repeat(60) + "\n");

// Default value - parameter is optional but has a default
function createUser(name: string, age: number = 18, isActive: boolean = true): object {
  return { name, age, isActive };
}

console.log("🎯 DEFAULT PARAMETERS:");
console.log(`  createUser("Alice") = ${JSON.stringify(createUser("Alice"))} (age defaults to 18, isActive to true)`);
console.log(`  createUser("Bob", 25) = ${JSON.stringify(createUser("Bob", 25))} (isActive defaults to true)`);
console.log(`  createUser("Charlie", 30, false) = ${JSON.stringify(createUser("Charlie", 30, false))}`);

// ========== REST PARAMETERS ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 4: REST PARAMETERS");
console.log("=".repeat(60) + "\n");

// Rest parameter collects remaining arguments into an array
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("📦 REST PARAMETERS (...numbers: number[]):");
console.log(`  sum(1, 2, 3) = ${sum(1, 2, 3)}`);
console.log(`  sum(1, 2, 3, 4, 5) = ${sum(1, 2, 3, 4, 5)}`);

// Rest parameter must be last
function formatMessage(message: string, ...tags: string[]): string {
  const tagString = tags.length > 0 ? ` [${tags.join(", ")}` : "";
  return `${message}${tagString}`;
}

console.log(`\n  formatMessage("Hello", "urgent", "important") = "${formatMessage("Hello", "urgent", "important")}"`);

// ========== FUNCTION OVERLOADING ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 5: FUNCTION OVERLOADING");
console.log("=".repeat(60) + "\n");

// Multiple signatures, one implementation
function processValue(value: string): string;
function processValue(value: number): number;
function processValue(value: boolean): boolean;
function processValue(value: string | number | boolean): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 2;
  }
  return !value;
}

const strResult = processValue("hello"); // TypeScript knows it returns string
const numResult = processValue(5); // TypeScript knows it returns number
const boolResult = processValue(true); // TypeScript knows it returns boolean

console.log("🔄 FUNCTION OVERLOADING (multiple signatures, one implementation):");
console.log(`  processValue("hello") = "${strResult}" (TypeScript knows: string)`);
console.log(`  processValue(5) = ${numResult} (TypeScript knows: number)`);
console.log(`  processValue(true) = ${boolResult} (TypeScript knows: boolean)`);

// Overloading with different parameter counts
function createElement(tag: string): HTMLElement;
function createElement(tag: string, attributes: Record<string, string>): HTMLElement;
function createElement(tag: string, attributes?: Record<string, string>): HTMLElement {
  const element = document.createElement(tag);
  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }
  return element;
}

// ========== FUNCTION TYPES ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 6: FUNCTION TYPES");
console.log("=".repeat(60) + "\n");

// Type alias for function signature
type MathOperation = (a: number, b: number) => number;

const addOp: MathOperation = (a, b) => a + b;
const subtractOp: MathOperation = (a, b) => a - b;

// Function that accepts a function as parameter
function calculate(a: number, b: number, operation: MathOperation): number {
  return operation(a, b);
}

console.log("📋 FUNCTION TYPE ALIAS:");
console.log(`  type MathOperation = (a: number, b: number) => number`);
console.log(`  calculate(10, 5, addOp) = ${calculate(10, 5, addOp)}`);
console.log(`  calculate(10, 5, subtractOp) = ${calculate(10, 5, subtractOp)}`);

// ========== GENERIC FUNCTIONS ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 7: GENERIC FUNCTIONS");
console.log("=".repeat(60) + "\n");

// Generic function - works with any type
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42);
const str = identity<string>("hello");

// Type inference - TypeScript can infer the type
const inferredNum = identity(42); // TypeScript infers number
const inferredStr = identity("hello"); // TypeScript infers string

console.log("🔧 GENERIC FUNCTION:");
console.log(`  identity<number>(42) = ${num}`);
console.log(`  identity("hello") = "${inferredStr}" (type inferred)`);

// Generic with constraints
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "John", age: 30 };
const name = getProperty(person, "name"); // TypeScript knows it's string
const age = getProperty(person, "age"); // TypeScript knows it's number

console.log("\n🔒 GENERIC WITH CONSTRAINTS:");
console.log(`  getProperty(person, "name") = "${name}" (TypeScript knows: string)`);
console.log(`  getProperty(person, "age") = ${age} (TypeScript knows: number)`);

// ========== HIGHER-ORDER FUNCTIONS ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 8: HIGHER-ORDER FUNCTIONS");
console.log("=".repeat(60) + "\n");

// Function that returns a function
function createMultiplier(factor: number): (value: number) => number {
  return (value: number) => value * factor;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("🔄 FUNCTION THAT RETURNS A FUNCTION:");
console.log(`  const double = createMultiplier(2)`);
console.log(`  double(5) = ${double(5)}`);
console.log(`  triple(5) = ${triple(5)}`);

// Function that accepts and returns functions
function compose<T>(f: (x: T) => T, g: (x: T) => T): (x: T) => T {
  return (x: T) => f(g(x));
}

// ========== ASYNC FUNCTIONS ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 9: ASYNC FUNCTIONS");
console.log("=".repeat(60) + "\n");

// Async functions return Promise
async function fetchData(url: string): Promise<string> {
  const response = await fetch(url);
  return response.text();
}

// Typed async function with error handling
async function safeFetch<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return null;
    }
    return await response.json() as T;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

console.log("⚡ ASYNC FUNCTIONS:");
console.log(`  async function fetchData(url: string): Promise<string>`);
console.log(`  async function safeFetch<T>(url: string): Promise<T | null>`);
console.log("  ✅ Async functions return Promises");

// ========== THIS CONTEXT TYPING ==========

interface Calculator {
  value: number;
  add(this: Calculator, num: number): void;
  multiply(this: Calculator, num: number): void;
}

const calculator: Calculator = {
  value: 0,
  add(this: Calculator, num: number) {
    this.value += num;
  },
  multiply(this: Calculator, num: number) {
    this.value *= num;
  }
};

// ========== PRACTICAL EXAMPLES ==========

// Event handler type
type EventHandler = (event: Event) => void;

function addEventListener(
  element: HTMLElement,
  event: string,
  handler: EventHandler
): void {
  element.addEventListener(event, handler);
}

// Callback pattern
function processArray<T>(
  items: T[],
  callback: (item: T, index: number) => void
): void {
  items.forEach((item, index) => callback(item, index));
}

// ========== SUMMARY ==========
console.log("\n" + "=".repeat(60));
console.log("📚 SUMMARY");
console.log("=".repeat(60));
console.log("✅ Basic Function Typing - typed parameters and returns");
console.log("✅ Optional Parameters - using ?");
console.log("✅ Default Parameters - providing default values");
console.log("✅ Rest Parameters - collecting arguments into arrays");
console.log("✅ Function Overloading - multiple signatures");
console.log("✅ Function Types - type aliases for functions");
console.log("✅ Generic Functions - reusable type-safe functions");
console.log("✅ Higher-Order Functions - functions that work with functions");
console.log("✅ Async Functions - Promise-based async operations");
console.log("=".repeat(60) + "\n");

// ========== EXPORT FOR TESTING ==========
export {
  add,
  multiply,
  greet,
  createUser,
  sum,
  formatMessage,
  processValue,
  calculate,
  identity,
  getProperty,
  createMultiplier,
  fetchData,
  safeFetch,
  MathOperation
};

