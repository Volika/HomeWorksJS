"use strict"

// 3.	Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби..

const minNo = 1;
const maxNo = 5;

const variant = 2;

const randomNumber = Math.floor(Math.random() * (maxNo - minNo + 1)) + minNo

let value = parseInt(prompt(`У вас є 2 спроби, щоб вгадати число від 1 до 5. Введіть число`))

if (isNaN(value)) 
	document.write(`Ви ввели некоректні дані.`) 
else if (value === randomNumber)
   document.write(`Вітаємо з перемогою! Ви вгадали з першої спроби!`) 
else {
   value = parseInt(prompt(`У вас є 2-га спроба, введіть число від 1 до 5.`))
   if (isNaN(value)) 
      document.write(`Ви ввели некоректні дані.`) 
   else if (value === randomNumber)
      document.write(`Вітаємо з перемогою! Ви вгадали з другої спроби!`) 
   else 
   document.write(`На жаль Ви не вгадали,  число мало бути ${randomNumber}`) 
}

