/**
 * WEEK 1 - SESSION 1: TypeScript Primitives and Basic Types
 * 
 * THEORY:
 * TypeScript adds static typing to JavaScript. Every variable, function parameter,
 * and return value can have a type annotation. This helps catch errors at compile-time
 * rather than runtime.
 * 
 * Primitives in TypeScript:
 * - number: All numbers (integers, floats, etc.)
 * - string: Text data
 * - boolean: true/false
 * - null: Explicitly null
 * - undefined: Not yet assigned
 * - symbol: Unique identifier (ES6)
 * - bigint: Large integers (ES2020)
 * 
 * Special Types:
 * - any: Disables type checking (use sparingly)
 * - unknown: Safer alternative to any, requires type checking before use
 * - never: Represents values that never occur (e.g., throw errors, infinite loops)
 * - void: Absence of a value (commonly used for functions that don't return)
 */

// ========== PRIMITIVE TYPES ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 1: PRIMITIVE TYPES");
console.log("=".repeat(60) + "\n");

// Number - all numeric values
let age: number = 25;
let price: number = 99.99;
let temperature: number = -10;

console.log("📊 NUMBER TYPE:");
console.log(`  age: ${age} (type: number)`);
console.log(`  price: ${price} (type: number)`);
console.log(`  temperature: ${temperature} (type: number)`);

// String - text data
let name: string = "John Doe";
let greeting: string = `Hello, ${name}!`; // Template literals work too

console.log("\n📝 STRING TYPE:");
console.log(`  name: "${name}" (type: string)`);
console.log(`  greeting: "${greeting}" (type: string)`);

// Boolean - true/false
let isActive: boolean = true;
let hasPermission: boolean = false;

console.log("\n✅ BOOLEAN TYPE:");
console.log(`  isActive: ${isActive} (type: boolean)`);
console.log(`  hasPermission: ${hasPermission} (type: boolean)`);

// ========== SPECIAL TYPES ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 2: SPECIAL TYPES");
console.log("=".repeat(60) + "\n");

// ANY - Use sparingly! Disables type checking
let dynamicValue: any = "This could be anything";
console.log("⚠️  ANY TYPE (Use sparingly!):");
console.log(`  Initial value: "${dynamicValue}" (type: any)`);
dynamicValue = 42; // No error
console.log(`  After assignment: ${dynamicValue} (type: any)`);
dynamicValue = true; // No error
console.log(`  After another assignment: ${dynamicValue} (type: any)`);
console.log("  ⚠️  Problem: You lose type safety with 'any'");
// Problem: You lose type safety
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let result: number = dynamicValue * 2; // Could fail at runtime if dynamicValue isn't a number

// UNKNOWN - Safer than any, requires type checking
let userInput: unknown = getUserInput(); // Assume this function exists
console.log("\n🔍 UNKNOWN TYPE (Safer than any):");
console.log(`  userInput: "${userInput}" (type: unknown)`);
console.log("  ❌ userInput.toUpperCase() would ERROR - must check type first");
// userInput.toUpperCase(); // ERROR: Can't use unknown without checking
if (typeof userInput === "string") {
  console.log(`  ✅ After type check: ${userInput.toUpperCase()}`);
}

// VOID - For functions that don't return a value
function logMessage(message: string): void {
  console.log(message);
  // No return statement needed
}

console.log("\n🔇 VOID TYPE (No return value):");
logMessage("This function returns void");

// NEVER - For functions that never return (throw errors, infinite loops)
function throwError(message: string): never {
  throw new Error(message);
  // Code after this is unreachable
}

console.log("\n🛑 NEVER TYPE (Never returns):");
console.log("  throwError() - throws error, never returns normally");
// Note: We won't actually call throwError() as it would stop execution

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function infiniteLoop(): never {
  while (true) {
    // This function never returns
  }
}
console.log("  infiniteLoop() - infinite loop, never returns");

// ========== NULL AND UNDEFINED ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 3: NULL AND UNDEFINED");
console.log("=".repeat(60) + "\n");

