const Exercises = require('./Exs1-5');

describe('Exercises', () => {
    const exercises = new Exercises();

    describe('isEven', () => {
        test('should return true for even numbers', () => {
            expect(exercises.isEven(4)).toBeTruthy();
            expect(exercises.isEven(0)).toBeTruthy();
            expect(exercises.isEven(-2)).toBeTruthy();
            expect(exercises.isEven(100)).toBeTruthy();
        });

        test('should return false for odd numbers', () => {
            expect(exercises.isEven(1)).toBeFalsy();
            expect(exercises.isEven(3)).toBeFalsy();
            expect(exercises.isEven(-1)).toBeFalsy();
            expect(exercises.isEven(-3)).toBeFalsy();
            expect(exercises.isEven(99)).toBeFalsy();
        });
    });

    describe('removeAtLeastOne', () => {
        test('should remove at least one element from the array', () => {
            const originalArray = [1, 2, 3, 4, 5];
            const originalLength = originalArray.length;
            const result = exercises.removeAtLeastOne([...originalArray]); // Use spread to avoid mutating original
            
            expect(result.length).toBeLessThan(originalLength);
            expect(result.length).toBeGreaterThanOrEqual(1);
        });

        test('should return an array', () => {
            const testArray = [1, 2, 3];
            const result = exercises.removeAtLeastOne([...testArray]);
            
            expect(Array.isArray(result)).toBe(true);
        });

        test('should remove elements from the beginning of the array', () => {
            const testArray = [1, 2, 3, 4, 5];
            const result = exercises.removeAtLeastOne([...testArray]);
            
            // The remaining elements should be from the end of the original array
            const expectedPossibleResults = [
                [2, 3, 4, 5], // removed 1 element
                [3, 4, 5],    // removed 2 elements
                [4, 5],       // removed 3 elements
                [5]           // removed 4 elements
            ];
            
            expect(expectedPossibleResults.some(expected => 
                JSON.stringify(expected) === JSON.stringify(result)
            )).toBe(true);
        });
    });

    describe('simplify', () => {
        test('should remove all specified symbols from string', () => {
            const input = "Ma! matzav# achi. test, string' with symbols";
            const result = exercises.simplify(input);
            const expected = "Ma matzav achi test string with symbols";
            
            expect(result).toBe(expected);
        });

        test('should handle string with no symbols to remove', () => {
            const input = "Ma matzav achi?";
            const result = exercises.simplify(input);
            
            expect(result).toBe("Ma matzav achi?");
        });

        test('should handle string with only symbols', () => {
            const input = "!#.,'";
            const result = exercises.simplify(input);
            
            expect(result).toBe("");
        });

        test('should handle empty string', () => {
            const input = "";
            const result = exercises.simplify(input);
            
            expect(result).toBe("");
        });

        test('should preserve other special characters', () => {
            const input = "Test@string&with%other*symbols";
            const result = exercises.simplify(input);
            
            expect(result).toBe("Test@string&with%other*symbols");
        });

        test('should handle multiple consecutive symbols', () => {
            const input = "Ma!!!###...,,,' matzav achi?";
            const result = exercises.simplify(input);
            
            expect(result).toBe("Ma matzav achi?");
        });
    });
});