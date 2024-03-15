
// How can I filter an array of phone numbers to only include those belonging to the
// Vodafone network in JavaScript?

//================================================================================

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

const vodafoneNumbers = [];

for(let i=0; i<listOfNumbers.length; i++)
{
    let theNum = listOfNumbers[i];
    if(theNum[2] == "0")
    {
        vodafoneNumbers.push(theNum);
    }
}

console.log(vodafoneNumbers);

//================================================================================
