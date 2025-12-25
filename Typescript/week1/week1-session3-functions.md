# Week 1 - Session 3: Functions in TypeScript

## Table of Contents
1. [Theory](#theory)
2. [Basic Function Typing](#basic-function-typing)
3. [Optional Parameters](#optional-parameters)
4. [Default Parameters](#default-parameters)
5. [Rest Parameters](#rest-parameters)
6. [Function Overloading](#function-overloading)
7. [Function Types](#function-types)
8. [Generic Functions](#generic-functions)
9. [Higher-Order Functions](#higher-order-functions)
10. [Async Functions](#async-functions)
11. [Summary](#summary)

---

## Theory

### FUNCTION TYPES:
- TypeScript allows you to type function parameters and return values
- Functions can have optional parameters, default parameters, and rest parameters
- Function overloading allows multiple function signatures for the same function

### KEY CONCEPTS:
- **Parameter types**: `(param: type) => returnType`
- **Optional parameters**: `param?: type`
- **Default parameters**: `param: type = defaultValue`
- **Rest parameters**: `...args: type[]`
- **Function overloading**: multiple signatures, one implementation
- **Arrow functions**: `(param: type) => returnType`
- **Function types**: `type MyFunction = (param: type) => returnType`

---

## Basic Function Typing

### Simple Function

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

### Arrow Function

```typescript
const multiply = (a: number, b: number): number => {
  return a * b;
};
```

### Void Return

```typescript
function logMessage(message: string): void {
  console.log(message);
}
```

**Key Points**:
- Explicit return types improve code clarity
- `void` for functions that don't return
- Type inference works but explicit types are better

---

## Optional Parameters

```typescript
function greet(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}`;
  }
  return `Hello, ${name}`;
}

greet("John"); // OK
greet("John", "Dr."); // OK
```

**Key Points**:
- Use `?` to make parameters optional
- Optional parameters must come after required ones
- Check for undefined before using optional parameters

---

## Default Parameters

```typescript
function createUser(name: string, age: number = 18, isActive: boolean = true): object {
  return { name, age, isActive };
}

createUser("Alice"); // age = 18, isActive = true
createUser("Bob", 25); // isActive = true
createUser("Charlie", 30, false); // all parameters provided
```

**Key Points**:
- Default values use `= value` syntax
- Parameters with defaults are optional
- Can mix required and default parameters

---

## Rest Parameters

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3); // 6
sum(1, 2, 3, 4, 5); // 15

function formatMessage(message: string, ...tags: string[]): string {
  const tagString = tags.length > 0 ? ` [${tags.join(", ")}]` : "";
  return `${message}${tagString}`;
}
```

**Key Points**:
- Rest parameter collects remaining arguments
- Must be the last parameter
- Type is an array of the specified type

---

## Function Overloading

```typescript
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
```

**Key Points**:
- Multiple signatures, one implementation
- TypeScript uses signatures for type checking
- Implementation must handle all cases

---

## Function Types

```typescript
type MathOperation = (a: number, b: number) => number;

const addOp: MathOperation = (a, b) => a + b;
const subtractOp: MathOperation = (a, b) => a - b;

function calculate(a: number, b: number, operation: MathOperation): number {
  return operation(a, b);
}
```

**Key Points**:
- Type aliases for function signatures
- Useful for callbacks and higher-order functions
- Enables function composition

---

## Generic Functions

```typescript
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42);
const str = identity<string>("hello");

// Type inference
const inferredNum = identity(42); // TypeScript infers number
```

**Key Points**:
- Generic functions work with any type
- Type parameters use angle brackets `<T>`
- Type inference often eliminates need for explicit types

---

## Higher-Order Functions

```typescript
function createMultiplier(factor: number): (value: number) => number {
  return (value: number) => value * factor;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

double(5); // 10
triple(5); // 15
```

**Key Points**:
- Functions that return functions
- Functions that accept functions as parameters
- Enables powerful functional programming patterns

---

## Async Functions

```typescript
async function fetchData(url: string): Promise<string> {
  const response = await fetch(url);
  return response.text();
}

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
```

**Key Points**:
- Async functions return `Promise<T>`
- Use `await` to wait for promises
- Error handling with try/catch

---

## Summary

### Key Takeaways

1. **Function Typing**: Always type parameters and return values
2. **Optional Parameters**: Use `?` for optional parameters
3. **Default Parameters**: Provide default values with `=`
4. **Rest Parameters**: Collect arguments with `...args`
5. **Function Overloading**: Multiple signatures for flexibility
6. **Function Types**: Type aliases for reusable signatures
7. **Generic Functions**: Reusable functions for any type
8. **Higher-Order Functions**: Functions that work with functions
9. **Async Functions**: Promise-based asynchronous operations

### Best Practices

- ✅ Always type function parameters and returns
- ✅ Use optional parameters sparingly
- ✅ Prefer default parameters over optional ones
- ✅ Use function overloading for multiple signatures
- ✅ Use generics for reusable functions
- ✅ Handle errors in async functions

---

**Next Session**: Interfaces vs Type Aliases

