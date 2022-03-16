
class BigZ {
    _matriz: number[][]

    constructor(pMatriz: number[][]) {
        this._matriz = pMatriz;
    }

    drawTour(): number[] {

        const resultListLength: number = this.calculateLengthResultList();
        let resultList: number[] = [];

        let state: string = "Initial"; //Initial state
        let rowIndex: number = 0;
        let columnIndex: number = 0;

        const finalIndex: number[] = [this._matriz.length - 1, this._matriz[this._matriz.length - 1].length - 1];


        while (resultList.length < resultListLength) {
            if (finalIndex[0] == rowIndex && finalIndex[1] == columnIndex) {
                break;
            }
            switch (state) {
                case 'Initial': { //initial 
                    resultList.push(this._matriz[rowIndex][columnIndex]);
                    state = 'Down1'; //down one step if can i, if can't down, I move right,  
                    break;
                }

                case "Down1": {
                    if (this._matriz[rowIndex + 1] != undefined && this._matriz[rowIndex + 1][columnIndex] != undefined) { // if i can move down 
                        rowIndex++;
                    } else {
                        columnIndex++;
                    }
                    resultList.push(this._matriz[rowIndex][columnIndex]);
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

                    if (this._matriz[rowIndex] != undefined && this._matriz[rowIndex][columnIndex + 1] != undefined) {
                        columnIndex++;
                    } else {
                        rowIndex++;
                    }
                    resultList.push(this._matriz[rowIndex][columnIndex]);
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

    private calculateLengthResultList(): number {
        let result = 0;

        this._matriz.forEach((item) => {
            result += item.length;
        });

        return result;
    }

    private makeUpRightDiagonal(position: number[]): number[][] {

        let [initialRow, initialColumn] = position;
        let result: number[][] = [[], [position[0], position[1]]];
        if (this._matriz[initialRow][initialColumn] == undefined) {
            return result;
        }



        while (this._matriz[initialRow] != undefined && this._matriz[initialRow][initialColumn] != undefined) {
            result[0].push(this._matriz[initialRow][initialColumn]);

            initialRow--;
            initialColumn++;
        }

        //restore the last position
        result[1][0] = ++initialRow;
        result[1][1] = --initialColumn;
        return result;
    }

    private makeLeftDownDiagonal(position: number[]): number[][] {

        let [initialRow, initialColumn] = position;
        let resultFinal: number[][] = [[], [position[0], position[1]]];

        if (this._matriz[initialRow] == undefined || this._matriz[initialRow][initialColumn] == undefined) {

            return resultFinal;
        }


        while (this._matriz[initialRow] != undefined && this._matriz[initialRow][initialColumn] != undefined) {
            resultFinal[0].push(this._matriz[initialRow][initialColumn]);

            initialRow++;
            initialColumn--;


        }


        resultFinal[1][0] = --initialRow;
        resultFinal[1][1] = ++initialColumn;

        return resultFinal;
    }

}




export { BigZ }