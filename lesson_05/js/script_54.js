"use strict"

/* 1 Вивести з використанням циклів маркований список з випадковими числами (1-100). 
                        Кількість випадкових чисел вводиться користувачем.
*/

if (confirm('Почати тестування?')) {

	const numbers = parseInt(prompt('Введіть кількість випадкових чисел', 5))
   if (numbers > 0) {
      document.write(`<ul>`)
      for (let i = 0; i < numbers; i++) {
         const randomNumber = 1 + Math.floor(Math.random()*100)
         document.write(`<li> > ${randomNumber}</li>`)
      }
      document.write(`</ul>`)
   }
   else document.write(`упс..`)


}



