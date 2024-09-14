function processData(input) {
    //Enter your code here
    const d = input.split('\n');
    const t1 = d[1].split(' ').map(Number);
    const t2 = d[3].split (' ').map(Number);
    let s1 =   new Set(t1);
    let s2 = new Set(t2);
    let cTime = [...s1].filter (time =>  s2.has(time));
    cTime.sort((a, b) => a - b);
    console.log(cTime.length > 0 ?  cTime.join(' ') : '');
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