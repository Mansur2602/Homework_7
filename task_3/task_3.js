let year = prompt("Введите год:")
let isLeapYear = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)

let result = isLeapYear ? "Год високосный" : "Год не високосный"
alert(result)