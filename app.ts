import { BigZ } from './utilities/BigZ';

console.clear();
try {
    const inputMatriz = [
        [1, 3, 4, 10, 24],
        [2, 5, 9, 11, 46],
        [6, 8, 12, 15, 51],
        [7, 13, 14, 16, 75]

    ];
    const bigZInstance: BigZ = new BigZ(inputMatriz);

    const result: number[] = bigZInstance.drawTour();

    console.log(result);
} catch (e) {
    console.error('\x1b[31m', e);
}








