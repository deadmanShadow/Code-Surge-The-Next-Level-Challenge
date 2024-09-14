function processData(input) {
    //Enter your code here
    
    const [word,letter ]= input.split(' ');
    if(word[0]===letter){
        
        console.log("Yes");
    }else console.log("No");
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});