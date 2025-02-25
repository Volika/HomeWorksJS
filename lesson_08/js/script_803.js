"use strict"
if (confirm('Почати тестування?')) {

/* 3 
      Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».
*/
// Функція отримує кількість учнів від користувача
function getStudentCount() {
   return parseInt(prompt("Введіть кількість учнів:", "5")) || 1
}

// Функція отримує масив імен від користувача
function getNames(count) {
   let names = []
   for (let i = 0; i < count; i++) {
      let name = prompt(`Введіть ім'я учня №${i + 1}:`, "Іван")
       names.push(name) // Додаємо ім'я у масив
   }
   return names
}

// Функція підраховує кількість імен "Іван"
function countIvan(names) {
   let count = 0
   for (let i = 0; i < names.length; i++) {
      if (names[i].toUpperCase() === "ІВАН") {
         count++
      }
   }
   return count
}

// Отримуємо кількість учнів
let studentCount = getStudentCount()

// Отримуємо імена від користувача
let namesStudent = getNames(studentCount)

// Підраховуємо, скільки разів зустрічається ім’я "Іван"
let ivanCount = countIvan(namesStudent)

// Виводимо результати
document.write(`Імена ${studentCount} учнів:  <br>`)
document.write(` <hr>  `)
for (let i = 0; i < studentCount; i++) {
   document.write(` ${i+1} : ${namesStudent[i]}, <br>`)
}
document.write(` <hr> <br> `)
document.write(`Кількість разів, коли зустрічається ім'я "Іван": ${ivanCount}<br>`)





}