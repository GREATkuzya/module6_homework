function func1(x) {return function(y) {return x + y}}
console.log( func1(5)(2), func1(85)(55), func1(78)(2222) )