let number = prompt("Введите трехзначное число:")
if(number.length !== 3) {
alert("Вы ввели не трехзначное число")
}
 else {
if(number[0] === number[1] || number[1] === number[2] || number[0] === number[2]) {
alert("В числе есть одинаковые цифры")
} 
else {
alert("В числе нет одинаковых цифр")
}
}