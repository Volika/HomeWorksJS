"use strict"
if (confirm('Почати тестування?')) {

/* 06                   
   Інвестор вклав   тис. грн на 20 років під 20% річних, податок складає 5% від суми прибутку. 
   Визначити за допомогою циклів суму, яку він одержить. 

*/
// Функція отримує початкову суму від користувача
function getInitialAmount() {
   return parseFloat(prompt("Введіть суму інвестиції (в тис. грн):"))
}

// Функція отримує кількість років від користувача
function getYears() {

   return parseInt(prompt("Введіть кількість років (не менше 1):", "20"))
   
}

// Функція отримує річний відсоток від користувача
function getInterestRate() {

   return parseFloat(prompt("Введіть річний відсоток (у %):", "20")) / 100 // Перетворюємо у десятковий формат
   
}

// Функція отримує податок на прибуток від користувача
function getTaxRate() {

   return parseFloat(prompt("Введіть податок на прибуток (у %):", "5")) / 100 // Перетворюємо у десятковий формат

}

// Функція обчислює  суму з урахуванням відсотків та податку
function calculateYearAmount(initialAmount, interestRate , taxRate) {

   return initialAmount * interestRate * (1 - taxRate)
}

// Функція обчислює кінцеву суму з урахуванням відсотків та податку
function calculateFinalAmount(initialAmount = 0, years = 20, interestRate = 0.20, taxRate = 0.05) {

   document.write(`Сума ${initialAmount}  тис. грн, на ${years} років під ${interestRate*100} відсотків і податок ${taxRate} <br><br>`)
   
   let totalAmount = initialAmount

   for (let i = 1; i <= years; i++) {
      totalAmount += calculateYearAmount(totalAmount, interestRate , taxRate)
      // document.write(`${i}-й рік -  Сума ${totalAmount.toFixed(2)}  <br>`)
  
   }
   return totalAmount
}

// Функція виводить результат
function displayResult(finalAmount) {
   document.write(`Сума через ${years} років складе ${finalAmount.toFixed(2)} тис. грн (разом з внеском)<br>`)
}


   let initialAmount = getInitialAmount()
   let years = getYears()
   let interestRate = getInterestRate()
   let taxRate = getTaxRate()

   let finalAmount = calculateFinalAmount(initialAmount, years, interestRate, taxRate)

   displayResult(finalAmount)


}
