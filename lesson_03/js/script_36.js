"use strict"
// 6.	З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

const dataInput = parseInt(prompt(`Введіть номер дня тижня:1-7`, `1`));

let dayText1 = `Якщо Ваш тиждень починається з понеділка, то цей номер відповідає дню - `;
let dayText2 = `Якщо ж Ваш тиждень починається з неділі, тоді цей номер відповідає дню - `;
let dayName1 = [`понеділок`, `вівторок`, `середа`, `четвер`, `п\'ятниця`, `субота`, `неділя`]
let dayName2 = [`неділя`, `понеділок`, `вівторок`, `середа`, `четвер`, `п\'ятниця`, `субота`]

if (isNaN(dataInput) || dataInput < 1 || dataInput > 7)
   document.write(`Введено некорректні дані. Потрібно ввести число від 1 до 7`);
else 
   document.write(`Введене число - ${dataInput} <br> <br>  ${dayText1} ${dayName1[dataInput-1]} <br> <br> ${dayText2} ${dayName2[dataInput-1]} `) 