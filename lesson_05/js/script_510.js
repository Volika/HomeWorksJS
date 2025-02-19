"use strict"

/* 10 Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами. 
*/

if (confirm('Почати тестування?')) {

	let minNumber = parseInt(prompt(`Введіть мінімальне число`, 5))
	let maxNumber = parseInt(prompt(`Введіть максимальне число`, 25))
	let sumAll = 0
   let number0 = minNumber
   if (number0 > maxNumber) {
      minNumber = maxNumber
      maxNumber = number0
   }
	if (minNumber % 2 === 0) {
		minNumber++
	}
	for (let i = minNumber; i <= maxNumber; i+= 2) {
		document.write(`${i}<br>`)
		sumAll +=i
	}
	document.write(`Сума всіх непарних чисел - ${sumAll}`)
}



