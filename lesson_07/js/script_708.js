"use strict"
if (confirm('Почати тестування?')) {

/* 08
   Створити функцію, яка виводить банер, у функцію передаються: зображення, заголовок та посилання, куди переходимо при кліку на зображення, тег <span class="span-color">img</span> повине знаходитись у середині тега <span class="span-color">a</span>
*/

// Функція створює банер із зображенням, заголовком і посиланням
function createBanner(image, title, link) {
   document.write(`
      <div>
         <h2 class="span-color">${title}</h2>
         <a href="${link}" target="_blank">
            <img class="img-512" src="${image}" alt="${title}">
         </a>
      </div>
   `)
}

// Виклик функції з переданими параметрами
     createBanner(   
   `../img/kozak-00.webp`, 
   `KozakyTV`, 
   `https://www.youtube.com/@KozakyTV/videos`
)


}