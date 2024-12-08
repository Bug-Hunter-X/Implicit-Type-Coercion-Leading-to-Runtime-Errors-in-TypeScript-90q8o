function add(a: number, b: number): number {
  return a + b;
}

const result = add(1, "2"); // This will compile without error, but will throw an exception at runtime.