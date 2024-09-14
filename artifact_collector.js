function processData(input) {
    //Enter your code here
    let art = input.split(' ').map(Number);
    let uni = [];
    art.forEach(num =>{
        if(!uni.includes(num)){
            uni.push(num);
        }
    });
    uni.sort((a,b)=> a- b);
    console.log(uni.join(' '));
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
