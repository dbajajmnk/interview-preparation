/**
 * WEEK 1 - SESSION 2: Union and Intersection Types
 * 
 * THEORY:
 * 
 * UNION TYPES (|):
 * - Represents a value that can be one of several types
 * - Syntax: type1 | type2 | type3
 * - Useful for values that can have multiple possible types
 * - TypeScript will only allow operations that are valid for ALL types in the union
 * 
 * INTERSECTION TYPES (&):
 * - Represents a value that must satisfy ALL of the given types
 * - Syntax: type1 & type2 & type3
 * - Useful for combining multiple types into one
 * - All properties from all types must be present
 * 
 * KEY DIFFERENCES:
 * - Union: "OR" - value can be type1 OR type2
 * - Intersection: "AND" - value must be type1 AND type2
 */

// ========== UNION TYPES ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 1: UNION TYPES (|)");
console.log("=".repeat(60) + "\n");

// Basic union: value can be string OR number
type StringOrNumber = string | number;

let id: StringOrNumber = "abc123";
console.log("🔗 BASIC UNION: string | number");
console.log(`  let id: StringOrNumber = "abc123" → ${id} (type: string | number)`);
id = 12345; // Also valid
console.log(`  id = 12345 → ${id} (type: string | number)`);
console.log("  ⚠️  id = true would ERROR (boolean not in union)");

// Union with multiple types
type Status = "pending" | "approved" | "rejected";
let currentStatus: Status = "pending";
console.log("\n📋 LITERAL UNION: \"pending\" | \"approved\" | \"rejected\"");
console.log(`  currentStatus = "${currentStatus}"`);
console.log("  ⚠️  currentStatus = \"invalid\" would ERROR");

// Union in function parameters
function formatId(id: string | number): string {
  // Type narrowing required - TypeScript doesn't know which type it is
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  return id.toString();
}

console.log("\n🔧 UNION IN FUNCTION PARAMETERS:");
console.log(`  formatId("abc123") = "${formatId("abc123")}"`);
console.log(`  formatId(12345) = "${formatId(12345)}"`);

// Union with null/undefined (common pattern)
type MaybeString = string | null | undefined;
function getValue(): MaybeString {
  return Math.random() > 0.5 ? "hello" : null;
}

const maybeValue = getValue();
console.log("\n❓ UNION WITH NULL/UNDEFINED:");
console.log(`  maybeValue = ${maybeValue === null ? "null" : `"${maybeValue}"`} (type: string | null | undefined)`);

// ========== INTERSECTION TYPES ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 2: INTERSECTION TYPES (&)");
console.log("=".repeat(60) + "\n");

// Basic intersection: combines multiple types
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

console.log("🔗 INTERSECTION: Person & Employee");
console.log(`  Must have ALL properties from BOTH types:`);
console.log(`  john = ${JSON.stringify(john, null, 2)}`);
console.log("  ✅ Has: name, age (from Person) AND employeeId, department (from Employee)");

// Intersection with overlapping properties
interface HasId {
  id: string;
}

interface HasName {
  name: string;
}

interface HasEmail {
  email: string;
}

// All three must be satisfied
type Contact = HasId & HasName & HasEmail;

const contact: Contact = {
  id: "1",
  name: "Jane",
  email: "jane@example.com"
};

console.log("\n🔗 MULTIPLE INTERSECTIONS: HasId & HasName & HasEmail");
console.log(`  contact = ${JSON.stringify(contact)}`);
console.log("  ✅ Must satisfy ALL three interfaces");

// ========== PRACTICAL UNION EXAMPLES ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 3: PRACTICAL UNION EXAMPLES");
console.log("=".repeat(60) + "\n");

// API Response pattern
type ApiResponse<T> = { success: true; data: T }
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

console.log("🌐 API RESPONSE PATTERN:");
const successResponse: ApiResponse<string> = { success: true, data: "Hello World" };
const errorResponse: ApiResponse<string> = { success: false, error: "Not found" };
console.log("  Success response:");
handleApiResponse(successResponse);
console.log("  Error response:");
handleApiResponse(errorResponse);

// Event handler pattern
type EventType = "click" | "hover" | "focus";
type EventHandler = (event: EventType) => void;

