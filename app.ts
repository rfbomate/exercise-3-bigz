import { BigZ } from './utilities/BigZ';

console.clear();
try {
    const inputMatrix = [
        [1, 3, 4, 10],
        [2, 5, 9, 11],
        [6, 8, 12, 15],
        [7, 13, 14, 16]

    ];
    const bigZInstance: BigZ = new BigZ(inputMatrix);

    const result: number[] = bigZInstance.drawTour();

    console.log(result);
} catch (e) {
    console.error('\x1b[31m', e);
}








