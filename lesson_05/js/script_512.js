"use strict"

/* 12 
Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне з чотирьох зображень. Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). Використати цикли і switch (для вибору зображення за номером).. 
*/

if (confirm('Почати тестування?')) {

   let img01 = `../img/kozak-01.webp`
   let img02 = `../img/kozak-02.webp`
   let img03 = `../img/kozak-03.png`
   let img04 = `../img/kozak-04.webp`

   document.write(` <div>Tри зображення:</div> <br>`)
  
   document.write(` <img class="img-512-0" src="${img01}">   - виграш   100 грн.   `)
   document.write(` <img class="img-512-0" src="${img02}">   - виграш   200 грн.   `)
   document.write(` <img class="img-512-0" src="${img03}">   - виграш   500 грн.   `)
   document.write(` <img class="img-512-0" src="${img04}">   - виграш  1000 грн.   <br><br>`)

      let winResult = ""
      let winSum =0
	for (let i = 0 ; i < 3; i++) {
      let imgResult =``
      let imgRandom = 1 + Math.floor(Math.random() *4)
      winResult += String(imgRandom)
      switch (imgRandom) {
         case 1:
            imgResult = img01
            break;
         case 2:
            imgResult = img02
            break;
         case 3:
            imgResult = img03
            break;
         case 4:
            imgResult = img04
            break;
      }
      document.write(`<img class="img-512" src="${imgResult}"> `)

   }
   switch (winResult) {
      case `111`:
         winSum = 100
         break;
      case `222`:
         winSum = 200
         break; 
      case `333`:
         winSum = 500
         break; 
      case `444`:
         winSum = 1000    
   }

   document.write(`<br> <br> </br><h1 class="tab-507">Ваш виграш ${winSum} грн.</h1>`)

}

