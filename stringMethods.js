let t='my name is shashi'
// shashi has been repalced by jai and new string has been stored in newt
let newt= t.replace('shashi', 'jai')
console.log(t)
console.log(newt)

//include method
const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// Expected output: "The word "fox" is in the sentence"

//template literal :// for deatill prefer harry note
let text = `He's often called "Johnny"`;//op:all singel quote and double quote also get printed 
console.log(text);
let name="hari";
let a=`he is ${name}`;
console.log(a); 