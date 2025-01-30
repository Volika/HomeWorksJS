"use strict"
// З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

const productPrice1 = parseFloat(prompt('Введіть вартість товару #1', '0'));
const productAmt1 = parseFloat(prompt('Введіть кількість товару #1', '0'));
const productPrice2 = parseFloat(prompt('Введіть вартість товару #2', '0'));
const productAmt2 = parseFloat(prompt('Введіть кількість товару #2', '0'));
const productPrice3 = parseFloat(prompt('Введіть вартість товару #3', '0'));
const productAmt3 = parseFloat(prompt('Введіть кількість товару #3', '0'));

const productSum1 = productPrice1 * productAmt1;
const productSum2 = productPrice2 * productAmt2;
const productSum3 = productPrice3 * productAmt3;

const totalAllSum = productSum1 + productSum2 + productSum3;

document.write(`<h2>ЧЕК</h2>
   <table>
		<tr>
			<th>Товар,  <br> к-ть x вартість одиниці</th>
			<th>Вартість товару</th>
		</tr>
		<tr>
			<td> Товар 1, <br> ${productAmt1.toFixed(2)}  х  ${productPrice1.toFixed(2)} грн.     </td>
			<td>${productSum1.toFixed(2)}</td>
		</tr>
      <tr>
			<td> Товар 2, <br> ${productAmt2.toFixed(2)}  х  ${productPrice2.toFixed(2)} грн.     </td>
			<td>${productSum2.toFixed(2)}</td>
		</tr>
      <tr>
			<td> Товар 3, <br> ${productAmt1.toFixed(2)}  х  ${productPrice3.toFixed(2)} грн.     </td>
			<td>${productSum3.toFixed(2)}</td>
		</tr>
      <tr>
			<td> Загальна вартість <br> товару (грн.)     </td>
			<td>${totalAllSum.toFixed(2)}</td>
		</tr>1
	</table> <br> <br>
   `)

   // Загальна вартість товару становить ${totalAllSum.toFixed(2)} грн.
// document.write(`Вартість одиниці товару: ${productPrice.toFixed(2) } <br>
// 					кількість товару: ${productNumber.toFixed(2) } <br> <br>
//                Pезультат розрахунків: <br> <br>
// 					Загальна вартість товару становить ${priceAll.toFixed(2)} грн. <br>
// 					ПДВ  ${persenTax}% від загальної вартості становить ${productsAllTax.toFixed(2)} грн.`
// 					);
