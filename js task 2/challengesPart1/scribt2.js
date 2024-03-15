
// JavaScript Program to Check an Array is Sorted or Not
//============================================================

let arr1 = [1,3,6,8,9,14,22,38,40,44];
let arr2 = [5,7,12,18,11,1,6,12,9];
let arr3 = [1,3,6,8,9,14,22,38,40,29];
let sorted = true;
for(let i=0;i<(arr3.length-1);i++)
{
    if(arr3[i] > arr3[i+1])
    {
        sorted = false;
        break;
    }
}
if(sorted)
{
    console.log('[' + arr3 + ']' + " : is sorted");
}
else{
    console.log('[' + arr3 + ']' + " : NOt sorted");

}
