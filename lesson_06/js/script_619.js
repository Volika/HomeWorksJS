"use strict"
if (confirm('Почати тестування?')) {

/* 19                   
   Два двоцифрових числа, записаних послідовно одне за одним, утворюють чотирицифрове число, що ділиться на їх добуток. Знайти ці числа.
*/

// Функція перевіряє, чи чотирицифрове число ділиться на добуток чисел
function isValidPair(a, b) {
   let combinedNumber = a * 100 + b // Об'єднуємо числа у чотирицифрове
   let product = a * b // Знаходимо їх добуток

   return combinedNumber % product === 0 // Перевіряємо подільність
}

function findValidPairs() {
   for (let a = 10; a <= 99; a++) {
      for (let b = 10; b <= 99; b++) {
         if (isValidPair(a, b)) {
            document.write(`Числа: ${a} і ${b}<br>`)
         }
      }
   }
}

   document.write("Підходящі числа:<br>")
   findValidPairs()

}
