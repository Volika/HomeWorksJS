"use strict"
if (confirm('Почати тестування?')) {

/* 07
Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію);

*/

  // Вводимо початкові шляхи всіх зображень
   const img01 = `../img/kozak-01.webp`
   const img02 = `../img/kozak-02.webp`
   const img03 = `../img/kozak-03.png`
   const img04 = `../img/kozak-04.webp`

   document.write(`Можливі зображення:<br>`)
   document.write(` <img class="img-512-0" src="${img01}">`)
   document.write(` <img class="img-512-0" src="${img02}">`)
   document.write(` <img class="img-512-0" src="${img03}">`)
   document.write(` <img class="img-512-0" src="${img04}"><br><br>`)

// Функція вибирає випадкове зображення 
function showRandomImage(image1, image2, image3, image4) {

   let randomIndex =  1 + Math.floor(Math.random() * 4) // Випадковий індекс (0-3)

   switch (randomIndex) {
      case 1:
         return image1;
         break;
      case 2:
         return image2;
         break;
      case 3:
         return image3;
         break;
      case 4:
         return image4;
         break;
      }

}

   let randomImg=showRandomImage(img01, img02, img03, img04)

      // Виводимо випадково вибране зображення
      document.write(`Випадкове зображення:<br>`)
      document.write(`<img class="img-512" src="${randomImg}" alt="Випадкове зображення">`)

}