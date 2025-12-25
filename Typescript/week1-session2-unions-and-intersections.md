# Week 1 - Session 2: Union and Intersection Types

## Table of Contents
1. [Theory](#theory)
2. [Union Types](#union-types)
3. [Intersection Types](#intersection-types)
4. [Practical Union Examples](#practical-union-examples)
5. [Practical Intersection Examples](#practical-intersection-examples)
6. [Discriminated Unions](#discriminated-unions)
7. [Type Guards with Unions](#type-guards-with-unions)
8. [Summary](#summary)

---

## Theory

### UNION TYPES (|):
- Represents a value that can be one of several types
- Syntax: `type1 | type2 | type3`
- Useful for values that can have multiple possible types
- TypeScript will only allow operations that are valid for ALL types in the union

### INTERSECTION TYPES (&):
- Represents a value that must satisfy ALL of the given types
- Syntax: `type1 & type2 & type3`
- Useful for combining multiple types into one
- All properties from all types must be present

### KEY DIFFERENCES:
- **Union**: "OR" - value can be type1 OR type2
- **Intersection**: "AND" - value must be type1 AND type2

---

## Union Types

### Basic Union

```typescript
type StringOrNumber = string | number;

let id: StringOrNumber = "abc123";
id = 12345; // Also valid
// id = true; // ERROR: boolean is not in the union
```

**Key Points**:
- Value can be either string OR number
- TypeScript only allows operations valid for both types
- Type narrowing required before using type-specific operations

### Literal Union Types

```typescript
type Status = "pending" | "approved" | "rejected";
let currentStatus: Status = "pending";
// currentStatus = "invalid"; // ERROR: not a valid status
```

**Use Cases**:
- Restrict values to specific strings
- Create type-safe constants
- Better than plain strings for autocomplete

### Union in Function Parameters

```typescript
function formatId(id: string | number): string {
  // Type narrowing required
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  return id.toString();
}
```

**Key Points**:
- Type narrowing is required before using type-specific methods
- `typeof` checks help TypeScript narrow the type
- After narrowing, TypeScript knows the exact type

### Union with Null/Undefined

```typescript
type MaybeString = string | null | undefined;

function getValue(): MaybeString {
  return Math.random() > 0.5 ? "hello" : null;
}
```

**Common Pattern**: Used for optional values that might not exist.

---

## Intersection Types

### Basic Intersection

```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: string;
  department: string;
}

// Person AND Employee - must have all properties from both
type EmployeePerson = Person & Employee;

const john: EmployeePerson = {
  name: "John Doe",
  age: 30,
  employeeId: "E001",
  department: "Engineering"
  // Missing any property would cause an error
};
```

**Key Points**:
- Must satisfy ALL types in the intersection
- All properties from all types must be present
- Useful for combining multiple interfaces

### Multiple Intersections

```typescript
interface HasId {
  id: string;
}

interface HasName {
  name: string;
}

interface HasEmail {
  email: string;
}

type Contact = HasId & HasName & HasEmail;

const contact: Contact = {
  id: "1",
  name: "Jane",
  email: "jane@example.com"
};
```

---

## Practical Union Examples

### API Response Pattern

```typescript
type ApiResponse<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

function handleApiResponse<T>(response: ApiResponse<T>): void {
  if (response.success) {
    // TypeScript knows response.data exists here
    console.log("Data:", response.data);
  } else {
    // TypeScript knows response.error exists here
    console.error("Error:", response.error);
  }
}
```

**Benefits**:
- Type-safe error handling
- TypeScript narrows based on `success` property
- Prevents accessing wrong properties

---

## Practical Intersection Examples

### Mixin Pattern

```typescript
interface Timestamped {
  createdAt: Date;
  updatedAt: Date;
}

interface SoftDeletable {
  deletedAt: Date | null;
}

type TimestampedEntity = Person & Timestamped & SoftDeletable;

const entity: TimestampedEntity = {
  name: "Test",
  age: 25,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null
};
```

**Use Cases**:
- Adding functionality to existing types
- Creating reusable type combinations
- Building complex types from simple ones

---

## Discriminated Unions

### Using a Common Property

```typescript
type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      // TypeScript knows shape.radius exists here
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      // TypeScript knows shape.width and shape.height exist here
      return shape.width * shape.height;
    case "triangle":
      // TypeScript knows shape.base and shape.height exist here
      return (shape.base * shape.height) / 2;
  }
}
```

**Key Benefits**:
- Type-safe pattern matching
- TypeScript narrows based on discriminator property
- Exhaustive checking (must handle all cases)

---

## Type Guards with Unions

### Custom Type Guard

```typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(value: string | number): string {
  if (isString(value)) {
    // TypeScript narrows to string here
    return value.toUpperCase();
  }
  // TypeScript knows it's number here
  return value.toString();
}
```

**Type Guard Syntax**: `value is Type`
- Returns boolean
- TypeScript uses return value to narrow types
- Must be a type predicate

---

## Summary

### Key Takeaways

1. **Union Types (|)**: Value can be one of several types
   - Use for values with multiple possible types
   - Requires type narrowing before use
   - Common pattern: `string | number | null`

2. **Intersection Types (&)**: Value must satisfy all types
   - Use for combining multiple interfaces
   - All properties from all types required
   - Common pattern: Mixins, combining features

3. **Discriminated Unions**: Union with common property
   - Use for type-safe pattern matching
   - TypeScript narrows based on discriminator
   - Prevents accessing wrong properties

4. **Type Guards**: Custom functions for narrowing
   - Use type predicate syntax: `value is Type`
   - Helps TypeScript understand types
   - Enables safe type narrowing

### Best Practices

- ✅ Use unions for values that can be multiple types
- ✅ Use intersections for combining interfaces
- ✅ Use discriminated unions for type-safe pattern matching
- ✅ Always narrow union types before use
- ✅ Use type guards for complex type checking

---

**Next Session**: Functions in TypeScript

