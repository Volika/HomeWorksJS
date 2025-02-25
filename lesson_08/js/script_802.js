"use strict"
if (confirm('Почати тестування?')) {

/* 2 
      Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:<br>
   ●	номери днів, протягом яких кількість відвідувачів була меншою за 20;<br>
   ●	номери днів, коли кількість відвідувачів була мінімальною;<br>
   ●	номери днів, коли кількість відвідувачів була мінімальною;<br>
   ●	загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.
*/
// Функція генерує випадкову кількість відвідувачів для кожного дня тижня (від 5 до 50)
//  5 + Math.floor(Math.random() * (50 - 5 +1))
function generateVisitors() {
   let visitors = []
   for (let i = 0; i < 7; i++) {
       visitors.push(5 + Math.floor(Math.random() *46))
   }
   return visitors
}

// Функція знаходить номери днів, коли відвідувачів було менше за 20
function getLowVisitorDays(visitors) {
   let days = ""
   for (let i = 0; i < visitors.length; i++) {
      if (visitors[i] < 20) {
         if (days !== "") days += ", "
         days += (i + 1)
      }
   }
   return days || "Немає таких днів"
}

// Функція знаходить мінімум відвідувачів
function getMinVisitorValue(visitors) {
   let min = visitors[0]
   for (let i = 1; i < visitors.length; i++) {
      if (visitors[i] < min) {
         min = visitors[i]
      }
   }

}

// Функція знаходить номери днів, коли відвідувачів було мінімально
function getMinVisitorDays(visitors) {
   let days = ""
   let min = getMinVisitorValue(visitors)
 
   for (let i = 0; i < visitors.length; i++) {
      if (visitors[i] === min) {
         if (days !== "") days += ", "
         days += (i + 1)
      }
   }
   return days
}

// Функція підраховує кількість відвідувачів у робочі дні (1-5)
function getWorkdaysTotal(visitors) {
   let workdaysTotal = 0
   for (let i = 0; i < 5; i++) {
      workdaysTotal += visitors[i]
   }
   return workdaysTotal
}

// Функція підраховує кількість відвідувачів у вихідні (6-7)
function getWeekendsTotal(visitors) {
   let weekendsTotal = 0
   for (let i = 5; i < 7; i++) {
      weekendsTotal += visitors[i]
   }
   return weekendsTotal
}

// Генеруємо масив відвідувачів магазину на тиждень
let visitors = generateVisitors()

// Отримуємо результати обчислень
let lowVisitorDays = getLowVisitorDays(visitors)
let minVisitorDays = getMinVisitorDays(visitors)
let workdaysTotal = getWorkdaysTotal(visitors)
let weekendsTotal = getWeekendsTotal(visitors)

// Виводимо результати
document.write(`Відвідувачі по днях тижня:  <br>`)
for (let i = 0; i < visitors.length; i++) {
   document.write(` ${i+1} день: ${visitors[i]}, <br>`)
}
document.write(` <hr> <br> `)
document.write(`Номери днів, коли відвідувачів було менше за 20: ${lowVisitorDays}<br>`)
document.write(`Номери днів з мінімальною кількістю відвідувачів: ${minVisitorDays}<br>`)
document.write(`Загальна кількість відвідувачів у робочі дні: ${workdaysTotal}<br>`)
document.write(`Загальна кількість відвідувачів у вихідні: ${weekendsTotal}<br>`)


}