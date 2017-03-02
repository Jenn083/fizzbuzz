
var theNumStr = prompt('Please input a number');
var newNum;

if (isNaN(+theNumStr)){ // 'abc', '123a' //(+) removed strings('') abc, 123a
  newNum = parseInt(theNumStr); //'abc'==>abc, '123a'==>123
} else { //1.4, 50
  newNum = +theNumStr;//do we need? yes, just in case it's '78'
}

while(isNaN(newNum) || newNum%1 !== 0){// abc, 123a, 1.4 // while condition is true enter the loop
  theNumStr = prompt('Please input a number');
  if (isNaN(+theNumStr)){
    newNum = parseInt(theNumStr);
  } else { //1.4, 78
    newNum = +theNumStr;
  }
}

// do{
//   theNumStr = prompt('Please input a number');
//   if (isNaN(+theNumStr)){
//     newNum = parseInt(theNumStr);
//   } else { //1.4, 78
//     newNum = +theNumStr;
//   }
// }while(isNaN(newNum) || newNum%1 !== 0);


var game = function(num) {
  for(var i = 1; i <= num; i++){
    if(i % 3===0 && i % 5===0) {
      document.write('FizzBuzz' + '<br>');
    }
    else if(i % 5===0) {
      document.write('Buzz'+ '<br>');
    }
    else if(i % 3===0) {
      document.write('Fizz' + '<br>');
    }
    else {
      document.write(i + '<br>')
    }
  }
}

game(newNum);