// ========== PRACTICAL INTERSECTION EXAMPLES ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 4: PRACTICAL INTERSECTION EXAMPLES");
console.log("=".repeat(60) + "\n");

// Mixin pattern - combining functionality
interface Timestamped {
  createdAt: Date;
  updatedAt: Date;
}

interface SoftDeletable {
  deletedAt: Date | null;
}

// Entity that is both timestamped and soft-deletable
type TimestampedEntity = Person & Timestamped & SoftDeletable;

const entity: TimestampedEntity = {
  name: "Test",
  age: 25,
  createdAt: new Date(),
  updatedAt: new Date(),
  deletedAt: null
};

console.log("🔗 MIXIN PATTERN: Person & Timestamped & SoftDeletable");
console.log(`  entity combines properties from 3 interfaces:`);
console.log(`  - Person: name, age`);
console.log(`  - Timestamped: createdAt, updatedAt`);
console.log(`  - SoftDeletable: deletedAt`);
console.log(`  entity.name = "${entity.name}", entity.age = ${entity.age}`);

// ========== DISCRIMINATED UNIONS (Advanced Pattern) ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 5: DISCRIMINATED UNIONS");
console.log("=".repeat(60) + "\n");

// Using a common property to distinguish union members
type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };

function calculateArea(shape: Shape): number {
  // TypeScript can narrow the type based on 'kind'
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

const circle: Shape = { kind: "circle", radius: 5 };
const rectangle: Shape = { kind: "rectangle", width: 4, height: 6 };
const triangle: Shape = { kind: "triangle", base: 3, height: 4 };

console.log("🎯 DISCRIMINATED UNION: Shape with 'kind' discriminator");
console.log(`  calculateArea(circle with radius 5) = ${calculateArea(circle).toFixed(2)}`);
console.log(`  calculateArea(rectangle 4x6) = ${calculateArea(rectangle)}`);
console.log(`  calculateArea(triangle base 3, height 4) = ${calculateArea(triangle)}`);
console.log("  ✅ TypeScript narrows type based on 'kind' property");

// ========== TYPE GUARDS WITH UNIONS ==========

console.log("\n" + "=".repeat(60));
console.log("TOPIC 6: TYPE GUARDS WITH UNIONS");
console.log("=".repeat(60) + "\n");

// Custom type guard function
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

console.log("🛡️  TYPE GUARDS:");
console.log(`  processValue("hello") = "${processValue("hello")}"`);
console.log(`  processValue(42) = "${processValue(42)}"`);
console.log("  ✅ Custom type guard 'isString' narrows the type");

// ========== COMPLEX EXAMPLES ==========

// Union of function types
type MathOperation = 
  | ((a: number, b: number) => number)
  | ((a: number) => number);

function executeOperation(op: MathOperation, a: number, b?: number): number {
  if (b !== undefined) {
    return (op as (a: number, b: number) => number)(a, b);
  }
  return (op as (a: number) => number)(a);
}

// Intersection of function types (less common but useful)
type Loggable = {
  log(): void;
};

type Serializable = {
  serialize(): string;
};

type LoggableSerializable = Loggable & Serializable;

const obj: LoggableSerializable = {
  log() {
    console.log("Logging...");
  },
  serialize() {
    return JSON.stringify(this);
  }
};

// ========== SUMMARY ==========
console.log("\n" + "=".repeat(60));
console.log("📚 SUMMARY");
console.log("=".repeat(60));
console.log("✅ Union Types (|) - value can be type1 OR type2");
console.log("✅ Intersection Types (&) - value must be type1 AND type2");
console.log("✅ Discriminated Unions - using common property to narrow");
console.log("✅ Type Guards - custom functions for type narrowing");
console.log("✅ Practical Patterns - API responses, mixins, etc.");
console.log("=".repeat(60) + "\n");

// ========== EXPORT FOR TESTING ==========
// Note: Some variables are declared for educational purposes
export {
  id,
  currentStatus,
  john,
  contact,
  entity,
  formatId,
  getValue,
  handleApiResponse,
  calculateArea,
  processValue,
  executeOperation,
  obj,
  EmployeePerson,
  Contact,
  Shape,
  ApiResponse,
  EventHandler
};

