import { difference } from './solution.js';

describe('Creates an array of values that are in the first array', () => {
    it('[2, 1], [2, 3] -> [1]', () => {
        expect(difference([2, 1], [2, 3])).toEqual([1]);
    });
    it('[1, 2, 1], [2, 3] -> [1]', () => {
        expect(difference([1, 2, 1], [2, 3])).toEqual([1]);
    });
});
