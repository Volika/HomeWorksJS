"use strict"

/* 03 Вивести таблицю з одним рядком і  7 стовпцями
*/

if (confirm('Почати тестування?')) {

   document.write(`<table class="tab-56"><tr>`)
	for (let i = 1; i <= 7; i++) {
		document.write(`<td class="td-56">${i}</td>`)
	}
	document.write(`</tr></table>`)


}



