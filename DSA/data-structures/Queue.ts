/**
 * Generic Queue implementation in TypeScript
 * 
 * WHAT IS A QUEUE?
 * A Queue is a linear data structure that follows the FIFO (First In First Out) principle.
 * Think of it like a line of people waiting - the first person in line is the first to be served.
 * 
 * KEY CONCEPTS:
 * - FIFO (First In First Out): The first element added is the first one to be removed
 * - Elements are added at the "rear" (back) and removed from the "front"
 * - Generic Type <T>: Allows the queue to work with any data type
 * 
 * COMMON USE CASES:
 * - Task scheduling (print queue, CPU scheduling)
 * - Breadth-First Search (BFS) algorithm
 * - Message queues in distributed systems
 * - Request handling in web servers
 * - Customer service systems (first come, first served)
 * 
 * TIME COMPLEXITY:
 * - enqueue: O(1) - Constant time, adding to end of array
 * - dequeue: O(1) - Constant time, removing from front (using shift)
 *   Note: shift() is O(n) in worst case, but for learning purposes we use it.
 *   In production, consider using a circular buffer or linked list for true O(1).
 * - front: O(1) - Constant time, accessing first element
 * - isEmpty: O(1) - Constant time, checking length
 * - size: O(1) - Constant time, getting length
 * 
 * SPACE COMPLEXITY: O(n) where n is the number of elements stored in the queue
 */

export class Queue<T> {
  // Private array to store queue elements
  // The first element (index 0) is the "front", last element is the "rear"
  private items: T[] = [];

  /**
   * Adds an element to the rear (back) of the queue
   * Also called "enqueue" or "add"
   * 
   * @param item - The element to add to the queue
   * 
   * Example: queue.enqueue(5) adds 5 to the back
   * Queue: [1, 2, 3] -> [1, 2, 3, 5]
   */
  enqueue(item: T): void {
    this.items.push(item);
  }

  /**
   * Removes and returns the front element of the queue
   * Also called "dequeue" or "remove"
   * 
   * @returns The element that was at the front (first in line)
   * @throws Error if queue is empty (can't dequeue from empty queue)
   * 
   * Example: queue.dequeue() removes and returns the first element
   * Queue: [1, 2, 3] -> [2, 3], returns 1
   */
  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    // shift() removes and returns the first element
    // The '!' operator tells TypeScript we're sure the value exists
    return this.items.shift()!;
  }

  /**
   * Returns the front element without removing it
   * Also called "peek()" or "front()" in some implementations
   * 
   * @returns The element at the front of the queue
   * @throws Error if queue is empty
   * 
   * Example: queue.front() returns 1 but queue remains [1, 2, 3]
   */
  front(): T {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    // Access the first element (index 0)
    return this.items[0];
  }

  /**
   * Checks if the queue is empty
   * 
   * @returns true if queue has no elements, false otherwise
   */
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  /**
   * Returns the number of elements in the queue
   * 
   * @returns The size/count of elements in the queue
   */
  size(): number {
    return this.items.length;
  }

  /**
   * Clears all elements from the queue
   * Resets the queue to an empty state
   */
  clear(): void {
    this.items = [];
  }
}

