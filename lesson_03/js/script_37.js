"use strict"
// З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься.

const minNoMonth = 1;
const maxNoMonth = 12;

const dataInput = parseInt(prompt(`Введіть номер місяця від 1-12`, `1`));

let monthName = 
[`січень`, `лютий`, `березень`, `квітень`, `травень`, `червень`, `липень`, `серпень`, `вересень`, `жовтень`, `листопад`, `грудень`]

let timeOfYear = [`зима`, `весна`, `літо`, `осінь`]

let timeOfYearName

if (isNaN(dataInput) || dataInput < minNoMonth || dataInput > maxNoMonth)
   document.write(`Введено некорректні дані. Потрібно ввести число від 1 до 12`);
else {
   {if (dataInput <= 2 || dataInput === 12)
      timeOfYearName = timeOfYear[0]
   else if (dataInput <= 5 )
      timeOfYearName = timeOfYear[1]
   else if (dataInput <= 8)
      timeOfYearName = timeOfYear[2]
   else 
    timeOfYearName = timeOfYear[3]
   }
      document.write(`Введене число - ${dataInput} <br> <br> відповідає місяцю - ${monthName[dataInput-1]} <br> <br> і відноситься до пори року - ${timeOfYearName} `) 
}
