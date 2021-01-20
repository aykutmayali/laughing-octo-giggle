function alphabetSubsequence(str) {
    const chars = str.split('');
    const charCodes = chars.map((char) => char.charCodeAt(0));
    
    if(new Set(charCodes).size !== charCodes.length) {
        return false;
    }
    
    for (let i = 0; i < charCodes.length - 1; i++) {
        if(charCodes[i] > charCodes[i + 1]) {
            return false;
        }
    }
    
    return true;
}



/**
* Test Suite 
*/
describe('alphabetSubsequence()', () => {
    it('returns false when it has duplicate letters', () => {
        // arrange
        const str = 'effg';
        
        // act
        const result = alphabetSubsequence(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(false);
    });

    it('returns false when NOT in ascending a - z order', () => {
        // arrange
        const str = 'cdea';
        
        // act
        const result = alphabetSubsequence(str);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(false);
    });
    
    it('returns true whenno duplicates and is ascending a - z order ', () => {
        // arrange
        const str = 'ace';
        
        // act
        const result = alphabetSubsequence(str);

        // log
        console.log("result 3: ", result);
        
        // assert
        expect(result).toBe(true);
    });
});