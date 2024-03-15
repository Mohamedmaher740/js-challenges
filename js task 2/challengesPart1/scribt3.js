
// How to Calculate the Sum of Elements in an Array using JavaScript ? ( without any
//     Library )
//====================================================================================

function myLength(arr)
{
    counter = 0;
    while(arr[counter] != undefined){
        counter++;
    }
    return counter;
}

// plaese check my function**

    // console.log(myLength(arr1));

let arr1 = [1,3,6,8,9,14,22,38,40,44];
let arr2 = [5,7,12,18,11,1,6,12,9];
let arr1Length = myLength(arr1);
let arr2Length = myLength(arr2);
let sum =0;

for(let i=0 ;i<arr1Length;i++)
{
    sum += arr1[i];
}

console.log(sum);