//  JavaScript challenge - 5

let ur_input = prompt("enter your message : ");

function NumOfVowels(ur_input){
    let vowels = "aeiouy";
    let counter =0;
    for(let i=0;i < vowels.length; i++){
        let repeat = 0;
        for(let x=0; x < ur_input.length ; x++){
            if(vowels[i] == ur_input[x]){

                counter += 1;
                repeat +=1;
            }
        }
        console.log(`The character ${vowels[i]} repeat : ${repeat}`)
    }
    console.log(`The number of vowels in ur message >> ${counter}`);
}

let output = NumOfVowels(ur_input);