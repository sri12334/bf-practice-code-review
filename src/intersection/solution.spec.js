import { intersection } from './solution.js';

describe('Creates an array of values that are in both the first and the second arrays', () => {
    it('[2, 1], [2, 3] -> [3]', () => {
        expect(intersection([2, 1], [2, 3])).toEqual([2]);
    });
    it('[2, 1, 2], [2, 3] -> [3]', () => {
        expect(intersection([2, 1, 2], [2, 3])).toEqual([2]);
    });
});
