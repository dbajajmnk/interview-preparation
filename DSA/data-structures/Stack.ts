/**
 * Generic Stack implementation in TypeScript
 * 
 * WHAT IS A STACK?
 * A Stack is a linear data structure that follows the LIFO (Last In First Out) principle.
 * Think of it like a stack of plates - you can only add or remove plates from the top.
 * 
 * KEY CONCEPTS:
 * - LIFO (Last In First Out): The last element added is the first one to be removed
 * - Operations happen only at one end (the "top" of the stack)
 * - Generic Type <T>: Allows the stack to work with any data type (numbers, strings, objects, etc.)
 * 
 * COMMON USE CASES:
 * - Undo/Redo functionality in text editors
 * - Function call stack in programming languages
 * - Expression evaluation (e.g., checking balanced parentheses)
 * - Backtracking algorithms
 * - Browser history (back button)
 * 
 * TIME COMPLEXITY:
 * - push: O(1) - Constant time, adding to end of array is instant
 * - pop: O(1) - Constant time, removing from end of array is instant
 * - peek: O(1) - Constant time, accessing last element is instant
 * - isEmpty: O(1) - Constant time, checking length is instant
 * - size: O(1) - Constant time, getting length is instant
 * 
 * SPACE COMPLEXITY: O(n) where n is the number of elements stored in the stack
 */

export class Stack<T> {
  // Private array to store stack elements
  // The last element in this array represents the "top" of the stack
  private items: T[] = [];

  /**
   * Adds an element to the top of the stack
   * 
   * @param item - The element to add to the stack
   * 
   * Example: stack.push(5) adds 5 to the top
   * Stack: [1, 2, 3] -> [1, 2, 3, 5]
   */
  push(item: T): void {
    this.items.push(item);
  }

  /**
   * Removes and returns the top element of the stack
   * 
   * @returns The element that was at the top
   * @throws Error if stack is empty (can't pop from empty stack)
   * 
   * Example: stack.pop() removes and returns the last added element
   * Stack: [1, 2, 3] -> [1, 2], returns 3
   */
  pop(): T {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    // The '!' operator tells TypeScript we're sure the value exists
    // (we already checked with isEmpty())
    return this.items.pop()!;
  }

  /**
   * Returns the top element without removing it
   * Also called "top()" in some implementations
   * 
   * @returns The element at the top of the stack
   * @throws Error if stack is empty
   * 
   * Example: stack.peek() returns 3 but stack remains [1, 2, 3]
   */
  peek(): T {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    // Access the last element (index length - 1)
    return this.items[this.items.length - 1];
  }

  /**
   * Checks if the stack is empty
   * 
   * @returns true if stack has no elements, false otherwise
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Returns the number of elements in the stack
   * 
   * @returns The size/count of elements in the stack
   */
  size(): number {
    return this.items.length;
  }

  /**
   * Clears all elements from the stack
   * Resets the stack to an empty state
   */
  clear(): void {
    this.items = [];
  }
}

