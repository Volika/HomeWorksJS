"use strict"
if (confirm('Почати тестування?')) {

/* 04
   Дано послідовність оцінок учня. Підрахувати кількість :<br>
   ●	двійок;<br>
   ●	кількість хороших оцінок (добре, відмінно);<br>
   ●	кількість оцінок, які нижче середнього.

*/
// Функція отримує кількість оцінок від користувача
function getGradeCount() {
   return parseInt(prompt("Введіть кількість оцінок:", "5")) || 1
}

// Функція отримує масив оцінок від користувача
function getGrades(count) {
   let grades = []
   for (let i = 0; i < count; i++) {
      let grade = parseInt(prompt(`Введіть оцінку №${i + 1}:`, "4")) || 0
      grades.push(grade)
   }
   return grades
}

// Функція підраховує кількість двійок
function countTwos(grades) {
   let count = 0
   for (let i = 0; i < grades.length; i++) {
      if (grades[i] === 2) {
         count++
      }
   }
   return count
}

// Функція підраховує кількість хороших оцінок (4 або 5)
function countGoodGrades(grades) {
   let count = 0
   for (let i = 0; i < grades.length; i++) {
      if (grades[i] >= 4) {
         count++
      }
   }
   return count
}

// Функція знаходить середню оцінку
function getAverage(grades) {
   let sum = 0
   for (let i = 0; i < grades.length; i++) {
      sum += grades[i]
   }
   return sum / grades.length
}

// Функція підраховує оцінки, які нижче середнього
function countBelowAverage(grades, average) {
   let count = 0
   for (let i = 0; i < grades.length; i++) {
      if (grades[i] < average) {
         count++
      }
   }
   return count
}

// Отримуємо кількість оцінок
let gradeCount = getGradeCount()

// Отримуємо оцінки від користувача
let grades = getGrades(gradeCount)

// Обчислюємо середній бал
let average = getAverage(grades)

// Підраховуємо необхідні категорії
let twos = countTwos(grades)
let goodGrades = countGoodGrades(grades)
let belowAverage = countBelowAverage(grades, average)

// Виводимо результати
document.write(`Кількість оцінкиок учня: ${gradeCount}<br><br>`)
document.write(`Оцінки учня: `)
for (let i = 0; i < gradeCount; i++) {
   document.write(`${grades[i]}, `)
}
document.write(` <hr> <br> `)

document.write(`Кількість двійок: ${twos}<br>`)
document.write(`Кількість хороших оцінок (4 або 5): ${goodGrades}<br>`)
document.write(`Кількість оцінок нижче середнього (${average.toFixed(2)}): ${belowAverage}<br>`)

// Виводимо результати



}