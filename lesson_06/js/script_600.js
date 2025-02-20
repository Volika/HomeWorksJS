"use strict"
if (confirm('Почати тестування?')) {
/* 00 Вивести на екран
A B C D E 
B C D E F 
C D E F G 
D E F G H 
E F G H I

*/

// Отримуємо літеру від користувача
function getUserInput() {
   let letter
   while (true) {
      letter = prompt("Введіть першу літеру (A-Z):").toUpperCase()
      if (letter >= "A" && letter <= "Z") {
         return letter
      }
      alert("Будь ласка, введіть літеру від A до Z")
   }
}

// Отримуємо кількість рядків і літер у рядку від користувача
function getLettersCount() {
   let count
   while (true) {
      count = prompt("Введіть кількість літер (1-10):", "5")
      count = parseInt(count)
      if (count >= 1 && count <= 7) {
         return count
      }
      alert("Будь ласка, введіть число від 1 до 7")
   }
}

// Функція виводить рядки букв, перезапускаючи алфавіт після Z
function printLetters(startLetter, rowCount) {
   let letterCode = startLetter.charCodeAt(0) // Отримуємо код першої літери

   for (let i = 0; i < rowCount; i++) {
      let row = ""

      for (let j = 0; j < rowCount; j++) {
           let currentCode = letterCode + i + j // Обчислюємо код літери

            if (currentCode > 90) { // Якщо код більше 'Z' (90), повертаємося до 'A'
                currentCode = 65 + (currentCode - 91) // Повертаємося на початок алфавіту
            }
         row += String.fromCharCode(currentCode) + " "
      }
       document.write(row + "<br>") // Виводимо рядок на екран
   }
}


   let firstLetter = getUserInput()
   let rowCount = getLettersCount()
   printLetters(firstLetter, rowCount)

}