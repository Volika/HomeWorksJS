"use strict"

/* -1 Вивести на екран номери місяців весни і літа (від 3 до 8)
*/

if (confirm('Почати тестування?')) {

   for (let i = 3; i <= 8; i++) {
      if (i < 6)
         document.write(` # ${i} - весняний місяць<br>`)
      else document.write(` # ${i} - літній місяць<br>`)
   }

}



