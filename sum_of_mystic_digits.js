function processData(input) {
    //Enter your code here
    let n = parseInt(input);
    let sum = 0;
    while(n>0){
        sum +=n%10;
        n = Math.floor(n/10);
    }
    console.log(sum);
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
