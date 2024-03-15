/*

1. JavaScript Program to Find Second Largest Element in an Array
2. JavaScript Program to Find the Largest Three Elements in an Array
3. JavaScript Program to Find Next Smaller Element

*/ 

// [1]

let arr = [5,2,4,1,0,7];
arr.sort();
console.log("Second Largest Element in an Array : \n" + arr[arr.length -2]);

// [2]

console.log("the Largest Three Elements in an Array : ");
for(let i=1; i<=3;i++)
{
    console.log(arr[arr.length - i]);
}

// [3]

console.log("Next Smaller Element : ");
console.log(arr[1]);


//============================================================

