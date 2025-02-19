"use strict"

/* 0 Вивести на екран 8 кнопок з написом “Hello”.
*/

if (confirm('Почати тестування?')) {

   for (let i = 0; i < 8; i++) {
      document.write(`<button class="block-content__button block-content__button--secondary">Hello!</button> <br><br> `)
   }

}



