//part1

function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(5, 7));

//part2
const multiplyNumbers = function(a, b) {
    return a * b;
};

console.log(multiplyNumbers(3, 4));

//part3
function sumWithVar(a, b) {
    var result;
    console.log(result);
    result = a + b;
    console.log(result);
    return result;
}

console.log(sumWithVar(2, 3));

//part4
{
    let x = 5;
    var y = 10;
    const z = 15;

    console.log(x, y, z);
}

console.log(y);
console.log(z);
//part5
// console.log(tempVar);
let tempVar = "This is a temporary variable";
console.log(tempVar);
