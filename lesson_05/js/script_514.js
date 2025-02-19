"use strict"

/* 14 
Каса. Користувачу повідомляють суму, яку йому треба сплатити. Користувач поступово вводить суму грошей до тих пір, поки суми не буде достатньо для оплати товарів (кожного разу користувачу повідомляють, яку ще суму потрібно ввести). 
*/

if (confirm('Почати тестування?')) {


   let purchasePrice = 500 + Math.floor(Math.random() * (10000 - 500 +1))

   let paid=0
   let arrears = purchasePrice
	do {
      
		const userPaid = parseInt(prompt(`
         Загальна вартість кошика ${purchasePrice}.\n 
         Вам необхідно внести в касу ${arrears}.\n 
         Вкажіть суму, яку ви наразі вносите `))

		paid +=userPaid

		if (paid < purchasePrice) {
         arrears = purchasePrice - paid
      } else { if (paid > purchasePrice) {
         document.write(`
            <p class="tab-507">Ви внесли більше ніж потрібно. Отримайте надлишок ${paid - purchasePrice} грн</p><br>
            `)
      }
         break
      }

   } while ( paid < purchasePrice)
   
		document.write(`<br><p class="tab-507">Дякуємо, Ви розрахувались!</p>`);

}

