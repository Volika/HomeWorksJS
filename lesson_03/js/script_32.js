"use strict"
/*
З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.
*/


const productPrice = parseFloat(prompt('Введіть вартість товару', '2'))
const userMoney = parseFloat(prompt('Введіть кількість грошей', '20'))

const loteryPrice = 4

const loteryValue = Math.floor((userMoney - productPrice ) / loteryPrice)


if (isNaN(productPrice) || isNaN(userMoney)) 
   document.write(`Рішення відсутнє`)
else if (userMoney < productPrice)
   document.write(`Вартість товару складає ${productPrice} грн. <br>  У Вас є лише ${userMoney} грн.  <br>  На жаль, для покупки недостатньо коштів. У покупці відмовлено. `)
else if (userMoney - productPrice >= loteryPrice)
   document.write(`Дякуємо за покупку. Пропонуємо купити лотерею за 4 грн. Ви можете придбати ${loteryValue} шт.`)
else 
   document.write(`Дякуємо за покупку. Наступного разу беріть більше грошей і зможете прибати у нас лотереї по 4 грн. за штуку`)
