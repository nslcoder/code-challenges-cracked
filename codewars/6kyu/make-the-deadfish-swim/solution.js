/**
 * Title: Make the Deadfish Swim
 *
 * Rank: 6 kyu
 *
 * Description:
 *   Create a parser to interpret and execute the Deadfish language.
 *
 *   Deadfish operates on a single value in memory, which is initially set to 0.
 *
 *   It uses four single-character commands:
 *
 *    i: Increment the value
 *    d: Decrement the value
 *    s: Square the value
 *    o: Output the value to a result array
 *
 *   All other instructions are no-ops and have no effect.
 *
 *   Examples
 *
 *   Program "iiisdoso" should return numbers [8, 64].
 *   Program "iiisdosodddddiso" should return numbers [8, 64, 3600].
 *
 * Link: https://www.codewars.com/kata/51e0007c1f9378fa810002a9
 */

function parse(data) {
  let value = 0;
  const result = [];

  data.split("").forEach((char) => {
    if (char === "i") {
      value += 1;
    } else if (char === "d") {
      value -= 1;
    } else if (char === "s") {
      value = value * value;
    } else if (char === "o") {
      result.push(value);
    }
  });

  return result;
}
