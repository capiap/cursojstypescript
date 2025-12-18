let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string | undefined;
} {
  return {
    firstName,
    lastName,
  };
}

/* eslint-disable */
export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareMultiply = 2;
console.log(squareMultiply * 10);
