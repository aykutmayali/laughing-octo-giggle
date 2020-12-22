function insertDashes(str) {
    const words = str.split(' ');
    const dashedWords = words.map((word) => {
       const chars = word.split('');
       
       return chars.join('-'); 
    });
    
    return dashedWords.join(' ');
}



/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});