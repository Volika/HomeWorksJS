"use strict"
if (confirm('Почати тестування?')) {

/* 06
   Дано послідовність цін товарів та назв (у окремих масивах).<br> 
   Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).                     

*/

// Функція повертає 10  назв продуктів
function generateProductNames() {
   return ["Хліб", "Молоко", "Сир", "Ковбаса", "Картопля", "Макарони", "Огірки", "Морква", "Цукор", "Чай"]
}

// Функція генерує випадкові ціни для продуктів (від 10 до 700 грн)
// 10 +  (Math.floor(Math.random() * (700 - 10 +1))  
function generateProductPrices(count) {
   let prices = []
   for (let i = 0; i < count; i++) {
       prices.push(10 + Math.floor(Math.random() * 691)) 
   }
   return prices
}

// Функція отримує бюджет користувача
function getUserBudget() {
   return parseFloat(prompt("Введіть ваш бюджет:", "500")) || 0
}

// Функція повертає масив "так" або "ні" для кожного товару
function getAffordableProducts(prices, budget) {
   let affordable = []
   for (let i = 0; i < prices.length; i++) {
      affordable.push(prices[i] <= budget ? true : false)
   }
   return affordable
}

// Генеруємо продукти та ціни
let productNames = generateProductNames()
let productPrices = generateProductPrices(productNames.length)

// Отримуємо бюджет користувача
let userBudget = getUserBudget()

// Отримуємо масив "так" або "ні" для кожного товару
let affordableProducts = getAffordableProducts(productPrices, userBudget)

// Виводимо результати

document.write(`Список продуктів:<br> <hr>`)
for (let i = 0; i < productNames.length; i++) {
   document.write(`${productNames[i]} - ${productPrices[i]} грн<br>`)
}
document.write(`<br> <hr> `)
document.write(`Ваш бюджет: ${userBudget} грн<br> <hr> `)

// Виводимо лише ті продукти, які доступні ("так")
document.write(`<br>Ви можете собі дозволити:<br> <hr>`)
let found = false
for (let i = 0; i < affordableProducts.length; i++) {
   if (affordableProducts[i] ) {
      document.write(`${productNames[i]} - ${productPrices[i]} грн<br>`)
      found = true
   }
}
if (!found) document.write("Немає доступних продуктів")

}