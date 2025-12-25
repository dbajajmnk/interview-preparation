# Week 1 - Session 4: Interfaces vs Type Aliases

## Table of Contents
1. [Theory](#theory)
2. [Interfaces](#interfaces)
3. [Type Aliases](#type-aliases)
4. [When to Use Which](#when-to-use-which)
5. [Interface Extension](#interface-extension)
6. [Declaration Merging](#declaration-merging)
7. [Summary](#summary)

---

## Theory

### INTERFACES:
- Used to define the shape of an object
- Can be extended and merged (declaration merging)
- Better for object shapes and contracts
- Can be implemented by classes

### TYPE ALIASES:
- Can represent any type (primitives, unions, intersections, etc.)
- More flexible than interfaces
- Cannot be merged or extended in the same way
- Better for unions, intersections, and complex types

### WHEN TO USE WHICH:
- **Use interfaces for**: object shapes, contracts, class implementations
- **Use types for**: unions, intersections, primitives, computed types
- Both can be used for object shapes - choose based on your needs

---

## Interfaces

### Basic Interface

```typescript
interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = { name: "John", age: 30, email: "john@example.com" };
```

### Optional Properties

```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  description?: string; // Optional
  inStock?: boolean; // Optional
}
```

### Readonly Properties

```typescript
interface Config {
  readonly apiUrl: string;
  readonly timeout: number;
  retries: number; // Can be modified
}
```

### Index Signature

```typescript
interface Dictionary {
  [key: string]: string;
}

const translations: Dictionary = {
  hello: "hola",
  goodbye: "adiós"
};
```

---

## Type Aliases

### Basic Type Alias

```typescript
type Point = {
  x: number;
  y: number;
};
```

### Union Type

```typescript
type Status = "pending" | "approved" | "rejected";
```

### Function Type

```typescript
type MathOperation = (a: number, b: number) => number;
```

### Intersection Type

```typescript
type Timestamped = {
  createdAt: Date;
  updatedAt: Date;
};

type UserWithTimestamp = User & Timestamped;
```

---

## When to Use Which

### Use Interfaces When:
- Defining object shapes
- Creating contracts for classes
- Need declaration merging
- Working with object-oriented code

### Use Types When:
- Creating unions or intersections
- Working with primitives
- Creating computed types
- Need more flexibility

---

## Interface Extension

```typescript
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
  bark(): void;
}

// Multiple inheritance
interface Duck extends Animal, Flyable, Swimmable {
  quack(): void;
}
```

**Key Points**:
- Use `extends` to inherit from other interfaces
- Can extend multiple interfaces
- All properties from parent interfaces are included

---

## Declaration Merging

```typescript
interface Window {
  title: string;
}

interface Window {
  width: number;
}

// Now Window has both title and width
const window: Window = {
  title: "My Window",
  width: 800
};
```

**Key Points**:
- Interfaces can be declared multiple times
- TypeScript merges them automatically
- Useful for extending library types

---

## Summary

### Key Takeaways

1. **Interfaces**: Best for object shapes and contracts
2. **Type Aliases**: Best for unions, intersections, and complex types
3. **Extension**: Interfaces use `extends`, types use intersections
4. **Merging**: Only interfaces support declaration merging
5. **Flexibility**: Types are more flexible, interfaces are more structured

### Best Practices

- ✅ Use interfaces for object shapes and class contracts
- ✅ Use types for unions, intersections, and computed types
- ✅ Be consistent within your codebase
- ✅ Use interfaces when you need declaration merging
- ✅ Use types when you need more flexibility

---

**Next Session**: Classes, Enums, and Literal Types

