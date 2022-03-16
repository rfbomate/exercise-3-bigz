import { BigZ } from './utilities/BigZ';

console.clear(); //Clean the console

//when we call external functions different exceptions can occur, for that I implemented try/catch structure
try {
    //define input matrix
    const inputMatrix = [
        [1, 3, 4, 10],
        [2, 5, 9, 11],
        [6, 8, 12, 15],
        [7, 13, 14, 16]
    ];

    //create an instance of the class
    const bigZInstance: BigZ = new BigZ(inputMatrix);

    // get result of the exercise 
    const result: number[] = bigZInstance.drawTour();

    //print in console the result
    console.log(result);
} catch (e) {
    //if an exception occurs, I print to the console an error with red color
    console.error('\x1b[31m', e);
}








