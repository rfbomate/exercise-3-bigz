// i created a class for model the business logic of the exrcise
class BigZ {
    //private attribute of the class. Represents the input array when the object is instantiated
    _matrix: number[][]

    //class constructor. It is used to initialize the attributes
    constructor(pMatrix: number[][]) {
        //verify that all rows has the same numbers of items
        let isCorrectMatrix = pMatrix.every((item) => item.length == pMatrix[0].length);
        if (!isCorrectMatrix) { // if the array is not formatted correctly, it throws an error
            throw "The rows of the matrix must have the same numbers of items";
        }
        //if the matrix has a correct format, I inicialize the attribute
        this._matrix = pMatrix;
    }

    //main method. Answer the exercise question. Return the tour following the bigZ method theory
    drawTour(): number[] {

        const resultListLength: number = this.calculateLengthResultList();
        let resultList: number[] = [];

        let state: string = "Initial"; //real time state
        let rowIndex: number = 0; //real time row index
        let columnIndex: number = 0; //real time column index

        //I define the last index to vist
        const finalIndex: number[] = [this._matrix.length - 1, this._matrix[this._matrix.length - 1].length - 1];

        //while I haven't visited all the elements
        while (resultList.length < resultListLength) {

            //if I found the last index, I break the loop
            if (finalIndex[0] == rowIndex && finalIndex[1] == columnIndex) {
                break;
            }

            //I check the different states that the algorithm can take
            switch (state) {
                case 'Initial': { //initial 
                    resultList.push(this._matrix[rowIndex][columnIndex]);
                    state = 'Down1'; //down one step if can i, if can't down, I move right,  
                    break;
                }

                case "Down1": {
                    if (this._matrix[rowIndex + 1] != undefined && this._matrix[rowIndex + 1][columnIndex] != undefined) { // if i can move down 
                        rowIndex++;
                    } else {
                        columnIndex++;
                    }
                    resultList.push(this._matrix[rowIndex][columnIndex]);
                    state = "DiagonalRightUp";
                    break;
                }

                case "DiagonalRightUp": {

                    const result: number[][] = this.makeUpRightDiagonal([(rowIndex - 1), (columnIndex + 1)]);
                    resultList = resultList.concat(result[0]);
                    state = 'Right';
                    rowIndex = result[1][0];
                    columnIndex = result[1][1];
                    break;
                }

                case "Right": {

                    if (this._matrix[rowIndex] != undefined && this._matrix[rowIndex][columnIndex + 1] != undefined) {
                        columnIndex++;
                    } else {
                        rowIndex++;
                    }
                    resultList.push(this._matrix[rowIndex][columnIndex]);
                    state = 'DiagonalLeftDown';
                    break;
                }

                case "DiagonalLeftDown": {
                    const result: number[][] = this.makeLeftDownDiagonal([(rowIndex + 1), (columnIndex - 1)]);
                    resultList = resultList.concat(result[0]);
                    state = 'Down1';
                    rowIndex = result[1][0];
                    columnIndex = result[1][1];

                    break;
                }
            }
        }


        return resultList;
    }

    //return the size of the result list
    private calculateLengthResultList(): number {
        let result: number = 0;

        this._matrix.forEach((item) => {
            result += item.length;
        });

        return result;
    }

    //I get an array with the items that I found in this tour
    private makeUpRightDiagonal(position: number[]): number[][] {

        let [initialRow, initialColumn]: number[] = position;
        let result: number[][] = [[], [position[0], position[1]]];
        if (this._matrix[initialRow][initialColumn] == undefined) {
            return result;
        }



        while (this._matrix[initialRow] != undefined && this._matrix[initialRow][initialColumn] != undefined) {
            result[0].push(this._matrix[initialRow][initialColumn]);

            initialRow--;
            initialColumn++;
        }

        //restore the last position
        result[1][0] = ++initialRow;
        result[1][1] = --initialColumn;
        return result;
    }

    //I get an array with the items that I found in this tour
    private makeLeftDownDiagonal(position: number[]): number[][] {

        let [initialRow, initialColumn] = position;
        let resultFinal: number[][] = [[], [position[0], position[1]]];

        if (this._matrix[initialRow] == undefined || this._matrix[initialRow][initialColumn] == undefined) {

            return resultFinal;
        }


        while (this._matrix[initialRow] != undefined && this._matrix[initialRow][initialColumn] != undefined) {
            resultFinal[0].push(this._matrix[initialRow][initialColumn]);

            initialRow++;
            initialColumn--;


        }


        resultFinal[1][0] = --initialRow;
        resultFinal[1][1] = ++initialColumn;

        return resultFinal;
    }

}



//I export the class
export { BigZ }