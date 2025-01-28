"use strict"


const yearInput = parseFloat(prompt('Введіть Ваш рік народження', '1925'));

const yearNow = new Date().getFullYear();

const yearsOld = yearNow - yearInput;

console.log(`Ваш рік народження ${yearInput} `)
console.log(`now ${yearNow} `)
console.log(`В поточному році Ваш вік становить (становитеме) ${yearsOld} `)

document.write(`В поточному році Ваш вік становить (становитеме) - ${yearsOld} років`)