// By default, null and undefined are subtypes of all types
let nullableString: string | null = null;
let optionalString: string | undefined = undefined;

console.log("🔘 NULL AND UNDEFINED:");
console.log(`  nullableString: ${nullableString} (type: string | null)`);
console.log(`  optionalString: ${optionalString} (type: string | undefined)`);

// With strictNullChecks enabled (recommended), you must explicitly allow null/undefined
let strictString: string = "hello";
console.log(`  strictString: "${strictString}" (type: string)`);
console.log("  ⚠️  strictString = null would ERROR if strictNullChecks is enabled");
// strictString = null; // ERROR if strictNullChecks is enabled

// ========== TYPE INFERENCE ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 4: TYPE INFERENCE");
console.log("=".repeat(60) + "\n");

// TypeScript can infer types when you provide initial values
let inferredNumber = 42; // TypeScript infers: number
let inferredString = "hello"; // TypeScript infers: string
let inferredBoolean = true; // TypeScript infers: boolean

console.log("🧠 TYPE INFERENCE (TypeScript infers types automatically):");
console.log(`  inferredNumber = ${inferredNumber} → TypeScript infers: number`);
console.log(`  inferredString = "${inferredString}" → TypeScript infers: string`);
console.log(`  inferredBoolean = ${inferredBoolean} → TypeScript infers: boolean`);

// ========== PRACTICAL EXAMPLES ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 5: PRACTICAL EXAMPLES");
console.log("=".repeat(60) + "\n");

// Function with typed parameters and return
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

console.log("💼 FUNCTION WITH TYPED PARAMETERS AND RETURN:");
const total = calculateTotal(99.99, 3);
console.log(`  calculateTotal(99.99, 3) = ${total} (type: number)`);

// Function that might not return (void)
function displayTotal(total: number): void {
  console.log(`Total: $${total.toFixed(2)}`);
}

console.log("\n🔇 FUNCTION THAT RETURNS VOID:");
displayTotal(total);

// Error handling with never
function handleError(error: string): never {
  console.error(error);
  throw new Error(error);
}

console.log("\n🛑 ERROR HANDLING WITH NEVER:");
console.log("  handleError() - throws error, never returns");
// Note: We won't actually call handleError() as it would stop execution

// Type guard for unknown
function processUserInput(input: unknown): string  {
  if (typeof input === "string") {
    return input.trim();
  }
  if (typeof input === "number") {
    return input.toString();
  }
  throw new Error("Invalid input type");
}

console.log("\n🔍 TYPE GUARD FOR UNKNOWN:");
const processed1 = processUserInput("  hello world  ");
console.log(`  processUserInput("  hello world  ") = "${processed1}"`);
const processed2 = processUserInput(42);
console.log(`  processUserInput(42) = "${processed2}"`);

const processed3 = processUserInput(true);
console.log(`  processUserInput(true) = "${processed3}"`);

// ========== HELPER FUNCTION ==========
function getUserInput(): unknown {
  // Simulated function - in real code, this would get user input
  return "test input";
}

// ========== SUMMARY ==========
console.log("\n" + "=".repeat(60));
console.log("📚 SUMMARY");
console.log("=".repeat(60));
console.log("✅ Primitives: number, string, boolean");
console.log("✅ Special Types: any, unknown, void, never");
console.log("✅ Null and Undefined handling");
console.log("✅ Type Inference");
console.log("✅ Practical examples with type safety");
console.log("=".repeat(60) + "\n");

// ========== EXPORT FOR TESTING ==========
// Note: Some variables are declared for educational purposes
export {
  age,
  price,
  temperature,
  name,
  greeting,
  isActive,
  hasPermission,
  nullableString,
  optionalString,
  strictString,
  inferredNumber,
  inferredString,
  inferredBoolean,
  calculateTotal,
  displayTotal,
  processUserInput,
  handleError,
  logMessage,
  throwError,
  infiniteLoop,
  result
};

