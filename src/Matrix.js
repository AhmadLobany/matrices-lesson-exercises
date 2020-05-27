/* Write your code below */
class Matrix {
    constructor(rows = 0,cols = 0) {
        this.matrix = [];
        this.r = rows;
        this.c = cols;
        this.generateMatrix(rows,cols);
    }

    generateMatrix(r,c) {
        this.matrix= []
        let counter = 1
        for(let i=0;i<r;i++) {
            let row = []
            for(let j=0;j<c;j++) {
                row.push(counter)
                counter++
            }
            this.matrix.push(row)
        }
    }

    get = (i,j) => this.matrix[i][j]

    printColumn(j) {        
        if(j>(this.c-1) || j<0) return;
        for(let i=0;i<this.r;i++) {
            console.log(this.matrix[i][j])
        }
    }

    printRow(i) {        
        if(i>(this.r-1) || i<0) return;
        for(let j=0;j<this.c;j++) {
            console.log(this.matrix[i][j])
        }
    }

    print() {
        console.log(this.matrix)
    }

    alter(i,j,newVal) {
        this.matrix[i][j]=newVal
    }

    findCoordinate(val) {
        let res = {x: undefined,y: undefined}
        for(let i=0;i<this.r;i++) {
            for(let j=0;j<this.c;j++) {
                if(this.matrix[i][j]==val) {
                    res.x = i
                    res.y = j
                    return res
                }
            }
        }
        return res;
    }

}





//You can paste the code from the lesson below to test your solution
// let m = new Matrix(3, 4)
// m.print()
// //prints
// /*
// 1       2       3       4
// 5       6       7       8
// 9       10      11      12
// */

// m.alter(0, 0, m.get(1, 1))
// m.printColumn(0) //prints 6, 5, 9 (separate lines)
// m.printRow(0) //prints 6, 2, 3, 4 (separate lines)


//Test2
// let m = new Matrix(3, 4)
// console.log(m.findCoordinate(12)) //prints {x: 3, y: 2}
// console.log(m.findCoordinate(7)) //prints {x: 2, y: 1}






/* Do not remove the exports below */
module.exports = Matrix