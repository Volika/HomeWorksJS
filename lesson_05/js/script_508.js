"use strict"

/* 08 Користувач загадує число. За 3 спроби комп’ютер намагається вгадати число користувача (використати confirm).
*/

if (confirm('Почати тестування?')) {

   let number = confirm(`Загадайте число від 1 до 100`)
   let userNumber = `Компютер не вгадав`
	let userAnswer
   let randomNum = 0
	if (number === true) {
		for (let i = 0; i < 3; i++) {
			randomNum = 1 + Math.floor(Math.random() * 100)
			userAnswer = confirm(`Ваше число ${randomNum}?`)
			if (userAnswer === false) {
				continue
			} 
         else {
            userNumber = `Компютер вгадав задумане число ! - ${randomNum}`
            break
         }
		}
	
      document.write(` ${userNumber}`)
   }
}



