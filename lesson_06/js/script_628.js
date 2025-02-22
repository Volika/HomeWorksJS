"use strict"
if (confirm('Почати тестування?')) {

/* 28                   
Дано ціле число N (N > 0). Використовуючи операції ділення націло та остачі від ділення, визначити чи є цифра 2 у числі N. Якщо так, то вивести True, якщо ні – False.
*/

// Функція отримує число N від користувача
function getNumber() {

   return parseInt(prompt("Введіть ціле число N (N > 0):"))

}

// Функція перевіряє, чи є цифра 2 у числі
function hasDigitTwo(n) {
   while (n > 0) {
       if (n % 10 === 2) { 
         return true
      }
       n = Math.floor(n / 10)
   }
   return false
}

// Функція виводить результат
function displayResult(result) {
   document.write(result ? "True" : "False")
}


   let number = getNumber()
   let result = hasDigitTwo(number)
   displayResult(result)


}
