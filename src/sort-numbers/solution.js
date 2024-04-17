/** .........
* Sorts an array of numbers from smallest to largest to largest.
 *
 * Returns a new array without modifying the original array.
 *
 * @param {number[]} [arrayOfNumbers=[]] - the array of numbers to sort
 * @returns {number[]} a new array with the same numbers, but sorted
 * @example
 */

export const sortNumbers = (arrayOfNumbers=[]) => {
    return arrayOfNumbers.sort((a, b) => a - b);
};
