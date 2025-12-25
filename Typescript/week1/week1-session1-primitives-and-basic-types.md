# Week 1 - Session 1: TypeScript Primitives and Basic Types

## Table of Contents
1. [Theory](#theory)
2. [Primitive Types](#primitive-types)
3. [Special Types](#special-types)
4. [Null and Undefined](#null-and-undefined)
5. [Type Inference](#type-inference)
6. [Practical Examples](#practical-examples)
7. [Quiz Questions](#quiz-questions)
8. [Quiz Solutions](#quiz-solutions)

---

## Theory

TypeScript adds static typing to JavaScript. Every variable, function parameter, and return value can have a type annotation. This helps catch errors at compile-time rather than runtime.

### Primitives in TypeScript:
- **number**: All numbers (integers, floats, etc.)
- **string**: Text data
- **boolean**: true/false
- **null**: Explicitly null
- **undefined**: Not yet assigned
- **symbol**: Unique identifier (ES6)
- **bigint**: Large integers (ES2020)

### Special Types:
- **any**: Disables type checking (use sparingly)
- **unknown**: Safer alternative to any, requires type checking before use
- **never**: Represents values that never occur (e.g., throw errors, infinite loops)
- **void**: Absence of a value (commonly used for functions that don't return)

---

## Primitive Types

### Number - all numeric values

```typescript
let age: number = 25;
let price: number = 99.99;
let temperature: number = -10;
```

### String - text data

```typescript
let name: string = "John Doe";
let greeting: string = `Hello, ${name}!`; // Template literals work too
```

### Boolean - true/false

```typescript
let isActive: boolean = true;
let hasPermission: boolean = false;
```

---

## Special Types

### ANY - Use sparingly! Disables type checking

```typescript
let dynamicValue: any = "This could be anything";
dynamicValue = 42; // No error
dynamicValue = true; // No error
// Problem: You lose type safety
let result: number = dynamicValue * 2; // Could fail at runtime if dynamicValue isn't a number
```

**⚠️ Warning**: Using `any` defeats the purpose of TypeScript. Use `unknown` instead when possible.

### UNKNOWN - Safer than any, requires type checking

```typescript
let userInput: unknown = getUserInput();
// userInput.toUpperCase(); // ERROR: Can't use unknown without checking
if (typeof userInput === "string") {
  console.log(userInput.toUpperCase()); // Now TypeScript knows it's a string
}
```

**✅ Best Practice**: Always use `unknown` instead of `any` when you don't know the type.

### VOID - For functions that don't return a value

```typescript
function logMessage(message: string): void {
  console.log(message);
  // No return statement needed
}
```

### NEVER - For functions that never return

```typescript
function throwError(message: string): never {
  throw new Error(message);
  // Code after this is unreachable
}

function infiniteLoop(): never {
  while (true) {
    // This function never returns
  }
}
```

---

## Null and Undefined

By default, null and undefined are subtypes of all types. With `strictNullChecks` enabled (recommended), you must explicitly allow null/undefined.

```typescript
// By default, null and undefined are subtypes of all types
let nullableString: string | null = null;
let optionalString: string | undefined = undefined;

// With strictNullChecks enabled (recommended), you must explicitly allow null/undefined
let strictString: string = "hello";
// strictString = null; // ERROR if strictNullChecks is enabled
```

---

## Type Inference

TypeScript can infer types when you provide initial values:

```typescript
let inferredNumber = 42; // TypeScript infers: number
let inferredString = "hello"; // TypeScript infers: string
let inferredBoolean = true; // TypeScript infers: boolean
```

---

## Practical Examples

### Function with typed parameters and return

```typescript
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}
```

### Function that doesn't return (void)

```typescript
function displayTotal(total: number): void {
  console.log(`Total: $${total.toFixed(2)}`);
}
```

### Error handling with never

```typescript
function handleError(error: string): never {
  console.error(error);
  throw new Error(error);
}
```

### Type guard for unknown

```typescript
function processUserInput(input: unknown): string {
  if (typeof input === "string") {
    return input.trim();
  }
  if (typeof input === "number") {
    return input.toString();
  }
  throw new Error("Invalid input type");
}
```

---

## Quiz Questions

### Q1: Fix the type errors

Fix the type errors in the following code:

```typescript
function quiz1() {
  let value: any = "hello";
  let number: number = value; // What's wrong here?
  console.log(number.toFixed(2)); // What could go wrong?
  
  // Your fix:
  // TODO: Replace 'any' with a safer type and add proper type checking
}
```

### Q2: Safe type conversion

Write a function that accepts an unknown value and safely converts it to a number:
- If input is a number, return it
- If input is a string that can be parsed as a number, return the parsed number
- Otherwise, throw an error

```typescript
function quiz2(input: unknown): number {
  // TODO: Implement this function
  throw new Error("Not implemented");
}
```

### Q3: Void vs Never

What's the difference between 'void' and 'never'? Write examples of functions that use each.

```typescript
function quiz3() {
  // TODO: Write a function that returns void
  // TODO: Write a function that returns never
}
```

### Q4: Type usage explanation

Explain when you would use:
- 'any' type
- 'unknown' type
- 'never' type

### Q5: Handle null and undefined

Fix the following code to handle null and undefined properly:

```typescript
function quiz5(value: string | null | undefined): string {
  // TODO: Handle null and undefined cases
  return value.toUpperCase(); // This will error - fix it!
}
```

---

## Quiz Solutions

### Q1 Solution

```typescript
function quiz1Solution() {
  let value: unknown = "hello";
  if (typeof value === "number") {
    let number: number = value;
    console.log(number.toFixed(2));
  } else {
    console.error("Value is not a number");
  }
}
```

**Key Points**:
- Replace `any` with `unknown` for type safety
- Use type checking before using the value
- TypeScript narrows the type after the check

### Q2 Solution

```typescript
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
```

**Key Points**:
- Check type before using
- Handle multiple input types
- Validate parsed numbers

### Q3 Solution

```typescript
function voidExample(): void {
  console.log("This function doesn't return anything");
}

function neverExample(): never {
  throw new Error("This function never returns normally");
}
```

**Key Differences**:
- **void**: Function completes but returns nothing
- **never**: Function never completes (throws error or infinite loop)

### Q4 Explanation

- **'any'**: Use when migrating JS to TS or when type is truly dynamic (rare)
- **'unknown'**: Use when you don't know the type but want type safety (preferred over any)
- **'never'**: Use for functions that never return (errors, infinite loops) or impossible types

### Q5 Solution

```typescript
function quiz5Solution(value: string | null | undefined): string {
  if (value === null || value === undefined) {
    throw new Error("Value cannot be null or undefined");
  }
  return value.toUpperCase();
}
```

**Key Points**:
- Check for null and undefined explicitly
- TypeScript narrows type after the check
- Can use optional chaining: `value?.toUpperCase() ?? ""`

---

## Summary

### Key Takeaways

1. **Use specific types** instead of `any` whenever possible
2. **Prefer `unknown`** over `any` for better type safety
3. **Use `void`** for functions that don't return
4. **Use `never`** for functions that never return
5. **Enable `strictNullChecks`** to catch null/undefined errors early
6. **Let TypeScript infer types** when the type is obvious

### Best Practices

- ✅ Always use `unknown` instead of `any`
- ✅ Enable strict mode in `tsconfig.json`
- ✅ Use type guards to narrow `unknown` types
- ✅ Handle null and undefined explicitly
- ✅ Use type inference when types are obvious

---

**Next Session**: Union and Intersection Types

