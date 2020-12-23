function extractMatrixColumn(matrix, column) {
    //  write code here.
    const retVal = [];
    
    for(let row of matrix){
        retVal.push(row[column])
    }
    
    return retVal;
}

// function extractMatrixColumn(matrix, column) {
//     //  write code here.
//     const retVal = [];
    
//     matrix.forEach( row =>{
//       retVal.push(row[column])  
//     })
        
    
//     return retVal;
// }

// function extractMatrixColumn(matrix, column) {
//     //  write code here.
//     return matrix.map( row => row[column]);
            
// }



/**
* Test Suite 
*/
describe('extractMatrixColumn()', () => {
    it('returns largest positive integer possible for digit count', () => {
        // arrange
        const matrix = [[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]];
        const column = 2;
        
        // act
        const result = extractMatrixColumn(matrix, column);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([1, 0, 3]);
    });
});