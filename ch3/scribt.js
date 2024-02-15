//  JavaScript challenge - 3


let final_message= "";
let your_input1 = prompt("enter your message : ");
let len = your_input1.length;
for(let i=0;i<len;i++){
    
    if(your_input1[i] != " "){

        final_message += your_input1[i] + "";
    }
}

console.log("The final message : " + final_message);