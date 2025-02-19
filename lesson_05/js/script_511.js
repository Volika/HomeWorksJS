"use strict"

/* 11 Знайти суму 5 непарних чисел, що знаходяться між заданими користувачем числами. 
*/

if (confirm('Почати тестування?')) {

	let minNumber = parseInt(prompt(`Введіть мінімальне число`, 5))
	let maxNumber = parseInt(prompt(`Введіть максимальне число`, 25))
   document.write(`min:  ${minNumber}<br>`)
   document.write(`max:  ${maxNumber}<br><br>`)

	let sumAll = 0
   let number0 = minNumber
   if (number0 > maxNumber) {
      minNumber = maxNumber
      maxNumber = number0
   }

	if (minNumber % 2 === 0) {
		minNumber++
	}
   let i = 0

	while ( (minNumber <= maxNumber) && (i < 5)) {
		document.write(`${minNumber}<br>`)
		sumAll +=minNumber
      minNumber += 2
      ++i
	} 
	document.write(`Сума всіх непарних чисел:  ${sumAll}`)
}



