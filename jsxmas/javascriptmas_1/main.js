function reverseAString(str) {
    var rts = str.split("");
    console.log(rts);
    rts = rts.reverse();
    console.log(rts);
    rts = rts.join("");
    console.log(rts);
    return rts;
 }
 
 
 
 /**
 * Test Suite 
 */
 describe('reverseAString()', () => {
     it('returns original string reversed', () => {
         // arrange
         const str = 'hello';
         
         // act
         const result = reverseAString(str);
 
         // log
         console.log("result: ", result);
         
         // assert
         expect(result).toBe('olleh');
     });
 });