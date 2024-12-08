function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

const result1 = add(1, 2); // Works as expected
const result2 = addSafe(1, 2); // Works as expected

 try {
  const result3 = addSafe(1, "2"); // Throws an error
} catch (error) {
  console.error(error);
}

//Alternatively, using type assertion for explicit handling of strings
function addString(a: number, b: string): string{
    return (a + parseInt(b)).toString();
}
const result4 = addString(1,"2") //Returns 3