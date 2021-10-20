let array = [4, 3, "ее", 5, 4, 390, 5, "frf", 0 , null];
function countOddEven(array) {
let odd = 0;
let even = 0;
let fall = 0;
let nell = 0;
for (let i=0; i < array.length; i++)
  if ( array[i]===0 || array[i]===null) {nell++}  
   else if (array[i] % 2 === 0) {even++}
    else if (array[i] % 2 === 1) {odd++}
else fall++
console.log(`${even} - четных, ${odd} - нечетных, 
${fall} - ошибок, ${nell} - Количество нулей`)
}
countOddEven(array);
