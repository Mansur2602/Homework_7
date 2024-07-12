let circumferenceLength = prompt("Введите длину окружности:")
let squarePerimeter = prompt("Введите периметр квадрата:")

let pi = 3.14159; 
let circleDiameter = circumferenceLength / pi
if (circleDiameter <= squarePerimeter / 4) {
    alert("Окружность может поместиться в указанный квадрат.")
} 
else {
    alert("Окружность не поместится в указанный квадрат.")
}
