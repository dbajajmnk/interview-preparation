/**
 * WEEK 1 - SESSION 4: Interfaces vs Type Aliases
 * 
 * THEORY:
 * 
 * INTERFACES:
 * - Used to define the shape of an object
 * - Can be extended and merged (declaration merging)
 * - Better for object shapes and contracts
 * - Can be implemented by classes
 * 
 * TYPE ALIASES:
 * - Can represent any type (primitives, unions, intersections, etc.)
 * - More flexible than interfaces
 * - Cannot be merged or extended in the same way
 * - Better for unions, intersections, and complex types
 * 
 * WHEN TO USE WHICH:
 * - Use interfaces for: object shapes, contracts, class implementations
 * - Use types for: unions, intersections, primitives, computed types
 * - Both can be used for object shapes - choose based on your needs
 */

// ========== INTERFACES ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 1: INTERFACES");
console.log("=".repeat(60) + "\n");

// Basic interface
interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = { name: "John", age: 30, email: "john@example.com" };

console.log("📋 BASIC INTERFACE:");
console.log(`  interface User { name: string; age: number; email: string; }`);
console.log(`  user = ${JSON.stringify(user)}`);

// Interface with optional properties
interface Product {
  id: string;
  name: string;
  price: number;
  description?: string; // Optional
  inStock?: boolean; // Optional
}

const product: Product = { id: "1", name: "Laptop", price: 999 };

console.log("\n❓ INTERFACE WITH OPTIONAL PROPERTIES:");
console.log(`  description?: string, inStock?: boolean`);
console.log(`  product = ${JSON.stringify(product)} (description and inStock are optional)`);

// Interface with readonly properties
interface Config {
  readonly apiUrl: string;
  readonly timeout: number;
  retries: number; // Can be modified
}

const config: Config = { apiUrl: "https://api.example.com", timeout: 5000, retries: 3 };

console.log("\n🔒 INTERFACE WITH READONLY PROPERTIES:");
console.log(`  readonly apiUrl, readonly timeout`);
console.log(`  config = ${JSON.stringify(config)}`);
console.log("  ⚠️  config.apiUrl = 'new' would ERROR (readonly)");

// Interface with index signature
interface Dictionary {
  [key: string]: string;
}

const translations: Dictionary = {
  hello: "hola",
  goodbye: "adiós"
};

console.log("\n🔑 INTERFACE WITH INDEX SIGNATURE:");
console.log(`  [key: string]: string`);
console.log(`  translations = ${JSON.stringify(translations)}`);

// Interface with function signature
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

// ========== INTERFACE EXTENSION ==========

// Base interface
interface Animal {
  name: string;
  age: number;
}

// Extended interface
interface Dog extends Animal {
  breed: string;
  bark(): void;
}

// Multiple inheritance
interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

interface Duck extends Animal, Flyable, Swimmable {
  quack(): void;
}

// ========== INTERFACE DECLARATION MERGING ==========

// Interfaces can be merged if declared multiple times
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

// ========== TYPE ALIASES ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 2: TYPE ALIASES");
console.log("=".repeat(60) + "\n");

// Basic type alias
type Point = {
  x: number;
  y: number;
};

const point: Point = { x: 10, y: 20 };

console.log("📝 BASIC TYPE ALIAS:");
console.log(`  type Point = { x: number; y: number; }`);
console.log(`  point = ${JSON.stringify(point)}`);

// Type alias for union
type Status = "pending" | "approved" | "rejected";

console.log("\n🔗 TYPE ALIAS FOR UNION:");
console.log(`  type Status = "pending" | "approved" | "rejected"`);

// Type alias for function
type MathOperation = (a: number, b: number) => number;

console.log("\n📋 TYPE ALIAS FOR FUNCTION:");
console.log(`  type MathOperation = (a: number, b: number) => number`);

// Type alias for intersection
type Timestamped = {
  createdAt: Date;
  updatedAt: Date;
};

type UserWithTimestamp = User & Timestamped;

console.log("\n🔗 TYPE ALIAS FOR INTERSECTION:");
console.log(`  type UserWithTimestamp = User & Timestamped`);

// ========== TYPE ALIASES FOR COMPLEX TYPES ==========

// Union types
type ID = string | number;

// Tuple types
type Coordinate = [number, number];
type RGB = [number, number, number];

// Mapped types (advanced - covered in Week 2)
type Optional<T> = {
  [P in keyof T]?: T[P];
};

// ========== INTERFACES VS TYPES - PRACTICAL COMPARISON ==========

// Both can define object shapes
interface IPerson {
  name: string;
  age: number;
}

type TPerson = {
  name: string;
  age: number;
};

// Interfaces can be extended
interface IEmployee extends IPerson {
  employeeId: string;
}

// Types can use intersections
type TEmployee = TPerson & {
  employeeId: string;
};

// Types can represent unions (interfaces cannot)
type StringOrNumber = string | number;

// Types can represent primitives (interfaces cannot)
type ID = string;

// ========== IMPLEMENTING INTERFACES IN CLASSES ==========

interface Drawable {
  draw(): void;
}

class Circle implements Drawable {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  draw(): void {
    console.log(`Drawing circle with radius ${this.radius}`);
  }
}

// Multiple interface implementation
interface Readable {
  read(): string;
}

interface Writable {
  write(content: string): void;
}

class File implements Readable, Writable {
  content: string = "";

  read(): string {
    return this.content;
  }

  write(content: string): void {
    this.content = content;
  }
}

// ========== GENERIC INTERFACES ==========

interface Repository<T> {
  findById(id: string): T | null;
  findAll(): T[];
  save(entity: T): void;
  delete(id: string): void;
}

// Usage
class UserRepository implements Repository<User> {
  private users: User[] = [];

  findById(id: string): User | null {
    return this.users.find(u => u.name === id) || null;
  }

  findAll(): User[] {
    return [...this.users];
  }

  save(entity: User): void {
    this.users.push(entity);
  }

  delete(id: string): void {
    this.users = this.users.filter(u => u.name !== id);
  }
}

// ========== INTERFACE WITH GENERIC CONSTRAINTS ==========

interface Comparable<T> {
  compareTo(other: T): number;
}

class NumberComparable implements Comparable<number> {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  compareTo(other: number): number {
    return this.value - other;
  }
}

// ========== PRACTICAL EXAMPLES ==========

// API Response pattern with interface
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  timestamp: Date;
}

// Event handler interface
interface EventHandler {
  (event: Event): void;
  priority?: number;
}

// Configuration interface
interface AppConfig {
  api: {
    baseUrl: string;
    timeout: number;
  };
  features: {
    [key: string]: boolean;
  };
}

// ========== SUMMARY ==========
console.log("\n" + "=".repeat(60));
console.log("📚 SUMMARY");
console.log("=".repeat(60));
console.log("✅ Interfaces - object shapes, contracts, class implementations");
console.log("✅ Type Aliases - unions, intersections, complex types");
console.log("✅ When to use Interfaces vs Types");
console.log("✅ Interface Extension and Declaration Merging");
console.log("✅ Generic Interfaces - reusable contracts");
console.log("=".repeat(60) + "\n");

// ========== EXPORT FOR TESTING ==========
export {
  User,
  Product,
  Config,
  Dog,
  Duck,
  Point,
  Status,
  MathOperation,
  IPerson,
  TPerson,
  Circle,
  File,
  Repository,
  UserRepository,
  ApiResponse,
  AppConfig
};

