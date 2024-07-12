let score = 0

let answer1 = prompt("Сколько будет 2 + 3? \n a) 4 \n b) 5 \n c) 6")
if (answer1 === "b" || answer1 === "5") {
    score += 2
}

let answer2 = prompt("Сколько будет 5 - 2? \n a) 2 \n b) 3 \n c) 4")
if (answer2 === "b" || answer2 === "3") {
    score += 2
}

let answer3 = prompt("Сколько будет 3 * 4? \n a) 9 \n b) 10 \n c) 12")
if (answer3 === "c" || answer3 === "12") {
    score += 2
}


alert(`Вы набрали " ${score} " баллов.`)
