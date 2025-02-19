"use strict"

/* 07 Вивести на екран N абзаців (N вводиться користувачем) .
*/

if (confirm('Почати тестування?')) {

	const paragraphs = parseInt(prompt('Введіть кількість абзаців', 5))

   if (paragraphs > 0) {

      for (let i = 1; i <= paragraphs; i++) {
         document.write(`<h1 class="tab-507">Заголовок ${i}</h1>`)
         for (let j = 1; j <= i; j++) {
            document.write(`<p>Розділ ${i}, параграф ${j}</p>`)
         }
         document.write(`<hr> <br>`)
      }

   }
   else document.write(`упс..`)

}



