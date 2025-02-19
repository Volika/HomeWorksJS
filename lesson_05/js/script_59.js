"use strict"

/* 06 Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком
*/

if (confirm('Почати тестування?')) {
   let number = 0

   for (let tableNum = 0; tableNum < 3; tableNum++) {
      document.write(`<table class="tab-59 tab-56">`)

	for (let row = 1; row <= 3; row++) {

		document.write(`<tr>`)

		for (let col = 1; col <= 3; col++) {
			document.write(`<td class="td-56">${++number}</td>`)
		}
		
		document.write(`</tr>`)
	}

	document.write(`</table>`)
   }
   


}



