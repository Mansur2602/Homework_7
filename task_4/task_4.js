let num = prompt("Введите пятиразрядное число:")
if(num.length === 5){
    if(num[0] === num[4] && num[1] === num[3]){
        alert("Это палиндром!")
    }
     else {
        alert("Это не палиндром!")
    }
} 
else {
    alert("Вы ввели не пятиразрядное число.")
}