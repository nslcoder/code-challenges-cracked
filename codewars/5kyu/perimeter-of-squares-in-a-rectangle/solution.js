/**
 * Title: Perimeter of squares in a rectangle
 * 
 * Rank: 5 kyu
 * 
 * Description: The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 

  Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

  Hint:
  See Fibonacci sequence
  
  Ref:
  http://oeis.org/A000045

  The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.
*
 * Link: https://www.codewars.com/kata/559a28007caad2ac4e000083
 */

const perimeter = (n) => {
  const arr = [];

  for (let i = 1; i <= n + 1; i++) {
    if (i === 1) {
      arr.push(i);
    } else {
      const firstPrev = arr[i - 2];
      const secondPrev = arr[i - 3] || 0;
      arr.push(firstPrev + secondPrev);
    }
  }

  const sum = arr.reduce((accu, cur) => accu + cur);
  const totalPerimeter = sum * 4;

  return totalPerimeter;
};
