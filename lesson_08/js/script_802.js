"use strict"
if (confirm('Почати тестування?')) {

/* 01 
   Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).
*/

// Функція отримує кількість предметів від користувача
function getSubjectCount() {
   return parseInt(prompt(`Введіть кількість предметів:`, `5`)) || 1
}

// Функція генерує випадкові оцінки (від 2 до 5)
function generateGrades(count) {
   let grades = []
   for (let i = 0; i < count; i++) {

      //  grades.push(2 + Math.floor(Math.random() * 4))

      let value = parseInt(prompt(`Введіть оцінку з ${i+1} предмету:`, `5`)) || 2
      grades.push(value)
   }
   return grades
}

// Функція обчислює середній бал
function getAverage(grades) {
   let sum = 0
   for (let i = 0; i < grades.length; i++) {
      sum += grades[i]
   }
   return sum / grades.length
}

// Функція визначає категорію учня
function getCategory(grades) {
   for (let i = 0; i < grades.length; i++) {
      if (grades[i] === 2) return "Двійочник"
   }
   for (let i = 0; i < grades.length; i++) {
      if (grades[i] === 3) return "Трійочник"
   }
   for (let i = 0; i < grades.length; i++) {
      if (grades[i] < 4) return "Хорошист"
   }
   return "Відмінник"
}

// Отримуємо кількість предметів
let subjectCount = getSubjectCount()

// Генеруємо оцінки
let grades = generateGrades(subjectCount)

// Обчислюємо середній бал
// let average = getAverage(grades)

// Визначаємо категорію учня
// let category = getCategory(grades)

// Виводимо результати
document.write(`Кількість предметів: ${subjectCount}<br>`)
document.write(`Оцінки:  <br>`)

for (let i = 0; i < grades.length; i++) {
   document.write(` ${grades[i]}, `)
}
document.write(`<br>`)
document.write(`Середній бал: ${getAverage(grades).toFixed(2)}<br>`)
document.write(`Категорія: ${getCategory(grades)}<br>`)


}