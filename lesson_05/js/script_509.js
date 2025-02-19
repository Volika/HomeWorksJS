"use strict"

/* 09 Користувач загадує число. Комп’ютер задає питання поки не вгадає число користувача  (використати confirm).
*/

if (confirm('Почати тестування?')) {

   let number = confirm(`Загадайте число від 1 до 100`)
   let i = 0
   let userNumber = `Компютер не вгадав`
	let userAnswer = false
   let randomNum = 0
	if (number === true) {
		do  {
			randomNum = 1 + Math.floor(Math.random() * 100)
			userAnswer = confirm(`Ваше число ${randomNum}?`)
         i++
			if (userAnswer === true) {
            userNumber = `Компютер вгадав задумане число з ${i} спроби! - ${randomNum}`
            break
         }
		} while (userAnswer === false)
	
      document.write(` ${userNumber}`)
   }
}



