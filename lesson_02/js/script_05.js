"use strict"
// Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин

const dataInput = parseInt(prompt('Введіть кількість секунд, що пройшла від початку доби: ', '3600'));

const secondInHour = 3600;
const secondInMinute = 60;

const dataInputHours = Math.floor(dataInput / secondInHour);
const dataInputMinutes = Math.floor(dataInput % secondInHour / secondInMinute);
// const dataInputMinutes = Math.floor((dataInput - (dataInputHours * secondInHour)) / secondInMinute);
const dataInputSecond = Math.floor(dataInput % secondInHour % secondInMinute);

// const lenThousand = dataInput / 1000;

document.write(`Введено кількість секунд, що пройшла від початку доби : ${dataInput} <br> <br>
               Це становить ${dataInputHours} год. : ${dataInputMinutes} хв. :  ${dataInputSecond} сек `
					);


