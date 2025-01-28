"use strict"
// Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).
// function getRandomInt(min, max) {
//    min = Math.ceil(min);
//    max = Math.floor(max);
//    return Math.floor(Math.random() * (max - min) + min); // Максимум не включается, минимум включается
//  }

const minNoMonth = 1;
const maxNoMonth = 12;

const minNoDay = 0;
const maxNoDay = 6;


const randomNoMonth = minNoMonth + Math.floor(Math.random() * (maxNoMonth - minNoMonth + 1));
const randomNoDay = minNoDay + Math.floor(Math.random() * (maxNoDay - minNoDay + 1));

// const randomNoMonth = Math.floor(Math.random() * (maxNoMonth - minNoMonth) + minNoMonth);
// const randomNoDay = Math.floor(Math.random() * (maxNoDay - minNoDay) + minNoDay);


const randomSum = randomNoMonth + randomNoDay;

// return Math.floor(Math.random() * (max - min) + min); 

document.write(`Випадковий номер місяця  становить: ${randomNoMonth}  <br> <br>`)

document.write(`Випадковий номер дня становить: ${randomNoDay} <br>  <br>`)

document.write(`Cума випадкових номерів місяця та дня становить: ${randomSum}`)

