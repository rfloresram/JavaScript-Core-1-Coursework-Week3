// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

/* let multiplyNumbersBy100 = numbers.map(num => num * 100);*/

function multiplyNum (numb) {
    return numb * 100;
 }

 var multipledNum = numbers.map(multiplyNum);
 console.log(multipledNum);

 /* [ 10, 20, 30, 40, 50 ]*/