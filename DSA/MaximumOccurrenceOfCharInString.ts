/** 
 * Approach - Using Map
 * TC - O(n)
 * SC
*/

function returnMaxOccurredChar(input: string): string {
    let output: string = "";
    const strArr = input.split('');
    const myobj: any = new Map();
    let count = 0;
    for(let i=0; i<strArr.length; i++) {
        if(myobj.has(strArr[i])) {
            myobj.set(strArr[i], myobj.get(strArr[i]) + 1); 
        } else {
            myobj.set(strArr[i], 0);
        }

        if(count < myobj.get(strArr[i])) {
            output = strArr[i];
            count = myobj.get(strArr[i]);
        }
        
    }

    return output;

}

console.log(returnMaxOccurredChar('abcdddcaa'));