"use strict"

/* 13 
Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель. 
*/

if (confirm('Почати тестування?')) {

   let colNumbers = parseInt(prompt(`Введіть кількість колонок в таблиці`, 2))
	let rowNumbers = parseInt(prompt(`Введіть кількість рядків в таблиці`, 2))
	let userShots = parseInt(prompt(`Введіть кількість пострілів`, 2))
	let shipCol = 1 + Math.floor(Math.random() * colNumbers)
	let shipRow = 1 + Math.floor(Math.random() * rowNumbers)
   let shipDestruction = false
   let index=0
   
	for (let i = 1; i <= userShots; i++) {
      
		let userColNumber = parseInt(prompt(`Спроба ${i}.\n Введіть номер колонки для пострілу від 1 до ${colNumbers}`, 1))
		let userRowNumber = parseInt(prompt(`Спроба ${i}.\n Введіть рядка для пострілу від 1 до ${rowNumbers}`, 1))

		if (userColNumber === shipCol && userRowNumber === shipRow) {
         shipDestruction = true
         index = i
			break
      }

   }
   
   if (shipDestruction) {
		document.write(`<p class="tab-507">Корабель знищено з ${index} спроби!</p><br>`);
	} else {
		document.write(`<p class="tab-507">На жаль, корабель НЕ знищено!</p> <br><br>`);
	}

   document.write(`
      <p>Поле розміром: рядків - ${rowNumbers}, колонок - ${colNumbers}</p><br>
      <p>Координати корабля: ${shipRow} рядок, ${shipCol} колонка</p>
      `)

}

