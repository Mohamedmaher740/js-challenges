//  JavaScript challenge - 1


let max_range = prompt("The range from 0 to >> ");
let even_numbers = "";
for(let i =0;i<=max_range;i++){
    if(i%2==0){
        even_numbers += i + "  ";
    }
}
console.log(even_numbers);