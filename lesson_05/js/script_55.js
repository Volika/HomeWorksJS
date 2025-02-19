"use strict"

/* 2 Створити 10 елементів для введення цін продуктів
*/

if (confirm('Почати тестування?')) {

	for (let i = 1; i <= 10; i++)
		document.write(`
			<div class="tab-55">
				<label for="product-${i}">Product # ${i}</label>
				<input type="number" id="product-${i}">
			</div>
		`)

}



