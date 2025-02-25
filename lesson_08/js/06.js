// Функція отримує кількість товарів від користувача
function getProductCount() {
   return parseInt(prompt("Введіть кількість товарів:", "5")) || 1
}

// Функція отримує назви товарів від користувача
function getProductNames(count) {
   let products = []
   for (let i = 0; i < count; i++) {
       let name = prompt(`Введіть назву товару №${i + 1}:`, `Товар${i + 1}`)
       products.push(name.trim())
   }
   return products
}

// Функція генерує випадкові ціни для товарів (від 50 до 5000 грн)
function generateProductPrices(count) {
   let prices = []
   for (let i = 0; i < count; i++) {
       prices.push(Math.floor(Math.random() * 4951) + 50) // Випадкове число від 50 до 5000
   }
   return prices
}

// Функція отримує бюджет користувача
function getUserBudget() {
   return parseFloat(prompt("Введіть ваш бюджет:", "500")) || 0
}

// Функція знаходить доступні товари
function getAffordableProducts(products, prices, budget) {
   let affordable = ""
   for (let i = 0; i < products.length; i++) {
       if (prices[i] <= budget) {
           if (affordable !== "") affordable += ", "
           affordable += products[i] + ` (${prices[i]} грн)`
       }
   }
   return affordable || "Немає доступних товарів"
}

// Отримуємо дані від користувача
let productCount = getProductCount()
let productNames = getProductNames(productCount)
let productPrices = generateProductPrices(productCount)
let userBudget = getUserBudget()

// Знаходимо доступні товари
let affordableProducts = getAffordableProducts(productNames, productPrices, userBudget)

// Виводимо результати
document.write(`Назви товарів: ${productNames.join(", ")}<br>`)
document.write(`Ціни товарів: ${productPrices.join(", ")} грн<br>`)
document.write(`Ваш бюджет: ${userBudget} грн<br>`)
document.write(`Ви можете собі дозволити: ${affordableProducts}<br>`)
