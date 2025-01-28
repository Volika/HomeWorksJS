"use strict"
// Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

const dataInput = parseFloat(prompt('Введіть довжину у сантиметрах', '100'));

const lenHundred = dataInput / 100;

const lenThousand = dataInput / 1000;

document.write(`Введено довжину у сантиметрах: ${dataInput} <br> <br>
               Це становить ${lenHundred} м  та  ${lenThousand} км `
					);

