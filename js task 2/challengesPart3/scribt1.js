
// How can I generate an array of 50 random phone numbers for Vodafone?

//===============================================================================


const listOfNumbers = []
const phoneNumbers = 10; //* if you need more than numbers just change this.


function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min) + min);
}

for(let i=0; i<phoneNumbers; i++)
{
    let newPhonenumber = "010";
    for(let x=0; x<4; x++)
    {
        newPhonenumber += getRandomInt(10,99);
    }
    listOfNumbers.push(newPhonenumber);
}


console.log(listOfNumbers);


//===============================================================================
