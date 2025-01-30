"use strict"
// 4.	З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).

const dataInput = parseFloat(prompt('Введіть вік людини', '1'));

const ageBaby = 1;
const ageChild = 6;
const ageShool = 17;
const ageUniver = 22;
const ageJob = 65;

if (isNaN(dataInput) || (dataInput <=0) || (dataInput > 130))
   document.write(`Некоректні дані `);
else if (dataInput <= ageBaby)
   document.write(`${dataInput} - Це немовля`);
else if (dataInput <= ageChild)
   document.write(`${dataInput} - Ця дитина може ходити до садочку`);
else if (dataInput <= ageShool)
   document.write(`${dataInput} - Це вік школяра`);
else if (dataInput <= ageUniver)
   document.write(`${dataInput} - Ця людина може бути студентом`);
else if (dataInput <= ageJob)
   document.write(`${dataInput} - Це вік працездатності, то ж людина може бути працівником`);
else 
   document.write(`${dataInput} - Це пенсіний вік, то ж людина може оформити пенсію та бути пенсіонером, але може ще продовжувати працювати`);

