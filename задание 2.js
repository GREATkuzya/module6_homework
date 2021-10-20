function simpleOrNot(num) {
  if (num>1000 || num === 1 || num===0) {return "Данные неверны"} ;
  for (var i=2; i<num; i++) {if (num % i === 0) return "Число не простое"}
    return "Число простое"
}

console.log(simpleOrNot(+prompt("Введите число")))