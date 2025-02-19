"use strict"

/* 05 Вивести таблицю з 3 рядків і 3 стовпців з числами від 1 до 9
*/

if (confirm('Почати тестування?')) {
   let number = 0


      document.write(`<table class="tab-56">`)

	for (let row = 1; row <= 3; row++) {

		document.write(`<tr>`)

		for (let col = 1; col <= 3; col++) {
			document.write(`<td class="td-56">${++number}</td>`)
		}
		
		document.write(`</tr>`)
	}

	document.write(`</table>`)
   
   


}



