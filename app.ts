import { BigZ } from './utilities/BigZ';

console.clear();
try {
    const inputMatriz = [
        [1, 2, 3, 4, 9],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
        [17, 18, 19, 20]

    ];
    const bigZInstance: BigZ = new BigZ(inputMatriz);

    const result: number[] = bigZInstance.drawTour();

    console.log(result);
} catch (e) {
    console.error('\x1b[31m', e);
}








