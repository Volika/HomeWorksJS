"use strict"
if (confirm('Почати тестування?')) {

/* 04
   Дано послідовність номерів автомобілів. Підрахувати кількість номерів, які :<br>
   ●	починаються на букву «А»;<br>
   ●	перша і остання літери співпадають;<br>
   ●	складаються з більше ніш 5 символів.

*/
lesson_08/exercise_805.html
// Виводимо результати

document.write(`Номери  ${carNumberCount} автомобілів:<br>`)
document.write(` <hr> `)
for (let i = 0; i < carNumberCount; i++) {
   document.write(` ${i+1} номер: ${carNumbers[i]}, <br> `)
}
document.write(` <hr> <br> `)
document.write(`Кількість номерів, які починаються на "А": ${startsWithA}<br>`)
document.write(`Кількість номерів, де перша і остання буква співпадають: ${sameFirstLast}<br>`)
document.write(`Кількість номерів, які мають більше ніж 5 символів: ${moreThanFiveChars}<br>`)



}