//! q11

// for(let i=0;i<100;i++)
// {
//     if(i%2!=0)
//         console.log(i);
// }

//==============================================

//! q12

// const i=7;
// for(let x=1;x<12;x++)
// {
//     console.log(x +" x "+i+" = " + x*i);
// }

//==============================================

//! q13

// let sum=0;
// for(let i=1;i<=10;i++)
// {
//     sum+= i;
// }
// console.log(sum);

//==============================================

//! q14 

// let tmp =1;
// for(let i=10 ; i>0 ; i--)
// {
//     tmp *= i;
//     console.log(tmp); // sequence is true

// }

// console.log(tmp); // مش هيطبع الرقم الصح علشان كبير جدا


//===============================================


//! q15

// let sum=0;
// for(let i=11;i<30;i++)
// {
//     if(i%2==0)
//         sum+= i;
// }
// console.log(sum);


//==============================================


//! q16

//--- make it with aru function

// function tempConverter(cel)
// {
//     return (5/9)*cel + 32;

// }

// let cel = 27;

// console.log("if temp with cel = " + cel + " so will be = " + tempConverter(cel));


//===============================================


//! q17

// function tempConverter(fer)
// {
//     return (fer-32)*9/5;

// }

// let fer = 47;

// console.log("if temp with cel = " + fer + " so will be = " + tempConverter(cel));


//====================================================


//! q18

// const arr = [1,2,3,4,5,6,7,8,9,10];
// let sum=0;
// for(let i=0;i<arr.length;i++)
// {
//     sum+= arr[i];
// }

// console.log(sum);


//====================================================


//! q19

// const arr = [1,2,3,4,5,6,7,8,9,10];
// let sum=0;
// for(let i=0;i<arr.length;i++)
// {
//     sum+= arr[i];
// }

// console.log(sum/arr.length);


//====================================================


//! q20

// function veCheck(arr)
// {
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i] < 0)
//             arr.
//     }
// }

// let prime_numbers = [];
// let x = 3;
// let i;
// while(prime_numbers.length<100)
// {
//     for(i =x-1 ; i>1 ; i--)
//     {
//         if(x%i==0)
//             break;
//     }
//     if(i==2)
//         prime_numbers.push(x);
//     x++;
// }

// console.log(prime_numbers);

// for(let i=2)


// let theWord1 = "mohamed maher";
// let theWord2 = "Mohamed maher";
// let theWord3 = "-ohamed maher";


// function capitalize(word)
// {
//     let asciiCode = word.charCodeAt();
//     if(asciiCode>=65 && asciiCode<=90)
//     {
//         return word;
//     }
//     else if(asciiCode>=97 && asciiCode<=122)
//     {
//         let  newWord = String.fromCharCode(asciiCode-32) + word.slice(1, (word.length));
//         return newWord
//     }
//     else
//         return "please enter start with letter";

// }

// console.log(capitalize(theWord1));
// console.log(capitalize(theWord2));
// console.log(capitalize(theWord3));


//==============================================================

// function toMyString(arr,myString)
// {
//     for(let i=0;i<arr.length;i++)
//     {
//         myString += arr[i];
//     }
//     return myString;
// }

// let test = "mohamed maher ibrahim";
// let test1 = [];
// let myString = "";
// for(let i=0;i<test.length;i++)
// {
//     if(i == 0){
//         test1.push('M');
//         i++;
//     }
//     if(test[i] == " ")
//     {
//         test1.push(test[i], 'M');
//         i++;
//     }
//     else{
//         test1.push(test[i]);
//     }
// }

// console.log(test);
// console.log(toMyString(test1,myString));

//==============================================================



//==============================================
//! q25

// function todec(bin,dec)
// {
//     let pow = bin.length -1;
//     for(let i=0; i< bin.length;i++)
//         {
//             dec += (+bin[i])*(2**pow);
//             pow--;
//         }
//         return dec;
// }
// let bin ="0110";
// let dec =0;
// console.log(todec(bin,dec));

//================================================



function capitalIt(char)
{
    let asciicode = char.charCodeAt();
    capLetter = 'x';
    if(asciicode>= 97 && asciicode<= 122)
    {
        capLetter = asciicode-32;
    }
    return capLetter;
}

function toMyString(arr,myString)
{
    for(let i=0;i<arr.length;i++)
    {
        myString += arr[i];
    }
    return myString;
}

let test = "mohamed maher ibrahim";
let test1 = [];
let myString = "";
for(let i=0;i<test.length;i++)
{
    if(i == 0){
        test1.push(capitalIt(test[i]));
        i++;
    }
    if(test[i] == " ")
    {
        test1.push(test[i], capitalIt(test[i]));
        i++;
    }
    else{
        test1.push(test[i]);
    }
}

console.log(test);
console.log(toMyString(test1,myString));