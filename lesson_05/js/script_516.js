"use strict"

/* 16 
Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.
*/

if (confirm('Почати тестування?')) {

   let weekCounter = parseInt(prompt(`Введіть  кількість тижнів для розрахунку`, 1))
   let totalProfit = 0

   for (let i = 1; i <= weekCounter; i++) {
		
         let weekProfit = 0
   
         for (let j = 1; j <= 7; j++) {

            const dayProfit = parseInt(prompt(`Введіть прибуток магазину за ${j}-й день ${i}-го тижня`, 0))

            weekProfit += dayProfit
            document.write(`<p>Прибуток за ${j}-й день ${i}-го тижня складає    ${dayProfit} грн</p>`)
         }
   
         document.write(`<br><p>Прибуток за ${i}-й тиждень складає   ${weekProfit} грн</p> <br>`)
   
         totalProfit += weekProfit
   }   
      document.write(`<p class="tab-507">Загальний прибуток за ${weekCounter} тиж. складає   ${totalProfit} грн</p>`)

}

