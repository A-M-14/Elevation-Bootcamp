/* Write your code below */
class Matrix{
    constructor(numRows, numColumns){
        this.matrix = this.generateMatrix(numRows, numColumns);
    }
    
    generateMatrix(numRows, numColumns) {
    let matrix = []
    let num = 1
    
    for (let r = 0; r < numRows; r++) {
        matrix.push([])
        for (let c = 0; c < numColumns; c++) {
            matrix[r].push(num++)
        }
    }
    return matrix;
}
    

    print(){
    for (let r = 0; r < this.matrix.length; r++) {
        let row = ""
        for (let c = 0; c < this.matrix[r].length; c++) {
            row += this.matrix[r][c] + "\t"
        }
        console.log(row)
    }
}
    get(row, column){
        return this.matrix[row][column];
    }

    alter(row, column, value){
        this.matrix[row][column] = value;
    }

    printRow(row){
        let rowString = "";
        for (let c = 0; c < this.matrix[row].length; c++) {
            rowString += this.matrix[row][c] + " ";
        }
        console.log(rowString);
    }

    printColumn(column){
        let columnString = "";
        for (let r = 0; r < this.matrix.length; r++) {
            columnString += this.matrix[r][column] + " ";
        }
        console.log(columnString);
    }

}



//You can paste the code from the lesson below to test your solution
let m = new Matrix(3, 4)
m.print()
//prints
/*
1       2       3       4
5       6       7       8
9       10      11      12
*/
    
m.alter(0, 0, m.get(1, 1))
m.printColumn(0) //prints 6, 5, 9 (separate lines)
m.printRow(0) //prints 6, 2, 3, 4 (separate lines)




/* Do not remove the exports below */
module.exports = Matrix