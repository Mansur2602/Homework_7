let purchaseAmount = prompt("Введите сумму покупки:")

let discount = 0

if (purchaseAmount >= 200 && purchaseAmount < 300) {
    discount = 0.03
} else if (purchaseAmount >= 300 && purchaseAmount < 500) {
    discount = 0.05
} else if (purchaseAmount >= 500) {
    discount = 0.07
}

let totalAmount = purchaseAmount - (purchaseAmount * discount)

alert(`Сумма к оплате со скидкой: ${totalAmount}`)

