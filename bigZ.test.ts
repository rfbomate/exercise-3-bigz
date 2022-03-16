import { BigZ } from './utilities/BigZ';

describe("BigZ tests", () => {

    let inputMatrix = [
        [1, 3, 4, 10],
        [2, 5, 9, 11],
        [6, 8, 12, 15],
        [7, 13, 14, 16]
    ];

    it('Creating an instance of BigZ class', () => {

        const bigZInstance: BigZ = new BigZ(inputMatrix);
        expect(bigZInstance).toBeInstanceOf(BigZ);
    });


    it("All rows do not have the same number of elements", () => {
        inputMatrix = [
            [1, 3, 4, 10],
            [2, 5, 9, 11],
            [6, 8, 12, 15, 22],
            [7, 13, 14, 16]
        ];
        try {
            const instance: BigZ = new BigZ(inputMatrix);
        } catch (e) {
            expect(e).toBe('The rows of the matrix must have the same numbers of items')
        }
    });

    it('Exercise test case', () => {
        inputMatrix = [
            [1, 3, 4, 10],
            [2, 5, 9, 11],
            [6, 8, 12, 15],
            [7, 13, 14, 16]
        ];
        const bigZInstance: BigZ = new BigZ(inputMatrix);
        const result = bigZInstance.drawTour();
        expect(JSON.stringify(result)).toBe(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]));
    });

    it('Test with none-square matrix and N-dimention < M-dimention', () => {
        inputMatrix = [
            [1, 3, 4, 10, 24],
            [2, 5, 9, 11, 46],
            [6, 8, 12, 15, 51],
            [7, 13, 14, 16, 75]
        ];
        const bigZInstance: BigZ = new BigZ(inputMatrix);
        const result = bigZInstance.drawTour();
        expect(JSON.stringify(result)).toBe(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 24, 11, 12, 13, 14, 15, 46, 51, 16, 75]));
    });

    it('Test with none-square matrix and N-dimention > M-dimention', () => {
        inputMatrix = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16],
            [17, 18, 19, 20]
        ];
        const bigZInstance: BigZ = new BigZ(inputMatrix);
        const result = bigZInstance.drawTour();
        expect(JSON.stringify(result)).toBe(JSON.stringify([1, 5, 2, 3, 6, 9, 13, 10, 7, 4, 8, 11, 14, 17, 18, 15, 12, 16, 19, 20]));
    });

    it('Test with 2x2 square matrix', () => {
        inputMatrix = [
            [1, 2],
            [3, 4]
        ];
        const bigZInstance: BigZ = new BigZ(inputMatrix);
        const result = bigZInstance.drawTour();
        expect(JSON.stringify(result)).toBe(JSON.stringify([1, 3, 2, 4]));
    });

    it('Test with 1x1 square matrix', () => {
        inputMatrix = [
            [1, 2]
        ];
        const bigZInstance: BigZ = new BigZ(inputMatrix);
        const result = bigZInstance.drawTour();
        expect(JSON.stringify(result)).toBe(JSON.stringify([1, 2]));
    });

    it('Test with empty matrix', () => {
        inputMatrix = [
            []
        ];
        const bigZInstance: BigZ = new BigZ(inputMatrix);
        const result = bigZInstance.drawTour();
        expect(JSON.stringify(result)).toBe(JSON.stringify([]));
    });



});