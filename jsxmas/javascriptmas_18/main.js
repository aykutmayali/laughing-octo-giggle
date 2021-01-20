function arrayPreviousLess(nums) {
    const previousLess = [];
    
    for(let i = nums.length -1; i >= 0; i--) {
        for(let j = i; j >= 0; j--) {
            if(nums[i] > nums[j]) {
                previousLess.unshift(nums[j]);
                break;
            } else if (j === 0) {
                previousLess.unshift(-1);
            }
        }
    }
    console.log(previousLess);
    return previousLess;
}



/**
* Test Suite 
*/
describe('arrayPreviousLess()', () => {
    it('shift previous postions from the left to a smaller value or store -1', () => {
        // arrange
        const nums = [3, 5, 2, 4, 5];
        
        // act
        const result = arrayPreviousLess(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual([-1, 3, -1, 2, 4]);
    });
});