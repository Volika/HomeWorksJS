"use strict"

/* 04 Вивести таблицю з 3 рядків і 7 стовпців
*/

if (confirm('Почати тестування?')) {

   document.write(`<table class="tab-56">`)

	for (let row = 1; row <= 3; row++) {

		document.write(`<tr>`)

		for (let col = 1; col <= 7; col++) {
			document.write(`<td class="td-56">${col}</td>`)
		}
		
		document.write(`</tr>`)
	}

	document.write(`</table>`)


}



