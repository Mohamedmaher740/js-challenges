
// How do I randomly select a subset of phone numbers from an array in JavaScript?

//==================================================================================


function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min) + min);
}
const listOfNumbers =
[
    '01065881786',
    '01249849775',
    '01060714119',
    '01577756455',
    '01031575326',
    '01225953081',
    '01052488645',
    '01032705664',
    '01118805379',
    '01042582352'
]
let listLen = listOfNumbers.length;

let start = getRandomInt(0,listLen-1);
let end = getRandomInt(start+1,listLen);
console.log(start);
console.log(end);

let subNumbers = listOfNumbers.slice(start,end);
console.log(subNumbers);


//==================================================================================