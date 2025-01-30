"use strict"

/* З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова
*/

const childFirstName = prompt(`Введіть ім'я першої дитини`)
const childFirstChok = parseInt(prompt(`Введіть кількість цукерок, що є у першої дитини`, `1`))

const childSecondName = prompt(`Введіть ім'я другої дитини`)
const childSecondChok = parseInt(prompt(`Введіть кількість цукерок, що є у другої дитини`, `1`))


document.write(` 
	<table>
		<tr>
			<th>Ім'я <br> дитини</th>
			<th>кількість <br> цукерок</th>
		</tr>
      <tr>
			<td>  </td>
			<td>  </td>
		</tr>
		<tr>
			<td>${childFirstName}</td>
			<td>${childFirstChok}</td>
		</tr>
      <tr>
			<td>${childSecondName}</td>
			<td>${childSecondChok}</td>
		</tr>
	</table> <br> <br>`
					)

               if (isNaN(childFirstChok) || isNaN(childSecondChok)) 
                  document.write(`Рішення відсутнє`)
               else if (childFirstChok > childSecondChok)
                  document.write(`У ${childFirstName} цукерок більше на ${childFirstChok - childSecondChok} шт.`)
               else if (childFirstChok === childSecondChok)
                  document.write(`У дітей однакова кількість цукерок`)
               else
                  document.write(`У ${ childSecondName } цукерок більше на ${ childSecondChok - childFirstChok} шт.`)

