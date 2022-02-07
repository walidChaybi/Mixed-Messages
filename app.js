function randomWord(){
    let randomNum = Math.floor(Math.random()*3);
    let word = ["walid","dilaw","chaybi"];
    return word[randomNum];
}
function randomText(){
    let randomNum = Math.floor(Math.random()*3);
    let text = ["you have beautiful smile","today is the day","shine bright like"];
    return text[randomNum];
}

function GenerateMessage(){
    return randomText() + ' ' + randomWord() ;
}

console.log(GenerateMessage())