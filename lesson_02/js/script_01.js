"use strict"

/* 
a - перше число
b - друге число


S1 = a + b
s2 = a * b
s3 = a / b

*/

const a = parseFloat(prompt('Введіть перше число', '1'));
const b = parseFloat(prompt('Введіть друге число', '1'));

const s1 = a + b;
const s2 = a * b;
const s3 = a / b;

console.log(`S<sub>1</sub> = ${s1.toFixed(2)} \n
					S<sub>2</sub> = ${s2.toFixed(2) } \n
					S<sub>3</sub> = ${s3.toFixed(2) } `)

document.write(`a = ${a.toFixed(2) } <br>
					 b = ${b.toFixed(2) } <br> <br>
	<table>
		<tr>
			<th>Сума</th>
			<th>Добуток</th>
			<th>Частка</th>
		</tr>
		<tr>
			<td>${s1}</td>
			<td>${s2}</td>
			<td>${s3}</td>
		</tr>
	</table> `
					)

