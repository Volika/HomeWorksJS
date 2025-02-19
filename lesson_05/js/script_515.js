"use strict"

/* 15 
Користувача поступово вводить показники температури протягом року. Знайти середню температуру.
*/

if (confirm('Почати тестування?')) {

   let dayTemperature
   let dayCounter = 0
   let totalTemperature = 0

   do {
      dayTemperature = parseInt(prompt(`Введіть  ${dayCounter + 1}-й показник температури`))
      if (isFinite(dayTemperature)) {
         dayCounter++
         totalTemperature += dayTemperature
         document.write(`<p> ${dayCounter}-й показник температури    ${dayTemperature}&#8451;</p><br>`)
      }
   } while (isFinite(dayTemperature))

   const mediumTemperature = (totalTemperature / dayCounter).toFixed(1)

   document.write(`<br><p class="tab-507">Було введено ${dayCounter} показників температури</p><br>
      <p class="tab-507"> Cередня температура за поточний рік склала ${mediumTemperature}&#8451;</p>
      `)

}

