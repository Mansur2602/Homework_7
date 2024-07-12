let day = parseInt(prompt("Введите день (число от 1 до 31):"))
let month = parseInt(prompt("Введите месяц (число от 1 до 12):"))
let year = parseInt(prompt("Введите год:"))

let nextDay, nextMonth, nextYear

if (
  (month === 4 || month === 6 || month === 9 || month === 11) &&
  day === 30
) {
  nextDay = 1
  nextMonth = month + 1
} 
else if (month === 2) {
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    year % 400 === 0
  ) {
    if (day === 29) {
      nextDay = 1;
      nextMonth = month + 1
    } 
    else {
      nextDay = day + 1
      nextMonth = month
    }
  } 
  else {
    if (day === 28) {
      nextDay = 1
      nextMonth = month + 1
    } 
    else {
      nextDay = day + 1
      nextMonth = month
    }
  }
} 
else if (day === 31 && month === 12) {
  nextDay = 1
  nextMonth = 1
  nextYear = year + 1
} 
else if (day === 31) {
  nextDay = 1
  nextMonth = month + 1
} 
else {
  nextDay = day + 1
  nextMonth = month
}

if (!nextYear) {
  nextYear = year
}

alert(
  `Следующая дата: ${nextDay}.${nextMonth}.${nextYear}`
)
